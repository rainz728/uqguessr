export default function GameScreen({ game, clientId, send }) {
  return (
    <main className="pageShell">
      <section className="hero compactHero">
        <span className="eyebrow">ROOM {game.code}</span>
        <h1>Game starting soon…</h1>
        <p className="muted">The host will begin the round shortly.</p>
      </section>

      <section className="card">
        <span className="eyebrow">PLAYERS</span>
        <ul className="playerList">
          {game.players.map((p) => (
            <li key={p.clientId} className="playerRow">
              <div className="rankBubble">#</div>
              <div className="playerIdentity">
                <strong>{p.nickname}</strong>
                <span className="playerRoundStatus">Connected</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="roomActions">
        <button
          className="secondaryButton"
          type="button"
          onClick={() => send({ type: "leave_game", code: game.code })}
        >
          Leave game
        </button>
      </div>
    </main>
  );
}
