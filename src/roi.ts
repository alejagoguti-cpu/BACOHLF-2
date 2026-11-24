/**
 * Módulo 09 · Retorno de inversión. Calculadora real en tres secciones que comparten un solo estado:
 *   09.1 calculadora (presupuesto, % de ahorro, inversión BIM) + cascada ahorro → inversión → neto
 *   09.2 economía de escala: retorno vs. presupuesto, marcador arrastrable y tabla generada
 *   09.3 amortización mes a mes: inversión acumulada vs. ahorro acumulado y punto de recuperación
 *
 * Fórmulas (todas visibles en la página):
 *   inversión BIM = (A+B+D fijas $111 M + meses de obra × tarifa mensual) × IVA     [igual que la sección de honorarios]
 *   ahorro bruto  = presupuesto × % de ahorro (rango 6 %–14 % de la propuesta)
 *   ahorro neto   = ahorro bruto − inversión BIM
 *   retorno       = ahorro bruto ÷ inversión BIM
 *   amortización  = la inversión se paga según el calendario de honorarios; el ahorro se acumula parejo durante la obra
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector(s) as T;
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
const MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct'];
const FIJO = { A: 33, B: 47, D: 31 };
const TARIFA = { solo: 23, int: 13.8 };

type Estado = { P: number; s: number; modo: 'solo' | 'int'; meses: number; iva: boolean };
const st: Estado = { P: 10000, s: 10, modo: 'solo', meses: 6, iva: true };

const M = (v: number) => (v < 0 ? '−' : '') + '$' + Math.round(Math.abs(v)).toLocaleString('es-CO') + ' M';
const X = (v: number) => v.toLocaleString('es-CO', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + 'x';
const PCT = (v: number, d = 1) => v.toLocaleString('es-CO', { minimumFractionDigits: d, maximumFractionDigits: d }) + '%';

// ── cálculo ──
function calc(e: Estado = st) {
  const f = e.iva ? 1.19 : 1; const tar = TARIFA[e.modo];
  const I = (FIJO.A + FIJO.B + FIJO.D + e.meses * tar) * f;
  const A = (e.P * e.s) / 100;
  const N = A - I;
  // calendario de pagos (mes 0 = enero; obra = meses 1..n): A en enero; B en feb–mar; C cada mes de obra; D el último mes
  const pagos = [FIJO.A * f];
  for (let k = 1; k <= e.meses; k++) pagos.push((tar + (k <= 2 ? FIJO.B / 2 : 0) + (k === e.meses ? FIJO.D : 0)) * f);
  const inv = (t: number) => pagos.reduce((s, p, k) => s + (t >= k ? p : 0), 0);
  const ah = (t: number) => A * Math.min(1, Math.max(0, (t - 1) / e.meses));
  let pay: number | null = null;
  for (let t = 1; t <= 1 + e.meses + 1e-9; t += 1 / 60) if (ah(t) >= inv(t)) { pay = t; break; }
  const dias = Math.round(e.meses * 30 * 0.1);
  return { I, A, N, roi: A / I, pctBim: (I / e.P) * 100, pagos, inv, ah, pay, dias };
}
const fmtPay = (t: number | null) => {
  if (t === null) return { b: 'No se recupera', e: 'con estos supuestos' };
  const dia = Math.max(1, Math.round((t - 1) * 30));
  return { b: `Día ${dia}`, e: `de obra · ${MES[Math.floor(t)] ?? MES[st.meses]} 2027` };
};

// ── números que cuentan ──
const vis: Record<string, number> = {};
function contar(el: Element | null, clave: string, valor: number, fmt: (v: number) => string, dur = 0.8) {
  if (!el) return;
  if (vis[clave] === undefined) vis[clave] = 0;
  const o = { v: vis[clave] };
  gsap.to(o, { v: valor, duration: dur, ease: 'power3.out', overwrite: 'auto', onUpdate: () => { vis[clave] = o.v; el.textContent = fmt(o.v); } });
}
function destello(el: Element | null) { if (el) gsap.fromTo(el, { color: '#ffffff' }, { color: '', duration: 0.9, ease: 'power2.out', clearProps: 'color' }); }

// ── 09.1 desglose del sobrecosto (proporciones del texto de la propuesta) ──
const GASTO = [0.45, 0.35, 0.20];
// ── 09.1 cascada (ya no está en la página; las funciones no hacen nada si falta el SVG) ──
let tips: string[] = [];
const semana = (t: number) => Math.max(1, Math.ceil(Math.max(1, Math.round((t - 1) * 30)) / 7));
/** Tooltips de las barras: explican qué es cada cifra al pasar el cursor (o al tocar en celular). */
function iniciarTips() {
  const svg = $<SVGSVGElement>('#cascada'); const tip = $('#casTip'); const wrap = svg?.parentElement; if (!svg || !tip || !wrap) return;
  const TIT = ['Lo que dejas de botar', 'Lo que cuesta BIM', 'Lo que te queda en el bolsillo'];
  let act = -1;
  const mostrar = (i: number, ev: PointerEvent) => {
    const w = wrap.getBoundingClientRect();
    if (i !== act) {
      act = i; tip.innerHTML = `<b class="t${i}">${TIT[i]}</b>${tips[i] ?? ''}`; tip.dataset.i = String(i); svg.dataset.foco = String(i);
      gsap.fromTo(tip, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out', overwrite: true });
    }
    gsap.set(tip, { left: Math.min(Math.max(ev.clientX - w.left, 130), w.width - 130), top: ev.clientY - w.top });
  };
  const ocultar = () => { if (act < 0) return; act = -1; delete svg.dataset.foco; gsap.to(tip, { autoAlpha: 0, duration: 0.2, overwrite: true }); };
  const zona = (ev: PointerEvent) => (ev.target as Element).closest?.('[data-t]');
  svg.addEventListener('pointermove', (ev) => { const z = zona(ev); if (z) mostrar(+z.getAttribute('data-t')!, ev); else ocultar(); });
  svg.addEventListener('pointerdown', (ev) => { const z = zona(ev); if (z) mostrar(+z.getAttribute('data-t')!, ev); });
  svg.addEventListener('pointerleave', ocultar);
}

const cas = { A: 0, I: 0 };
function dibujarCascada() {
  const svg = $<SVGSVGElement>('#cascada'); if (!svg) return;
  const W = 600, H = 250, base = 210, top = 26;
  const { A, I } = cas; const N = A - I;
  const max = Math.max(A, I, 1) * 1.08; const y = (v: number) => base - ((base - top) * v) / max;
  const bw = 120, xs = [60, 240, 420];
  const lbl = (x: number, yy: number, t: string, c = '') => `<text x="${x + bw / 2}" y="${yy}" text-anchor="middle" class="cv ${c}">${t}</text>`;
  const yN = N >= 0 ? y(N) : y(0); const hN = Math.abs(y(0) - y(Math.abs(N)));
  svg.innerHTML = `
    <defs><linearGradient id="gA" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#D5BE91" stop-opacity=".55"/><stop offset="1" stop-color="#D5BE91" stop-opacity=".08"/></linearGradient></defs>
    <line x1="30" x2="${W - 10}" y1="${base}" y2="${base}" class="eje"/>
    <rect x="${xs[0]}" y="${y(A)}" width="${bw}" height="${base - y(A)}" class="b-a" data-t="0"/>
    ${lbl(xs[0], y(A) - 10, M(A))}
    <line x1="${xs[0] + bw}" x2="${xs[1]}" y1="${y(A)}" y2="${y(A)}" class="guia"/>
    <rect x="${xs[1]}" y="${y(A)}" width="${bw}" height="${Math.max(0, y(Math.max(A - I, 0)) - y(A))}" class="b-i" data-t="1"/>
    ${lbl(xs[1], y(A) - 10, '−' + M(I), 'neg')}
    <line x1="${xs[1] + bw}" x2="${xs[2]}" y1="${y(Math.max(N, 0))}" y2="${y(Math.max(N, 0))}" class="guia"/>
    <rect x="${xs[2]}" y="${N >= 0 ? yN : base}" width="${bw}" height="${N >= 0 ? base - yN : Math.min(hN, 4)}" class="${N >= 0 ? 'b-n' : 'b-i'}" data-t="2"/>
    ${lbl(xs[2], (N >= 0 ? yN : base) - 10, M(N), N >= 0 ? 'oro' : 'neg')}
    <text x="${xs[0] + bw / 2}" y="${base + 26}" text-anchor="middle" class="ce">Sobrecostos evitados</text>
    <text x="${xs[1] + bw / 2}" y="${base + 26}" text-anchor="middle" class="ce">Honorarios BIM</text>
    <text x="${xs[2] + bw / 2}" y="${base + 26}" text-anchor="middle" class="ce oro">Ganancia neta</text>
    ${xs.map((x, i) => `<rect x="${x - 20}" y="${top - 20}" width="${bw + 40}" height="${base - top + 56}" class="zona" data-t="${i}"/>`).join('')}`;
}

// ── 09.2 curva de escala ──
const PMIN = 3000, PMAX = 40000;
let escMarcador = { P: st.P };
const anim = { rev: 1, revA: 1 };
function dibujarEscala() {
  const svg = $<SVGSVGElement>('#curvaRoi'); if (!svg) return;
  const W = 640, H = 300, L = 64, R = 16, T = 12, B = 50;
  const c = calc(); const I = c.I;
  const ymax = 20; // eje fijo 0x–20x
  const x = (P: number) => L + ((P - PMIN) / (PMAX - PMIN)) * (W - L - R);
  const y = (v: number) => H - B - (Math.min(v, ymax) / ymax) * (H - T - B);
  const linea = (s: number) => { const pts: string[] = []; for (let P = PMIN; P <= PMAX; P += 500) pts.push(`${x(P).toFixed(1)},${y((P * s) / 100 / I).toFixed(1)}`); return pts; };
  const lo = linea(6), hi = linea(14), mid = linea(st.s);
  const Pm = Math.round(escMarcador.P / 250) * 250; const vm = (Pm * st.s) / 100 / I;
  const ticksY = Array.from({ length: ymax / 2 + 1 }, (_, i) => i * 2);
  const ticksX = [5000, 10000, 20000, 30000, 40000];
  // globo del marcador: arriba a la izquierda del punto (queda sobre la curva, que sube a la derecha); si no cabe, abajo a la derecha
  const bw = 350, bh = 46; const px = x(Pm), py = y(vm);
  const izq = px - bw - 14 >= L;
  const gx = izq ? px - bw - 14 : Math.min(px + 14, W - R - bw);
  const gy = izq ? Math.max(T, py - bh - 18) : Math.min(H - B - bh - 4, py + 18);
  svg.innerHTML = `
    ${ticksY.map((v) => `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" class="grid"/><text x="${L - 8}" y="${y(v) + 4}" text-anchor="end" class="cx">${v}x</text>`).join('')}
    ${ticksX.map((P) => `<text x="${x(P)}" y="${H - B + 18}" text-anchor="middle" class="cx">$${(P / 1000).toLocaleString('es-CO')} mil M</text>`).join('')}
    <text x="${L + (W - L - R) / 2}" y="${H - 8}" text-anchor="middle" class="eje-t">Presupuesto de obra</text>
    <text transform="translate(14 ${T + (H - T - B) / 2}) rotate(-90)" text-anchor="middle" class="eje-t">Multiplicador de retorno</text>
    <clipPath id="clipEsc"><rect x="${L}" y="0" width="${(W - L - R) * anim.rev}" height="${H}"/></clipPath>
    <g clip-path="url(#clipEsc)"><polygon points="${lo.join(' ')} ${hi.reverse().join(' ')}" class="banda"/>
    <line x1="${L}" x2="${W - R}" y1="${y(1)}" y2="${y(1)}" class="equilibrio"/>
    <text x="${W - R}" y="${y(1) - 6}" text-anchor="end" class="cx rojo">1x · punto de equilibrio</text>
    <polyline points="${mid.join(' ')}" class="linea-s"/><polyline points="${mid.join(' ')}" class="linea-flujo"/></g>
    <g class="marcador">
      <line x1="${px}" x2="${px}" y1="${T}" y2="${H - B}" class="m-l"/>
      <circle cx="${px}" cy="${py}" r="7" class="m-c"/>
      <g transform="translate(${gx} ${gy})">
        <rect width="${bw}" height="${bh}" rx="3" class="m-box"/>
        <text x="12" y="19" class="m-t1">${M(Pm)} de presupuesto</text>
        <text x="12" y="36" class="m-t2">Retorno: ${vm.toLocaleString('es-CO', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} veces la inversión · Ahorro neto: ${M((Pm * st.s) / 100 - I)} limpios</text>
      </g>
    </g>
    <rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}" fill="transparent" class="zona-arrastre"/>`;
}

function tablaEscala() {
  const tb = $('#tablaRoi tbody'); if (!tb) return;
  const c = calc();
  const mas = (v: number) => (v >= 0 ? '+' : '') + M(v);
  const fila = (P: number, nombre: string, cls = '') => {
    const nlo = (P * 6) / 100 - c.I, nhi = (P * 14) / 100 - c.I;
    return `<tr class="${cls}"><td><b>${nombre}</b><small>(${M(P)})</small></td><td>${PCT((c.I / P) * 100)}</td><td class="oro">${mas(nlo)} a ${M(nhi)}</td><td><span class="badge-roi ${cls ? 'oro' : ''}">${X((P * 0.06) / c.I)} a ${X((P * 0.14) / c.I)}</span></td></tr>`;
  };
  tb.innerHTML = fila(st.P, 'Tu proyecto actual', 'destacado') + fila(20000, 'Escala Media') + fila(30000, 'Gran Escala');
}

// ── 09.3 amortización ──
let cursorT = -1; let simul: gsap.core.Tween | null = null;
function dibujarAmort() {
  const svg = $<SVGSVGElement>('#amort'); if (!svg) return;
  const c = calc();
  const W = 640, H = 300, L = 54, R = 16, T = 18, B = 34;
  const tf = 1 + st.meses;
  const ymax = Math.max(c.A, c.I) * 1.12;
  const x = (t: number) => L + (t / tf) * (W - L - R);
  const y = (v: number) => H - B - (v / ymax) * (H - T - B);
  const pasos = 120; const pInv: string[] = []; const pAh: string[] = [];
  for (let i = 0; i <= pasos; i++) { const t = (i / pasos) * tf; pInv.push(`${x(t).toFixed(1)},${y(c.inv(t)).toFixed(1)}`); pAh.push(`${x(t).toFixed(1)},${y(c.ah(t)).toFixed(1)}`); }
  const meses = Array.from({ length: tf + 1 }, (_, k) => k);
  const pay = c.pay;
  const ct = cursorT >= 0 ? Math.min(cursorT, tf) : -1;
  svg.innerHTML = `
    ${meses.map((k) => `<line x1="${x(k)}" x2="${x(k)}" y1="${T}" y2="${H - B}" class="grid"/>${k < tf ? `<text x="${(x(k) + x(k + 1)) / 2}" y="${H - 12}" text-anchor="middle" class="cx">${MES[k]}</text>` : ''}`).join('')}
    <rect x="${x(1)}" y="${T}" width="${x(tf) - x(1)}" height="${H - T - B}" class="zona-obra"/>
    <text x="${x(1) + 6}" y="${T + 14}" class="cx">Obra · ${st.meses} meses</text>
    <clipPath id="clipAm"><rect x="0" y="0" width="${L + (W - L - R) * anim.revA}" height="${H}"/></clipPath>
    <g clip-path="url(#clipAm)"><polygon points="${pAh.join(' ')} ${x(tf)},${y(0)} ${x(0)},${y(0)}" class="area-ah"/>
    <polyline points="${pInv.join(' ')}" class="l-inv"/>
    <polyline points="${pAh.join(' ')}" class="l-ah"/><polyline points="${pAh.join(' ')}" class="l-flujo"/></g>
    ${pay !== null ? `<g class="pay" transform="translate(${x(pay)} ${y(c.inv(pay))})"><circle r="7" class="pay-c"/><circle r="7" class="pay-onda"/>
      <g transform="translate(${x(pay) > W - 190 ? -176 : 12} -44)"><rect width="164" height="36" rx="3" class="m-box"/><text x="10" y="15" class="m-t1">Se paga solo</text><text x="10" y="29" class="m-t2">${fmtPay(pay).b} ${fmtPay(pay).e}</text></g></g>` : ''}
    ${ct >= 0 ? `<g class="cursor" transform="translate(${x(ct)} 0)"><line y1="${T}" y2="${H - B}" class="c-l"/><circle cy="${y(c.ah(ct))}" r="4.5" class="c-ah"/><circle cy="${y(c.inv(ct))}" r="4.5" class="c-inv"/></g>` : ''}`;
  // lectura
  const t = ct >= 0 ? ct : tf;
  const inv = c.inv(t), ah = c.ah(t);
  $('#aMes')!.textContent = ct >= 0 ? (t < 1 ? 'Enero 2027 · antes de obra' : `${MES[Math.min(Math.floor(t), tf - 1)]} 2027 · día ${Math.round((t - 1) * 30)} de obra`) : `Cierre · ${MES[st.meses]} 2027`;
  $('#aInv')!.textContent = M(inv); $('#aAh')!.textContent = M(ah);
  const bal = $('#aBal')!; bal.textContent = M(ah - inv); bal.classList.toggle('neg', ah - inv < 0);
}
let vis3 = false; let bucle3 = 0;
function simular() {
  simul?.kill(); clearTimeout(bucle3);
  const o = { t: 0 }; const tf = 1 + st.meses;
  // la curva se revela junto con el cursor; al llegar al punto de recuperación, destello
  const c = calc(); let disparado = false;
  simul = gsap.to(o, { t: tf, duration: 6, ease: 'none',
    onUpdate: () => {
      cursorT = o.t; anim.revA = Math.max(anim.revA, o.t / tf); dibujarAmort();
      if (!disparado && c.pay !== null && o.t >= c.pay) { disparado = true; destello($('#aBal')); gsap.fromTo('#aBal', { scale: 1.25 }, { scale: 1, duration: 0.7, ease: 'back.out(3)' }); }
    },
    onComplete: () => { cursorT = -1; dibujarAmort(); if (vis3) bucle3 = window.setTimeout(simular, 2600); } });
}

// ── todo se recalcula junto ──
function render(anim = true) {
  const c = calc();
  const d = anim ? 0.8 : 0;
  // controles
  $('#cP')!.textContent = M(st.P); $('#cS')!.textContent = PCT(st.s);
  // 09.1 · sobrecosto evitado y su desglose
  const Mill = (v: number) => M(v).replace(/ M$/, ' Millones');
  const pctTxt = PCT(st.s, st.s % 1 ? 1 : 0);
  contar($('#oFuga'), 'oFuga', c.A, (v) => '$' + Math.round(v).toLocaleString('es-CO'), d);
  GASTO.forEach((g, i) => contar($('#oG' + i), 'oG' + i, c.A * g, M, d));
  const fr = $('#oFrase');
  if (fr) fr.innerHTML = `En una obra de <b>${M(st.P)}</b>, no coordinar los diseños significa botar <b class="oro">${Mill(c.A)} (el ${pctTxt})</b> en picar muros, cambiar tuberías instaladas y pagar contratos adicionales que nadie tenía en el radar.`;
  // 09.2
  gsap.to(escMarcador, { P: st.P, duration: d * 0.8, ease: 'power3.out', overwrite: 'auto', onUpdate: dibujarEscala });
  if (!d) dibujarEscala();
  tablaEscala();
  $$('[data-v="inv"]').forEach((e) => (e.textContent = M(c.I)));
  $$('[data-v="inv-iva"]').forEach((e) => (e.textContent = M(c.I) + (st.iva ? ' con IVA' : '')));
  $$('[data-v="pay"]').forEach((e) => (e.textContent = c.pay === null ? 'más tiempo del que dura la obra' : `el ${fmtPay(c.pay).b.toLowerCase()} ${fmtPay(c.pay).e}`));
  $$('[data-v="dias"]').forEach((e) => (e.textContent = `${c.dias} días`));
  // 09.3
  if (cursorT < 0) dibujarAmort();
  $('#rP')!.style.setProperty('--f', `${((st.P - PMIN) / (PMAX - PMIN)) * 100}%`);
  $('#rS')!.style.setProperty('--f', `${((st.s - 6) / 8) * 100}%`);
  $$('.chips-esc button').forEach((b) => b.classList.toggle('on', +b.dataset.s! === st.s));
}

export function iniciarRoi() {
  iniciarTips();
  if (!$('#rP')) return;
  const rP = $<HTMLInputElement>('#rP'), rS = $<HTMLInputElement>('#rS');
  rP.addEventListener('input', () => { st.P = +rP.value; render(true); destello($('#oFuga')); });
  rS.addEventListener('input', () => { st.s = +rS.value; render(true); destello($('#oFuga')); });
  $$('.chips-esc button').forEach((b) => b.addEventListener('click', () => { st.s = +b.dataset.s!; rS.value = String(st.s); render(true); destello($('#oFuga')); }));
  $$('#rModo button').forEach((b) => b.addEventListener('click', () => { st.modo = b.dataset.m as Estado['modo']; $$('#rModo button').forEach((x) => x.classList.toggle('on', x === b)); render(true); }));
  $$('#rMesesR button').forEach((b) => b.addEventListener('click', () => { st.meses = +b.dataset.n!; $$('#rMesesR button').forEach((x) => x.classList.toggle('on', x === b)); render(true); }));
  $<HTMLInputElement>('#rIva')?.addEventListener('change', (e) => { st.iva = (e.target as HTMLInputElement).checked; render(true); });
  $$('[data-p]').forEach((b) => b.addEventListener('click', () => { st.P = +b.dataset.p!; rP.value = String(st.P); render(true); }));

  // arrastrar el marcador sobre la curva de escala
  const svgE = $<SVGSVGElement>('#curvaRoi');
  let arr = false;
  const mover = (e: PointerEvent) => {
    const r = svgE.getBoundingClientRect(); const fx = ((e.clientX - r.left) / r.width) * 640;
    const P = Math.round((PMIN + ((fx - 64) / (640 - 64 - 16)) * (PMAX - PMIN)) / 500) * 500; // mismos márgenes que dibujarEscala
    st.P = Math.min(PMAX, Math.max(PMIN, P)); rP.value = String(st.P); render(true);
  };
  svgE.addEventListener('pointerdown', (e) => { arr = true; tocado2 = true; barrido?.kill(); svgE.setPointerCapture(e.pointerId); mover(e); });
  svgE.addEventListener('pointermove', (e) => { if (arr) mover(e); });
  svgE.addEventListener('pointerup', () => (arr = false));

  $('#btnSimular')?.addEventListener('click', simular);
  // cualquier toque en la calculadora detiene la demostración y le da el mando a la persona
  $('.calc')!.addEventListener('pointerdown', tomarMando, { capture: true });
  $('.calc')!.addEventListener('keydown', tomarMando, { capture: true });
  render(false);

  // entradas: cada sección arma sus gráficos al aparecer y se mantiene en movimiento mientras se ve
  ScrollTrigger.create({ trigger: '[data-escena="roi"]', start: 'top 60%', end: 'bottom 40%', onEnter: entrar1, onEnterBack: entrar1, onLeave: pararDemo, onLeaveBack: pararDemo });
  ScrollTrigger.create({ trigger: '[data-escena="roi2"]', start: 'top 60%', end: 'bottom 40%', onEnter: entrar2, onEnterBack: entrar2, onLeave: pararBarrido, onLeaveBack: pararBarrido });
  ScrollTrigger.create({ trigger: '[data-escena="roi3"]', start: 'top 55%', end: 'bottom 40%',
    onEnter: entrar3, onEnterBack: entrar3, onLeave: () => { vis3 = false; }, onLeaveBack: () => { vis3 = false; } });
}

// ── 09.1: demostración automática mientras nadie toca ──
const DEMO = [{ P: 20000, s: 10 }, { P: 30000, s: 14 }, { P: 5000, s: 10 }, { P: 15000, s: 8 }, { P: 10000, s: 10 }];
let tocado1 = false; let demoT = 0; let demoK = 0;
function aplicar(P: number, s: number) {
  st.P = P; st.s = s;
  ($('#rP') as HTMLInputElement).value = String(P); ($('#rS') as HTMLInputElement).value = String(s);
  render(true); destello($('#oFuga'));
  gsap.fromTo('.fuga-big', { y: 8, opacity: 0.6 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
}
function pasoDemo() {
  if (tocado1) return;
  const d = DEMO[demoK++ % DEMO.length]; aplicar(d.P, d.s);
  demoT = window.setTimeout(pasoDemo, 3200);
}
function tomarMando() {
  if (tocado1) return;
  tocado1 = true; clearTimeout(demoT);
  gsap.to('.demo-tag', { autoAlpha: 0, y: -6, duration: 0.3 });
}
function pararDemo() {
  clearTimeout(demoT);
  // si fue la demostración la que movió los valores, vuelve al caso base para las secciones siguientes
  if (!tocado1 && (st.P !== 10000 || st.s !== 10)) aplicar(10000, 10);
}
function entrar1() {
  // la cifra cuenta desde cero, la barra se reparte en sus tres tramos y cada tarjeta llena su porcentaje
  ['oFuga', 'oG0', 'oG1', 'oG2'].forEach((k) => (vis[k] = 0));
  gsap.delayedCall(0.6, () => render(true));
  gsap.fromTo('.fuga-barra i', { scaleX: 0 }, { scaleX: 1, duration: 0.9, stagger: 0.25, ease: 'power3.inOut', delay: 0.9 });
  gsap.fromTo('.gasto', { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.6, ease: 'power3.out', delay: 1.1 });
  gsap.fromTo('.gasto-l i', { scaleX: 0 }, { scaleX: 1, stagger: 0.15, duration: 1, ease: 'power3.inOut', delay: 1.5 });
  if (!tocado1) { clearTimeout(demoT); gsap.fromTo('.demo-tag', { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.5, delay: 2 }); demoT = window.setTimeout(pasoDemo, 4200); }
}

// ── 09.2: la curva se dibuja y el marcador recorre la escala solo ──
let tocado2 = false; let barrido: gsap.core.Timeline | null = null;
function pararBarrido() { barrido?.kill(); barrido = null; gsap.to(escMarcador, { P: st.P, duration: 0.6, onUpdate: dibujarEscala }); }
function entrar2() {
  anim.rev = 0; dibujarEscala();
  gsap.to(anim, { rev: 1, duration: 1.8, delay: 0.5, ease: 'power2.inOut', onUpdate: dibujarEscala });
  gsap.fromTo('#tablaRoi tbody tr', { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, stagger: 0.12, duration: 0.5, delay: 0.8 });
  if (tocado2) return;
  barrido?.kill();
  barrido = gsap.timeline({ delay: 2.6, repeat: -1, repeatDelay: 1.2, defaults: { ease: 'sine.inOut', onUpdate: dibujarEscala } })
    .to(escMarcador, { P: 40000, duration: 3.2 })
    .to(escMarcador, { P: 3000, duration: 3.6 }, '+=0.8')
    .to(escMarcador, { P: st.P, duration: 2 }, '+=0.8');
}

// ── 09.3: la obra se simula en bucle mientras se ve ──
function entrar3() {
  vis3 = true; anim.revA = 0; cursorT = 0; dibujarAmort();
  clearTimeout(bucle3); bucle3 = window.setTimeout(simular, 700);
}
