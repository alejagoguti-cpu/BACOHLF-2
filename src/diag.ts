// Diagrama 01 "sin coordinación / modelo federado", interactivo:
// doble clic (o doble toque) en una especialidad la retira de los dos esquemas → cambia la
// arquitectura de la red: los nodos que quedan se reubican y crecen, y las interfaces se recalculan
// (malla: n(n−1)/2 · federado: n). Los retirados bajan a una bandeja; un toque los devuelve.
import { gsap } from 'gsap';
import { ico } from './iconos';

const ESP = ['Arq.', 'Estr.', 'Hidro', 'RCI', 'Eléc.', 'Mec.'];
const ESP_ICO = ['arquitectura', 'estructura', 'hidro', 'rci', 'electrica', 'mecanica'];
const ESP_COL = ['#D5BE91', '#9fb6cc', '#3d8bff', '#ff7a2f', '#2fd0b5', '#c3cbd4'];
const N = ESP.length;
const R = 24; // radio base del nodo
// desorden del lado "sin coordinación": cada especialidad conserva su propio desvío
const JX = [-18, 22, -8, 14, -24, 10];
const JY = [12, -14, 18, -8, 4, -18];
const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
const SVGNS = 'http://www.w3.org/2000/svg';

interface Est { x: number; y: number; s: number; v: number }
const el = (tag: string, attrs: Record<string, string> = {}) => {
  const e = document.createElementNS(SVGNS, tag); Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v)); return e;
};

export function construirDiag() {
  document.querySelectorAll<HTMLElement>('[data-a="diag"]').forEach(montar);
}

