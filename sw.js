const V='mars-brew-v3-4';
const FILES=['./','index.html','styles.css','app.js','recipes.js','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==location.origin)return;
e.respondWith(caches.match(q,{ignoreSearch:true}).then(hit=>{const net=fetch(q).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(V).then(c=>c.put(q,cp));}return r;}).catch(()=>hit);return hit||net;}));});
