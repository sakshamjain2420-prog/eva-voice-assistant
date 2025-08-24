self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("eva-cache").then(cache =>
      cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
        // Add your icons here if needed
      ])
    )
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});