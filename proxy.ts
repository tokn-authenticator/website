import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);
const locales = routing.locales as readonly string[];

export default function proxy(request: NextRequest) {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const headerLocale = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.trim()
    .toLowerCase()
    .split("-")[0];

  const preferred =
    cookieLocale && locales.includes(cookieLocale)
      ? cookieLocale
      : headerLocale && locales.includes(headerLocale)
        ? headerLocale
        : undefined;

  if (preferred) {
    const headers = new Headers(request.headers);
    headers.set("accept-language", preferred);
    return intlMiddleware(new NextRequest(request.url, { headers }));
  }

  return intlMiddleware(request);
}

export const config = {
  // Match everything except API routes, Next internals, and any path with a
  // dot (static files, robots.txt, sitemap.xml, manifest, icons).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
