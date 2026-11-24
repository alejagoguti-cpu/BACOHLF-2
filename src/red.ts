/**
 * Red viva: nodos con física suave (repulsión, resortes, deriva), arrastrables y que se apagan al tocarlos.
 * La arquitectura se deriva de los nodos activos:
 *   - centro (hub) encendido  → estrella: cada nodo se conecta solo al centro  (n interfaces)
 *   - centro apagado          → malla: todos contra todos                       (n·(n−1)/2 interfaces)
 * Al cambiar, las conexiones viejas se retraen, las nuevas se dibujan y los nodos se reacomodan.
 */
import { gsap } from 'gsap';

export type DefNodo = { id: string; label: string; corto?: string; color: string; hub?: boolean; info?: string; on?: boolean };
type Nodo = DefNodo & { x: number; y: number; vx: number; vy: number; on: boolean; ang: number; fase: number; vis: number; w: number; h: number; g: SVGGElement; rect: SVGRectElement };
type Pulso = { p: number; v: number; dir: 1 | -1; el: SVGCircleElement };
type Enlace = { a: Nodo; b: Nodo; t: number; vivo: boolean; el: SVGLineElement; pulsos: Pulso[] };

const NS = 'http://www.w3.org/2000/svg';
const mk = <K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number> = {}) => {
  const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, String(attrs[k])); return e;
};
const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;

export class Red {
  nodos: Nodo[] = [];
  enlaces = new Map<string, Enlace>();
  W = 900; H = 420; tiempo = 0;
  gL = mk('g', { class: 'r-enlaces' }); gP = mk('g', { class: 'r-pulsos' }); gN = mk('g', { class: 'r-nodos' });
  visible = false; raf = 0; ultimo = 0;
  arrastre: Nodo | null = null; movido = false; sobre: Nodo | null = null;
  onCambio?: (interfaces: number, estrella: boolean, activos: number) => void;
  onSel?: (n: DefNodo, accion: 'hover' | 'toggle') => void;

