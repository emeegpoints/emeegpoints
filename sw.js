// EMEEG Points - works offline: the app opens even without internet and shows the last saved points.
const CACHE = 'emeeg-points-v3';
const SHELL = ['./', './index.html', './config.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './img/logo.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;   // points come live from the database
  // app files: use the newest when online, the saved copy when offline
  e.respondWith(fetch(req).then((res) => {
    const copy = res.clone();
    if (res.ok) caches.open(CACHE).then((c) => c.put(req, copy));
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('./index.html'))));
});
