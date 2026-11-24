// Prueba del diagrama 01 interactivo: node tools/cap-diag.mjs <url> [ancho alto]
import puppeteer from 'puppeteer-core';
const url = process.argv[2]; const W = +(process.argv[3] ?? 1440), H = +(process.argv[4] ?? 860);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: W, height: H, isMobile: W < 900, hasTouch: W < 900 });
await p.goto(url, { waitUntil: 'networkidle0', timeout: 90000 });
await new Promise(r => setTimeout(r, 5000));
await p.evaluate(() => { const f = document.querySelector('.diag'); window.scrollTo(0, f.getBoundingClientRect().top + scrollY - 60); });
await new Promise(r => setTimeout(r, 4500));
const leer = () => p.evaluate(() => [...document.querySelectorAll('.diag .cnt')].map(e => e.textContent).join(' | '));
const f = await p.$('.diag');
console.log('inicio', await leer()); await f.screenshot({ path: `diag_0_${W}.png` });
const dbl = async (sel) => { const n = await p.$(sel); const bb = await n.boundingBox(); const x = bb.x + bb.width / 2, y = bb.y + bb.height / 3;
  await p.mouse.click(x, y); await new Promise(r => setTimeout(r, 120)); await p.mouse.click(x, y); await new Promise(r => setTimeout(r, 1400)); };
await dbl('.nodos-a .nd-pos[data-i="2"] circle'); console.log('sin Hidro', await leer()); await f.screenshot({ path: `diag_1_${W}.png` });
await dbl('.nodos-b .nd-pos[data-i="5"] circle'); console.log('sin Mec', await leer()); await f.screenshot({ path: `diag_2_${W}.png` });
const n = await p.$('.nodos-a .nd-pos[data-i="2"] circle'); await n.click(); await new Promise(r => setTimeout(r, 1400));
console.log('vuelve Hidro', await leer()); await f.screenshot({ path: `diag_3_${W}.png` });
await b.close();
