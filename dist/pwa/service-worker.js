if(!self.define){let n,i={};const s=(s,e)=>(s=new URL(s+".js",e).href,i[s]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=s,n.onload=i,document.head.appendChild(n)}else n=s,importScripts(s),i()})).then((()=>{let n=i[s];if(!n)throw new Error(`Module ${s} didn’t register its module`);return n})));self.define=(e,l)=>{const r=n||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=n=>s(n,r),u={module:{uri:r},exports:o,require:c};i[r]=Promise.all(e.map((n=>u[n]||c(n)))).then((n=>(l(...n),o)))}}define(["./workbox-b81e226a"],(function(n){"use strict";n.setCacheNameDetails({prefix:"alpha-app"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/12.57bd9745.css",revision:null},{url:"css/346.5c515759.css",revision:null},{url:"css/420.7d7724b6.css",revision:null},{url:"css/app.021b0297.css",revision:null},{url:"css/vendor.6bb10856.css",revision:null},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0383092b.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"img/alpha.png",revision:"4449685d41e5d674960aa6280ea136b5"},{url:"img/user icon.png",revision:"29479ba0435741580ca9f4a467be6207"},{url:"index.html",revision:"92d806731ca2b5e8b64c6770ecd98e95"},{url:"js/12.ea01632c.js",revision:null},{url:"js/179.b5db0523.js",revision:null},{url:"js/216.14fdcd8d.js",revision:null},{url:"js/236.7681d9de.js",revision:null},{url:"js/278.58a2a77c.js",revision:null},{url:"js/346.e05c9a3d.js",revision:null},{url:"js/353.fc051137.js",revision:null},{url:"js/420.195e7f34.js",revision:null},{url:"js/430.7c9553e3.js",revision:null},{url:"js/495.bd5285bc.js",revision:null},{url:"js/540.e4c481c0.js",revision:null},{url:"js/65.2c480e6f.js",revision:null},{url:"js/853.b1a0e36f.js",revision:null},{url:"js/907.9fc6563f.js",revision:null},{url:"js/992.12e9d2d0.js",revision:null},{url:"js/995.ee396372.js",revision:null},{url:"js/app.5b6bd3b7.js",revision:null},{url:"js/vendor.0192be2b.js",revision:null},{url:"manifest.json",revision:"ed991d13cac8676d465021214ebfd7ff"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
