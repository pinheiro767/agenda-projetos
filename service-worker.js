const CACHE_NAME = "agenda-cache-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./app.css",
  "./filters.js",
  "./storage.js",
  "./calendar.js",
  "./events.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
