/* eslint no-console: 0 */

const expectedCaches = [
  'movies-static-v1',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('movies-static-v1').then((cache) =>
      cache.addAll([
        '/offline.html',
        '/chuck-norris.json',
      ])
    )
  );
});

// once a new Service Worker has installed & a previous version isn't
// being used, the new one activates so we can clean-up & migrate
self.addEventListener('activate', (event) => {
  // remove caches beginning "movies-" that aren't in
  // expectedCaches
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (/^movies-/.test(cacheName)) {
            if (expectedCaches.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          }

          return null;
        })
      )
  ));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    // try the cache
    caches.match(event.request).then((cachedResponse) =>
      // fall back to network
      cachedResponse || fetch(event.request)
    ).catch(() =>
      // if both fail, show a generic fallback:
      caches.match('/offline.html')
    )
  );
});
