export default function PlayerList({ players = [], showRound = false }) {
  return (
    <div className="playerList">
      {players.length === 0 ? (
        <div className="emptyPlayerState">
          <strong>No players yet</strong>
          <span>Waiting for someone to join the room.</span>
        </div>
      ) : (
        players.map((p, index) => (
          <div className="playerRow" key={p.clientId}>
            <div className="rankBubble">{index + 1}</div>
            <div className="playerIdentity">
              <strong>{p.nickname}</strong>
              <span>{p.connected ? "Connected" : "Disconnected"}</span>
            </div>
            {showRound ? (
              <div className={`playerRoundStatus${p.hasGuessed ? " submitted" : ""}`}>
                {p.hasGuessed ? "Submitted" : "Waiting"}
              </div>
            ) : null}
            <strong className="scoreNumber">{p.totalScore.toLocaleString()}</strong>
          </div>
        ))
      )}
    </div>
  );
}
