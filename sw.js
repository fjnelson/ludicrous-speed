// Define the cache name and app assets to cache
const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/client',
  '/app.js',
  '/styles.css',
  '/images/logo.png'
];

// Install the service worker and cache app assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Intercept network requests and serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
