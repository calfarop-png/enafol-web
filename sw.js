/*==========================================
    ENAFOL
    Service Worker
==========================================*/

const CACHE_NAME = "enafol-v1";

const FILES_TO_CACHE = [

    "./",
    "./index.html",

    "./css/style.css",
    "./js/app.js",

    "./manifest.json",

    "./assets/images/logo.png",
    "./assets/images/portada-hero.jpg",

    "./assets/icons/facebook.svg",
    "./assets/icons/instagram.svg",
    "./assets/icons/tiktok.svg",
    "./assets/icons/whatsapp.svg"

];

/*==============================
    INSTALACION
==============================*/

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => {

                return cache.addAll(FILES_TO_CACHE);

            })

    );

    self.skipWaiting();

});

/*==============================
    ACTIVACION
==============================*/

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()

            .then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if (key !== CACHE_NAME) {

                            return caches.delete(key);

                        }

                    })

                );

            })

    );

    self.clients.claim();

});

/*==============================
    FETCH
==============================*/

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                return response || fetch(event.request);

            })

    );

});