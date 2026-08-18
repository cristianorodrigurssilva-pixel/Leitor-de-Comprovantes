const CACHE_NAME = 'recibobox-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg' // Certifique-se de que este arquivo existe no GitHub
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
