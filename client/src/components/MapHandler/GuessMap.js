import { useState } from "react";
import {
  CircleMarker,
  MapContainer,
  Polygon,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import gameConfig from "@shared/lib/GameConfig.js";

import {
  UQ_ST_LUCIA_BOUNDARY,
} from "@shared/lib/UQCampusBoundary.js";

function ClickHandler({ onPick }) {
  useMapEvents({
    click(e) {
      onPick({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
}

export default function GuessMap({ disabled, onSubmit }) {
  const [guess, setGuess] = useState(null);

  const submit = () => {
    if (!guess || disabled) return;
    onSubmit(guess);
  };

  return (
    <div className="guessPanel">
      <div className="panelHeading mapPanelHeading">
        <div>
          <p className="sectionLabel">UQ ST LUCIA MAP</p>
          <h2>{disabled ? "Guess locked" : "Drop your pin"}</h2>
        </div>
        {guess && !disabled ? (
          <button className="primaryButton compact" onClick={submit} type="button">
            Lock guess
          </button>
        ) : null}
      </div>

      <div className="mapLegend">
        <span className="boundaryKey" />
        Purple outline = playable campus area
      </div>

      <div className="mapShell">
        <MapContainer
          center={gameConfig.map.center}
          zoom={gameConfig.map.zoom}
          minZoom={gameConfig.map.minZoom}
          maxZoom={gameConfig.map.maxZoom}
          maxBounds={gameConfig.map.bounds}
          className="leafletMap"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polygon
            positions={UQ_ST_LUCIA_BOUNDARY}
            pathOptions={{
              color: "#51247a",
              fillColor: "#51247a",
              weight: 3,
              fillOpacity: 0.08,
              dashArray: "8 6",
            }}
          />
          <ClickHandler onPick={disabled ? () => {} : setGuess} />
          {guess ? (
            <CircleMarker
              center={[guess.lat, guess.lng]}
              radius={9}
              pathOptions={{
                color: "#2c173e",
                fillColor: "#f2c14e",
                fillOpacity: 1,
                weight: 3,
              }}
            />
          ) : null}
        </MapContainer>
      </div>

      <div className="mobileGuessAction">
        <button className="primaryButton" disabled={!guess || disabled} onClick={submit} type="button">
          {disabled ? "Guess locked" : "Lock guess"}
        </button>
      </div>
    </div>
  );
}
