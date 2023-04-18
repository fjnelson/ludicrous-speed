
// Define the cache name and app assets to cache
const cacheName = 'hello-data';
// Assets to cache
const urlsToCache = [
  '/',
  '/client',
  '/app.js',
  '/images',
  '/index.html',
  '/pages'
];

// Fetch and cache all data
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(hello-data)
      .then(cache => 
        cache.addAll(
          urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
