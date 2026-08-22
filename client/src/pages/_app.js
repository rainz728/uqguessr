import "leaflet/dist/leaflet.css";

import "../styles/globals.css";
import "../components/GameScreen/GameScreen.css";
import "../components/HomeScreen/HomeScreen.css";
import "../components/Lobby/Lobby.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
