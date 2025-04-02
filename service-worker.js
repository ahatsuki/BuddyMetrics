const CACHE_NAME = 'wedstrijd-stats-cache-v1';
const urlsToCache = [
  './',
  './Wedstrijd statistieken.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0',
  'https://html2canvas.hertzen.com/dist/html2canvas.min.js'
];

// Installatie van service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache geopend');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activeer service worker en verwijder oude caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepteer en casche netwerkaanvragen
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone de aanvraag omdat het een stream is
        return fetch(event.request.clone()).then(
          response => {
            // Controleer of we een geldige response ontvangen
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone de response omdat het een stream is
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // Voeg bestand toe aan cache
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(() => {
        // Als offline en bestand niet in cache, probeer een fallback te tonen
        if (event.request.mode === 'navigate') {
          return caches.match('./offline.html');
        }
      })
  );
}); 