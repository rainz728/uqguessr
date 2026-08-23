import Viewer from "@/components/PanoramaViewer/viewer";
import PlayerList from "@/components/Lobby/PlayerList";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

import { calculateRoundScore } from "@shared/lib/scoring.js";

const GuessMap = dynamic(() => import("@/components/MapHandler/GuessMap"), {
  ssr: false,
});

const RevealMap = dynamic(() => import("@/components/MapHandler/RevealMap"), {
  ssr: false,
});

function formatDistance(m) {
  if (m == null) return "No guess";
  if (m < 1000) return `${m} m`;
  return `${(m / 1000).toFixed(2)} km`;
}

function ExitButton({ game, send }) {
  return (
    <button
      className="secondaryButton compact"
      type="button"
      onClick={() =>
        send({
          type: game.isHost ? "end_game" : "leave_game",
          code: game.code,
        })
      }
    >
      {game.isHost ? "End game" : "Leave game"}
    </button>
  );
}

function GameTopbar({ game, submittedCount, remaining, send }) {
  return (
    <header className="roundTopbar gameTopbar">
      <div className="gameIdentity">
        <div className="gameBrandMark">G</div>

        <div>
          <span className="eyebrow">ROOM {game.code}</span>
          <h1>
            {game.status === "guessing"
              ? `Round ${game.roundNumber} of ${game.totalRounds}`
              : game.status === "revealing"
                ? "Round results"
                : "Final results"}
          </h1>
        </div>
      </div>

      <div className="roundMetrics">
        {game.status === "guessing" ? (
          <>
            <div className={remaining <= 10 ? "urgentMetric" : ""}>
              <strong>{remaining}</strong>
              <span>Seconds</span>
            </div>

            <div>
              <strong>
                {submittedCount}/{game.players.length}
              </strong>
              <span>Locked in</span>
            </div>
          </>
        ) : null}

        {game.status === "revealing" ? (
          <div>
            <strong>{game.roundNumber}</strong>
            <span>Round</span>
          </div>
        ) : null}

        {game.isHost && game.status === "guessing" ? (
          <button
            className="secondaryButton compact"
            type="button"
            onClick={() => send({ type: "reveal_now", code: game.code })}
          >
            Reveal now
          </button>
        ) : null}

        {game.isHost && game.status === "revealing" ? (
          <button
            className="primaryButton compact"
            type="button"
            onClick={() => send({ type: "next_round", code: game.code })}
          >
            {game.roundNumber >= game.totalRounds
              ? "Final results"
              : "Next round"}
          </button>
        ) : null}

        <ExitButton game={game} send={send} />
      </div>
    </header>
  );
}

export default function GameScreen({ game, clientId, send }) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(timer);
  }, []);

  const me = useMemo(
    () => game.players.find((player) => player.clientId === clientId),
    [game.players, clientId]
  );

  const remaining = game.roundEndsAt
    ? Math.max(0, Math.ceil((game.roundEndsAt - now) / 1000))
    : 0;

  const submittedCount = game.players.filter(
    (player) => player.hasGuessed
  ).length;

  if (game.status === "finished") {
    const winner = game.players[0];

    return (
      <main className="pageShell finalPage">
        <GameTopbar
          game={game}
          submittedCount={submittedCount}
          remaining={remaining}
          send={send}
        />

        <section className="finalHero">
          <span className="eyebrow">GAME COMPLETE</span>
          <h2>
            {winner ? `${winner.nickname} takes the win.` : "Game complete."}
          </h2>
          <p className="muted">
            {winner
              ? `${winner.totalScore.toLocaleString()} points across ${game.totalRounds} rounds.`
              : "All rounds are complete."}
          </p>
        </section>

        <section className="card finalResultsCard">
          <div className="panelHeading">
            <div>
              <span className="eyebrow">FINAL STANDINGS</span>
              <h2>Leaderboard</h2>
            </div>
            <span className="resultBadge">FINAL</span>
          </div>

          <PlayerList players={game.players} />
        </section>
      </main>
    );
  }

  if (game.status === "revealing" && game.reveal) {
    return (
      <main className="pageShell gamePage revealPage">
        <GameTopbar
          game={game}
          submittedCount={submittedCount}
          remaining={remaining}
          send={send}
        />

        <section className="revealHeading">
          <div>
            <span className="eyebrow">LOCATION REVEALED</span>
            <h2>{game.reveal.answer.name}</h2>
          </div>

          <p className="muted">
            Compare the guesses and see how the round scored.
          </p>
        </section>

        <div className="revealGrid gameRevealGrid">
          <section className="card mapResultCard">
            <div className="panelHeading compactPanelHeading">
              <div>
                <span className="eyebrow">ANSWER MAP</span>
                <h2>Round {game.roundNumber}</h2>
              </div>
            </div>

            <RevealMap reveal={game.reveal} />
          </section>

          <section className="card roundScorePanel">
            <div className="panelHeading compactPanelHeading">
              <div>
                <span className="eyebrow">ROUND SCORES</span>
                <h2>Closest guesses</h2>
              </div>
            </div>

            <div className="roundScores">
              {game.reveal.guesses.map((guess, index) => {
                const result = calculateRoundScore(game.reveal.answer, guess);
                const isCurrentPlayer = guess.clientId === clientId;

                return (
                  <div className="scoreCard" key={guess.clientId}>
                    <div className="scoreRank">{index + 1}</div>

                    <div className="scoreIdentity">
                      <strong>
                        {guess.nickname}
                        {isCurrentPlayer ? " (You)" : ""}
                      </strong>
                      <span>{formatDistance(result.distanceM)} away</span>
                    </div>

                    <b>{result.score.toLocaleString()} pts</b>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="pageShell gamePage">
      <GameTopbar
        game={game}
        submittedCount={submittedCount}
        remaining={remaining}
        send={send}
      />

      <div className="roundIntroLine">
        <div>
          <span className="eyebrow">360° VIEW</span>
          <h2>{me?.hasGuessed ? "Guess locked in" : "Find where you are"}</h2>
        </div>

        <p className="muted">
          Look around the panorama, then place a pin on the map when you are ready.
        </p>
      </div>

      <div className="playerRoundGrid">
        <section className="streetSection card">
          <Viewer
            view={
              game.currentView ?? {
                panoramaUrl: "/panoramas/scene1.jpg",
                heading: 0,
                pitch: 0,
                id: "offline-test",
              }
            }
          />
        </section>

        <aside className="card roundSidebar">
          <div className="panelHeading compactPanelHeading">
            <div>
              <span className="eyebrow">LIVE ROOM</span>
              <h2>Player status</h2>
            </div>
          </div>

          <PlayerList players={game.players} showRound />
        </aside>
      </div>

      {game.status === "guessing" ? (
        <section className="guessSection">
          <GuessMap
            disabled={Boolean(me?.hasGuessed)}
            onSubmit={(guess) =>
              send({
                type: "submit_guess",
                code: game.code,
                guess,
              })
            }
          />
        </section>
      ) : null}
    </main>
  );
}
