import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function HomeScreen({ connected, error, send }) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const incoming = typeof router.query.join === "string" ? router.query.join : "";
    if (incoming) setCode(incoming.toUpperCase().slice(0, 4));
  }, [router.isReady, router.query.join]);

  return (
    <main className="pageShell homePage">
      <header className="appHeader">
        <div className="brandLockup">
          <div className="brandMark">UQ</div>
          <div>
            <strong>UQGuessr</strong>
            <span>Multiplayer campus guessing game</span>
          </div>
        </div>

        <div className="headerConnection">
          <span className={connected ? "statusDot online" : "statusDot"} />
          {connected ? "Server connected" : "Connecting…"}
        </div>
      </header>

      <section className="homeHero">
        <div>
          <span className="eyebrow">UQ COMPUTING SOCIETY HACKATHON</span>
          <h1>How well do you know UQ?</h1>
          <p>
            Explore a 360° location somewhere around St Lucia, place your guess on
            the campus map, and compete against your friends across five rounds.
          </p>
        </div>

        <div className="gameSummary" aria-label="Game format">
          <div>
            <strong>5</strong>
            <span>Rounds</span>
          </div>
          <div>
            <strong>5</strong>
            <span>Players max</span>
          </div>
          <div>
            <strong>5000</strong>
            <span>Points / round</span>
          </div>
        </div>
      </section>

      <section className="entryGrid">
        <article className="card entryCard">
          <div className="entryCardTopline">
            <span className="entryNumber">01</span>
            <span className="eyebrow">HOST</span>
          </div>
          <h2>Create a room</h2>
          <p className="muted">
            Start a new game on the host laptop, then share the room code with
            everyone playing.
          </p>
          <button
            className="primaryButton fullButton"
            type="button"
            disabled={!connected}
            onClick={() => send({ type: "create_game" })}
          >
            Create game
          </button>
        </article>

        <article className="card entryCard joinCard">
          <div className="entryCardTopline">
            <span className="entryNumber">02</span>
            <span className="eyebrow">PLAYER</span>
          </div>
          <h2>Join a room</h2>

          <div className="joinFields">
            <label className="fieldLabel" htmlFor="room-code">Room code</label>
            <input
              id="room-code"
              className="textInput codeInput"
              value={code}
              maxLength={4}
              placeholder="AB12"
              autoComplete="off"
              onChange={(e) =>
                setCode(
                  e.target.value
                    .toUpperCase()
                    .replace(/[^A-Z0-9]/g, "")
                    .slice(0, 4)
                )
              }
            />

            <label className="fieldLabel" htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              className="textInput"
              value={nickname}
              maxLength={18}
              placeholder="Nick"
              autoComplete="off"
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>

          <button
            className="secondaryButton fullButton"
            type="button"
            disabled={!connected || code.length !== 4 || nickname.trim().length < 1}
            onClick={() => send({ type: "join_game", code, nickname })}
          >
            Join game
          </button>
        </article>
      </section>

      {error ? <div className="errorBanner">{error}</div> : null}
    </main>
  );
}
