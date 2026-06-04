import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { faqs } from "@/lib/site";
import { RevealEmail } from "@/components/RevealEmail";

const linkClass = "font-medium text-primary underline-offset-4 hover:underline";

const tokenRe =
  /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}(?:\/\S*)?)/g;

function renderTokens(text: string) {
  return text.split(tokenRe).map((part, i) => {
    if (i % 2 === 0) return part;

    const isEmail = part.includes("@") && !part.includes("/");
    const trail = part.match(/[.,;:!?)]+$/)?.[0] ?? "";
    const token = trail ? part.slice(0, -trail.length) : part;
    const href = isEmail
      ? `mailto:${token}`
      : token.startsWith("http")
        ? token
        : `https://${token}`;

    return (
      <Fragment key={i}>
        <a
          href={href}
          target={isEmail ? undefined : "_blank"}
          rel={isEmail ? undefined : "noreferrer"}
          className={linkClass}
        >
          {token}
        </a>
        {trail}
      </Fragment>
    );
  });
}


function renderAnswer(text: string) {
  return text.split("{{email}}").map((seg, si, arr) => (
    <Fragment key={si}>
      {renderTokens(seg)}
      {si < arr.length - 1 && <RevealEmail className={linkClass} />}
    </Fragment>
  ));
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-primary">FAQ</p>
        <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
          Questions, answered
        </h2>
      </div>

      <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface">
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left sm:p-6 [&::-webkit-details-marker]:hidden">
              <span className="font-medium">{f.q}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="px-5 pb-6 text-pretty leading-relaxed text-muted sm:px-6">{renderAnswer(f.a)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
