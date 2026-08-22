import gameConfig from "../lib/gameConfig.js";
import uqLocations from "../data/uqLocations.js";
import { calculateRoundScore } from "../lib/scoring.js";

const shuffle = (items) => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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
    const cleaned = String(nickname || "Player").trim().slice(0, 18) || "Player";

    if (this.players.has(clientId)) {
      const existing = this.players.get(clientId);
      existing.ws = ws;
      existing.connected = true;
      existing.nickname = cleaned;
      return existing;
    }

    if (this.players.size >= gameConfig.maxPlayers) {
      throw new Error(`This room already has ${gameConfig.maxPlayers} players.`);
    }

    const duplicate = [...this.players.values()].some(
      (p) => p.nickname.toLowerCase() === cleaned.toLowerCase()
    );
    if (duplicate) throw new Error("That nickname is already in use.");

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
    if (!player) return false;
    this.players.delete(clientId);
    return true;
  }

  reconnect(clientId, ws) {
    if (clientId === this.hostClientId) {
      this.hostSocket = ws;
      return "host";
    }

    const player = this.players.get(clientId);
    if (!player) return null;

    player.ws = ws;
    player.connected = true;
    return "player";
  }

  disconnect(ws) {
    if (this.hostSocket === ws) this.hostSocket = null;

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
      throw new Error("Game has already started.");
    }
    if (this.players.size < 1) {
      throw new Error("At least one player must join first.");
    }

    const pool = gameConfig.randomizeRounds ? shuffle(uqLocations) : [...uqLocations];
    this.locations = pool.slice(0, gameConfig.roundsPerGame);

    if (this.locations.length < gameConfig.roundsPerGame) {
      throw new Error("Not enough UQ locations are configured for this game.");
    }

    for (const p of this.players.values()) {
      p.totalScore = 0;
      p.roundScore = 0;
      p.distanceM = null;
      p.guess = null;
    }

    this.roundIndex = -1;
    this.startNextRound();
  }

  startNextRound() {
    clearTimeout(this.timer);
    this.roundIndex += 1;

    if (this.roundIndex >= this.locations.length) {
      this.finish();
      return;
    }

    this.status = "round";
    this.roundStartsAt = Date.now();
    this.roundEndsAt = this.roundStartsAt + gameConfig.roundTimeMs;

    for (const p of this.players.values()) {
      p.guess = null;
      p.roundScore = 0;
      p.distanceM = null;
    }

    this.timer = setTimeout(() => this.reveal(), gameConfig.roundTimeMs);
    this.broadcast();
  }

  submitGuess(clientId, guess) {
    if (this.status !== "round") {
      throw new Error("Guesses are not open right now.");
    }

    const player = this.players.get(clientId);
    if (!player) throw new Error("Player is not in this room.");
    if (player.guess) throw new Error("Your guess is already locked in.");

    const lat = Number(guess?.lat);
    const lng = Number(guess?.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      throw new Error("Invalid map position.");
    }

    player.guess = { lat, lng };

    const required = [...this.players.values()].filter((p) => p.connected);
    if (required.length > 0 && required.every((p) => p.guess)) {
      clearTimeout(this.timer);
      this.timer = setTimeout(
        () => this.reveal(),
        gameConfig.revealDelayWhenAllSubmittedMs
      );
    }

    this.broadcast();
  }

  reveal() {
    if (this.status !== "round") return;

    clearTimeout(this.timer);
    this.timer = null;
    this.status = "reveal";
    this.roundEndsAt = null;

    const loc = this.locations[this.roundIndex];
    const answer = { lat: loc.lat, lng: loc.lng };

    for (const player of this.players.values()) {
      if (!player.guess) {
        player.roundScore = 0;
        player.distanceM = null;
        continue;
      }

      const result = calculateRoundScore(answer, player.guess);
      player.roundScore = result.score;
      player.distanceM = result.distanceM;
      player.totalScore += result.score;
    }

    this.broadcast();
  }

  nextRound() {
    if (this.status !== "reveal") {
      throw new Error("Reveal the current round first.");
    }

    // After the fifth reveal, transition to a persistent final-results state.
    // Nothing starts another game automatically.
    if (this.roundIndex >= this.locations.length - 1) {
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
    const loc = this.locations[this.roundIndex] || null;
    const inReveal = this.status === "reveal" || this.status === "finished";

    const currentView =
      loc && this.status === "round"
        ? {
            id: loc.id,
            panoramaUrl: loc.panoramaUrl,
            heading: loc.heading,
            pitch: loc.pitch,
          }
        : null;

    const reveal =
      loc && inReveal
        ? {
            answer: { lat: loc.lat, lng: loc.lng, name: loc.name },
            guesses: [...this.players.values()]
              .filter((p) => p.guess)
              .map((p) => ({
                clientId: p.clientId,
                nickname: p.nickname,
                lat: p.guess.lat,
                lng: p.guess.lng,
                score: p.roundScore,
                distanceM: p.distanceM,
              })),
          }
        : null;

    return {
      code: this.code,
      isHost: forClientId === this.hostClientId,
      status: this.status,
      maxPlayers: gameConfig.maxPlayers,
      totalRounds: gameConfig.roundsPerGame,
      roundNumber: this.roundIndex >= 0 ? this.roundIndex + 1 : 0,
      roundStartsAt: this.roundStartsAt,
      roundEndsAt: this.roundEndsAt,
      currentView,
      reveal,
      players: [...this.players.values()]
        .map((p) => ({
          clientId: p.clientId,
          nickname: p.nickname,
          connected: p.connected,
          hasGuessed: Boolean(p.guess),
          roundScore: p.roundScore,
          distanceM: p.distanceM,
          totalScore: p.totalScore,
        }))
        .sort((a, b) => b.totalScore - a.totalScore),
    };
  }

  send(ws, payload) {
    if (!ws || ws.readyState !== 1) return;
    ws.send(JSON.stringify(payload));
  }

  broadcast() {
    this.send(this.hostSocket, {
      type: "state",
      game: this.publicState(this.hostClientId),
    });

    for (const player of this.players.values()) {
      this.send(player.ws, {
        type: "state",
        game: this.publicState(player.clientId),
      });
    }
  }
}
