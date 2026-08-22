import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export default function QrJoin({ code }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}/?join=${encodeURIComponent(code)}`);
    }
  }, [code]);

  return (
    <div className="qrCard">
      {url ? <QRCodeSVG value={url} size={150} level="M" includeMargin /> : null}
      <div>
        <span className="eyebrow">ROOM CODE</span>
        <div className="roomCode">{code}</div>
        <p className="muted">Scan the QR code or enter the code on another phone.</p>
      </div>
    </div>
  );
}
