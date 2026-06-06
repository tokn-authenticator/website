import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match everything except API routes, Next internals, and any path with a
  // dot (static files, robots.txt, sitemap.xml, manifest, icons).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
