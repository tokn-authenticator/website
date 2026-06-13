import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const HOST = "usetokn.app";
const SITEMAP = `https://${HOST}/sitemap.xml`;

const keyFile = readdirSync("public").find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("No IndexNow key file (public/<32-hex>.txt) found.");
  process.exit(1);
}
const key = readFileSync(join("public", keyFile), "utf8").trim();

const sitemapXml = await fetch(SITEMAP).then((r) => r.text());
const urlList = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) {
  console.error(`No <loc> URLs found in ${SITEMAP}.`);
  process.exit(1);
}

console.log(`Pinging ${urlList.length} URLs with key ${key}:`);
for (const u of urlList) console.log(`  ${u}`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${keyFile}`,
    urlList,
  }),
});

console.log(`\nIndexNow responded ${res.status} ${res.statusText}`);
if (res.status !== 200) {
  console.error(await res.text());
  process.exit(1);
}
