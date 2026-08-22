export default function PlayerList({ players = [], showRound = false }) {
  return (
    <div className="playerList">
      {players.length === 0 ? (
        <p className="muted">Waiting for players…</p>
      ) : (
        players.map((p, index) => (
          <div className="playerRow" key={p.clientId}>
            <div className="rankBubble">{index + 1}</div>
            <div className="playerIdentity">
              <strong>{p.nickname}</strong>
              <span>{p.connected ? "Connected" : "Disconnected"}</span>
            </div>
            {showRound ? (
              <div className="playerRoundStatus">
                {p.hasGuessed ? "✓ Submitted" : "Waiting"}
              </div>
            ) : null}
            <strong className="scoreNumber">{p.totalScore.toLocaleString()}</strong>
          </div>
        ))
      )}
    </div>
  );
}
