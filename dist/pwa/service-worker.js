if(!self.define){let n,i={};const e=(e,s)=>(e=new URL(e+".js",s).href,i[e]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=i,document.head.appendChild(n)}else n=e,importScripts(e),i()})).then((()=>{let n=i[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(s,l)=>{const r=n||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=n=>e(n,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((n=>f[n]||c(n)))).then((n=>(l(...n),o)))}}define(["./workbox-b81e226a"],(function(n){"use strict";n.setCacheNameDetails({prefix:"alpha-app"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/420.7d7724b6.css",revision:null},{url:"css/688.57bd9745.css",revision:null},{url:"css/817.5c515759.css",revision:null},{url:"css/app.021b0297.css",revision:null},{url:"css/vendor.6bb10856.css",revision:null},{url:"favicon.ico",revision:"bdec6663ef1af102882304f034e60017"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0383092b.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"353df335163588a5c3bb2e8c15967217"},{url:"icons/apple-icon-152x152.png",revision:"207814f98b220e6a5202b0ef67d98922"},{url:"icons/apple-icon-167x167.png",revision:"819cbf20853b9c3a8b5b24963aee9fb4"},{url:"icons/apple-icon-180x180.png",revision:"bc914028c45770015be2bdba4ebc9dd3"},{url:"icons/apple-launch-1125x2436.png",revision:"b0e037165ae68740bc1a7e58bb1445e7"},{url:"icons/apple-launch-1170x2532.png",revision:"08d547a9809295b051d922e0d82bd8f6"},{url:"icons/apple-launch-1242x2208.png",revision:"4a4dbe5ce6a2822067faf7fa00f91a5f"},{url:"icons/apple-launch-1242x2688.png",revision:"7bc1ab03a79cacd5bfb24892e499fd79"},{url:"icons/apple-launch-1284x2778.png",revision:"34395ac8b22e71b7b9b0b0e6a5d15070"},{url:"icons/apple-launch-1536x2048.png",revision:"adceb9bb1b0e9eb2f32853ddeb237ff0"},{url:"icons/apple-launch-1620x2160.png",revision:"d04c863468d748432f19a499563b030b"},{url:"icons/apple-launch-1668x2224.png",revision:"7f6efc5b1435d7aba21354ee939f6caa"},{url:"icons/apple-launch-1668x2388.png",revision:"bfa809c5e4452e711c5a2a3f342e0e7d"},{url:"icons/apple-launch-2048x2732.png",revision:"8a60728416e1c9d1717c9174f06a8775"},{url:"icons/apple-launch-750x1334.png",revision:"67272f9557c1c7b545f947f516ff9277"},{url:"icons/apple-launch-828x1792.png",revision:"e95a5d526df407e8615f1c59f0647771"},{url:"icons/favicon-128x128.png",revision:"571b8688cf2b281dc7ecd0868188cafc"},{url:"icons/favicon-16x16.png",revision:"4f606057dbba46ce0ffb007eef1e2447"},{url:"icons/favicon-32x32.png",revision:"1b4f877f24df912f68a06864780a8f80"},{url:"icons/favicon-96x96.png",revision:"4169f5039990022fe5321401dbd98cab"},{url:"icons/icon-128x128.png",revision:"571b8688cf2b281dc7ecd0868188cafc"},{url:"icons/icon-192x192.png",revision:"fba942edb5adeb448f4fe93b13230b18"},{url:"icons/icon-256x256.png",revision:"f6543704c0a0667628fcdc8a219a4fa7"},{url:"icons/icon-384x384.png",revision:"262ed09f77648a3eaa83d321b0ebbdd3"},{url:"icons/icon-512x512.png",revision:"8f698ff6d71cd444fbc20f1a6e387df3"},{url:"icons/ms-icon-144x144.png",revision:"47bd8fa13872e487f5f9fbf4603977f5"},{url:"icons/safari-pinned-tab.svg",revision:"1d0029d8320b5ab70e1fd7b035abddb6"},{url:"img/alpha.png",revision:"4449685d41e5d674960aa6280ea136b5"},{url:"img/user icon.png",revision:"29479ba0435741580ca9f4a467be6207"},{url:"index.html",revision:"b1b40741f52bb8b666155c95a7a0f417"},{url:"js/166.32822131.js",revision:null},{url:"js/200.6a9ed70b.js",revision:null},{url:"js/216.f91327a4.js",revision:null},{url:"js/218.871e5ca3.js",revision:null},{url:"js/271.f6ea549d.js",revision:null},{url:"js/278.ee4ae903.js",revision:null},{url:"js/353.e93fb4f2.js",revision:null},{url:"js/420.bce46edf.js",revision:null},{url:"js/540.712218c7.js",revision:null},{url:"js/607.beef975f.js",revision:null},{url:"js/65.9fae620e.js",revision:null},{url:"js/67.5a9ec0a0.js",revision:null},{url:"js/688.3003f078.js",revision:null},{url:"js/817.d27ccf89.js",revision:null},{url:"js/853.8a3b2f8a.js",revision:null},{url:"js/907.b2ab09b2.js",revision:null},{url:"js/963.5515f1b8.js",revision:null},{url:"js/97.d5de8374.js",revision:null},{url:"js/992.45498b42.js",revision:null},{url:"js/app.10b9afe4.js",revision:null},{url:"js/vendor.537f4b16.js",revision:null},{url:"manifest.json",revision:"239176c15097a6bdb918e04c2ebf4dad"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
