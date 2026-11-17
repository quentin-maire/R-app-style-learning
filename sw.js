// Field Notes service worker.
// - The app shell (index.html, manifest, icons) is fetched network-first, so a new
//   version pushed to GitHub Pages shows up as soon as you are online, and the last
//   copy is used when you are not.
// - R itself (webr.r-wasm.org) and its packages (repo.r-wasm.org) are large, so they are
//   kept in a separate, long-lived cache and served cache-first: after the first visit
//   R starts from this device, and lessons can work offline. An entry older than 30 days
//   is refreshed from the network when online. Settings has a button that clears this
//   cache. Whether webR's own worker lets this cache help depends on the browser; if it
//   does not, everything still works, just with network downloads as before.
// - Fonts are network-first with a cached fallback.
// Bump VERSION when you want every device to drop its old shell caches.
const VERSION = "field-notes-v10";
const ENGINE_CACHE = "field-notes-webr-v1";   // not deleted on VERSION bumps
const MAX_AGE_MS = 30 * 24 * 3600 * 1000;
const SHELL = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png"];
const ENGINE_HOSTS = ["webr.r-wasm.org", "repo.r-wasm.org"];
const FONT_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await Promise.all(SHELL.map((u) => cache.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== VERSION && !k.startsWith("field-notes-webr")).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function networkFirst(request, timeoutMs) {
  const cache = await caches.open(VERSION);
  try {
    const net = fetch(request);
    const res = timeoutMs
      ? await Promise.race([net, new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), timeoutMs))])
      : await net;
    if (res && (res.ok || res.type === "opaque")) cache.put(request, res.clone()).catch(() => {});
    return res;
  } catch (err) {
    const hit = await cache.match(request, { ignoreSearch: false });
    if (hit) return hit;
    if (request.mode === "navigate") {
      const shell = await cache.match("./index.html");
      if (shell) return shell;
    }
    throw err;
  }
}

function isFresh(res) {
  const d = res.headers.get("date");
  if (!d) return true;
  const t = Date.parse(d);
  return !t || Date.now() - t < MAX_AGE_MS;
}

async function cacheFirst(request) {
  const cache = await caches.open(ENGINE_CACHE);
  const hit = await cache.match(request);
  if (hit && isFresh(hit)) return hit;
  try {
    const res = await fetch(request);
    if (res && res.ok) cache.put(request, res.clone()).catch(() => {});
    return res;
  } catch (err) {
    if (hit) return hit;      // stale copy beats no copy when offline
    throw err;
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || req.headers.has("range")) return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(req, 4000));
  } else if (ENGINE_HOSTS.includes(url.hostname)) {
    event.respondWith(cacheFirst(req));
  } else if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(networkFirst(req, 0));
  }
});
