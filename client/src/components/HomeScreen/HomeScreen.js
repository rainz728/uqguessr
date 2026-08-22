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
      <section className="hero">
        <div className="brandMark">UQ</div>
        <span className="eyebrow">UQ COMPUTING SOCIETY HACKATHON</span>
        <h1>UQGuessr</h1>
        <p>Explore a 360° campus location, drop your pin, then see who actually knows St Lucia.</p>
      </section>

      <div className="twoCol entryGrid">
        <section className="card">
          <span className="eyebrow">PRESENTING?</span>
          <h2>Create a room</h2>
          <p className="muted">Use this on the laptop connected to the projector.</p>
          <button
            className="primaryButton fullButton"
            type="button"
            disabled={!connected}
            onClick={() => send({ type: "create_game" })}
          >
            Create game
          </button>
        </section>

        <section className="card">
          <span className="eyebrow">PLAYING?</span>
          <h2>Join the audience game</h2>
          <label className="fieldLabel" htmlFor="room-code">Room code</label>
          <input
            id="room-code"
            className="textInput codeInput"
            value={code}
            maxLength={4}
            placeholder="AB12"
            onChange={(e) =>
              setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4))
            }
          />
          <label className="fieldLabel" htmlFor="nickname">Nickname</label>
          <input
            id="nickname"
            className="textInput"
            value={nickname}
            maxLength={18}
            placeholder="Nick"
            onChange={(e) => setNickname(e.target.value)}
          />
          <button
            className="secondaryButton fullButton"
            type="button"
            disabled={!connected || code.length !== 4 || nickname.trim().length < 1}
            onClick={() => send({ type: "join_game", code, nickname })}
          >
            Join game
          </button>
        </section>
      </div>

      <div className="connectionBar">
        <span className={connected ? "statusDot online" : "statusDot"} />
        {connected ? "Multiplayer server connected" : "Connecting to multiplayer server…"}
      </div>

      {error ? <div className="errorBanner">{error}</div> : null}
    </main>
  );
}
