import gameConfig from "./GameConfig";
import { haversineMeters } from "./haversine";
import { isInsideUQCampus } from "./UQCampusBoundary";

const PERFECT_DISTANCE_METERS = 10;
const SCORING_DECAY_METERS = 200;

export function calculateRoundScore(answer, guess) {
  const distanceM = haversineMeters(answer, guess);
  const roundedDistanceM = Math.round(distanceM);

  if (!isInsideUQCampus(guess)) {
    return { distanceM: roundedDistanceM, score: 0 };
  }

  if (distanceM <= PERFECT_DISTANCE_METERS) {
    return {
      distanceM: roundedDistanceM,
      score: gameConfig.maxScorePerRound,
    };
  }

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
