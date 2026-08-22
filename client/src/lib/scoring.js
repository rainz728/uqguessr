import gameConfig from "./GameConfig";
import { haversineMeters } from "./haversine";
import { isInsideUQCampus } from "./UQCampusBoundary";

const PERFECT_DISTANCE_METERS = 10;
const SCORING_DECAY_METERS = 200;

export function calculateRoundScore(answer, guess) {
  const distanceM = haversineMeters(answer, guess);
  const roundedDistanceM = Math.round(distanceM);

  // Guesses outside the playable UQ boundary receive no points.
  if (!isInsideUQCampus(guess)) {
    return {
      distanceM: roundedDistanceM,
      score: 0,
    };
  }

  // Guesses within 10 metres receive the maximum score.
  if (distanceM <= PERFECT_DISTANCE_METERS) {
    return {
      distanceM: roundedDistanceM,
      score: gameConfig.maxScorePerRound,
    };
  }

  // Campus-scale exponential scoring:
  //
  // score = maximum score × e^(-distance / 200)
  const rawScore =
    gameConfig.maxScorePerRound *
    Math.exp(-distanceM / SCORING_DECAY_METERS);

  return {
    distanceM: roundedDistanceM,
    score: Math.max(
      0,
      Math.min(
        gameConfig.maxScorePerRound,
        Math.round(rawScore)
      )
    ),
  };
}