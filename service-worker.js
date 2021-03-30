/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "012049c01e8ebb0576c03108be04d3cc"
  },
  {
    "url": "assets/css/0.styles.52d01101.css",
    "revision": "e2d7e04c2a83a0ea00b62f1aca632113"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.6a3393e0.svg",
    "revision": "6a3393e02be9f4ab0c1148d15d279486"
  },
  {
    "url": "assets/js/1.4cb22b82.js",
    "revision": "40809132461baa1e5535fa1577d28479"
  },
  {
    "url": "assets/js/10.c0b39dec.js",
    "revision": "14f8077f733d7c0433d8c0f821ce65f8"
  },
  {
    "url": "assets/js/11.4926dd29.js",
    "revision": "9b73603561ef2163fafd7f94e5712484"
  },
  {
    "url": "assets/js/12.28553c95.js",
    "revision": "b4056c76641eeaa66b5f87a507a9d71f"
  },
  {
    "url": "assets/js/13.9379c199.js",
    "revision": "b5711a23aae05ce706569fb513819b74"
  },
  {
    "url": "assets/js/14.3d7a18b3.js",
    "revision": "54e3205301e8686dbae4ebdeb79ff6bc"
  },
  {
    "url": "assets/js/15.6dcbbaf6.js",
    "revision": "acaaeb1c0717493ee00a34587c30b0f6"
  },
  {
    "url": "assets/js/16.b37f3224.js",
    "revision": "e77a22ad298b8d45bdacce8dc6132616"
  },
  {
    "url": "assets/js/4.4ace7366.js",
    "revision": "1700ee099f8d6863cc05e6cae2389beb"
  },
  {
    "url": "assets/js/5.e9bae1cd.js",
    "revision": "ca75c3644aebf31ca690175d47259f13"
  },
  {
    "url": "assets/js/6.79a0577f.js",
    "revision": "d671b852110cce3c01e7fbe5f9e99138"
  },
  {
    "url": "assets/js/7.47a99624.js",
    "revision": "e1aa98385ac0e6e12ba986c8f9763dfc"
  },
  {
    "url": "assets/js/8.86f03d78.js",
    "revision": "979144cc745458c5334933f2459a8cde"
  },
  {
    "url": "assets/js/9.82d6cf08.js",
    "revision": "dc2f2a08e4ea4cffc65bfb4aafe8df42"
  },
  {
    "url": "assets/js/app.5d7ae4d4.js",
    "revision": "f23bfe42692b42cf031d1d1503787c65"
  },
  {
    "url": "assets/js/vendors~flowchart.351ac7a2.js",
    "revision": "78bbe74edcc4abb8fa9dfbc036a561d4"
  },
  {
    "url": "categories/ALL/index.html",
    "revision": "5df1c2795f921f2733d7b2f546c8a874"
  },
  {
    "url": "categories/index.html",
    "revision": "5739661587aa85407c44d69d5e33baeb"
  },
  {
    "url": "girl.jpg",
    "revision": "3f3d4f317bdb07d86b412708675a3b88"
  },
  {
    "url": "head.png",
    "revision": "75f53e374d90c17882a356c112cf464c"
  },
  {
    "url": "head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "16a1620d543ac8add8373d50c25883a4"
  },
  {
    "url": "logo.jpg",
    "revision": "447cf4f9de136db1d587cb107277d443"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "pg5.png",
    "revision": "3ff5db52b78fca1e5b6d832bf705aa73"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/index.html",
    "revision": "8b90f54d4478c0a3180ac8572c6bac48"
  },
  {
    "url": "tags/ALL/index.html",
    "revision": "6b0e7ea8123d372b025b7fea9d7af3de"
  },
  {
    "url": "timeline/index.html",
    "revision": "80f01e7bc2e7dd3097071216c06e746e"
  },
  {
    "url": "timeLine/index.html",
    "revision": "80f01e7bc2e7dd3097071216c06e746e"
  },
  {
    "url": "zh/diary/index.html",
    "revision": "f11fa0b0770f7621e44c48b44e704e30"
  },
  {
    "url": "zh/enjoy/index.html",
    "revision": "09f5cdde004132d279d22cd8541cbb57"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "ae5fe764447003ff266fb40253fcc50e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
