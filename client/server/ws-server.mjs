import "dotenv/config";
import { WebSocketServer } from "ws";
import Game from "./game.mjs";

//WS_PORT comes fome .env.local binding to 0.0.0.0
//
const port = Number(process.env.WS_PORT || 8080);
const wss = new WebSocketServer({port, host: "0.0.0.0"});
//game rooms stores by code
const games = new Map();


//generate room
const makeCode = () => {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";

    do {
        code = Array.from({length: 4}, () =>

            alphabet[Math.floor(Math.random() * alphabet.length)]
        ).join("");
    } while (games.has(code));
};

const send = (ws, payload) => {
    if (ws?.readyState === 1) ws.send(JSON.stringify(payload));
};

const fail = (ws, message, resetSession = false) => {
  send(ws, { type: "error", message, resetSession });
};

//destroy game when host ends game
const closeRoom = (game, message = "The host closed the room.") => {
  if (!game) return;

  send(game.hostSocket, { type: "room_closed", message });
  for (const player of game.players.values()) {
    send(player.ws, { type: "room_closed", message });
    if (player.ws) player.ws.roomCode = null;
  }

  if (game.hostSocket) game.hostSocket.roomCode = null;
  game.destroy();
  games.delete(game.code);
};
//connect deice to websocket 
wss.on("connection", (ws) => {
  ws.roomCode = null;
  ws.clientId = null;

  ws.on("message", (raw) => {
    try {
      const msg = JSON.parse(raw.toString());
      const clientId = String(msg.clientId || "").trim();
      if (!clientId) throw new Error("Missing client ID.");
      ws.clientId = clientId;

      if (msg.type === "create_game") {
        const code = makeCode();
        const game = new Game(code, clientId, ws);
        games.set(code, game);
        ws.roomCode = code;
        send(ws, { type: "session", role: "host", code });
        game.broadcast();
        return;
      }

      if (msg.type === "join_game") {
        const code = String(msg.code || "").trim().toUpperCase();
        const game = games.get(code);

        if (!game) {
          fail(ws, "Room not found. Check the code and try again.");
          return;
        }
        if (game.status !== "lobby") {
          fail(ws, "That game has already started.");
          return;
        }

        game.addPlayer(clientId, msg.nickname, ws);
        ws.roomCode = code;
        send(ws, { type: "session", role: "player", code });
        game.broadcast();
        return;
      }

      if (msg.type === "reconnect") {
        const code = String(msg.code || "").trim().toUpperCase();
        const game = games.get(code);

        if (!game) {
          fail(
            ws,
            "Your previous room has ended. You can join or create a new game.",
            true
          );
          return;
        }

        const role = game.reconnect(clientId, ws);
        if (!role) {
          fail(
            ws,
            "Your old player session is no longer in that room. Join again with the new code.",
            true
          );
          return;
        }

        ws.roomCode = code;
        send(ws, { type: "session", role, code });
        game.broadcast();
        return;
      }

      const code = String(msg.code || ws.roomCode || "")
        .trim()
        .toUpperCase();
      const game = games.get(code);

      if (!game) {
        fail(ws, "That room no longer exists.", true);
        return;
      }

      const isHost = game.hostClientId === clientId;

      if (msg.type === "start_game") {
        if (!isHost) throw new Error("Only the host can start the game.");
        game.start();
        return;
      }

      if (msg.type === "submit_guess") {
        game.submitGuess(clientId, msg.guess);
        return;
      }

      if (msg.type === "reveal_now") {
        if (!isHost) throw new Error("Only the host can reveal the round.");
        game.reveal();
        return;
      }

      if (msg.type === "next_round") {
        if (!isHost) throw new Error("Only the host can advance the game.");
        game.nextRound();
        return;
      }

      if (msg.type === "leave_game") {
        if (isHost) {
          fail(ws, "The host must use End game to close the room.");
          return;
        }

        game.removePlayer(clientId);
        ws.roomCode = null;
        send(ws, { type: "session_cleared", message: "You left the room." });
        game.broadcast();
        return;
      }

      if (msg.type === "end_game") {
        if (!isHost) throw new Error("Only the host can end the game.");
        closeRoom(game, "The host ended the game. You can join a new room now.");
        return;
      }

      throw new Error("Unknown message type.");
    } catch (error) {
      fail(ws, error?.message || "Unexpected server error.");
    }
  });

  ws.on("close", () => {
    if (!ws.roomCode) return;

    const game = games.get(ws.roomCode);
    if (!game) return;

    game.disconnect(ws);
    game.broadcast();
  });
});

console.log(`UQGuessr WebSocket server running on ws://0.0.0.0:${port}`);
