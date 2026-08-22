// UQGuessr playable boundary for UQ St Lucia.
// Coordinates are [latitude, longitude].
//
// This outline was tightened to match the red boundary supplied by the user:
// - includes the northern sports precinct
// - includes the main teaching/research campus
// - includes UQ Lakes / Playing Field 3 area
// - includes the W.E.P. Harris Oval / Pavilion lobe
// - excludes most surrounding residential streets and southern colleges
// - follows the river bank rather than extending into the Brisbane River
//
// GuessMap.js and scoring.js both import this file, so the visible boundary
// and the 0-points-outside rule stay identical.

export const UQ_ST_LUCIA_BOUNDARY = [
  // West side: Playing Field 9 / Grace College edge
  [-27.497599, 153.005331],
  [-27.496627, 153.005389],
  [-27.495345, 153.005609],
  [-27.494018, 153.006087],
  [-27.493355, 153.006518],

  // North-west indentation near Fred Schonell Drive / Keith Street
  [-27.493576, 153.007379],
  [-27.493532, 153.008001],
  [-27.492913, 153.008383],
  [-27.492206, 153.008527],

  // Northern sports precinct
  [-27.491896, 153.009627],
  [-27.491896, 153.010966],
  [-27.491764, 153.012258],
  [-27.491896, 153.013119],
  [-27.492250, 153.014076],
  [-27.492648, 153.015128],
  [-27.493090, 153.015989],

  // North-east / river-facing edge
  [-27.493842, 153.016563],
  [-27.494681, 153.017233],
  [-27.495654, 153.017903],
  [-27.496892, 153.018381],
  [-27.498130, 153.018860],

  // Eastern tip near The Elbow
  [-27.499677, 153.019721],
  [-27.500251, 153.019195],
  [-27.500870, 153.018477],
  [-27.501136, 153.017903],

  // Cut back around Playing Field 3 / UQ Lakes side
  [-27.500915, 153.017425],
  [-27.500251, 153.017233],
  [-27.499765, 153.017185],
  [-27.499633, 153.016755],
  [-27.499721, 153.016468],
  [-27.500163, 153.016276],
  [-27.500517, 153.015894],
  [-27.500738, 153.015033],
  [-27.500693, 153.014076],
  [-27.500517, 153.013406],
  [-27.500605, 153.012832],

  // Southern cut-in, excluding St Leo's / Women's College area
  [-27.501003, 153.012354],
  [-27.501578, 153.011971],
  [-27.502020, 153.011493],
  [-27.502329, 153.011110],

  // W.E.P. Harris Oval / Pavilion lobe
  [-27.502197, 153.010488],
  [-27.501799, 153.010105],
  [-27.501136, 153.009866],
  [-27.500605, 153.009723],
  [-27.500251, 153.009866],
  [-27.499854, 153.010440],
  [-27.499456, 153.010775],
  [-27.498969, 153.010775],

  // Back around the western residential cut-out
  [-27.498748, 153.010536],
  [-27.498616, 153.009866],
  [-27.498439, 153.009197],
  [-27.498218, 153.008527],
  [-27.497909, 153.007953],
  [-27.497687, 153.007283],
  [-27.497599, 153.006709],
];

export function isInsideUQCampus(point) {
  const lat = Number(point?.lat);
  const lng = Number(point?.lng);

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;

  // Standard ray-casting point-in-polygon test.
  // x = longitude, y = latitude.
  let inside = false;

  for (
    let i = 0, j = UQ_ST_LUCIA_BOUNDARY.length - 1;
    i < UQ_ST_LUCIA_BOUNDARY.length;
    j = i++
  ) {
    const [latI, lngI] = UQ_ST_LUCIA_BOUNDARY[i];
    const [latJ, lngJ] = UQ_ST_LUCIA_BOUNDARY[j];

    const crosses =
      latI > lat !== latJ > lat &&
      lng < ((lngJ - lngI) * (lat - latI)) / (latJ - latI) + lngI;

    if (crosses) inside = !inside;
  }

  return inside;
}
