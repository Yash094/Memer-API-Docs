if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/44-4979b1d11ea9066e2605.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/648-61d58b791bca1a35bdc4.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/cb1608f2-1ce3788535399a5c2350.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/framework-fb2dd7aba3784ca05084.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/main-d696b00248955380e9fa.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/pages/_app-fdabeb4645171c0b0a53.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/pages/_error-d36babdecdd567a38448.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/pages/docs-a318b6ca0b0b3fbbd32c.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/pages/index-1eeaf9b441f26b652f12.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/polyfills-eef578260fd80f8fff94.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/chunks/webpack-af8d060cb140570bcfb2.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/css/4205a9f448c48a71229c.css",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/css/6f07b7d2742c88b81744.css",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/lW3Piloo11uwNfasHZjGD/_buildManifest.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/_next/static/lW3Piloo11uwNfasHZjGD/_ssgManifest.js",revision:"lW3Piloo11uwNfasHZjGD"},{url:"/favicon.png",revision:"78dce83d58ea17840746d4641755cac1"},{url:"/icon-192x192.png",revision:"d8992e8c65f1029d3aa5c6e3c8ecfd4a"},{url:"/icon-256x256.png",revision:"3398296fae2df47d64cfd17cafce1737"},{url:"/icon-384x384.png",revision:"c2aaf5f3095bd0d0c1f511e9c1a851ae"},{url:"/icon-512x512.png",revision:"c36f6c8e34f9770ffc3f231ef104a7a1"},{url:"/manifest.json",revision:"71b27156a55803023fa98970803c9968"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));