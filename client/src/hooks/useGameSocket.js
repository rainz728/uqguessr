import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const SESSION_KEY = "uqguessr-session-v1";
const CLIENT_KEY = "uqguessr-client-id-v1";
const RECONNECT_DELAY_MS = 1500;

function getClientId() {
  if (typeof window === "undefined") return null;
  let id = window.localStorage.getItem(CLIENT_KEY);
  if (!id) {
    id = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
    window.localStorage.setItem(CLIENT_KEY, id);
  }
  return id;
}

function isLocalNetworkHost(hostname) {
  if (hostname === "localhost" || hostname === "127.0.0.1") return true;
  if (hostname.startsWith("10.")) return true;
  if (hostname.startsWith("192.168.")) return true;

  const match = hostname.match(/^172\.(\d+)\./);
  if (match) {
    const second = Number(match[1]);
    return second >= 16 && second <= 31;
  }

  return false;
}

function getSocketUrl() {
  if (typeof window === "undefined") return "ws://localhost:8080";

  // For localhost / LAN testing, always use the hostname that loaded the page.
  // This is what makes QR joins work from phones without hard-coding your laptop IP.
  if (isLocalNetworkHost(window.location.hostname)) {
    return `ws://${window.location.hostname}:8080`;
  }

  const configured = process.env.NEXT_PUBLIC_WS_URL?.trim();
  if (configured) return configured;

  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  return `${protocol}//${window.location.hostname}:8080`;
}

function removeJoinCodeFromUrl() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (!url.searchParams.has("join")) return;
  url.searchParams.delete("join");
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

export default function useGameSocket() {
  const [connected, setConnected] = useState(false);
  const [game, setGame] = useState(null);
  const [error, setError] = useState("");
  const [session, setSession] = useState(null);
  const socketRef = useRef(null);
  const reconnectTimerRef = useRef(null);
  const clientId = useMemo(
    () => (typeof window === "undefined" ? null : getClientId()),
    []
  );

  const clearSavedSession = useCallback((message = "", clearJoinCode = true) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(SESSION_KEY);
      if (clearJoinCode) removeJoinCodeFromUrl();
    }
    setSession(null);
    setGame(null);
    setError(message);
  }, []);

  const sendRaw = useCallback((payload) => {
    const ws = socketRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      setError("Game server is not connected yet.");
      return false;
    }
    ws.send(JSON.stringify(payload));
    return true;
  }, []);

  const send = useCallback(
    (payload) => sendRaw({ ...payload, clientId }),
    [clientId, sendRaw]
  );

  useEffect(() => {
    if (!clientId) return undefined;

    let disposed = false;

    const connect = () => {
      if (disposed) return;

      const ws = new WebSocket(getSocketUrl());
      socketRef.current = ws;

      ws.addEventListener("open", () => {
        if (disposed) return;
        setConnected(true);
        setError("");

        try {
          const saved = JSON.parse(
            window.localStorage.getItem(SESSION_KEY) || "null"
          );
          if (saved?.code) {
            ws.send(
              JSON.stringify({
                type: "reconnect",
                clientId,
                code: saved.code,
              })
            );
          }
        } catch (_) {
          window.localStorage.removeItem(SESSION_KEY);
        }
      });

      ws.addEventListener("message", (event) => {
        let msg;
        try {
          msg = JSON.parse(event.data);
        } catch (_) {
          return;
        }

        if (msg.type === "state") {
          setGame(msg.game);
          setError("");
          return;
        }

        if (msg.type === "session") {
          const next = { code: msg.code, role: msg.role };
          setSession(next);
          setError("");
          window.localStorage.setItem(SESSION_KEY, JSON.stringify(next));
          return;
        }

        if (msg.type === "session_cleared") {
          clearSavedSession(msg.message || "You left the room.");
          return;
        }

        if (msg.type === "room_closed") {
          clearSavedSession(msg.message || "That game has ended.");
          return;
        }

        if (msg.type === "error") {
          if (msg.resetSession) {
            clearSavedSession(
              msg.message || "Your previous game is no longer available."
            );
          } else {
            setError(msg.message || "Game server error.");
          }
        }
      });

      ws.addEventListener("close", () => {
        if (socketRef.current === ws) socketRef.current = null;
        if (disposed) return;
        setConnected(false);

        clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = setTimeout(connect, RECONNECT_DELAY_MS);
      });

      ws.addEventListener("error", () => {
        if (!disposed) {
          setError("Could not connect to the multiplayer server. Retrying…");
        }
      });
    };

    connect();

    return () => {
      disposed = true;
      clearTimeout(reconnectTimerRef.current);
      const ws = socketRef.current;
      socketRef.current = null;
      if (ws) ws.close();
    };
  }, [clientId, clearSavedSession]);

  const clearSession = useCallback(() => {
    clearSavedSession("");
  }, [clearSavedSession]);

  return {
    connected,
    game,
    error,
    session,
    send,
    clearSession,
    clientId,
  };
}
