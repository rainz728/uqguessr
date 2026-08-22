import Head from "next/head";
import HomeScreen from "@/components/HomeScreen/HomeScreen";
import Lobby from "@/components/Lobby/Lobby";
import GameScreen from "@/components/GameScreen/GameScreen";
import useGameSocket from "@/hooks/useGameSocket";

export default function Home() {
  const { connected, game, error, send, clientId } = useGameSocket();

  // Default screen = HomeScreen
  let content = (
    <HomeScreen
      connected={connected}
      error={error}
      send={send}
    />
  );

  // Lobby screen
  if (game?.status === "lobby") {
    content = (
      <Lobby
        game={game}
        send={send}
      />
    );
  }

  // Game screen (any status except lobby)
  if (game && game.status !== "lobby") {
    content = (
      <GameScreen
        game={game}
        clientId={clientId}
        send={send}
      />
    );
  }

  return (
    <>
      <Head>
        <title>UQGuessr</title>
        <meta name="description" content="Realtime multiplayer UQ campus guessing game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {content}
    </>
  );
}
