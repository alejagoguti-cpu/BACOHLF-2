// Prueba de las redes vivas: captura, apaga nodos y vuelve a capturar
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
const url = process.argv[2]; const W = +(process.argv[3] ?? 1440), H = +(process.argv[4] ?? 860);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: W, height: H });
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
await p.goto(url, { waitUntil: 'networkidle0', timeout: 120000 }); await new Promise((r) => setTimeout(r, 4000));
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
const ir = async (n) => { await p.evaluate((n) => { const s = document.querySelector(`[data-escena="${n}"]`); window.scrollTo(0, s.offsetTop + s.offsetHeight * 0.1); }, n); await espera(3500); };
const tocar = async (sel, label) => {
  const r = await p.evaluate((sel, label) => { const g = [...document.querySelectorAll(sel + ' .r-nodo')].find((g) => g.getAttribute('aria-label') === label); const b = g.getBoundingClientRect(); return [b.x + b.width / 2, b.y + b.height / 2]; }, sel, label);
  await p.mouse.click(r[0], r[1]); await espera(2200);
};
const dato = (sel) => p.evaluate((sel) => document.querySelector(sel + ' [data-red-n]').textContent + ' · ' + document.querySelector(sel + ' [data-red-arq]').textContent, sel);
fs.mkdirSync('tools/cap', { recursive: true });
await ir('problema'); console.log('reto', await dato('[data-red="reto"]')); await p.screenshot({ path: `tools/cap/red_${W}_1.jpg`, quality: 70 });
await p.click('[data-red="reto"] [data-m="estrella"]'); await espera(2500); console.log('reto estrella', await dato('[data-red="reto"]')); await p.screenshot({ path: `tools/cap/red_${W}_2.jpg`, quality: 70 });
await tocar('[data-red="reto"]', 'Mecánica'); console.log('sin mec', await dato('[data-red="reto"]')); await p.screenshot({ path: `tools/cap/red_${W}_3.jpg`, quality: 70 });
await ir('actores'); console.log('actores', await dato('[data-red="actores"]')); await p.screenshot({ path: `tools/cap/red_${W}_4.jpg`, quality: 70 });
await tocar('[data-red="actores"]', 'BACO STUDIO'); console.log('sin baco', await dato('[data-red="actores"]')); await p.screenshot({ path: `tools/cap/red_${W}_5.jpg`, quality: 70 });
await b.close();
