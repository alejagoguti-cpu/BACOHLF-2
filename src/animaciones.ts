import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ico } from './iconos';
import { construirDiag, pulsosDiag } from './diag';
gsap.registerPlugin(ScrollTrigger);

const $ = <T extends HTMLElement = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector(s) as T;
const $$ = <T extends HTMLElement = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Parte el texto en palabras (.w) conservando <b> y <br>. */
function partir(el: HTMLElement) {
  if (el.dataset.partido) return;
  el.dataset.partido = '1';
  const rec = (n: Node) => {
    [...n.childNodes].forEach((c) => {
      if (c.nodeType === 3) {
        const frag = document.createDocumentFragment();
        (c.textContent ?? '').split(/(\s+)/).forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(' '));
          else { const s = document.createElement('span'); s.className = 'w'; s.textContent = p; frag.appendChild(s); }
        });
        c.replaceWith(frag);
      } else if (c.nodeType === 1 && (c as HTMLElement).tagName !== 'BR') rec(c);
    });
  };
  rec(el);
}

function contar(el: HTMLElement, dur = 1.6, delay = 0) {
  const fin = +el.dataset.n!; const suf = el.dataset.suf ?? ''; const o = { v: 0 };
  const fmt = (v: number) => el.dataset.fmt === 'm2' ? Math.round(v).toLocaleString('es-CO') + ' m²' : Math.round(v).toLocaleString('es-CO') + suf;
  gsap.fromTo(o, { v: 0 }, { v: fin, duration: dur, delay, ease: 'power2.out', onUpdate: () => (el.textContent = fmt(o.v)) });
}

/** Posiciones en elipse/espiral alrededor del centro para nubes de chips. */
function orbitas(n: number, rx: number, ry: number) {
  return Array.from({ length: n }, (_, i) => {
    const a = i * 2.399963 + 0.6; const r = 0.45 + 0.55 * ((i + 1) / n);
    return { x: Math.cos(a) * rx * r, y: Math.sin(a) * ry * r };
  });
}

