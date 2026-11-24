// Pantalla de carga con el logo BACO STUDIO.
// Entrada (CSS, arranca antes que el JS): retícula, línea de escaneo que revela el logo, esquinas del marco, brillo dorado.
// Progreso: contador real 00–100. Salida: el logo vuela a su lugar en la cabecera y la pantalla se abre en dos.
import { gsap } from 'gsap';

const T0 = performance.now();
const MIN_MS = 2700; // la entrada completa (escaneo + un brillo) siempre se alcanza a ver
const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pct = { v: 0 };
const PRUEBA = new URLSearchParams(location.search).has('lento'); // pruebas: la salida queda en pausa en window.__salida

document.body.classList.add('cargando');
const raiz = document.getElementById('cargando');
const img = raiz?.querySelector<HTMLImageElement>('.c-logo img');
const brillo = raiz?.querySelector<HTMLElement>('.c-brillo');
if (img && brillo) { const m = `url("${img.src}")`; brillo.style.maskImage = m; brillo.style.webkitMaskImage = m; }

const pintar = () => {
  const n = raiz?.querySelector('.c-pct b'); if (n) n.textContent = String(Math.round(pct.v)).padStart(2, '0');
  const bar = raiz?.querySelector<HTMLElement>('.c-barra b'); if (bar) bar.style.transform = `scaleX(${pct.v / 100})`;
};

/** Avance real de la carga (0–100). */
export function progresoCarga(p: number) {
  gsap.to(pct, { v: Math.max(pct.v, Math.min(100, p)), duration: 0.6, ease: 'power2.out', overwrite: 'auto', onUpdate: pintar });
}

/** Cierra la pantalla de carga: el logo vuela a la cabecera y la cortina se abre. */
export function terminarCarga() {
  if (!raiz) return;
  const espera = Math.max(0, MIN_MS - (performance.now() - T0));
  gsap.to(pct, { v: 100, duration: 0.5, ease: 'power2.out', overwrite: 'auto', onUpdate: pintar });
  gsap.delayedCall(espera / 1000 + 0.5, salir);
}

function salir() {
  if (!raiz) return;
  const fin = () => { document.body.classList.remove('cargando'); raiz.classList.add('fin'); gsap.set(raiz, { display: 'none' }); };
  if (reducido) { gsap.to(raiz, { autoAlpha: 0, duration: 0.6, onComplete: fin }); return; }
  const logo = raiz.querySelector<HTMLElement>('.c-logo')!;
  const destino = document.querySelector<HTMLElement>('.marca img');
  const tl = gsap.timeline({ onComplete: fin, paused: PRUEBA });
  if (PRUEBA) (window as unknown as { __salida: gsap.core.Timeline }).__salida = tl;
  tl.to(raiz.querySelectorAll('.c-info, .c-barra, .c-esq, .c-linea'), { autoAlpha: 0, y: 10, duration: 0.4, stagger: 0.04, ease: 'power2.in' }, 0);
  tl.to(raiz.querySelector('.c-grid'), { autoAlpha: 0, duration: 0.8 }, 0);
  if (destino && destino.getBoundingClientRect().width > 0) {
    const a = logo.getBoundingClientRect(); const b = destino.getBoundingClientRect();
    tl.to(logo, {
      x: b.left + b.width / 2 - (a.left + a.width / 2), y: b.top + b.height / 2 - (a.top + a.height / 2),
      scale: b.height / a.height, duration: 1.15, ease: 'power3.inOut',
    }, 0.25);
    tl.set('.marca img', { opacity: 1 }, 1.4);
    tl.to(logo, { autoAlpha: 0, duration: 0.15 }, 1.4);
  } else tl.to(logo, { autoAlpha: 0, scale: 0.9, duration: 0.6 }, 0.25);
  tl.to(raiz.querySelector('.c-panel.arriba'), { yPercent: -101, duration: 1.2, ease: 'power4.inOut' }, 0.45);
  tl.to(raiz.querySelector('.c-panel.abajo'), { yPercent: 101, duration: 1.2, ease: 'power4.inOut' }, 0.45);
  // la línea dorada de la juntura se ilumina justo cuando se abre
  tl.fromTo(raiz.querySelector('.c-junta'), { scaleX: 0, autoAlpha: 1 }, { scaleX: 1, duration: 0.45, ease: 'power3.out' }, 0.2);
  tl.to(raiz.querySelector('.c-junta'), { autoAlpha: 0, duration: 0.4 }, 0.75);
}
