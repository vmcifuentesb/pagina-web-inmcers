const CACHE = "inmcers-v1"
const urlsToCache = ["/", "/productos", "/servicios", "/trabajos", "/nosotros", "/contacto", "/faq", "/calculadora", "/blog"]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  )
})
