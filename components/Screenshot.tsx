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
  const imgProps = {
    width: 1466,
    height: 3101,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
    draggable: false,
    style,
  };
  return (
    <div className={className}>
      <img src={`/screens/light/${name}.png`} alt={alt} {...imgProps} className={`${common} dark:hidden`} />
      <img src={`/screens/dark/${name}.png`} alt={alt} {...imgProps} className={`hidden ${common} dark:block`} />
    </div>
  );
}
