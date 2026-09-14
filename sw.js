/* ============================================================================
 * 理科学习库 · Service Worker（PWA 离线缓存）
 * 策略：stale-while-revalidate —— 先返回缓存，同时后台更新。
 * 修改 CACHE 版本号即可强制刷新缓存（新增笔记后建议 +1）。
 * ==========================================================================*/
var CACHE = 'study-lib-v1';
var CORE = [
  './index.html',
  './glossary.html',
  './data.js',
  './search-index.js',
  './assets/style.css',
  './assets/app.js',
  './icon.svg',
  './manifest.webmanifest'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(CORE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(function (cached) {
      var fetched = fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return cached; });
      return cached || fetched;
    })
  );
});
