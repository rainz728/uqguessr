import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function HomeScreen({ connected, error, send }) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const incoming =
      typeof router.query.join === "string" ? router.query.join : "";

    if (incoming) {
      setCode(incoming.toUpperCase().slice(0, 4));
    }
  }, [router.isReady, router.query.join]);

  return (
    <main className="minecraftMenuPage">
      <section className="minecraftMenuCenter">
        <div className="minecraftLogoWrap">
          <h1 className="minecraftLogo">UQGUESSR</h1>
          <span className="minecraftSubtitle">ST LUCIA EDITION</span>
          <span className="minecraftSplash">Don&apos;t forget to shower!</span>
        </div>

        <div className="minecraftJoinFields">
          <label htmlFor="nickname">Username</label>
          <input
            id="nickname"
            className="textInput minecraftInput"
            value={nickname}
            maxLength={18}
            placeholder="matt_martin_06"
            autoComplete="off"
            onChange={(e) => setNickname(e.target.value)}
          />

          <label htmlFor="room-code">Room Code</label>
          <input
            id="room-code"
            className="textInput minecraftInput minecraftCodeInput"
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
        </div>

        <div className="minecraftMenuButtons">
          <button
            className="minecraftButton"
            type="button"
            disabled={!connected}
            onClick={() => send({ type: "create_game" })}
          >
            Create Room
          </button>

          <button
            className="minecraftButton"
            type="button"
            disabled={
              !connected ||
              code.length !== 4 ||
              nickname.trim().length < 1
            }
            onClick={() =>
              send({
                type: "join_game",
                code,
                nickname,
              })
            }
          >
            Join Room
          </button>
        </div>

        {error ? <div className="errorBanner">{error}</div> : null}
      </section>

      <footer className="minecraftFooter">
        <span>A Pez Boys creation</span>
        <span>Nick · Rain · Christian · Miles</span>
      </footer>
    </main>
  );
}