function montar(d: HTMLElement) {
  const svg = d.querySelector('svg')!;
  const movil = innerWidth < 900;
  const H = 345; // alto de cada esquema (incluye bandeja)
  svg.setAttribute('viewBox', movil ? `-15 0 480 ${H * 2 + 10}` : `0 0 900 ${H}`);
  svg.innerHTML = '';
  const gA = el('g', { class: 'nodos-a' });
  const gB = el('g', { class: 'nodos-b', transform: movil ? `translate(0 ${H + 10})` : 'translate(450 0)' });
  svg.append(gA, el('path', { class: 'sep', d: movil ? `M40 ${H + 2} H410` : `M450 40 V${H - 40}` }), gB);
  const tA = el('text', { x: '225', y: '18', class: 'dt' }); tA.textContent = 'Sin coordinación';
  const tB = el('text', { x: '225', y: '18', class: 'dt oro' }); tB.textContent = 'Modelo federado'; const tituloB = tB;
  gA.append(tA); gB.append(tB);
  const capA = el('g'); const capB = el('g'); // líneas debajo de los nodos
  gA.append(capA); gB.append(capB);

  // nodos: posición (externa, la mueve el layout) › .nd (la anima la entrada) › tamaño
  const nodo = (padre: SVGElement, i: number, centro = false) => {
    const pos = el('g', { class: 'nd-pos toca', 'data-i': String(i) });
    const nd = el('g', { class: 'nd' + (centro ? ' c' : '') });
    const tam = el('g');
    const color = centro ? '#D5BE91' : ESP_COL[i];
    const r = centro ? 32 : R; const s = centro ? 28 : 22;
    tam.innerHTML = `<circle r="${r}" style="--c:${color}"/>` +
      ico(centro ? 'cubo3d' : ESP_ICO[i]).replace('<svg class="ico "', `<svg class="ic" x="${-s / 2}" y="${-s / 2}" width="${s}" height="${s}" style="color:${centro ? '#001b3b' : color}"`);
    const tx = el('text', { y: String(r + 16) }); tx.textContent = centro ? 'BIM' : ESP[i];
    { const t = el('title'); t.textContent = centro ? 'Doble clic: quitar el modelo federado' : 'Doble clic: retirar de la red'; pos.append(t); }
    nd.append(tam, tx); pos.append(nd); padre.append(pos);
    return { pos, tam, tx, r };
  };

  const A = ESP.map((_, i) => nodo(gA, i));
  const B = ESP.map((_, i) => nodo(gB, i));
  const C = nodo(gB, -1, true);
  const CX = 225, CY = 158;

  // aristas: malla completa (todas contra todas) y estrella hacia BIM
  const pares: [number, number, SVGPathElement][] = [];
  for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) { const p = el('path', { class: 'ln r' }) as SVGPathElement; capA.append(p); pares.push([i, j, p]); }
  const paresB: [number, number, SVGPathElement][] = [];
  for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) { const p = el('path', { class: 'ln r', opacity: '0' }) as SVGPathElement; capB.append(p); paresB.push([i, j, p]); }
  const rayos = ESP.map(() => { const p = el('path', { class: 'ln o' }) as SVGPathElement; capB.append(p); return p; });
  const pulsos = ESP.map(() => { const c = el('circle', { r: '3', class: 'pulso-dot', opacity: '0' }); capB.append(c); return c; });

  const vis = ESP.map(() => true);
  const eA: Est[] = ESP.map(() => ({ x: CX, y: CY, s: 1, v: 1 }));
  const eB: Est[] = ESP.map(() => ({ x: CX, y: CY, s: 1, v: 1 }));
  // BIM: b = 1 presente (estrella ordenada), 0 retirado (nodos desubicados que derivan)
  let bim = true; const eC = { x: CX, y: CY, s: 1, v: 1, b: 1 };
  // desorden sin BIM: cada especialidad cae lejos de su sitio
  const KX = [-37, 55, -68, 27, -54, 43], KY = [95, -69, 48, -41, 118, -4];

  /** Calcula el destino de cada nodo según cuántos quedan visibles. */
  const destinos = () => {
    const on = vis.map((v, i) => (v ? i : -1)).filter((i) => i >= 0);
    const off = vis.map((v, i) => (v ? -1 : i)).filter((i) => i >= 0);
    const n = on.length; const s = Math.min(1.55, Math.sqrt(N / n));
    const ry = 86 - (s - 1) * 36; const rx = n <= 2 ? 120 : 160;
    const da: Est[] = [], db: Est[] = [];
    // malla: anillo deformado (desorden), arranca torcido
    on.forEach((i, k) => {
      const a = (n <= 2 ? Math.PI : -Math.PI / 2 + 0.4) + (k * Math.PI * 2) / n;
      da[i] = { x: CX + Math.cos(a) * rx + JX[i] * (n > 1 ? 1 : 0), y: CY + Math.sin(a) * ry + JY[i] * (n > 2 ? 1 : 0), s, v: 1 };
      const b = (n <= 2 ? Math.PI : -Math.PI / 2) + (k * Math.PI * 2) / n;
      const rb = n <= 2 ? 150 : 172;
      db[i] = bim ? { x: CX + Math.cos(b) * rb, y: CY + Math.sin(b) * (n <= 2 ? 0 : 88 + (s - 1) * 55), s, v: 1 }
        : { x: CX + Math.cos(b + 0.9) * 130 + KX[i], y: CY - 10 + Math.sin(b + 0.9) * 70 + KY[i], s: s * 0.92, v: 1 };
    });
    // bandeja: pequeños y atenuados, centrados abajo
    const offB = bim ? off : [...off, -1]; // BIM retirado también baja a la bandeja (solo del lado federado)
    off.forEach((i, k) => {
      const x = CX + (k - (off.length - 1) / 2) * 46;
      da[i] = { x, y: H - 22, s: 0.5, v: 0 };
      db[i] = { x: CX + (k - (offB.length - 1) / 2) * 46, y: H - 22, s: 0.5, v: 0 };
    });
    const dc = bim ? { x: CX, y: CY, s: 1 + (6 - n) * 0.04, v: 1, b: 1 } : { x: CX + ((offB.length - 1) / 2) * 46, y: H - 22, s: 0.42, v: 0, b: 0 };
    return { da, db, dc, n };
  };

  let tDer = 0;
  const pB = ESP.map(() => ({ x: 0, y: 0 })); // posición visible de B (con deriva)
  const pinta = () => {
    const der = (1 - eC.b) * (reducido ? 0 : 1);
    eB.forEach((e, i) => { pB[i].x = e.x + Math.sin(tDer * 0.9 + i * 1.7) * 9 * der * e.v; pB[i].y = e.y + Math.cos(tDer * 0.7 + i * 2.3) * 7 * der * e.v; });
    const nodoP = (o: typeof A[0], e: Est, p: { x: number; y: number } = e) => {
      o.pos.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
      o.tam.setAttribute('transform', `scale(${e.s.toFixed(3)})`);
      o.tx.setAttribute('y', (o.r * e.s + 16).toFixed(1));
      o.tx.setAttribute('opacity', e.v.toFixed(2));
      o.pos.setAttribute('opacity', (0.4 + 0.6 * e.v).toFixed(2));
      o.pos.classList.toggle('fuera', e.v < 0.5);
    };
    A.forEach((o, i) => nodoP(o, eA[i])); B.forEach((o, i) => nodoP(o, eB[i], pB[i])); nodoP(C, eC);
    pares.forEach(([i, j, p]) => {
      p.setAttribute('d', `M${eA[i].x.toFixed(1)} ${eA[i].y.toFixed(1)} L${eA[j].x.toFixed(1)} ${eA[j].y.toFixed(1)}`);
      p.setAttribute('opacity', Math.min(eA[i].v, eA[j].v).toFixed(2));
    });
    rayos.forEach((p, i) => { p.setAttribute('d', `M${pB[i].x.toFixed(1)} ${pB[i].y.toFixed(1)} L${eC.x.toFixed(1)} ${eC.y.toFixed(1)}`); p.setAttribute('opacity', (eB[i].v * eC.b).toFixed(2)); });
    paresB.forEach(([i, j, p]) => {
      p.setAttribute('d', `M${pB[i].x.toFixed(1)} ${pB[i].y.toFixed(1)} L${pB[j].x.toFixed(1)} ${pB[j].y.toFixed(1)}`);
      p.setAttribute('opacity', (Math.min(eB[i].v, eB[j].v) * (1 - eC.b)).toFixed(2));
    });
  };

  // contadores de interfaces en la leyenda
  const caps = d.querySelectorAll('figcaption span');
  const cnt = [...caps].map((s) => { const b = document.createElement('b'); b.className = 'cnt'; s.append(b); return b; });
  const num = { a: 15, b: 6 };
  const escribe = () => {
    cnt[0].textContent = `${Math.round(num.a)} interfaces`;
    if (cnt[1]) cnt[1].textContent = `${Math.round(num.b)} interfaces`;
  };

  const relayout = (dur = 0.9) => {
    const { da, db, dc, n } = destinos();
    gsap.to(eC, { ...dc, duration: dur * 1.1, ease: 'power3.inOut', overwrite: true, onUpdate: pinta });
    tituloB.textContent = bim ? 'Modelo federado' : 'Sin modelo federado'; tituloB.classList.toggle('oro', bim); tituloB.classList.toggle('roto', !bim);
    cnt[1]?.classList.toggle('roto', !bim);
    const ley = caps[1]; const txt = [...(ley?.childNodes ?? [])].find((n) => n.nodeType === 3 && n.textContent!.trim());
    if (txt) txt.textContent = bim ? 'Una sola fuente de información, decisiones registradas' : 'Sin BIM, cada especialidad vuelve a coordinar con todas las demás';
    ley?.querySelector('i')?.classList.toggle('r', !bim); ley?.querySelector('i')?.classList.toggle('o', bim);
    ESP.forEach((_, i) => {
      gsap.to(eA[i], { ...da[i], duration: dur, ease: 'power3.inOut', delay: dur ? (i % 3) * 0.04 : 0, overwrite: true, onUpdate: pinta });
      gsap.to(eB[i], { ...db[i], duration: dur, ease: 'power3.inOut', delay: dur ? (i % 3) * 0.04 : 0, overwrite: true, onUpdate: pinta });
    });
    gsap.to(num, { a: (n * (n - 1)) / 2, b: bim ? n : (n * (n - 1)) / 2, duration: dur || 0.01, ease: 'power2.out', onUpdate: escribe });
    if (dur) gsap.fromTo(cnt, { color: '#fff' }, { color: 'var(--oro)', duration: 1.2 });
  };

  // estado inicial ya en su sitio (la entrada de la sección hace aparecer los nodos)
  const ini = destinos();
  ESP.forEach((_, i) => { Object.assign(eA[i], ini.da[i]); Object.assign(eB[i], ini.db[i]); }); Object.assign(eC, ini.dc);
  pinta(); escribe();

  // doble toque / doble clic (sirve igual con mouse y en celular)
  let ultimo = { i: -2, t: 0 };
  svg.addEventListener('pointerup', (ev) => {
    const g = (ev.target as Element).closest<SVGElement>('.nd-pos.toca'); if (!g) return;
    const i = +g.dataset.i!; const ahora = performance.now();
    if (i === -1 && !bim) { bim = true; ultimo = { i: -2, t: 0 }; relayout(1.1); return; } // BIM vuelve: todo se reordena
    if (i === -1) {
      if (ultimo.i === -1 && ahora - ultimo.t < 380) { ultimo = { i: -2, t: 0 }; bim = false; relayout(1.1); } else ultimo = { i, t: ahora };
      return;
    }
    if (!vis[i]) { vis[i] = true; ultimo = { i: -2, t: 0 }; relayout(); return; } // en la bandeja: un toque lo devuelve
    if (ultimo.i === i && ahora - ultimo.t < 380) {
      ultimo = { i: -2, t: 0 };
      if (vis.filter(Boolean).length <= 1) { gsap.fromTo(g, { x: -4 }, { x: 0, duration: 0.4, ease: 'elastic.out(3,0.3)' }); return; }
      vis[i] = false; relayout();
    } else ultimo = { i, t: ahora };
  });
  svg.addEventListener('dblclick', (ev) => ev.preventDefault());

  // pulsos de información de cada especialidad hacia el modelo federado (en bucle)
  if (!reducido) {
    gsap.ticker.add((t) => {
      tDer = t; if (eC.b < 1) pinta();
      if (!d.dataset.pulsos) return;
      pulsos.forEach((c, i) => {
        const f = (((t - i * 0.27) % 2.2) + 2.2) % 2.2 / 1.6; // 1,6 s de viaje + 0,6 s de pausa
        if (f > 1 || eB[i].v < 0.5 || eC.b < 0.5) { c.setAttribute('opacity', '0'); return; }
        const k = f * f; // acelera hacia BIM
        c.setAttribute('cx', (eB[i].x + (CX - eB[i].x) * k).toFixed(1));
        c.setAttribute('cy', (eB[i].y + (CY - eB[i].y) * k).toFixed(1));
        c.setAttribute('opacity', String((f < 0.9 ? 1 : (1 - f) * 10) * eB[i].v));
      });
    });
  }
}

/** Activa los pulsos cuando termina la entrada del diagrama. */
export function pulsosDiag(d: HTMLElement) { d.dataset.pulsos = '1'; }
