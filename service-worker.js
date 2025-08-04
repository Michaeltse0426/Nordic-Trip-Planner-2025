
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('nordic-trip-cache-v9').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
    