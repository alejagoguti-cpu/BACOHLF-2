// Prueba de la calculadora ROI: node tools/cap-roi.mjs <url> [ancho alto]
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
const url = process.argv[2]; const W = +(process.argv[3] ?? 1440), H = +(process.argv[4] ?? 860);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: W, height: H, isMobile: W < 900, hasTouch: W < 900 });
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
p.on('console', (m) => m.type() === 'error' && !m.text().includes('404') && console.log('CONSOLE', m.text()));
await p.goto(url, { waitUntil: 'networkidle0', timeout: 120000 }); await new Promise((r) => setTimeout(r, 4000));
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
const ir = async (n, o = 0.12) => { await p.evaluate((n, o) => { const s = document.querySelector(`[data-escena="${n}"]`); window.scrollTo(0, s.offsetTop + s.offsetHeight * o); }, n, o); await espera(3800); };
const leer = () => p.evaluate(() => ['cP', 'cS', 'cI', 'oNeto', 'oBruto', 'oRoi', 'oPct', 'oPay', 'oPayE'].map((i) => i + '=' + document.getElementById(i)?.textContent).join(' | '));
const setRange = (id, v) => p.evaluate((id, v) => { const r = document.getElementById(id); r.value = v; r.dispatchEvent(new Event('input', { bubbles: true })); }, id, v);
fs.mkdirSync('tools/cap', { recursive: true });
const cap = (n) => p.screenshot({ path: `tools/cap/roi_${W}_${n}.jpg`, quality: 72 });

await ir('roi'); console.log('inicial  ', await leer()); await cap('1');
await setRange('rP', 20000); await espera(1200); console.log('P=20000  ', await leer());
await p.click('.chips-esc [data-s="6"]'); await espera(1200); console.log('6%       ', await leer());
await p.click('#rModo [data-m="int"]'); await espera(1200); console.log('integrado', await leer()); await cap('2');
await setRange('rP', 3000); await p.click('.chips-esc [data-s="6"]'); await espera(1200); console.log('P=3000 6%', await leer());
await setRange('rP', 10000); await p.click('.chips-esc [data-s="10"]'); await p.click('#rModo [data-m="solo"]'); await espera(1000);
await ir('roi2'); await cap('3');
console.log('tabla', await p.evaluate(() => [...document.querySelectorAll('#tablaRoi tbody tr')].map((t) => t.innerText.replace(/\s+/g, ' ')).join(' || ')));
await ir('roi3'); await espera(2500); await cap('4'); console.log('amort', await p.evaluate(() => ['aMes', 'aInv', 'aAh', 'aBal'].map((i) => document.getElementById(i).textContent).join(' | ')));
await espera(5000); await cap('5'); console.log('fin  ', await p.evaluate(() => ['aMes', 'aInv', 'aAh', 'aBal'].map((i) => document.getElementById(i).textContent).join(' | ')));
await b.close();
