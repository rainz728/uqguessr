import Head from "next/head";
import HomeScreen from "@/components/HomeScreen";
import Lobby from "@/components/Lobby";
import GameScreen from "@/components/GameScreen";
import useGameSocket from "@/hooks/useGameSocket";

export default function Home() {
  const { connected, game, error, send, clientId } = useGameSocket();

  let content = <HomeScreen connected={connected} error={error} send={send} />;
  if (game?.status === "lobby") content = <Lobby game={game} send={send} />;
  if (game && game.status !== "lobby") {
    content = <GameScreen game={game} clientId={clientId} send={send} />;
  }

  return (
    <>
      <Head>
        <title>UQGuessr · St Lucia</title>
        <meta name="description" content="Realtime multiplayer UQ St Lucia campus guessing game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#51247a" />
      </Head>
      {content}
    </>
  );
}
