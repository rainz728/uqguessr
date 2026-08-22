const gameConfig = {
  name: "UQGuessr",
  maxPlayers: 5,
  roundsPerGame: 5,
  roundTimeMs: 45_000,
  revealDelayWhenAllSubmittedMs: 700,
  maxScorePerRound: 5000,
  scoringDecayMeters: 350,
  randomizeRounds: false,

  map: {
    center: [-27.4975, 153.0137],
    zoom: 16,
    minZoom: 15,
    maxZoom: 19,
    // Approximate public campus bounds. Adjust after testing.
    bounds: [
      [-27.5070, 153.0035],
      [-27.4895, 153.0225],
    ],
  },

  streetView: {
    allowMovement: false,
    allowZoom: true,
    showRoadLabels: false,
    panoramaSearchRadiusMeters: 120,
  },
};

export default gameConfig;
