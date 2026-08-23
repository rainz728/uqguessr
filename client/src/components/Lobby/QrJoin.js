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
      <div className="qrCodeFrame">
        {url ? <QRCodeSVG value={url} size={166} level="M" includeMargin /> : null}
      </div>
      <div className="qrDetails">
        <span className="eyebrow">ROOM CODE</span>
        <div className="roomCode">{code}</div>
        <p className="muted">
          Scan the QR code on your phone, or open UQGuessr and enter this code manually.
        </p>
      </div>
    </div>
  );
}
