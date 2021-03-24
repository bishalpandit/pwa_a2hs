self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/pwa_a2hs/',
        '/pwa_a2hs/index.html',
        '/pwa_a2hs/app.js',
        '/pwa_a2hs/styles.css',
        '/pwa_a2hs/img/contact.jpg',
        '/pwa_a2hs/img/feat3.jpg',
        '/pwa_a2hs/img/fox-icon.png',
        '/pwa_a2hs/img/gamepad-3.svg',
        '/pwa_a2hs/img/gamer.svg',
        '/pwa_a2hs/img/jeff-hardi-yRAK7Vcyl_Q-unsplash.jpg',
        '/pwa_a2hs/img/pexels-suludan-diliyaer-596750.jpg',
        '/pwa_a2hs/img/puzzle-1.svg',
        '/pwa_a2hs/img/red.jpg',
        '/pwa_a2hs/img/steam-4.svg',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });