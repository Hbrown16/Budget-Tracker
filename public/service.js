const FILES_TO_CACHE = [
    "/",
    "/db.js",
    "/index.html",
    "/index.js",
    "/style.css",
    "manifest.json",
];

const CACHE_NAME = "";
const DATA_CACHE_NAME = "";

self.addEventListener("Install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
          console.log("Files are pre-cached");
          return cache.addAll(FILES_TO_CACHE);  
        })
    );
    self.skipWaiting();
});

self.addEventListener("activate", function(event) {
    event.waitUnitl(
        caches.keys().then(keylist => {
            return Promise.all(
                
            )
        })
    )
})