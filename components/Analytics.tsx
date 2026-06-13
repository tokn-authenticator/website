import Script from "next/script";

export function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      defer
      src="https://analytics.diamondforge.me/script.js"
      data-website-id="6aa23ea8-1044-4063-a9bf-d4f3e7fa10c7"
      data-do-not-track="true"
    />
  );
}
