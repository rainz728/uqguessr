import gameConfig from "../../shared/lib/GameConfig.js";
import { calculateRoundScore } from "../../shared/lib/scoring.js";
import uqLocations from "../data/uqLocations.js";

const shuffle = (items) => {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
};

export default class Game {
  constructor(code, hostClientId, hostSocket) {
    this.code = code;
    this.hostClientId = hostClientId;
    this.hostSocket = hostSocket;

    this.players = new Map();

    this.status = "lobby";

    this.roundIndex = -1;
    this.roundStartsAt = null;
    this.roundEndsAt = null;

    this.locations = [];
    this.timer = null;
  }

  addPlayer(clientId, nickname, ws) {
    const cleaned =
      String(nickname || "Player")
        .trim()
        .slice(0, 18) || "Player";

    // If the same client rejoins, update their connection.
    if (this.players.has(clientId)) {
      const existing = this.players.get(clientId);

      existing.ws = ws;
      existing.connected = true;
      existing.nickname = cleaned;

      return existing;
    }

    if (this.players.size >= gameConfig.maxPlayers) {
      throw new Error(
        `This room already has ${gameConfig.maxPlayers} players.`
      );
    }

    const duplicateNickname = [
      ...this.players.values(),
    ].some(
      (player) =>
        player.nickname.toLowerCase() ===
        cleaned.toLowerCase()
    );

    if (duplicateNickname) {
      throw new Error(
        "That nickname is already in use."
      );
    }

    const player = {
      clientId,
      nickname: cleaned,
      ws,
      connected: true,

      totalScore: 0,
      roundScore: 0,
      distanceM: null,
      guess: null,
    };

    this.players.set(clientId, player);

    return player;
  }

  removePlayer(clientId) {
    const player = this.players.get(clientId);

    if (!player) {
      return false;
    }

    this.players.delete(clientId);

    return true;
  }

  reconnect(clientId, ws) {
    if (clientId === this.hostClientId) {
      this.hostSocket = ws;

      return "host";
    }

    const player = this.players.get(clientId);

    if (!player) {
      return null;
    }

    player.ws = ws;
    player.connected = true;

    return "player";
  }

  disconnect(ws) {
    if (this.hostSocket === ws) {
      this.hostSocket = null;
    }

    for (const player of this.players.values()) {
      if (player.ws === ws) {
        player.connected = false;
        player.ws = null;
      }
    }
  }

  destroy() {
    clearTimeout(this.timer);

    this.timer = null;
  }

  start() {
    if (this.status !== "lobby") {
      throw new Error(
        "Game has already started."
      );
    }

    if (this.players.size < 1) {
      throw new Error(
        "At least one player must join first."
      );
    }

    const locationPool = gameConfig.randomizeRounds
      ? shuffle(uqLocations)
      : [...uqLocations];

    this.locations = locationPool.slice(
      0,
      gameConfig.roundsPerGame
    );

    if (
      this.locations.length <
      gameConfig.roundsPerGame
    ) {
      throw new Error(
        "Not enough UQ locations are configured for this game."
      );
    }

    for (const player of this.players.values()) {
      player.totalScore = 0;
      player.roundScore = 0;
      player.distanceM = null;
      player.guess = null;
    }

    this.roundIndex = -1;

    this.startNextRound();
  }

  startNextRound() {
    clearTimeout(this.timer);

    this.roundIndex += 1;

    if (
      this.roundIndex >= this.locations.length
    ) {
      this.finish();
      return;
    }

    this.status = "guessing";

    this.roundStartsAt = Date.now();
    this.roundEndsAt =
      this.roundStartsAt +
      gameConfig.roundTimeMs;

    for (const player of this.players.values()) {
      player.guess = null;
      player.roundScore = 0;
      player.distanceM = null;
    }

    this.timer = setTimeout(
      () => this.reveal(),
      gameConfig.roundTimeMs
    );

    this.broadcast();
  }

