console.log(">>> viewer.js LOADED");
import { useEffect, useRef, useState } from "react";

const PANNELLUM_CSS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.7/build/pannellum.css";
const PANNELLUM_JS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.7/build/pannellum.js";

const MIN_HFOV = 25;
const MAX_HFOV = 110;
const WHEEL_SENSITIVITY = 0.0075;
const BUTTON_STEP = 1.33;

function clampHfov(value) {
  return Math.max(MIN_HFOV, Math.min(MAX_HFOV, value));
}

function normaliseYawDifference(value) {
  let result = value;
  while (result > 180) result -= 360;
  while (result < -180) result += 360;
  return result;
}

function loadPannellum() {
  if (typeof window === "undefined") return Promise.reject(new Error("Browser only"));
  if (window.pannellum) return Promise.resolve(window.pannellum);

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
        existing.addEventListener("load", () => resolve(window.pannellum), { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.id = "pannellum-js";
      script.src = PANNELLUM_JS;
      script.async = true;
      script.onload = () => resolve(window.pannellum);
      script.onerror = () => reject(new Error("Failed to load Pannellum"));
      document.head.appendChild(script);
    });
  }

  return window.__uqguessrPannellumPromise;
}

export default function Viewer({ view }) {
  const panoramaRef = useRef(null);
  const viewerRef = useRef(null);
  const [message, setMessage] = useState("Loading 360° view…");

  useEffect(() => {
    let cancelled = false;
    let panoramaElement = null;
    let wheelHandler = null;

    async function init() {
      if (!view?.panoramaUrl) {
        setMessage("This round does not have a custom panorama configured yet.");
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

        const viewer = pannellum.viewer(panoramaElement, {
          type: "equirectangular",
          panorama: view.panoramaUrl,
          autoLoad: true,
          yaw: initialYaw,
          pitch: Number.isFinite(view.pitch) ? view.pitch : 0,
          hfov: 90,
          mouseZoom: false,
          minHfov: MIN_HFOV,
          maxHfov: MAX_HFOV,
          showControls: false,
          showZoomCtrl: false,
          showFullscreenCtrl: false,
          keyboardZoom: false,
        });

        viewerRef.current = viewer;
        setMessage("");

        function recentre(before, after) {
          if (!before || !after || !viewerRef.current) return;

          const pitchDifference = before[0] - after[0];
          const yawDifference = normaliseYawDifference(before[1] - after[1]);

          viewerRef.current.setPitch(
            viewerRef.current.getPitch() + pitchDifference,
            false
          );
          viewerRef.current.setYaw(
            viewerRef.current.getYaw() + yawDifference,
            false
          );
        }

        wheelHandler = (event) => {
          if (!viewerRef.current) return;
          event.preventDefault();

          const before = viewerRef.current.mouseEventToCoords(event);
          let delta = event.deltaY;
          if (event.deltaMode === 1) delta *= 16;
          if (event.deltaMode === 2) delta *= 100;
          delta = Math.max(-60, Math.min(60, delta));

          const zoomFactor = Math.exp(delta * WHEEL_SENSITIVITY);
          viewerRef.current.setHfov(
            clampHfov(viewerRef.current.getHfov() * zoomFactor),
            false
          );

          recentre(before, viewerRef.current.mouseEventToCoords(event));
        };

        panoramaElement.addEventListener("wheel", wheelHandler, { passive: false });
      } catch (error) {
        console.error(error);
        if (!cancelled) setMessage("Custom panorama failed to load.");
      }
    }

    init();

    return () => {
      cancelled = true;
      if (panoramaElement && wheelHandler) {
        panoramaElement.removeEventListener("wheel", wheelHandler);
      }
      if (viewerRef.current?.destroy) {
        try {
          viewerRef.current.destroy();
        } catch (_) {}
      }
      viewerRef.current = null;
    };
  }, [view?.id, view?.panoramaUrl, view?.heading, view?.pitch]);

  const zoomIn = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    viewer.setHfov(clampHfov(viewer.getHfov() / BUTTON_STEP), 500);
  };

  const zoomOut = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    viewer.setHfov(clampHfov(viewer.getHfov() * BUTTON_STEP), 500);
  };

  return (
    <div className="streetViewWrap">
      <div ref={panoramaRef} className="streetView" />

      {!message ? (
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <button
            type="button"
            aria-label="Zoom in"
            onClick={zoomIn}
            style={{ width: 48, height: 48, fontSize: 28, cursor: "pointer" }}
          >
            +
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            onClick={zoomOut}
            style={{ width: 48, height: 48, fontSize: 28, cursor: "pointer" }}
          >
            −
          </button>
        </div>
      ) : null}

      {message ? <div className="streetViewMessage">{message}</div> : null}
    </div>
  );
}