function animarSeccion(sec: HTMLElement) {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  // borra lo que dejó la salida anterior (desplazamiento y desenfoque)
  gsap.set($$('[data-a]', sec).filter((e) => !['chips', 'pills'].includes(e.dataset.a!)), { clearProps: 'transform,filter' });
  let t = 0;
  $$('[data-a="up"]', sec).forEach((el, i) => tl.fromTo(el, { autoAlpha: 0, y: 36, filter: 'blur(8px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1 }, 0.1 + i * 0.12));
  $$('[data-a="words"]', sec).forEach((el) => {
    partir(el); gsap.set(el, { autoAlpha: 1 });
    tl.fromTo($$('.w', el), { autoAlpha: 0, yPercent: 70, rotateX: -70, filter: 'blur(14px)', transformPerspective: 600 },
      { autoAlpha: 1, yPercent: 0, rotateX: 0, filter: 'blur(0px)', duration: 1.1, stagger: 0.07 }, 0.05);
    t = Math.max(t, 0.05 + $$('.w', el).length * 0.07 + 0.6);
  });
  const strike = $('[data-a="strike"]', sec);
  if (strike) {
    tl.fromTo(strike, { autoAlpha: 0, x: -30, filter: 'blur(10px)' }, { autoAlpha: 1, x: 0, filter: 'blur(0px)', duration: 0.8 }, t);
    tl.fromTo(strike, { '--s': 0 }, { '--s': 1, duration: 0.6, ease: 'power2.inOut' }, t + 0.9);
    tl.to(strike, { opacity: 0.4, duration: 0.5 }, t + 1.4);
    const nueva = $('[data-a="deblur"]', sec);
    if (nueva) tl.fromTo(nueva, { autoAlpha: 0, x: 60, scale: 1.25, filter: 'blur(22px)' }, { autoAlpha: 1, x: 0, scale: 1, filter: 'blur(0px)', duration: 1.1 }, t + 1.5);
  }
  $$('[data-a="fly"]', sec).forEach((el, i) => tl.fromTo(el, { autoAlpha: 0, z: -500, y: 140, rotateX: 38, rotateY: i % 2 ? 14 : -14, filter: 'blur(14px)', transformPerspective: 1000 },
    { autoAlpha: 1, z: 0, y: 0, rotateX: 0, rotateY: 0, filter: 'blur(0px)', duration: 1.3 }, 0.35 + i * 0.14));
  $$('[data-a="flip"]', sec).forEach((el, i) => tl.fromTo(el, { autoAlpha: 0, rotateY: -95, x: -80, z: -300, transformPerspective: 1400, transformOrigin: 'left center' },
    { autoAlpha: 1, rotateY: 0, x: 0, z: 0, duration: 1.2, ease: 'power4.out' }, 0.4 + i * 0.22));
  $$('[data-a="tilt"]', sec).forEach((el) => tl.fromTo(el, { autoAlpha: 0, rotateX: 45, rotateY: -25, y: 160, z: -300, transformPerspective: 1600 },
    { autoAlpha: 1, rotateX: innerWidth < 900 ? 0 : 6, rotateY: innerWidth < 900 ? 0 : -7, y: 0, z: 0, duration: 1.6, ease: 'power3.out' }, 0.3));
  $$('[data-a="msg"]', sec).forEach((el, i) => tl.fromTo(el, { autoAlpha: 0, x: el.classList.contains('der') ? 70 : -70, scale: 0.85, filter: 'blur(8px)' },
    { autoAlpha: 1, x: 0, scale: 1, filter: 'blur(0px)', duration: 0.7, ease: 'back.out(1.6)' }, 1.4 + i * 0.75));
  // listas: cada hijo entra por separado
  $$('[data-a="stagger"]', sec).forEach((el, k) => {
    gsap.set(el, { autoAlpha: 1 });
    tl.fromTo([...el.children], { autoAlpha: 0, y: 26, x: -16, scale: 0.9, filter: 'blur(8px)' },
      { autoAlpha: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)', duration: 0.7, stagger: 0.07, ease: 'back.out(1.5)' }, 0.5 + k * 0.15);
  });
  $$('[data-a="pop"]', sec).forEach((el, i) => tl.fromTo(el, { autoAlpha: 0, scale: 0.6, y: 20, filter: 'blur(10px)' },
    { autoAlpha: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'back.out(1.8)' }, 0.55 + i * 0.12));
  // ── diagramas corporativos ──
  // flujo: la línea se traza y cada nodo se enciende al pasar
  $$<HTMLElement>('[data-a="flujo"]', sec).forEach((f) => {
    const li = $$('li', f); li.forEach((l) => l.classList.remove('on'));
    gsap.set(f, { autoAlpha: 1, '--p': 0 });
    tl.to(f, { '--p': 1, duration: 0.5 * li.length, ease: 'none' }, 0.6);
    li.forEach((l, i) => {
      tl.fromTo(l, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.6 + i * 0.5);
      tl.fromTo(l, { '--s': 0 }, { '--s': 1, duration: 0.5, ease: 'back.out(3)' }, 0.6 + i * 0.5);
      tl.call(() => l.classList.add('on'), [], 0.8 + i * 0.5);
    });
  });
  // diagrama antes/después: las conexiones se dibujan; el lado federado converge al centro
  $$('[data-a="diag"]', sec).forEach((d) => {
    gsap.set(d, { autoAlpha: 1 });
    const nds = $$('.nd', d); const lnA = $$('.ln.r', d); const lnB = $$('.ln.o', d);
    tl.fromTo($$('text.dt, .sep', d), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, stagger: 0.15 }, 0.3);
    tl.fromTo(nds, { autoAlpha: 0, scale: 0.4, transformOrigin: '50% 50%' }, { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(2)' }, 0.5);
    [...lnA, ...lnB].forEach((p) => { const L = (p as unknown as SVGPathElement).getTotalLength(); gsap.set(p, { strokeDasharray: L, strokeDashoffset: L }); });
    tl.to(lnA, { strokeDashoffset: 0, duration: 0.9, stagger: 0.06, ease: 'power2.inOut' }, 1.0);
    tl.to(lnB, { strokeDashoffset: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out' }, 1.9);
    tl.fromTo($$('figcaption span, .diag-hint', d), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.2 }, 2.5);
    tl.call(() => pulsosDiag(d), [], 2.8);
    // ya dibujadas: sin guiones, porque el largo de cada línea cambia cuando la red se reorganiza
    tl.call(() => { gsap.set([...lnA, ...lnB], { clearProps: 'strokeDasharray,strokeDashoffset' }); }, [], 2.9);
  });
  // cronograma: las barras crecen desde su mes de inicio
  $$('[data-a="gantt"]', sec).forEach((g) => {
    gsap.set(g, { autoAlpha: 1 });
    tl.fromTo($$('.g-meses span', g), { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.06 }, 0.3);
    $$('.g-fila', g).forEach((f, i) => {
      tl.fromTo(f, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 0.6 + i * 0.25);
      tl.fromTo($('.g-et', f), { autoAlpha: 0, x: -24 }, { autoAlpha: 1, x: 0, duration: 0.6 }, 0.6 + i * 0.25);
      tl.fromTo($('.g-bar', f), { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power3.inOut' }, 0.8 + i * 0.25);
      tl.fromTo($('.g-bar span', f), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 1.6 + i * 0.25);
    });
  });
  // red de actores: BACO aparece al centro y las conexiones salen hacia cada actor
  $$('[data-a="hub"]', sec).forEach((h) => {
    gsap.set(h, { autoAlpha: 1 });
    const movil = innerWidth < 900;
    const centro = $('.n0', h); const otros = $$('.actor:not(.n0)', h);
    const pos = movil ? { xPercent: 0, yPercent: 0, x: 0, y: 0 } : { xPercent: -50, yPercent: -50, x: 0, y: 0 };
    tl.fromTo(centro, { ...pos, autoAlpha: 0, scale: 0.6 }, { ...pos, autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(2)' }, 0.4);
    $$('.hub-l path', h).forEach((p) => { const L = (p as unknown as SVGPathElement).getTotalLength(); gsap.set(p, { strokeDasharray: L, strokeDashoffset: L }); });
    tl.to($$('.hub-l path', h), { strokeDashoffset: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' }, 0.9);
    tl.fromTo(otros, { ...pos, autoAlpha: 0, scale: 0.85 }, { ...pos, autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' }, 1.3);
  });
  // árbol del activo: tronco, ramas y cada dato
  $$<HTMLElement>('[data-a="arbol"]', sec).forEach((a) => {
    gsap.set(a, { autoAlpha: 1, '--p': 0, '--q': 0 });
    tl.fromTo($('.raiz', a), { autoAlpha: 0, x: -30 }, { autoAlpha: 1, x: 0, duration: 0.7 }, 0.4);
    tl.to($('ul', a), { '--q': 1, duration: 0.4, ease: 'power2.out' }, 0.9);
    tl.to($('ul', a), { '--p': 1, duration: 0.7, ease: 'power2.inOut' }, 1.2);
    tl.fromTo($$('li', a), { autoAlpha: 0, x: -14 }, { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.12 }, 1.5);
  });
  // contenido interno de las etapas, después del giro de cada tarjeta
  $$('.etapa', sec).forEach((card, i) => tl.fromTo([...card.children], { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.9 + i * 0.22));
  // nubes de chips / actores: salen del centro y quedan flotando
  $$('[data-a="chips"], [data-a="pills"]', sec).forEach((nube) => {
    const hijos = $$(':scope > *', nube); const w = nube.clientWidth; const h = nube.clientHeight;
    // en celular no hay ancho para la órbita: los chips caen en una rejilla ordenada, uno tras otro
    if (innerWidth < 900) {
      hijos.forEach((c) => gsap.killTweensOf(c));
      tl.fromTo(hijos, { xPercent: 0, yPercent: 0, x: 0, y: 28, z: 0, scale: 0.7, autoAlpha: 0, filter: 'blur(10px)' },
        { y: 0, scale: 1, autoAlpha: 1, filter: 'blur(0px)', duration: 0.7, stagger: 0.06, ease: 'back.out(1.6)' }, 0.5);
      return;
    }
    const pos = orbitas(hijos.length, w * 0.46, h * 0.44);
    hijos.forEach((c, i) => {
      gsap.killTweensOf(c);
      tl.fromTo(c, { xPercent: -50, yPercent: -50, x: 0, y: 0, z: -600, scale: 0.2, autoAlpha: 0, filter: 'blur(16px)' },
        { x: pos[i].x, y: pos[i].y, z: 0, scale: 1, autoAlpha: 1, filter: 'blur(0px)', duration: 1.3, ease: 'expo.out',
          onComplete: () => { if (!reducido) gsap.to(c, { y: pos[i].y + (i % 2 ? 10 : -10), x: pos[i].x + (i % 3 ? 6 : -6), duration: 2.6 + (i % 4) * 0.5, yoyo: true, repeat: -1, ease: 'sine.inOut' }); } },
        0.5 + i * 0.07);
    });
  });
  // contadores y barras de lectura
  $$('[data-n]', sec).forEach((el) => tl.call(() => contar(el, el.closest('.leyendo') ? 2.4 : 1.6), [], 0.6));
  $$('.leyendo', sec).forEach((card) => {
    tl.fromTo($('.barra i', card), { width: '0%' }, { width: '100%', duration: 2.4, ease: 'power2.out' }, 0.6);
    const ch = $$('.checks span', card); ch.forEach((c) => c.classList.remove('ok'));
    ch.forEach((c, i) => tl.call(() => c.classList.add('ok'), [], 0.9 + i * (1.8 / ch.length)));
  });
  return tl;
}

// diagrama 01: ver diag.ts (red interactiva)

export function iniciarAnimaciones() {
  construirDiag();
  $$('[data-escena]').forEach((sec) => {
    const animados = $$('[data-a]', sec).filter((e) => !['words', 'chips', 'pills'].includes(e.dataset.a!));
    gsap.set(animados, { autoAlpha: 0 });
    let tl: gsap.core.Timeline | null = null;
    const play = () => { tl?.kill(); tl = animarSeccion(sec); };
    // al salir, todo se va con desenfoque: al volver la animación se repite completa
    const salir = (dir: 1 | -1) => {
      tl?.kill();
      gsap.to($$('[data-a]', sec).filter((e) => !['chips', 'pills'].includes(e.dataset.a!)), { autoAlpha: 0, y: -40 * dir, filter: 'blur(10px)', duration: 0.5, ease: 'power2.in', overwrite: 'auto' });
    };
    if (sec.dataset.escena === 'hero') { setTimeout(play, 500); }
    const fijada = sec.dataset.escena === 'capas';
    ScrollTrigger.create({
      trigger: sec, start: fijada ? 'top 40%' : 'top 68%', end: fijada ? 'bottom 60%' : 'bottom 32%',
      onEnter: play, onEnterBack: play, onLeave: () => salir(1), onLeaveBack: () => salir(-1),
    });
  });
  iniciarTilt();
  // cabecera y dock entran al cargar
  gsap.from('#top > *:not(.marca)', { autoAlpha: 0, y: -24, stagger: 0.1, duration: 0.9, ease: 'power3.out', delay: 0.3, clearProps: 'opacity,visibility,transform' });
  // el dock ya no entra al cargar: aparece solo en la sección de capas y en exploración libre (main.ts + premium.css)
  gsap.fromTo('#capas .capa', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.5, delay: 1.2, clearProps: 'opacity,visibility,transform' });
}

/** Cada tarjeta responde al mouse: se inclina en 3D y refleja la luz. */
function iniciarTilt() {
  if (reducido || matchMedia('(hover: none)').matches) return;
  const sel = '.tcapa, .grafico, .actor, .g-bar, .flujo li, .arbol .raiz, .frente .habs span, .alerta';
  document.addEventListener('pointermove', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>(sel);
    $$(sel).forEach((c) => { if (c !== el && c.dataset.inclinada) { delete c.dataset.inclinada; gsap.to(c, { rotateX: 0, rotateY: 0, '--gx': '50%', '--gy': '-20%', duration: 0.7, ease: 'power3.out' }); } });
    if (!el) return;
    const r = el.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
    const fuerza = el.classList.contains('grafico') ? 3 : 7;
    el.dataset.inclinada = '1';
    gsap.to(el, { rotateY: px * fuerza, rotateX: -py * fuerza, transformPerspective: 900, '--gx': `${(px + 0.5) * 100}%`, '--gy': `${(py + 0.5) * 100}%`, duration: 0.5, ease: 'power2.out' });
  });
}

// ───────────────────────── honorarios ─────────────────────────
export function iniciarHonorarios() {
  let integrada = false;
  const M = (v: number) => '$' + Math.round(v * 1e6).toLocaleString('es-CO');
  const vis = { total: 0, iva: 0 };
  const barras = $('#barras');
  const NOMBRES = ['Implementación, BEP y requisitos BIM', 'Coordinación de diseños · 2 meses', 'Acompañamiento BIM en obra', 'Cierre as-built y gemelo digital'];
  barras.innerHTML = ['A', 'B', 'C', 'D'].map((k, i) => `<div class="barra-et"><b><small>Etapa</small>${k}</b><div class="nom"><em>${NOMBRES[i]}</em><div class="t"><i></i></div></div><span>—</span></div>`).join('');
  const svg = $('#curva') as unknown as SVGSVGElement;
  const calc = (anim = true) => {
    const meses = +$<HTMLInputElement>('#rMeses').value;
    const tarifa = integrada ? 13.8 : 23;
    const MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct'];
    $('#vMeses').textContent = `${meses} meses · feb – ${MES[meses]} 2027`;
    const et = [33, 47, meses * tarifa, 31]; const total = et.reduce((a, b) => a + b, 0);
    gsap.to(vis, { total, iva: total * 1.19, duration: 0.8, ease: 'power2.out', onUpdate: () => { $('#oTotal').textContent = M(vis.total); $('#oIva').textContent = M(vis.iva); } });
    const max = 23 * 9;
    $('.barra-et:nth-child(3) em', barras).textContent = `Acompañamiento BIM en obra · ${meses} meses${integrada ? ' (−40%)' : ''}`;
    $$('.barra-et', barras).forEach((b, i) => {
      gsap.to($('i', b), { width: (100 * et[i] / max) + '%', duration: anim ? 1 : 0, ease: 'power3.out', delay: anim ? i * 0.08 : 0 });
      $('span', b).textContent = M(et[i]);
    });
    // curva acumulada mes a mes: A (mes 1), B (meses 2–3), C (obra), D (cierre)
    // calendario: A en enero; obra (C) desde febrero; B en febrero y marzo; D en el último mes de obra
    const serie = (tar: number) => { const pts = [0, 33]; for (let k = 1; k <= meses; k++) pts.push(pts[pts.length - 1] + tar + (k <= 2 ? 23.5 : 0) + (k === meses ? 31 : 0)); return pts; };
    const W = 600, H = 230, n = meses + 2, ymax = 340;
    const path = (p: number[]) => p.map((v, i) => `${i ? 'L' : 'M'}${(i / (n - 1)) * W},${H - (v / ymax) * H}`).join(' ');
    const a = serie(23), b = serie(13.8);
    svg.innerHTML = `
      <defs><linearGradient id="gA" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#D5BE91" stop-opacity=".35"/><stop offset="1" stop-color="#D5BE91" stop-opacity="0"/></linearGradient></defs>
      ${[100, 200, 300].map((v) => `<line x1="0" x2="${W}" y1="${H - (v / ymax) * H}" y2="${H - (v / ymax) * H}" stroke="rgba(220,229,236,.08)"/><text x="${W}" y="${H - (v / ymax) * H - 6}" text-anchor="end">$${v} M</text>`).join('')}
      <path d="${path(integrada ? b : a)} L${W},${H} L0,${H} Z" fill="url(#gA)" class="area"/>
      <path d="${path(a)}" fill="none" stroke="${integrada ? 'rgba(220,229,236,.3)' : '#D5BE91'}" stroke-width="${integrada ? 1.5 : 3}" class="ln"/>
      <path d="${path(b)}" fill="none" stroke="${integrada ? '#D5BE91' : 'rgba(220,229,236,.3)'}" stroke-width="${integrada ? 3 : 1.5}" stroke-dasharray="${integrada ? '' : '5 6'}" class="ln2"/>
      <text x="6" y="${H + 22}">Inicio · ene 2027</text><text x="${W}" y="${H + 22}" text-anchor="end">Entrega · ${MES[meses]} 2027</text>`;
    const ln = svg.querySelector('.ln') as SVGPathElement; const L = ln.getTotalLength();
    if (anim) {
      gsap.fromTo(ln, { strokeDasharray: L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut', onComplete: () => { if (!integrada) ln.style.strokeDasharray = ''; } });
      gsap.fromTo(svg.querySelector('.area'), { opacity: 0 }, { opacity: 1, duration: 1.2, delay: 0.8 });
    }
  };
  $('#rMeses').addEventListener('input', () => calc(false));
  $('#segModo').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('button'); if (!b) return;
    integrada = b.dataset.m === 'int';
    $$('#segModo button').forEach((x) => x.classList.toggle('on', x === b)); calc(true);
  });
  calc(false);
  ScrollTrigger.create({ trigger: '[data-escena="honorarios"]', start: 'top 60%', onEnter: () => calc(true), onEnterBack: () => calc(true) });
}

// ───────────────────────── obra real Piso 2 (programación de BACO Obra) ─────────────────────────
const FRENTES = [
  { f: 'Frente 1', s: ['214', '215', '216', '217'], c: '1 JS + 3 estándar' },
  { f: 'Frente 2', s: ['225', '218', '219', '220'], c: '1 JS + 3 estándar' },
  { f: 'Frente 3', s: ['223', '222', '224', '221'], c: '3 JS + 1 estándar' },
];
const HITOS = [
  ['01 sep', 'Inicio real', 'Entrega del piso e inspecciones preliminares en las doce habitaciones.'],
  ['03 sep', 'Inicio flujo productivo', 'Cuadrillas civiles, plomeros y eléctricos circulan por habitaciones.'],
  ['21 sep', 'Control de redes', 'Cada baño con redes y pruebas liberadas antes de autorizar enchapes.'],
  ['05 oct', 'Control de acabados', 'Enchape terminado antes de cielos RH y dilatación perimetral.'],
  ['31 oct', 'Cierre físico del piso', 'Pruebas, punch list, aseo y dossier terminados.'],
  ['02 nov', 'Entrega formal conjunta', 'Recepción consolidada del piso completo.'],
];
export function iniciarObra() {
  $('#frentes').innerHTML = FRENTES.map((f) => `<div class="frente"><b>${f.f}</b><div class="habs">${f.s.map((h) => `<span>${h}</span>`).join('<em>' + ico('flecha') + '</em>')}</div></div>`).join('');
  $('#hitos').innerHTML = '<i class="traz"></i>' + HITOS.map(([d, h, r]) => `<div class="hito"><time>${d} · 2026</time><b>${h}</b><p>${r}</p></div>`).join('');
  const play = () => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo('.frente', { autoAlpha: 0, x: -60, rotateY: 25, transformPerspective: 800 }, { autoAlpha: 1, x: 0, rotateY: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out' }, 0);
    tl.fromTo('.frente .habs span', { autoAlpha: 0, scale: 0.4 }, { autoAlpha: 1, scale: 1, stagger: 0.04, duration: 0.4, ease: 'back.out(2)' }, 0.4);
    tl.fromTo('.eje .traz', { height: 0 }, { height: 'calc(100% - 12px)', duration: 2.6, ease: 'power1.inOut' }, 0.6);
    tl.fromTo('.hito', { autoAlpha: 0, x: 40, filter: 'blur(6px)' }, { autoAlpha: 1, x: 0, filter: 'blur(0px)', stagger: 0.4, duration: 0.6 }, 0.7);
    tl.call(recorrido, [], 1.6);
  };
  // las cuadrillas recorren cada frente habitación por habitación, en bucle
  let paso = 0; let reloj = 0;
  const recorrido = () => {
    if (reloj || reducido) return;
    reloj = window.setInterval(() => {
      paso = (paso + 1) % 4;
      document.querySelectorAll('.frente').forEach((f) => f.querySelectorAll('.habs span').forEach((h, i) => h.classList.toggle('act', i === paso)));
    }, 1100);
  };
  gsap.set('.hito, .frente', { autoAlpha: 0 });
  ScrollTrigger.create({ trigger: '[data-escena="obra"]', start: 'top 65%', onEnter: play, onEnterBack: play });
}

// ───────────────────────── actores ─────────────────────────
export function iniciarActores() {
  const resp = $('#resp');
  const lineas = $$('.hub-l path');
  const actores = $$('.actor');
  const elegir = (a: HTMLElement) => {
    actores.forEach((x) => x.classList.toggle('on', x === a));
    // la conexión de ese actor con BACO se enciende y un pulso viaja por ella
    const k = ['n1', 'n2', 'n3', 'n4'].findIndex((c) => a.classList.contains(c));
    lineas.forEach((p, i) => p.classList.toggle('on', i === k || k < 0));
    if (k >= 0) gsap.fromTo(lineas[k], { strokeDashoffset: (lineas[k] as unknown as SVGPathElement).getTotalLength() }, { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out' });
    gsap.fromTo(a, { scale: 0.94 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' });
    gsap.to(resp, { autoAlpha: 0, y: 10, duration: 0.2, onComplete: () => {
      $('small', resp).textContent = a.textContent!.trim(); $('p', resp).textContent = a.dataset.r!;
      gsap.fromTo($('p', resp), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power2.out' });
      gsap.to(resp, { autoAlpha: 1, y: 0, duration: 0.4 });
    } });
  };
  actores.forEach((a) => {
    a.addEventListener('click', () => elegir(a));
    a.addEventListener('pointerenter', () => { if (matchMedia('(hover: hover)').matches) elegir(a); });
  });
}
