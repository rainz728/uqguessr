import PlayerList from "./PlayerList";
import QrJoin from "./QrJoin";

export default function Lobby({ game, send }) {
  return (
    <main className="pageShell lobbyPage minecraftScreen">
      <header className="lobbyHeader minecraftTopbar">
        <div>
          <span className="eyebrow">MULTIPLAYER</span>
          <h1>{game.isHost ? "Local Server" : "Server Joined"}</h1>
          <p className="muted">
            {game.isHost
              ? "Share the room code, wait for everyone to join, then start the game."
              : "Connected. Waiting for the host to start the first round."}
          </p>
        </div>

        <div className="lobbyRoomBadge">
          <span>ROOM</span>
          <strong>{game.code}</strong>
        </div>
      </header>

      <div className="lobbyGrid minecraftWindow">
        <section className="lobbyJoinCard">
          <div className="panelHeading">
            <div>
              <span className="eyebrow">JOIN SERVER</span>
              <h2>{game.isHost ? "Scan to join" : "Room details"}</h2>
            </div>
          </div>

          <QrJoin code={game.code} />
        </section>

        <section className="lobbyPlayersCard">
          <div className="panelHeading">
            <div>
              <span className="eyebrow">PLAYERS</span>
              <h2>Server list</h2>
            </div>

            <span className="playerCapacity">
              {game.players.length}/{game.maxPlayers}
            </span>
          </div>

          <PlayerList players={game.players} />

          <div className="roomActions lobbyActions">
            {game.isHost ? (
              <button
                className="minecraftButton compactMinecraftButton"
                type="button"
                disabled={game.players.length < 1}
                onClick={() =>
                  send({
                    type: "start_game",
                    code: game.code,
                  })
                }
              >
                Start Game
              </button>
            ) : (
              <div className="waitingChip">Waiting for host...</div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
