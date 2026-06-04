import { Wifi, Radio, QrCode, RefreshCw } from "lucide-react";
import { Screenshot } from "./Screenshot";

const methods = [
  {
    icon: Wifi,
    title: "Local Wi-Fi",
    text: "Both phones on the same network pair and transfer directly.",
  },
  {
    icon: Radio,
    title: "Wi-Fi Direct",
    text: "No shared network needed. The devices connect to each other.",
  },
  {
    icon: QrCode,
    title: "Animated QR",
    text: "Fully offline. An animated QR carries the encrypted payload across.",
  },
];

export function Sync() {
  return (
    <section id="sync" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex items-end justify-center gap-3 sm:gap-5 lg:order-1">
          <Screenshot
            name="sync-send-receive"
            alt="Choosing to send or receive accounts"
            className="mb-10 w-1/2 max-w-[200px]"
          />
          <Screenshot
            name="sync-methods"
            alt="Choosing a sync method"
            className="w-1/2 max-w-[200px]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
            <RefreshCw className="h-4 w-4" /> Sync
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Move to a new phone without a server
          </h2>
          <p className="mt-4 max-w-md text-pretty text-lg text-muted">
            No cloud account is involved. Pick how the two devices talk, scan to pair, and your
            accounts come across. The handshake is end-to-end encrypted and nothing leaves the local
            network.
          </p>

          <ul className="mt-8 grid gap-3">
            {methods.map((m) => (
              <li
                key={m.title}
                className="flex items-start gap-3.5 rounded-2xl border border-border bg-surface p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-container text-on-primary-container">
                  <m.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[15px] font-semibold">{m.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{m.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
