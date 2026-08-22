import gameConfig from "./gameConfig.js";
import { haversineMeters } from "./haversine.js";
import { isInsideUQCampus } from "./uqCampusBoundary.js";

const PERFECT_DISTANCE_METERS = 10;
const SCORING_DECAY_METERS = 200;

export function calculateRoundScore(answer, guess) {
  const distanceM = haversineMeters(answer, guess);
  const roundedDistanceM = Math.round(distanceM);

  // The visible outline on GuessMap uses this same shared campus boundary.
  if (!isInsideUQCampus(guess)) {
    return {
      distanceM: roundedDistanceM,
      score: 0,
    };
  }

  // Tiny coordinate differences should not prevent a genuinely perfect guess.
  if (distanceM <= PERFECT_DISTANCE_METERS) {
    return {
      distanceM: roundedDistanceM,
      score: gameConfig.maxScorePerRound,
    };
  }

  // Campus-scale exponential scoring:
  // score = maxScore * e^(-distance / 200 m)
  const raw =
    gameConfig.maxScorePerRound *
    Math.exp(-distanceM / SCORING_DECAY_METERS);

  return {
    distanceM: roundedDistanceM,
    score: Math.max(
      0,
      Math.min(gameConfig.maxScorePerRound, Math.round(raw))
    ),
  };
}
