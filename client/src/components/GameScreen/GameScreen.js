import Viewer from "@/components/PanoramaViewer/viewer";
import dynamic from "next/dynamic";

// Leaflet maps dynamically imported 
const GuessMap = dynamic(
  () => import("@/components/MapHandler/GuessMap"),
  { ssr: false }
);

const RevealMap = dynamic(
  () => import("@/components/MapHandler/RevealMap"),
  { ssr: false }
);

export default function GameScreen({ game, clientId, send }) {
  return (
    <main className="pageShell">
      <section className="hero compactHero">
        <span className="eyebrow">ROOM {game.code}</span>
        <h1>
          {game.status === "guessing"
            ? "Make your guess…"
            : game.status === "revealing"
            ? "Round results"
            : "Game starting soon…"}
        </h1>
        <p className="muted">
          {game.status === "guessing"
            ? "Drop a pin on the map to lock in your guess."
            : game.status === "revealing"
            ? "The host is showing the results."
            : "The host will begin the round shortly."}
        </p>
      </section>

      {/* Player list */}
      <section className="card">
        <span className="eyebrow">PLAYERS</span>
        <ul className="playerList">
          {game.players.map((p) => (
            <li key={p.clientId} className="playerRow">
              <div className="rankBubble">#</div>
              <div className="playerIdentity">
                <strong>{p.nickname}</strong>
                <span className="playerRoundStatus">
                  {p.hasGuessed ? "Locked" : "Connected"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Leave game */}
      <div className="roomActions">
        <button
          className="secondaryButton"
          type="button"
          onClick={() => send({ type: "leave_game", code: game.code })}
        >
          Leave game
        </button>
      </div>

      {/* Panorama viewer */}
      <section className="card" style={{ marginTop: "2rem" }}>
        <span className="eyebrow">PANORAMA VIEWER</span>

        <Viewer
          view={{
            panoramaUrl: "/panoramas/scene1.jpg",
            heading: 0,
            pitch: 0,
            id: "test",
          }}
        />
      </section>

      {/* Guessing phase */}
      {game.status === "guessing" && (
        <section className="card" style={{ marginTop: "2rem" }}>
          <span className="eyebrow">MAKE YOUR GUESS</span>
          <GuessMap
            disabled={Boolean(
              game.players.find((p) => p.clientId === clientId)?.hasGuessed
            )}
            onSubmit={(guess) =>
              send({ type: "submit_guess", code: game.code, guess })
            }
          />
        </section>
      )}

      {/* Reveal phase */}
      {game.status === "revealing" && (
        <section className="card" style={{ marginTop: "2rem" }}>
          <span className="eyebrow">ROUND RESULTS</span>
          <RevealMap reveal={game.reveal} />
        </section>
      )}
    </main>
  );
}