  constructor(public svg: SVGSVGElement, defs: DefNodo[]) {
    svg.append(this.gL, this.gP, this.gN);
    const otros = defs.filter((d) => !d.hub).length; let k = 0;
    this.nodos = defs.map((d) => {
      const g = mk('g', { class: 'r-nodo' + (d.hub ? ' hub' : ''), tabindex: 0, role: 'button', 'aria-label': d.label });
      const rect = mk('rect', { rx: 3 });
      const punto = mk('rect', { class: 'r-dot', width: 7, height: 7, transform: 'rotate(45)', fill: d.color });
      const txt = mk('text', { 'dominant-baseline': 'middle' }); txt.textContent = d.label;
      g.append(rect, punto, txt); this.gN.append(g);
      const ang = d.hub ? -Math.PI / 2 : -Math.PI / 2 + (k++ / otros) * Math.PI * 2;
      const n: Nodo = { ...d, on: d.on ?? true, x: 0, y: 0, vx: 0, vy: 0, ang, fase: Math.random() * 10, vis: 0, w: 0, h: 0, g, rect };
      g.addEventListener('pointerdown', (e) => this.agarrar(e, n));
      g.addEventListener('pointerenter', () => { this.sobre = n; this.onSel?.(n, 'hover'); this.resaltar(); });
      g.addEventListener('pointerleave', () => { this.sobre = null; this.resaltar(); });
      g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.alternar(n); } });
      return n;
    });
    this.medir();
    new ResizeObserver(() => this.medir()).observe(svg);
    new IntersectionObserver(([en]) => { this.visible = en.isIntersecting; if (this.visible) this.arrancar(); }, { rootMargin: '100px' }).observe(svg);
    addEventListener('pointermove', (e) => this.mover(e));
    addEventListener('pointerup', () => this.soltar());
    this.sincronizar(false);
  }

  /** Mide la caja de cada etiqueta y ajusta el lienzo al tamaño real del svg. */
  medir() {
    const r = this.svg.getBoundingClientRect(); if (!r.width) return;
    const sx = r.width / this.W, sy = r.height / this.H;
    this.nodos.forEach((n) => { n.x *= sx; n.y *= sy; });
    this.W = r.width; this.H = r.height;
    this.svg.setAttribute('viewBox', `0 0 ${this.W} ${this.H}`);
    const chico = this.W < 520;
    this.nodos.forEach((n) => {
      const txt = n.g.querySelector('text')!; txt.textContent = chico && n.corto ? n.corto : n.label; txt.style.fontSize = (n.hub ? (chico ? 12 : 14) : (chico ? 11 : 13)) + 'px';
      const tw = txt.getComputedTextLength() || n.label.length * 7;
      n.w = tw + (chico ? 30 : 40); n.h = n.hub ? (chico ? 34 : 42) : (chico ? 28 : 34);
      n.rect.setAttribute('x', String(-n.w / 2)); n.rect.setAttribute('y', String(-n.h / 2));
      n.rect.setAttribute('width', String(n.w)); n.rect.setAttribute('height', String(n.h));
      const dot = n.g.querySelector('.r-dot')!; dot.setAttribute('x', '0'); dot.setAttribute('y', '0');
      dot.setAttribute('transform', `translate(${-n.w / 2 + (chico ? 12 : 16)} 0) rotate(45) translate(-3.5 -3.5)`);
      txt.setAttribute('x', String(-n.w / 2 + (chico ? 21 : 27)));
    });
  }

  estrella() { const h = this.nodos.find((n) => n.hub); return !!h && h.on; }

  /** Conexiones que deben existir según los nodos activos. */
  topologia(): [Nodo, Nodo][] {
    const act = this.nodos.filter((n) => n.on && !n.hub); const hub = this.nodos.find((n) => n.hub);
    if (hub && hub.on) return act.map((n) => [hub, n]);
    const out: [Nodo, Nodo][] = []; act.forEach((a, i) => act.slice(i + 1).forEach((b) => out.push([a, b]))); return out;
  }

  sincronizar(animar = true) {
    const quiero = new Map(this.topologia().map(([a, b]) => [a.id + '|' + b.id, [a, b] as [Nodo, Nodo]]));
    const est = this.estrella();
    let k = 0;
    quiero.forEach(([a, b], key) => {
      const ex = this.enlaces.get(key);
      if (ex) { if (!ex.vivo) { ex.vivo = true; gsap.to(ex, { t: 1, duration: 0.7, ease: 'power2.out', overwrite: true }); } return; }
      const el = mk('line', { class: 'r-enlace' }); this.gL.append(el);
      const pulsos: Pulso[] = Array.from({ length: est ? 2 : 1 }, (_, i) => {
        const c = mk('circle', { r: est ? 2.6 : 2.2, class: 'r-pulso' }); this.gP.append(c);
        return { p: i / 2 + Math.random() * 0.2, v: est ? 0.45 : 0.25 + Math.random() * 0.5, dir: (est ? -1 : Math.random() < 0.5 ? 1 : -1) as 1 | -1, el: c };
      });
      const en: Enlace = { a, b, t: 0, vivo: true, el, pulsos }; this.enlaces.set(key, en);
      gsap.to(en, { t: 1, duration: animar ? 0.9 : 0, delay: animar ? 0.15 + k++ * 0.05 : 0, ease: 'power3.out' });
    });
    this.enlaces.forEach((en, key) => {
      if (quiero.has(key) || !en.vivo) return;
      en.vivo = false;
      gsap.to(en, { t: 0, duration: animar ? 0.5 : 0, ease: 'power2.in', overwrite: true, onComplete: () => {
        if (en.vivo) return; en.el.remove(); en.pulsos.forEach((p) => p.el.remove()); this.enlaces.delete(key);
      } });
    });
    this.svg.classList.toggle('estrella', est); this.svg.classList.toggle('malla', !est);
    this.nodos.forEach((n) => n.g.classList.toggle('off', !n.on));
    // empujón: al cambiar la arquitectura los nodos se sacuden y se reacomodan
    if (animar && !reducido) this.nodos.forEach((n) => { n.vx += (Math.random() - 0.5) * 6; n.vy += (Math.random() - 0.5) * 6; });
    this.onCambio?.(quiero.size, est, this.nodos.filter((n) => n.on && !n.hub).length);
    this.resaltar(); this.arrancar();
  }

  alternar(n: Nodo) {
    // el último nodo no se puede apagar: siempre queda una red
    if (n.on && !n.hub && this.nodos.filter((x) => x.on && !x.hub).length <= 2) { gsap.fromTo(n.g, { x: -4 }, { x: 0, duration: 0.4, ease: 'elastic.out(1, 0.3)' }); return; }
    n.on = !n.on;
    this.onSel?.(n, 'toggle');
    this.sincronizar(true);
  }

  setHub(on: boolean) { const h = this.nodos.find((n) => n.hub); if (h && h.on !== on) { h.on = on; this.sincronizar(true); } }

  /** Entrada: todo nace del centro y se abre. */
  reiniciar() {
    this.medir();
    this.nodos.forEach((n, i) => {
      n.x = this.W / 2 + Math.cos(n.ang) * 10; n.y = this.H / 2 + Math.sin(n.ang) * 10; n.vx = Math.cos(n.ang) * 9; n.vy = Math.sin(n.ang) * 6; n.vis = 0;
      gsap.to(n, { vis: 1, duration: 0.8, delay: 0.1 + i * 0.07, ease: 'back.out(1.8)' });
    });
    this.enlaces.forEach((en, i) => { gsap.fromTo(en, { t: 0 }, { t: en.vivo ? 1 : 0, duration: 1, delay: 0.5 + (typeof i === 'string' ? 0 : 0) + Math.random() * 0.5, ease: 'power3.out' }); });
    this.arrancar();
  }

  resaltar() {
    const s = this.sobre;
    this.enlaces.forEach((en) => en.el.classList.toggle('hl', !!s && (en.a === s || en.b === s)));
    this.nodos.forEach((n) => n.g.classList.toggle('hl', n === s));
  }

  // ── arrastre ──
  punto(e: PointerEvent) { const r = this.svg.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
  agarrar(e: PointerEvent, n: Nodo) {
    e.preventDefault(); this.arrastre = n; this.movido = false;
    if (e.pointerType === 'mouse') this.svg.classList.add('arrastrando');
  }
  mover(e: PointerEvent) {
    const n = this.arrastre; if (!n) return;
    const p = this.punto(e);
    if (Math.hypot(p.x - n.x, p.y - n.y) > 6) this.movido = true;
    if (this.movido && e.pointerType === 'mouse') { n.x = p.x; n.y = p.y; n.vx = 0; n.vy = 0; this.arrancar(); }
  }
  soltar() {
    const n = this.arrastre; if (!n) return;
    this.arrastre = null; this.svg.classList.remove('arrastrando');
    if (!this.movido) this.alternar(n);
  }

  // ── simulación ──
  arrancar() { if (!this.raf && this.visible) { this.ultimo = performance.now(); this.raf = requestAnimationFrame((t) => this.paso(t)); } }

  paso(ahora: number) {
    this.raf = 0;
    const dt = Math.min(0.05, (ahora - this.ultimo) / 1000); this.ultimo = ahora; this.tiempo += dt;
    const k = dt * 60;
    const { W, H } = this; const cx = W / 2, cy = H / 2; const R = Math.min(W, H);
    const est = this.estrella();
    const N = this.nodos;
    // destino de cada nodo: los activos se reparten en una elipse (el centro al medio);
    // los apagados bajan a una bandeja en el borde inferior
    const banco = 46;
    const maxW = Math.max(...N.map((n) => (n.hub ? 0 : n.w)));
    const ecy = (H - banco) / 2; const rx = Math.max(60, W / 2 - maxW / 2 - 10), ry = ecy - 26;
    const act = N.filter((n) => n.on && !n.hub); const fuera = N.filter((n) => !n.on);
    const giro = est ? 0 : Math.PI / act.length; // al pasar a malla la red rota media posición
    const dest = new Map<Nodo, [number, number]>();
    act.forEach((n, i) => { const a = -Math.PI / 2 + giro + (i / act.length) * Math.PI * 2; dest.set(n, [cx + Math.cos(a) * rx * (est ? 0.92 : 1), ecy + Math.sin(a) * ry * (est ? 0.92 : 1)]); });
    const anchoBanco = fuera.reduce((s, n) => s + n.w + 14, -14); let bx = cx - anchoBanco / 2;
    fuera.forEach((n) => { dest.set(n, [bx + n.w / 2, H - n.h / 2 - 4]); bx += n.w + 14; });
    N.forEach((n) => { if (n.hub && n.on) dest.set(n, [cx, ecy]); });
    // fuerzas: resorte al destino + deriva suave + separación para que nunca se tapen
    N.forEach((n) => {
      let fx = 0, fy = 0;
      const [tx, ty] = dest.get(n)!;
      const kk = n.on ? 0.022 : 0.04;
      fx += (tx - n.x) * kk; fy += (ty - n.y) * kk;
      if (n.on && !reducido) { fx += Math.sin(this.tiempo * 0.8 + n.fase) * 0.09; fy += Math.cos(this.tiempo * 0.6 + n.fase * 1.3) * 0.09; }
      N.forEach((m) => {
        if (m === n) return;
        const dx = n.x - m.x, dy = n.y - m.y;
        const ox = (n.w + m.w) / 2 + 16 - Math.abs(dx), oy = (n.h + m.h) / 2 + 12 - Math.abs(dy);
        if (ox > 0 && oy > 0) { if (ox < oy * 2.2) fx += Math.sign(dx || 1) * ox * 0.08; else fy += Math.sign(dy || 1) * oy * 0.08; }
      });
      (n as Nodo & { fx: number; fy: number }).fx = fx; (n as Nodo & { fy: number }).fy = fy;
    });
    void R;
    let energia = 0;
    N.forEach((n: any) => {
      if (n === this.arrastre && this.movido) return;
      n.vx = (n.vx + n.fx * k) * Math.pow(0.86, k); n.vy = (n.vy + n.fy * k) * Math.pow(0.86, k);
      const v = Math.hypot(n.vx, n.vy); if (v > 14) { n.vx *= 14 / v; n.vy *= 14 / v; }
      n.x += n.vx * k; n.y += n.vy * k;
      n.x = Math.max(n.w / 2 + 4, Math.min(W - n.w / 2 - 4, n.x)); n.y = Math.max(n.h / 2 + 4, Math.min(H - n.h / 2 - 4, n.y));
      energia += v;
    });
    // dibujo
    N.forEach((n) => n.g.setAttribute('transform', `translate(${n.x.toFixed(1)} ${n.y.toFixed(1)}) scale(${n.vis.toFixed(3)})`));
    this.enlaces.forEach((en) => {
      const { a, b, t } = en; const x2 = a.x + (b.x - a.x) * t, y2 = a.y + (b.y - a.y) * t;
      en.el.setAttribute('x1', a.x.toFixed(1)); en.el.setAttribute('y1', a.y.toFixed(1)); en.el.setAttribute('x2', x2.toFixed(1)); en.el.setAttribute('y2', y2.toFixed(1));
      en.el.style.opacity = String(Math.min(1, t * 1.5));
      en.pulsos.forEach((p) => {
        if (!reducido) p.p += p.v * dt; if (p.p > 1) { p.p -= 1; if (!est) p.dir = Math.random() < 0.5 ? 1 : -1; }
        const q = p.dir === 1 ? p.p : 1 - p.p;
        p.el.setAttribute('cx', (a.x + (b.x - a.x) * q).toFixed(1)); p.el.setAttribute('cy', (a.y + (b.y - a.y) * q).toFixed(1));
        p.el.style.opacity = t > 0.98 && en.vivo ? String(Math.sin(p.p * Math.PI)) : '0';
      });
    });
    void energia;
    // sigue animando mientras se vea (deriva continua)
    if (this.visible) this.raf = requestAnimationFrame((t) => this.paso(t));
  }
}
