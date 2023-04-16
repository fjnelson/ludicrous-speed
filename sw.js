// Define the cache name and app assets to cache
const CACHE_NAME = 'v1';
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
      .open(v1)
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
