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
    "revision": "4054a2b2be54a6507b02d7ccf526f5c8"
  },
  {
    "url": "assets/css/0.styles.34a47730.css",
    "revision": "34d40aaa9f48dbe923641b80871eda00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0df1e44a.js",
    "revision": "42c6256e61b4c3cbfd9c371921367347"
  },
  {
    "url": "assets/js/11.0220e92b.js",
    "revision": "71e87280a12b3e82a69c7d4b7503516b"
  },
  {
    "url": "assets/js/12.7d70f912.js",
    "revision": "5c6086ce971c3c23c46dec1c2891e9af"
  },
  {
    "url": "assets/js/13.3e2e9ccc.js",
    "revision": "fad987e4d2c6926c38a9e9cd1ae78956"
  },
  {
    "url": "assets/js/14.ddb7e9a6.js",
    "revision": "8d6ce24f171051d71639881ff60fd75b"
  },
  {
    "url": "assets/js/15.0f33ceb0.js",
    "revision": "c6427a7b85e7ff578045136c60c26833"
  },
  {
    "url": "assets/js/16.f1d826a0.js",
    "revision": "54b2c283b2b2fa950a00d639cb263b4a"
  },
  {
    "url": "assets/js/17.cc39bf54.js",
    "revision": "46aa499e631182135dd02ea7f86d381e"
  },
  {
    "url": "assets/js/18.6a89f356.js",
    "revision": "d4c43eb669eccfcb9271e4e46a8d41a2"
  },
  {
    "url": "assets/js/19.b563868d.js",
    "revision": "00764e57fcdfab1245f18f2cd894d2ec"
  },
  {
    "url": "assets/js/20.d32e019d.js",
    "revision": "79fff88f8ff92a22c32797e3d1fafe72"
  },
  {
    "url": "assets/js/21.96f4f13f.js",
    "revision": "9048f38393fbd7bc774712b1d925d391"
  },
  {
    "url": "assets/js/22.9109e167.js",
    "revision": "bba26ac7884c64a70327f2a30fe26c54"
  },
  {
    "url": "assets/js/23.a48a27a0.js",
    "revision": "2c910d1bcfb653437755ce6711f93be0"
  },
  {
    "url": "assets/js/24.448d2d8e.js",
    "revision": "8cb36f00236edaaea0afa7e682c9b43d"
  },
  {
    "url": "assets/js/25.8835486a.js",
    "revision": "cd627b2361ba8646ab3f0989e6a50906"
  },
  {
    "url": "assets/js/26.38604c96.js",
    "revision": "d63a187875251cc9943f266b94b26dff"
  },
  {
    "url": "assets/js/27.e2ff3a71.js",
    "revision": "2aa49062d3d475806728d4deb645410b"
  },
  {
    "url": "assets/js/28.fd06ca74.js",
    "revision": "a33cdc099ab40c2b8a45635c96dd1238"
  },
  {
    "url": "assets/js/29.87d7926e.js",
    "revision": "db60dadcb2ad3441572d69dc69f13cf4"
  },
  {
    "url": "assets/js/30.5938850b.js",
    "revision": "ff41ba70211b5840a5f6270efe15a131"
  },
  {
    "url": "assets/js/31.c8c8ab47.js",
    "revision": "fcf44d9bac937457f4974b9dc6c7b3a0"
  },
  {
    "url": "assets/js/32.abf46c9d.js",
    "revision": "1dbfcf05e48baaa575bf226a948d59b0"
  },
  {
    "url": "assets/js/33.a2b069c5.js",
    "revision": "9a7fd65d0f60471de3b881cb8f1ff9fb"
  },
  {
    "url": "assets/js/34.220e5e41.js",
    "revision": "17c17117266b15a8514258aea4b03f4f"
  },
  {
    "url": "assets/js/35.323dfd25.js",
    "revision": "b142a7e829124954447412e15be48a17"
  },
  {
    "url": "assets/js/4.885bf8b1.js",
    "revision": "bb62972cdaa977785e85a5f0fcd87971"
  },
  {
    "url": "assets/js/5.125e51f4.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/6.1ffb608f.js",
    "revision": "ea9e79bda5684504822949f1aa98c27a"
  },
  {
    "url": "assets/js/7.9d3f0238.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.527995f2.js",
    "revision": "0f2eecce0e42339cd11b699b4a74f288"
  },
  {
    "url": "assets/js/9.962be4a9.js",
    "revision": "26ba2bf0f63b57dc796497f8c9536d52"
  },
  {
    "url": "assets/js/app.b1faa9f1.js",
    "revision": "e241234cefd513434bd3fdff252d89bd"
  },
  {
    "url": "assets/js/vendors~flowchart.9febe83d.js",
    "revision": "f9158ce3d1979db8d5760695c48b8602"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "61496ec510841c6f927d8983fd391f01"
  },
  {
    "url": "javaee/index.html",
    "revision": "2dde5812d8c20daca50ef482c19af6b3"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "d0c2a16af34148dbfdb8d41fb37d25d0"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "e9384db9e25f8001588f86c76c2af155"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "ff76b1eb1281e168a032b3405242751b"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "c0ca75e480bf688f58a10b45c61bd698"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "083b8c2c0897f02f3ef8c33638046311"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "329ea8c457d06c69cbf72a43a1e2dd75"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "b2ee72234436c03825c976e6df89e76c"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "a79e5d898c05714134a452562748c68b"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "ed7cb2182f37bf2cbbe77cae498dd40c"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "246e3311608c79bb9b5ad986206135df"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "1c1fc31118a70112aa18ef40201547ef"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "d05532e208ab9fe15dfbe29deb3c413c"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "0492990a0d57fe49ce73a013f4bf5c56"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "930a1c48959618a2c9362d7d057194c9"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "7078cbeb06a3ba64454889a56fec986e"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "fdcd8472ac4361a9e61dceea81ed1e98"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "13f067596d8c4e537a702a6ec6f8744b"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "b966f5492c53babe7739e0992745683a"
  },
  {
    "url": "javatool/index.html",
    "revision": "756445ff67444c2e83abdc152eaae9cb"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "f5ec4d8d63abd26a73ab7e0482cc215f"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "5ec3033cfb85baa3929668fbf85a3c1e"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "6266f9d479037c5d17233be66f5d1a2e"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "1cb73a59732b619eac15ee1547a39f15"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "1996e2d98a9db241a30a9fa281fa7aa0"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "37d7f3d974848b9d66c912eb37f6fb5c"
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
