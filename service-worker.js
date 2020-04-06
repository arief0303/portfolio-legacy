var pwaCache = 'cache-v0.1';
var resourceToPrecache = [
  '/',
  'index.html',
  'styles/style.css',
  'manifest.json'
]

self.addEventListener("activate", (activating) => {
  console.log("Service Worker: Activation succeed");
});

self.addEventListener("fetch", (fetching) => {
  console.log("Service Worker: Fetch intercepted");
});

self.addEventListener("push", (pushing) => {
  console.log("Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :(");
});

self.addEventListener("install", (installing) => {
  console.log("Service Worker: Installation in progress");
});

/*pwaCache.respondWith(
  caches.match(pwaCache.request.url).then((response) => {
    console.log("Service Worker: Fetching resource " + pwaCache.request.url);
    return response || fetch(pwaCache.request).then((response) => {
      console.log("Service Worker: Resource " + pwaCache.request.url + " not available in cache");
      return caches.open(pwaCache).then((cache) => {
        console.log("Service Worker: Caching (new) resource " + pwaCache.request.url);
        cache.put(fetching.request, response.clone());
        return response;
      });
    }).catch(function () {
      console.log("Service Worker: Fetching online failed, HAALLPPPP!!!");
      //Do something else with the request (respond with a different cached file)
    })
  })
);*/