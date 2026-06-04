"use client";

import QRCode from "react-qr-code";
import { site } from "@/lib/site";

export function StoreQr({ size = 96 }: { size?: number }) {
  return (
    <div className="rounded-xl bg-white p-2.5 ring-1 ring-black/10">
      <QRCode
        value={site.links.play}
        size={size}
        bgColor="#ffffff"
        fgColor="#16161e"
        style={{ height: size, width: size }}
      />
    </div>
  );
}
