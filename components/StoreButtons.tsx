import { siGoogleplay, siFdroid, siGithub } from "simple-icons";
import { BrandGlyph } from "./BrandGlyph";
import { site } from "@/lib/site";

const base =
  "inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold transition";

export function StoreButtons({
  showGithub = true,
  className = "",
}: {
  showGithub?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`grid w-full grid-cols-2 gap-3 min-[485px]:flex min-[485px]:w-auto min-[485px]:flex-wrap min-[485px]:items-center ${className}`}
    >
      <a
        href={site.links.play}
        target="_blank"
        rel="noreferrer"
        className={`${base} col-span-2 w-full justify-center bg-primary text-on-primary hover:bg-primary-strong min-[485px]:w-auto`}
      >
        <BrandGlyph icon={siGoogleplay} className="h-4 w-4" />
        Google Play
      </a>
      <a
        href={site.links.fdroid}
        target="_blank"
        rel="noreferrer"
        className={`${base} w-full justify-center border border-border-strong bg-surface text-text hover:border-primary hover:text-primary min-[485px]:w-auto`}
      >
        <BrandGlyph icon={siFdroid} className="h-4 w-4" />
        F-Droid
      </a>
      {showGithub && (
        <a
          href={site.links.releases}
          target="_blank"
          rel="noreferrer"
          className={`${base} w-full justify-center text-muted hover:text-text min-[485px]:w-auto`}
        >
          <BrandGlyph icon={siGithub} className="h-4 w-4" />
          GitHub
        </a>
      )}
    </div>
  );
}
