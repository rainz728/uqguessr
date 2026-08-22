/* ---------------------------------------------------------
   Viewer configuration
--------------------------------------------------------- */

const MIN_HFOV = 25;
const MAX_HFOV = 110;

const WHEEL_SENSITIVITY = 0.0075;
const BUTTON_STEP = 1.33;

function clampHfov(value) {
  return Math.max(MIN_HFOV, Math.min(MAX_HFOV, value));
}

function normaliseYawDifference(value) {
  while (value > 180) value -= 360;
  while (value < -180) value += 360;
  return value;
}

/* ---------------------------------------------------------
   Create the Pannellum viewer
--------------------------------------------------------- */

const viewer = pannellum.viewer("panorama", {
  type: "equirectangular",
  panorama: "panoramas/loc3.jpg",
  autoLoad: true,

  // Start facing a random direction
  yaw: Math.random() * 360 - 180,

  // We implement our own zoom behaviour
  mouseZoom: false,
  minHfov: MIN_HFOV,
  maxHfov: MAX_HFOV,

  // Hide Pannellum’s default UI
  showControls: false,
  showZoomCtrl: false,
  showFullscreenCtrl: false
});

/* ---------------------------------------------------------
   Custom + / − buttons
--------------------------------------------------------- */

document.getElementById("zoomIn").addEventListener("click", () => {
  viewer.setHfov(clampHfov(viewer.getHfov() / BUTTON_STEP), 500);
});

document.getElementById("zoomOut").addEventListener("click", () => {
  viewer.setHfov(clampHfov(viewer.getHfov() * BUTTON_STEP), 500);
});

/* ---------------------------------------------------------
   Cursor‑centred zoom
--------------------------------------------------------- */

const panoEl = document.getElementById("panorama");

function recentre(before, after) {
  const pitchDiff = before[0] - after[0];
  const yawDiff = normaliseYawDifference(before[1] - after[1]);

  viewer.setPitch(viewer.getPitch() + pitchDiff, false);
  viewer.setYaw(viewer.getYaw() + yawDiff, false);
}

/* ---------------------------------------------------------
   Trackpad / mouse wheel zoom
--------------------------------------------------------- */

panoEl.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();

    const before = viewer.mouseEventToCoords(event);

    let delta = event.deltaY;

    if (event.deltaMode === 1) delta *= 16;
    if (event.deltaMode === 2) delta *= 100;

    delta = Math.max(-60, Math.min(60, delta));

    const zoomFactor = Math.exp(delta * WHEEL_SENSITIVITY);

    viewer.setHfov(clampHfov(viewer.getHfov() * zoomFactor), false);

    recentre(before, viewer.mouseEventToCoords(event));
  },
  { passive: false }
);
