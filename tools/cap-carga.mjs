// Salida de la pantalla de carga paso a paso (usa ?lento, que deja la salida en pausa): node tools/cap-carga.mjs [ancho alto]
import puppeteer from 'puppeteer-core';
const W = +(process.argv[2] ?? 1440), H = +(process.argv[3] ?? 860);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', protocolTimeout: 30000, args: ['--use-angle=d3d11','--enable-gpu','--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: W, height: H, isMobile: W < 900, hasTouch: W < 900 });
console.log('goto'); await p.goto('http://localhost:4317/?lento', { waitUntil: 'domcontentloaded', timeout: 60000 });
for (let k = 0; k < 40; k++) { const ok = await p.evaluate(() => !!window.__salida); if (ok) { console.log('hook', k); break; } await new Promise(r => setTimeout(r, 500)); }
for (const t of [0, 0.5, 0.8, 1.05, 1.3, 1.6]) { await p.evaluate(t => { window.__salida.time(t); }, t); await new Promise(r => setTimeout(r, 300)); await p.screenshot({ path: `s_${t}_${W}.jpg`, quality: 60 }); console.log('shot', t); }
await b.close();
