import PlayerList from "./PlayerList";
import QrJoin from "./QrJoin";

export default function Lobby({ game, send }) {
  return (
    <main className="pageShell">
      <section className="hero compactHero">
        <span className="eyebrow">ROOM {game.code}</span>
        <h1>Lobby</h1>
        <p className="muted">Waiting for players to join…</p>
      </section>

      <div className="twoCol lobbyGrid">
        <section className="card">
          <span className="eyebrow">JOIN VIA QR</span>
          <QrJoin code={game.code} />
        </section>

        <section className="card">
          <span className="eyebrow">PLAYERS</span>
          <PlayerList players={game.players} />
        </section>
      </div>

      <div className="roomActions">
        {game.isHost ? (
          <button
            className="primaryButton"
            type="button"
            onClick={() => send({ type: "start_game", code: game.code })}
          >
            Start game
          </button>
        ) : (
          <div className="waitingChip">Waiting for host…</div>
        )}
      </div>
    </main>
  );
}
