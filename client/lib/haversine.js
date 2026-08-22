const EARTH_RADIUS_M = 6_371_000;

const toRad = (degrees) => (degrees * Math.PI) / 180;

export function haversineMeters(a, b) {
  const lat1 = Number(a?.lat);
  const lng1 = Number(a?.lng);
  const lat2 = Number(b?.lat);
  const lng2 = Number(b?.lng);

  if (![lat1, lng1, lat2, lng2].every(Number.isFinite)) {
    throw new Error("Invalid latitude/longitude supplied to haversineMeters");
  }

  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const rLat1 = toRad(lat1);
  const rLat2 = toRad(lat2);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rLat1) * Math.cos(rLat2) * Math.sin(dLng / 2) ** 2;

  return 2 * EARTH_RADIUS_M * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