  submitGuess(clientId, guess) {
    if (this.status !== "guessing") {
      throw new Error(
        "Guesses are not open right now."
      );
    }

    const player = this.players.get(clientId);

    if (!player) {
      throw new Error(
        "Player is not in this room."
      );
    }

    if (player.guess) {
      throw new Error(
        "Your guess is already locked in."
      );
    }

    const lat = Number(guess?.lat);
    const lng = Number(guess?.lng);

    if (
      !Number.isFinite(lat) ||
      !Number.isFinite(lng)
    ) {
      throw new Error(
        "Invalid map position."
      );
    }

    player.guess = {
      lat,
      lng,
    };

    const connectedPlayers = [
      ...this.players.values(),
    ].filter((player) => player.connected);

    const everyoneSubmitted =
      connectedPlayers.length > 0 &&
      connectedPlayers.every(
        (player) => player.guess
      );

    if (everyoneSubmitted) {
      clearTimeout(this.timer);

      this.timer = setTimeout(
        () => this.reveal(),
        gameConfig.revealDelayWhenAllSubmittedMs
      );
    }

    this.broadcast();
  }

  reveal() {
    if (this.status !== "guessing") {
      return;
    }

    clearTimeout(this.timer);

    this.timer = null;
    this.status = "revealing";
    this.roundEndsAt = null;

    const location =
      this.locations[this.roundIndex];

    const answer = {
      lat: location.lat,
      lng: location.lng,
    };

    for (const player of this.players.values()) {
      if (!player.guess) {
        player.roundScore = 0;
        player.distanceM = null;

        continue;
      }

      const result = calculateRoundScore(
        answer,
        player.guess
      );

      player.roundScore = result.score;
      player.distanceM = result.distanceM;
      player.totalScore += result.score;
    }

    this.broadcast();
  }

  nextRound() {
    if (this.status !== "revealing") {
      throw new Error(
        "Reveal the current round first."
      );
    }

    const isFinalRound =
      this.roundIndex >=
      this.locations.length - 1;

    if (isFinalRound) {
      this.finish();
      return;
    }

    this.startNextRound();
  }

  finish() {
    clearTimeout(this.timer);

    this.timer = null;
    this.status = "finished";
    this.roundStartsAt = null;
    this.roundEndsAt = null;

    this.broadcast();
  }

  publicState(forClientId) {
    const location =
      this.locations[this.roundIndex] || null;

    const shouldShowReveal =
      this.status === "revealing" ||
      this.status === "finished";

    const currentView =
      location && this.status === "guessing"
        ? {
            id: location.id,
            panoramaUrl:
              location.panoramaUrl,
            heading: location.heading,
            pitch: location.pitch,
          }
        : null;

    const reveal =
      location && shouldShowReveal
        ? {
            answer: {
              lat: location.lat,
              lng: location.lng,
              name: location.name,
            },

            guesses: [
              ...this.players.values(),
            ]
              .filter(
                (player) => player.guess
              )
              .map((player) => ({
                clientId: player.clientId,
                nickname: player.nickname,

                lat: player.guess.lat,
                lng: player.guess.lng,

                score: player.roundScore,
                distanceM: player.distanceM,
              })),
          }
        : null;

    const players = [
      ...this.players.values(),
    ]
      .map((player) => ({
        clientId: player.clientId,
        nickname: player.nickname,

        connected: player.connected,
        hasGuessed: Boolean(
          player.guess
        ),

        roundScore: player.roundScore,
        distanceM: player.distanceM,
        totalScore: player.totalScore,
      }))
      .sort(
        (a, b) =>
          b.totalScore - a.totalScore
      );

    return {
      code: this.code,

      isHost:
        forClientId === this.hostClientId,

      status: this.status,

      maxPlayers: gameConfig.maxPlayers,
      totalRounds:
        gameConfig.roundsPerGame,

      roundNumber:
        this.roundIndex >= 0
          ? this.roundIndex + 1
          : 0,

      roundStartsAt: this.roundStartsAt,
      roundEndsAt: this.roundEndsAt,

      currentView,
      reveal,
      players,
    };
  }

  send(ws, payload) {
    if (!ws || ws.readyState !== 1) {
      return;
    }

    ws.send(JSON.stringify(payload));
  }

  broadcast() {
    this.send(this.hostSocket, {
      type: "state",
      game: this.publicState(
        this.hostClientId
      ),
    });

    for (const player of this.players.values()) {
      this.send(player.ws, {
        type: "state",
        game: this.publicState(
          player.clientId
        ),
      });
    }
  }
}