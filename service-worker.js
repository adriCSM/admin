if (!self.define) {
  let s,
    l = {};
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    l[i] ||
      new Promise((l) => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = i), (s.onload = l), document.head.appendChild(s);
        } else (s = i), importScripts(i), l();
      }).then(() => {
        let s = l[i];
        if (!s) throw new Error(`Module ${i} didn’t register its module`);
        return s;
      })
  );
  self.define = (n, r) => {
    const e = s || ('document' in self ? document.currentScript.src : '') || location.href;
    if (l[e]) return;
    let u = {};
    const o = (s) => i(s, e),
      c = { module: { uri: e }, exports: u, require: o };
    l[e] = Promise.all(n.map((s) => c[s] || o(s))).then((s) => (r(...s), u));
  };
}
define(['./workbox-5e9864af'], function (s) {
  'use strict';
  s.setCacheNameDetails({ prefix: 'client' }),
    self.addEventListener('message', (s) => {
      s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
    }),
    s.precacheAndRoute(
      [
        { url: '/LOGO.png', revision: 'a844d8ef572131c005868746ccdfacec' },
        { url: '/css/141.6c13224f.css', revision: null },
        { url: '/css/166.409f75f3.css', revision: null },
        { url: '/css/31.8589f967.css', revision: null },
        { url: '/css/319.8589f967.css', revision: null },
        { url: '/css/386.5e7df7fb.css', revision: null },
        { url: '/css/463.105a1950.css', revision: null },
        { url: '/css/468.2e07f748.css', revision: null },
        { url: '/css/479.9a68f66c.css', revision: null },
        { url: '/css/527.7917fd75.css', revision: null },
        { url: '/css/552.6c546ddb.css', revision: null },
        { url: '/css/833.520e0ffc.css', revision: null },
        { url: '/css/889.520e0ffc.css', revision: null },
        { url: '/css/89.a2dd2d90.css', revision: null },
        { url: '/css/912.520e0ffc.css', revision: null },
        { url: '/css/979.9a68f66c.css', revision: null },
        { url: '/css/991.520e0ffc.css', revision: null },
        { url: '/css/app.ea9308a7.css', revision: null },
        { url: '/css/chunk-vendors.40288c57.css', revision: null },
        { url: '/fonts/materialdesignicons-webfont.21f691f0.ttf', revision: null },
        { url: '/fonts/materialdesignicons-webfont.54b0f60d.woff2', revision: null },
        { url: '/fonts/materialdesignicons-webfont.5d875350.eot', revision: null },
        { url: '/fonts/materialdesignicons-webfont.d671cbf6.woff', revision: null },
        { url: '/img/109715820.1a3255df.jpg', revision: null },
        { url: '/img/13863747411556280997.ebbab834.svg', revision: null },
        { url: '/img/S1.dee37ae0.png', revision: null },
        { url: '/img/am_new.8b802155.png', revision: null },
        { url: '/img/bg-donasi.602238e4.jpg', revision: null },
        { url: '/img/bg.a274879f.jpeg', revision: null },
        { url: '/img/bg_hero.23c56610.jpg', revision: null },
        { url: '/img/errr.59d4420b.gif', revision: null },
        { url: '/img/iconmonstr-line-three-horizontal-lined.ff5b519f.svg', revision: null },
        { url: '/img/ilustrasi1.e48f3b52.svg', revision: null },
        { url: '/img/img_home.765dd103.png', revision: null },
        { url: '/img/img_signup.d1bfa0c6.png', revision: null },
        { url: '/img/logo.63028820.svg', revision: null },
        { url: '/img/logo_am.e4066a1a.png', revision: null },
        { url: '/img/logo_am_white.cb32f99e.png', revision: null },
        { url: '/img/sun.ee4d5166.svg', revision: null },
        { url: '/img/wlppr.67bb6174.jpg', revision: null },
        { url: '/index.html', revision: '2ee34c7c23d0b6215290b57dacc3cfbe' },
        { url: '/js/130.8c2194ec.js', revision: null },
        { url: '/js/141.1e8397c2.js', revision: null },
        { url: '/js/166.0035d51f.js', revision: null },
        { url: '/js/240.7b463139.js', revision: null },
        { url: '/js/256.5d4ae278.js', revision: null },
        { url: '/js/261.d7c7f816.js', revision: null },
        { url: '/js/31.15772493.js', revision: null },
        { url: '/js/319.b41fbc89.js', revision: null },
        { url: '/js/351.7ec4cdb0.js', revision: null },
        { url: '/js/386.5b26fd96.js', revision: null },
        { url: '/js/463.cb7c58a5.js', revision: null },
        { url: '/js/468.478bd5c7.js', revision: null },
        { url: '/js/479.2053cfd4.js', revision: null },
        { url: '/js/527.05b794f2.js', revision: null },
        { url: '/js/552.9195d081.js', revision: null },
        { url: '/js/628.e027c470.js', revision: null },
        { url: '/js/673.80705af9.js', revision: null },
        { url: '/js/707.a7564472.js', revision: null },
        { url: '/js/730.35fcc110.js', revision: null },
        { url: '/js/759.c2d2b797.js', revision: null },
        { url: '/js/805.f213720e.js', revision: null },
        { url: '/js/813.d4864665.js', revision: null },
        { url: '/js/833.dc9c7b3f.js', revision: null },
        { url: '/js/889.9f064ff9.js', revision: null },
        { url: '/js/89.11da24ea.js', revision: null },
        { url: '/js/912.b1119284.js', revision: null },
        { url: '/js/918.1ed4dee1.js', revision: null },
        { url: '/js/943.ffdd0022.js', revision: null },
        { url: '/js/979.776f0514.js', revision: null },
        { url: '/js/982.4cd7df5e.js', revision: null },
        { url: '/js/983.527b1200.js', revision: null },
        { url: '/js/991.95202cf8.js', revision: null },
        { url: '/js/app.19e4ab41.js', revision: null },
        { url: '/js/chunk-vendors.353fadd3.js', revision: null },
        { url: '/js/webfontloader.ebd1df5a.js', revision: null },
        { url: '/manifest.json', revision: 'a1f81f1be3ad374fa36579cb1412e490' },
        { url: '/robots.txt', revision: '3e0c7dc51672c818ea2c4ba2ac5ccb3a' },
      ],
      {},
    );
});
//# sourceMappingURL=service-worker.js.map
