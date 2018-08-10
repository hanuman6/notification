importScripts('/notification/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/notification/_nuxt/app.b6ca32523cc94dd5cf11.js",
    "revision": "9165e4addf0491125693c9ec10441086"
  },
  {
    "url": "/notification/_nuxt/layouts_default.9c76d6c81a7cb6c3a424.js",
    "revision": "48ed92a0419f0c8a6e0dd4d4efdc2543"
  },
  {
    "url": "/notification/_nuxt/manifest.83c0c1877cd977940908.js",
    "revision": "b5df9a0deba9bfdec542690586202287"
  },
  {
    "url": "/notification/_nuxt/pages_index.4993302b6ec3a7f7f238.js",
    "revision": "32bdeb789d44715d019f48a9d16d154c"
  },
  {
    "url": "/notification/_nuxt/vendor.69c901455c0df985e130.js",
    "revision": "d4f5bc92e9c0d135a1b51baa07202549"
  }
])


workboxSW.router.registerRoute(new RegExp('/notification/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/notification/.*'), workboxSW.strategies.networkFirst({}), 'GET')

