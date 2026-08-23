import PlayerList from "./PlayerList";
import QrJoin from "./QrJoin";

export default function Lobby({ game, send }) {
  return (
    <main className="pageShell lobbyPage">
      <header className="lobbyHeader">
        <div>
          <span className="eyebrow">MULTIPLAYER LOBBY</span>
          <h1>Room {game.code}</h1>
          <p className="muted">
            {game.isHost
              ? "Share the code, wait for everyone to join, then start the game."
              : "You’re in. Waiting for the host to start the first round."}
          </p>
        </div>

        <div className="lobbyPlayerCount">
          <strong>{game.players.length}</strong>
          <span>/ {game.maxPlayers} players</span>
        </div>
      </header>

      <div className="lobbyGrid">
        <section className="card lobbyJoinCard">
          <div className="panelHeading">
            <div>
              <span className="eyebrow">JOIN ROOM</span>
              <h2>{game.isHost ? "Scan to join" : "Room details"}</h2>
            </div>
          </div>

          <QrJoin code={game.code} />
        </section>

        <section className="card lobbyPlayersCard">
          <div className="panelHeading">
            <div>
              <span className="eyebrow">PLAYERS</span>
              <h2>Ready to play</h2>
            </div>
            <span className="playerCapacity">
              {game.players.length}/{game.maxPlayers}
            </span>
          </div>

          <PlayerList players={game.players} />

          <div className="roomActions lobbyActions">
            {game.isHost ? (
              <button
                className="primaryButton"
                type="button"
                disabled={game.players.length < 1}
                onClick={() => send({ type: "start_game", code: game.code })}
              >
                Start game
              </button>
            ) : (
              <div className="waitingChip">Waiting for host…</div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
