export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/icon.png"
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      draggable={false}
      className={`select-none ${className}`}
    />
  );
}
