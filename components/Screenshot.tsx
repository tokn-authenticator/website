export function Screenshot({
  name,
  alt,
  className = "",
  priority = false,
  maskStart = 60,
  maskEnd = 100,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  maskStart?: number;
  maskEnd?: number;
}) {
  const fade = `linear-gradient(to bottom, #000 ${maskStart}%, transparent ${maskEnd}%)`;
  const style = { WebkitMaskImage: fade, maskImage: fade };
  const common = "block h-auto w-full select-none drop-shadow-xl";
  // width/height carry the intrinsic aspect ratio (reserves space, avoids CLS).
  // The WebP is the served asset; the PNG is a fallback for browsers without WebP.
  const imgProps = {
    width: 1466,
    height: 3101,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    decoding: "async" as const,
    draggable: false,
    style,
  };
  return (
    <div className={className}>
      <picture className="contents">
        <source srcSet={`/screens/light/${name}.webp`} type="image/webp" />
        <img
          src={`/screens/light/${name}.png`}
          alt={alt}
          {...imgProps}
          className={`${common} dark:hidden`}
        />
      </picture>
      <picture className="contents">
        <source srcSet={`/screens/dark/${name}.webp`} type="image/webp" />
        <img
          src={`/screens/dark/${name}.png`}
          alt={alt}
          {...imgProps}
          className={`hidden ${common} dark:block`}
        />
      </picture>
    </div>
  );
}
