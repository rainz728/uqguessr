import { useEffect, useRef, useState } from "react";

const PANNELLUM_CSS =
  "https://cdn.jsdelivr.net/npm/pannellum@2.5.7/build/pannellum.css";
const PANNELLUM_JS =
  "https://cdn.jsdelivr.net/npm/pannellum@2.5.7/build/pannellum.js";

// ZOOM SETTINGS
const MIN_HFOV = 15;       // smaller = can zoom in further
const MAX_HFOV = 90;
const WHEEL_SENSITIVITY = 0.0018;
const BUTTON_STEP = 1.33;

// DOUBLE CLICK ZOOM
const DOUBLE_CLICK_ZOOM = 2.0;
const ANIMATION_TIME = 400;

// VERTICAL AXIS LOCK
const MIN_PITCH = -45;
const MAX_PITCH = 40;

function clampHfov(value) {
  return Math.max(MIN_HFOV, Math.min(MAX_HFOV, value));
}

function clampPitch(value) {
  return Math.max(MIN_PITCH, Math.min(MAX_PITCH, value));
}

function normaliseYawDifference(value) {
  let result = value;

  while (result > 180) result -= 360;
  while (result < -180) result += 360;

  return result;
}

function loadPannellum() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Browser only"));
  }

  if (window.pannellum) {
    return Promise.resolve(window.pannellum);
  }

  if (!document.getElementById("pannellum-css")) {
    const link = document.createElement("link");
    link.id = "pannellum-css";
    link.rel = "stylesheet";
    link.href = PANNELLUM_CSS;
    document.head.appendChild(link);
  }

  if (!window.__uqguessrPannellumPromise) {
    window.__uqguessrPannellumPromise = new Promise((resolve, reject) => {
      const existing = document.getElementById("pannellum-js");

      if (existing) {
        existing.addEventListener(
          "load",
          () => resolve(window.pannellum),
          { once: true }
        );

        existing.addEventListener("error", reject, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.id = "pannellum-js";
      script.src = PANNELLUM_JS;
      script.async = true;

      script.onload = () => resolve(window.pannellum);
      script.onerror = () =>
        reject(new Error("Failed to load Pannellum"));

      document.head.appendChild(script);
    });
  }

  return window.__uqguessrPannellumPromise;
}

export default function Viewer({ view }) {
  const panoramaRef = useRef(null);
  const viewerRef = useRef(null);

  const [message, setMessage] = useState(
    "GENERATING CAMPUS CHUNK..."
  );

  useEffect(() => {
    let cancelled = false;
    let panoramaElement = null;
    let wheelHandler = null;
    let doubleClickHandler = null;

    async function init() {
      if (!view?.panoramaUrl) {
        setMessage("PANORAMA FILE MISSING FOR THIS CHUNK");
        return;
      }

      try {
        const pannellum = await loadPannellum();

        if (cancelled || !panoramaRef.current) return;

        panoramaElement = panoramaRef.current;
        panoramaElement.innerHTML = "";

        const initialYaw = Number.isFinite(view.heading)
          ? view.heading
          : Math.random() * 360 - 180;

        const initialPitch = Number.isFinite(view.pitch)
          ? clampPitch(view.pitch)
          : 0;

        const viewer = pannellum.viewer(panoramaElement, {
          type: "equirectangular",
          panorama: view.panoramaUrl,
          autoLoad: true,

          yaw: initialYaw,
          pitch: initialPitch,
          hfov: 70,

          // VERTICAL AXIS LOCK
          minPitch: MIN_PITCH,
          maxPitch: MAX_PITCH,

          // ZOOM LIMITS
          minHfov: MIN_HFOV,
          maxHfov: MAX_HFOV,

          // WE HANDLE MOUSE / TRACKPAD ZOOM OURSELVES
          mouseZoom: false,

          showControls: false,
          showZoomCtrl: false,
          showFullscreenCtrl: false,
          keyboardZoom: false,
        });

        viewerRef.current = viewer;
        setMessage("");

        // Keeps the point underneath your cursor in the same place
        // while zooming.
        function recentre(before, after) {
          if (!before || !after || !viewerRef.current) return;

          const pitchDifference = before[0] - after[0];

          const yawDifference = normaliseYawDifference(
            before[1] - after[1]
          );

          viewerRef.current.setPitch(
            clampPitch(
              viewerRef.current.getPitch() + pitchDifference
            ),
            false
          );

          viewerRef.current.setYaw(
            viewerRef.current.getYaw() + yawDifference,
            false
          );
        }

        // TRACKPAD / MOUSE WHEEL ZOOM
        wheelHandler = (event) => {
          if (!viewerRef.current) return;

          event.preventDefault();

          const before =
            viewerRef.current.mouseEventToCoords(event);

          let delta = event.deltaY;

          if (event.deltaMode === 1) delta *= 16;
          if (event.deltaMode === 2) delta *= 100;

          delta = Math.max(-60, Math.min(60, delta));

          const zoomFactor = Math.exp(
            delta * WHEEL_SENSITIVITY
          );

          viewerRef.current.setHfov(
            clampHfov(
              viewerRef.current.getHfov() * zoomFactor
            ),
            false
          );

          const after =
            viewerRef.current.mouseEventToCoords(event);

          recentre(before, after);
        };

        panoramaElement.addEventListener(
          "wheel",
          wheelHandler,
          { passive: false }
        );

        // DOUBLE CLICK = ZOOM INTO THAT POINT
        doubleClickHandler = (event) => {
          if (!viewerRef.current) return;

          event.preventDefault();

          const point =
            viewerRef.current.mouseEventToCoords(event);

          viewerRef.current.setPitch(
            clampPitch(point[0]),
            ANIMATION_TIME
          );

          viewerRef.current.setYaw(
            point[1],
            ANIMATION_TIME
          );

          viewerRef.current.setHfov(
            clampHfov(
              viewerRef.current.getHfov() /
                DOUBLE_CLICK_ZOOM
            ),
            ANIMATION_TIME
          );
        };

        panoramaElement.addEventListener(
          "dblclick",
          doubleClickHandler
        );
      } catch (error) {
        console.error(error);

        if (!cancelled) {
          setMessage("FAILED TO LOAD CAMPUS CHUNK");
        }
      }
    }

    init();

    return () => {
      cancelled = true;

      if (panoramaElement && wheelHandler) {
        panoramaElement.removeEventListener(
          "wheel",
          wheelHandler
        );
      }

      if (panoramaElement && doubleClickHandler) {
        panoramaElement.removeEventListener(
          "dblclick",
          doubleClickHandler
        );
      }

      if (viewerRef.current?.destroy) {
        try {
          viewerRef.current.destroy();
        } catch (_) {}
      }

      viewerRef.current = null;
    };
  }, [
    view?.id,
    view?.panoramaUrl,
    view?.heading,
    view?.pitch,
  ]);

  const zoomIn = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    viewer.setHfov(
      clampHfov(viewer.getHfov() / BUTTON_STEP),
      500
    );
  };

  const zoomOut = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    viewer.setHfov(
      clampHfov(viewer.getHfov() * BUTTON_STEP),
      500
    );
  };

  return (
    <div className="streetViewWrap pixelStreetViewWrap">
      <div
        ref={panoramaRef}
        className="streetView"
      />

      {!message ? (
        <>
          <div
            className="streetViewBrand"
            aria-hidden="true"
          >
            <span>UQG</span>
            <b>360</b>
          </div>

          <div className="streetZoomControls">
            <button
              type="button"
              aria-label="Zoom in"
              onClick={zoomIn}
            >
              +
            </button>

            <button
              type="button"
              aria-label="Zoom out"
              onClick={zoomOut}
            >
              −
            </button>
          </div>

          <div className="streetViewHint">
            DRAG TO LOOK AROUND
          </div>
        </>
      ) : null}

      {message ? (
        <div className="streetViewMessage pixelLoadingScreen">
          <div
            className="loadingBlockStack"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <strong>{message}</strong>
          <small>Loading terrain...</small>
        </div>
      ) : null}
    </div>
  );
}