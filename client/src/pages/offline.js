import { useState } from "react";
import GameScreen from "@/components/GameScreen/GameScreen";
import {
  calculateRoundScore,
} from "@shared/lib/scoring.js";

const CLIENT_ID = "offline-player";

const ANSWER = {
  name: "UQ St Lucia",
  lat: -27.4975,
  lng: 153.0137,
};

function createGame() {
  return {
    code: "SOLO",
    status: "guessing",

    players: [
      {
        clientId: CLIENT_ID,
        nickname: "You",
        hasGuessed: false,
      },
    ],

    reveal: null,
  };
}

export default function OfflinePage() {
  const [game, setGame] = useState(createGame);

  function send(message) {
    if (message.type === "submit_guess") {
      const result = calculateRoundScore(
        ANSWER,
        message.guess
      );

      setGame((current) => ({
        ...current,

        status: "revealing",

        players: current.players.map((player) => ({
          ...player,
          hasGuessed: true,
        })),

        reveal: {
          answer: ANSWER,

          guesses: [
            {
              clientId: CLIENT_ID,
              nickname: "You",
              lat: message.guess.lat,
              lng: message.guess.lng,
              distanceM: result.distanceM,
              score: result.score,
            },
          ],
        },
      }));

      return;
    }

    if (message.type === "leave_game") {
      setGame(createGame());
    }
  }

  return (
    <>
      <GameScreen
        game={game}
        clientId={CLIENT_ID}
        send={send}
      />

      {game.status === "revealing" && (
        <div style={{ padding: "0 2rem 2rem" }}>
          <button
            className="primaryButton"
            type="button"
            onClick={() => setGame(createGame())}
          >
            Play again
          </button>
        </div>
      )}
    </>
  );
}