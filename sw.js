const CACHE_NAME = 'stars-maid-v23';
const ASSETS = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'manifest.webmanifest',
  'assets/hero-living-room.png',
  'assets/icon.svg',
  'assets/icon-192.svg',
  'assets/icon-512.svg',
  'offline.html',
];

// Limit cache size (simple LRU by deleting oldest entries)
async function limitCacheSize(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    await cache.delete(keys[0]);
    await limitCacheSize(cacheName, maxItems);
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
      self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Navigation requests - network first, fallback to cache (index.html)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('index.html', copy));
          return res;
        })
        .catch(() => caches.match('offline.html'))
    );
    return;
  }

  // Stale-while-revalidate for same-origin assets (styles, scripts, images)
  if (
    url.origin === location.origin &&
    (event.request.destination === 'style' || event.request.destination === 'script' || url.pathname.startsWith('/assets/'))
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const network = fetch(event.request)
          .then((res) => {
            if (res && res.ok) {
              const copy = res.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, copy);
                limitCacheSize(CACHE_NAME, 50);
              });
            }
            return res;
          })
          .catch(() => {});
        return cached || network;
      })
    );
    return;
  }

  // Default: cache-first fallback-to-network, then index.html
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((res) => {
          if (!res || !res.ok) return res;
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return res;
        })
        .catch(() => {
          if (event.request.destination === 'image') {
            // optional: return a small inline placeholder response or a cached placeholder image if available
            return new Response('', { status: 404 });
          }
          return caches.match('index.html');
        });
    })
  );
});

// Allow the page to tell the SW to skip waiting and activate immediately
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
