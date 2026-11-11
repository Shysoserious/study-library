/* ============================================================================
 * 理科学习库 · Service Worker（PWA 离线缓存）
 * 策略：网络优先（network-first）——在线时永远拉最新内容，离线时回退到缓存。
 * 每次改完内容并发布后，把 CACHE 版本号 +1（如 v2 -> v3）即可强制刷新。
 * ==========================================================================*/
var CACHE = 'study-lib-v2';
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

  // 网络优先：先尝试拿最新内容；只有离线（fetch 失败）才回退到缓存。
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.status === 200 && res.type === 'basic') {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (cached) {
        return cached || caches.match('./index.html');
      });
    })
  );
});
