import { Fragment } from "react";
import {
  CircleMarker,
  MapContainer,
  Polygon,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";

import gameConfig from "@shared/lib/GameConfig.js";

import {
  UQ_ST_LUCIA_BOUNDARY,
} from "@shared/lib/UQCampusBoundary.js";

import {
  calculateRoundScore,
} from "@shared/lib/scoring.js";

export default function RevealMap({ reveal }) {
  if (!reveal?.answer) return null;
  const answer = [reveal.answer.lat, reveal.answer.lng];

  return (
    <div className="mapShell revealMapShell">
      <MapContainer
        center={answer}
        zoom={17}
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
            weight: 2,
            fillOpacity: 0.04,
            dashArray: "8 6",
          }}
        />
        <CircleMarker
          center={answer}
          radius={12}
          pathOptions={{
            color: "#51247a",
            fillColor: "#f2c14e",
            fillOpacity: 1,
            weight: 4,
          }}
        >
          <Popup>Actual location: {reveal.answer.name}</Popup>
        </CircleMarker>
        {reveal.guesses.map((g) => {
          const guess = [g.lat, g.lng];
          return (
            <Fragment key={g.clientId}>
              <Polyline
                positions={[guess, answer]}
                pathOptions={{ color: "#51247a", weight: 2, dashArray: "6 7", opacity: 0.7 }}
              />
              <CircleMarker
                center={guess}
                radius={8}
                pathOptions={{
                  color: "#2c173e",
                  fillColor: "#ffffff",
                  fillOpacity: 1,
                  weight: 3,
                }}
              >
                <Popup>
                  {g.nickname}: {g.distanceM} m · {g.score} pts
                </Popup>
              </CircleMarker>
            </Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
}
