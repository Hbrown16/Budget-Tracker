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
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                       console.log("Old data being removed", key);
                       return caches.delete(key); 
                    }
                })
            );
        })
    );
    self.clients.claim();
});

//fetch

self.addEventListener("fetch", function(event) {
   if(event.request.url.includes("/api/")) {
       event.respondWith(
        caches.open(DATA_CACHE_NAME).then(cache => {
          return fetch(event.request)
          .then(response => {
              
          })  
        })
       )
   } 
})