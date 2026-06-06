"use client";

import QRCode from "react-qr-code";
import { site } from "@/lib/site";

export function StoreQr({ size = 96, label }: { size?: number; label?: string }) {
  return (
    <div role="img" aria-label={label} className="rounded-xl bg-white p-2.5 ring-1 ring-black/10">
      <QRCode
        value={site.links.play}
        size={size}
        bgColor="#ffffff"
        fgColor="#16161e"
        title={label}
        style={{ height: size, width: size }}
      />
    </div>
  );
}
