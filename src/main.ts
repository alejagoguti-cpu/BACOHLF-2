import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { iniciarAnimaciones, iniciarHonorarios, iniciarObra, iniciarActores } from './animaciones';
import { iniciarCarrusel } from './carrusel';
import { iniciarHero } from './hero';
import { iniciarCursor } from './cursor';
import { ico, pintarIconos } from './iconos';
import './interaccion.css';
import './premium.css';
gsap.registerPlugin(ScrollTrigger);
// en un PC liviano las animaciones terminan a tiempo en vez de ralentizarse
gsap.ticker.lagSmoothing(0);

// ───────────────────────── datos ─────────────────────────
interface Cat { nombre: string; vOff: number; vLen: number; tOff?: number; tLen?: number; uvOff?: number; uvLen?: number; elementos?: number }
interface NivelInfo { i: number; nombre: string; elev: number; zmin: number; zmax: number; archivo: string; cats: Cat[] }
interface Manifest { enu: { e: number; n: number; z: number }; niveles: NivelInfo[] }

export type Disc = 'Arquitectura' | 'Estructura' | 'Hidrosanitaria' | 'Red contra incendios' | 'Eléctrica' | 'Mecánica';
export const CAPAS: { d: Disc; corto: string; color: string; texto: string }[] = [
  { d: 'Arquitectura', corto: 'Arquitectura', color: '#D5BE91', texto: 'Muros en ladrillo, fachadas, ventanería, puertas, barandas, escaleras y cubiertas de los siete niveles.' },
  { d: 'Estructura', corto: 'Estructura', color: '#9fb6cc', texto: 'Losas, columnas y vigas: la base para verificar alturas libres y pasos de instalaciones.' },
  { d: 'Hidrosanitaria', corto: 'Hidro', color: '#3d8bff', texto: 'Agua fría, agua caliente, red sanitaria y aparatos de los baños del Piso 2.' },
  { d: 'Red contra incendios', corto: 'RCI', color: '#ff7a2f', texto: 'Red de rociadores del Piso 2: ramales, bajantes y cabezas en habitaciones y pasillo.' },
  { d: 'Eléctrica', corto: 'Eléctrica', color: '#2fd0b5', texto: 'Conduit, cajas, tomas, aparatos y luminarias de cada habitación del Piso 2.' },
  { d: 'Mecánica', corto: 'Mecánica', color: '#c3cbd4', texto: 'Ductos de ventilación y extracción coordinados con las demás redes.' },
];
const ICONO_CAPA: Record<string, string> = { Arquitectura: 'arquitectura', Estructura: 'estructura', Hidrosanitaria: 'hidro', 'Red contra incendios': 'rci', 'Eléctrica': 'electrica', 'Mecánica': 'mecanica' };
const CATS: Record<string, { arq: string; tec: string; disc: Disc; cerr?: boolean; vidrio?: boolean; metal?: number; rough?: number; nombre: string; mep?: boolean }> = {
  muros:      { arq: '#dcae95', tec: '#2a4664', disc: 'Arquitectura', cerr: true, nombre: 'Muros' },
  ventanas:   { arq: '#7f98a6', tec: '#6f93b8', disc: 'Arquitectura', cerr: true, vidrio: true, nombre: 'Ventanas' },
  paneles:    { arq: '#d8d2c6', tec: '#2f4a66', disc: 'Arquitectura', cerr: true, nombre: 'Paneles' },
  puertas:    { arq: '#8a5a3b', tec: '#3a5674', disc: 'Arquitectura', nombre: 'Puertas' },
  montantes:  { arq: '#3a3d41', tec: '#5c7896', disc: 'Arquitectura', metal: .6, rough: .4, nombre: 'Montantes' },
  barandas:   { arq: '#3a3d41', tec: '#5c7896', disc: 'Arquitectura', metal: .6, rough: .4, nombre: 'Barandas' },
  escaleras:  { arq: '#b4afa5', tec: '#35516e', disc: 'Arquitectura', nombre: 'Escaleras' },
  cubiertas:  { arq: '#ffffff', tec: '#2a4664', disc: 'Arquitectura', cerr: true, nombre: 'Cubiertas' },
  losas:      { arq: '#bcb7ae', tec: '#8aa2bb', disc: 'Estructura', nombre: 'Losas' },
  columnas:   { arq: '#c8c3b9', tec: '#c9d6e3', disc: 'Estructura', nombre: 'Columnas' },
  vigas:      { arq: '#c8c3b9', tec: '#c9d6e3', disc: 'Estructura', nombre: 'Vigas' },
  af:         { arq: '#3d8bff', tec: '#3d8bff', disc: 'Hidrosanitaria', mep: true, rough: .45, nombre: 'Agua fría' },
  acs:        { arq: '#ff4b3e', tec: '#ff4b3e', disc: 'Hidrosanitaria', mep: true, rough: .45, nombre: 'Agua caliente' },
  san:        { arq: '#c08a52', tec: '#c08a52', disc: 'Hidrosanitaria', mep: true, rough: .6, nombre: 'Sanitaria' },
  sanitarios: { arq: '#f4f4f2', tec: '#f4f4f2', disc: 'Hidrosanitaria', mep: true, rough: .25, nombre: 'Aparatos sanitarios' },
  otras:      { arq: '#8b8f96', tec: '#8b8f96', disc: 'Hidrosanitaria', mep: true, nombre: 'Otras tuberías' },
  rci:        { arq: '#ff7a2f', tec: '#ff7a2f', disc: 'Red contra incendios', mep: true, rough: .45, nombre: 'Rociadores y red RCI' },
  conduit:    { arq: '#2fd0b5', tec: '#2fd0b5', disc: 'Eléctrica', mep: true, rough: .5, nombre: 'Conduit' },
  aparatos:   { arq: '#7fb2ff', tec: '#7fb2ff', disc: 'Eléctrica', mep: true, nombre: 'Tomas y aparatos' },
  luminarias: { arq: '#ffd447', tec: '#ffd447', disc: 'Eléctrica', mep: true, nombre: 'Luminarias' },
  ductos:     { arq: '#c3cbd4', tec: '#c3cbd4', disc: 'Mecánica', mep: true, metal: .5, rough: .4, nombre: 'Ductos' },
};

// ───────────────────────── escena ─────────────────────────
const canvas = document.getElementById('gl') as HTMLCanvasElement;
/** Celular o tableta: se aligera todo para que el modelo cargue y se mueva fluido. */
const MOVIL = matchMedia('(max-width: 900px), (hover: none) and (pointer: coarse)').matches;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !MOVIL, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(MOVIL ? 1.5 : 2, devicePixelRatio));
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.enabled = !MOVIL;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.localClippingEnabled = true;

const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.55;
const hemi = new THREE.HemisphereLight('#dce5ec', '#101d2c', 0.75);
scene.add(hemi);
const sol = new THREE.DirectionalLight('#ffe9c9', 2.6);
sol.position.set(70, 110, 50);
sol.castShadow = true;
sol.shadow.mapSize.set(2048, 2048);
sol.shadow.bias = -0.0005;
Object.assign(sol.shadow.camera, { left: -110, right: 110, top: 110, bottom: -110, near: 10, far: 320 });
scene.add(sol);
const rim = new THREE.DirectionalLight('#5d8fd6', 1.1); rim.position.set(-80, 40, -90); scene.add(rim);
const niebla = new THREE.Fog('#0a2a52', 160, 650);
scene.fog = niebla;

const camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.5, 4000);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.495; controls.minDistance = 4; controls.maxDistance = 900;
controls.enabled = false;

const corte = new THREE.Plane(new THREE.Vector3(0, -1, 0), 999);
const ORO = new THREE.Color('#D5BE91');

// ───────────────────────── estado ─────────────────────────
const S = {
  az: 40, el: 16, dist: 125, tx: 0, ty: 10, tz: 0, shift: 0.14,
  nube: 1, bim: 0, cerr: 0, bordes: 0, explode: 0, corteY: 999, verHasta: 9, ctx: 1, obra: 1, alerta: 0, giro: 0,
};
type Estado = typeof S;
const BASE: Estado = { ...S, nube: 0 };
/** Opacidad animada de cada capa (0 apagada → 1 prendida). */
const L: Record<Disc, number> = { Arquitectura: 1, Estructura: 1, Hidrosanitaria: 0, 'Red contra incendios': 0, 'Eléctrica': 0, 'Mecánica': 0 };
const capasOn = new Set<Disc>(['Arquitectura', 'Estructura']);
const U = { px: 0, py: 0, tpx: 0, tpy: 0, drift: 0 };
let modo: 'cine' | 'libre' = 'cine';

interface Nivel { info: NivelInfo; grupo: THREE.Group; mats: Map<string, THREE.MeshStandardMaterial>; lineas: Map<string, THREE.LineSegments>; lmat: THREE.LineBasicMaterial; caja: THREE.Box3; destino: number; vis: number }
const niveles: Nivel[] = [];
const pickables: THREE.Mesh[] = [];
const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector(s) as T;
const ss = (a: number, b: number, x: number) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// ───────────────────────── texturas ─────────────────────────
const texLoader = new THREE.TextureLoader();
function tex(url: string, m: number, srgb = true) {
  const t = texLoader.load(url);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1 / m, 1 / m);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; t.anisotropy = 8;
  return t;
}
const TEX = {
  ladrillo: { map: tex('ctx/tex_ladrillo_hlf.webp', 1.28), normal: tex('ctx/tex_ladrillo_hlf_n.webp', 1.28, false) },
  teja: { map: tex('ctx/tex_teja.webp', 1.5), normal: null as THREE.Texture | null },
};
function conMezclaDeMapa(m: THREE.MeshStandardMaterial) {
  const u = { value: 1 }; m.userData.uMapa = u;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uMapa = u;
    sh.fragmentShader = sh.fragmentShader
      .replace('void main() {', 'uniform float uMapa;\nvoid main() {')
      .replace('#include <map_fragment>', '#ifdef USE_MAP\n vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n diffuseColor *= mix(vec4(1.0), sampledDiffuseColor, uMapa);\n#endif');
  };
}

// ───────────────────────── contexto urbano ─────────────────────────
const ctxGrupo = new THREE.Group(); scene.add(ctxGrupo);
const ctxMats: THREE.MeshStandardMaterial[] = [];
function dentroDe(poly: [number, number][], x: number, y: number) {
  let r = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) r = !r;
  }
  return r;
}
async function cargarContexto(enu: Manifest['enu']) {
  ctxGrupo.position.set(-enu.e, -enu.z, enu.n);
  const { huella } = await (await fetch('ctx/huella.json')).json() as { huella: [number, number][][] };
  const enHuella = (e: number, n: number) => [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => huella.some((p) => dentroDe(p, e + dx, n + dy)));
  const loader = new GLTFLoader().setDRACOLoader(new DRACOLoader().setDecoderPath('draco/'));
  const SUELO: Record<string, [string, number]> = {
    Terreno: ['ctx/tex_prado.webp', 6], Vias: ['ctx/tex_asfalto.webp', 5], Andenes: ['ctx/tex_anden.webp', 2],
    Separadores: ['ctx/tex_prado.webp', 6], Ciclorrutas: ['ctx/tex_ciclo.webp', 3],
  };
  const tiles = ['T01', 'T02', 'T03', 'T10', 'T11', 'T12', 'T13', 'T20', 'T21', 'T22', 'T23', 'T30', 'T31', 'T32'];
  const archivos = [...Object.keys(SUELO).map((k) => 'suelo_' + k), 'hotel_plazoleta', 'hotel_fachadas', 'hotel_cubiertas', 'torres_vecinas', ...(MOVIL ? [] : tiles.map((t) => 'edificios_' + t))];
  await Promise.all(archivos.map(async (f) => {
    let gltf; try { gltf = await loader.loadAsync(`ctx/${f}.glb`); } catch { return; }
    const recortar = f === 'hotel_fachadas' || f === 'hotel_cubiertas';
    gltf.scene.traverse((o) => {
      const mesh = o as THREE.Mesh; if (!mesh.isMesh) return;
      const g = mesh.geometry as THREE.BufferGeometry; const pos = g.getAttribute('position');
      if (recortar && g.index) {
        const idx = g.index.array; const keep: number[] = [];
        for (let t = 0; t < idx.length; t += 3) {
          let x = 0, z = 0; for (let k = 0; k < 3; k++) { x += pos.getX(idx[t + k]); z += pos.getZ(idx[t + k]); }
          if (!enHuella(x / 3, -z / 3)) keep.push(idx[t], idx[t + 1], idx[t + 2]);
        }
        g.setIndex(keep);
      }
      const clave = f.startsWith('suelo_') ? f.slice(6) : '';
      let m = mesh.material as THREE.MeshStandardMaterial;
      if (clave) {
        const uv = new Float32Array(pos.count * 2);
        for (let i = 0; i < pos.count; i++) { uv[i * 2] = pos.getX(i); uv[i * 2 + 1] = pos.getZ(i); }
        g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
        const [url, esc] = SUELO[clave];
        m = new THREE.MeshStandardMaterial({ map: tex(url, esc), roughness: 0.95, color: '#3b5677' });
        if (clave === 'Vias' || clave === 'Andenes' || clave === 'Ciclorrutas') { m.polygonOffset = true; m.polygonOffsetFactor = -1; m.polygonOffsetUnits = -2; }
        mesh.material = m;
      } else if (f.startsWith('edificios_')) {
        m = new THREE.MeshStandardMaterial({ color: '#2a4a70', roughness: 0.9, flatShading: true });
        mesh.material = m;
      }
      m.userData.baseOp = m.transparent ? m.opacity : 1;
      ctxMats.push(m);
      mesh.receiveShadow = true; mesh.castShadow = !clave && (f.startsWith('hotel') || f === 'torres_vecinas');
      mesh.raycast = () => {};
    });
    ctxGrupo.add(gltf.scene);
  }));
}

// ───────────────────────── carga ─────────────────────────
const cajaMep = new THREE.Box3();
const centroMep = new THREE.Vector3();
let mepCats: (Cat & { elementos: number })[] = [];
function mallaCat(n: Nivel, nombre: string, g: THREE.BufferGeometry, m: THREE.MeshStandardMaterial, def: typeof CATS[string], extra: object = {}) {
  const mesh = new THREE.Mesh(g, m);
  mesh.name = nombre; mesh.castShadow = !def.vidrio && !def.mep; mesh.receiveShadow = !def.mep;
  mesh.userData = { cat: nombre, ...extra };
  n.grupo.add(mesh); n.mats.set(nombre, m);
  const ed = new THREE.LineSegments(new THREE.EdgesGeometry(g, 28), n.lmat);
  ed.raycast = () => {}; ed.visible = false;
  if (!def.mep) { n.grupo.add(ed); n.lineas.set(nombre, ed); }
}
async function cargar() {
  const man: Manifest = await (await fetch('data/manifest.json')).json();
  let hechos = 0;
  await Promise.all(man.niveles.map(async (info) => {
    const buf = await (await fetch('data/' + info.archivo)).arrayBuffer();
    const n: Nivel = { info, grupo: new THREE.Group(), mats: new Map(), lineas: new Map(), lmat: new THREE.LineBasicMaterial({ color: ORO, transparent: true, opacity: 0, depthWrite: false, clippingPlanes: [corte] }), caja: new THREE.Box3(), destino: 0, vis: 1 };
    n.grupo.name = info.nombre;
    for (const c of info.cats) {
      const def = CATS[c.nombre]; if (!def) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(buf, c.vOff, c.vLen), 3));
      if (c.tOff !== undefined) g.setIndex(new THREE.BufferAttribute(new Uint32Array(buf, c.tOff, c.tLen!), 1));
      if (c.uvOff !== undefined) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(buf, c.uvOff, c.uvLen!), 2));
      g.computeBoundingBox(); n.caja.union(g.boundingBox!);
      const pbr = c.nombre === 'muros' ? TEX.ladrillo : c.nombre === 'cubiertas' ? TEX.teja : null;
      const m = new THREE.MeshStandardMaterial({
        color: def.arq, roughness: def.rough ?? (def.vidrio ? 0.08 : 0.88), metalness: def.metal ?? (def.vidrio ? 0.3 : 0),
        flatShading: !pbr, side: THREE.DoubleSide, transparent: !!def.vidrio, opacity: def.vidrio ? 0.5 : 1, clippingPlanes: [corte],
        map: pbr?.map ?? null, normalMap: pbr?.normal ?? null,
      });
      if (pbr) { g.computeVertexNormals(); conMezclaDeMapa(m); }
      m.userData.def = def;
      mallaCat(n, c.nombre, g, m, def, { tris: (c.tLen ?? c.vLen / 3) / 3 });
    }
    niveles[info.i] = n; scene.add(n.grupo);
    hechos++; $('#cargando i b').style.width = (90 * hechos / man.niveles.length) + '%';
  }));
  // redes MEP del Piso 2
  const p2 = niveles.find((n) => n.info.nombre === 'PISO 2');
  try {
    const info = await (await fetch('data/mep.json')).json();
    const buf = await (await fetch('data/mep.bin')).arrayBuffer();
    mepCats = info.cats;
    for (const c of info.cats as (Cat & { elementos: number })[]) {
      const def = CATS[c.nombre]; if (!def || !p2) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(buf, c.vOff, c.vLen), 3));
      g.setIndex(new THREE.BufferAttribute(new Uint32Array(buf, c.tOff!, c.tLen!), 1));
      g.computeVertexNormals(); g.computeBoundingBox(); cajaMep.union(g.boundingBox!);
      if (['af', 'acs', 'san', 'rci', 'conduit'].includes(c.nombre)) {
        const p = g.getAttribute('position'); let sx = 0, sz = 0, k = 0;
        for (let i = 0; i < p.count; i++) if (p.getY(i) < 6) { sx += p.getX(i); sz += p.getZ(i); k++; }
        if (k) { centroMep.x += sx; centroMep.z += sz; centroMep.y += k; }
      }
      const m = new THREE.MeshStandardMaterial({ color: def.arq, roughness: def.rough ?? 0.6, metalness: def.metal ?? 0.05, clippingPlanes: [corte], transparent: true, opacity: 0, emissive: new THREE.Color(def.arq).multiplyScalar(0.55) });
      m.userData.def = def;
      mallaCat(p2, c.nombre, g, m, def, { elementos: c.elementos, tris: c.tLen! / 3, mep: true });
      p2.grupo.children[p2.grupo.children.length - 1].renderOrder = 2;
    }
  } catch (e) { console.warn('mep', e); }
  if (centroMep.y > 0) centroMep.set(centroMep.x / centroMep.y, 0, centroMep.z / centroMep.y);
  crearNubes(); buscarPuntoCritico();
  niveles.forEach((n, i) => {
    n.destino = i * 9 + (n.info.nombre === 'CUBIERTA' ? 8 : 0);
    n.grupo.children.forEach((o) => { if ((o as THREE.Mesh).isMesh) { o.userData.nivel = i; pickables.push(o as THREE.Mesh); } });
  });
  return man;
}

// ───────────────────────── nube de escaneo + punto crítico ─────────────────────────
const nubes: THREE.Points[] = [];
function crearNubes() {
  const fuente = ['muros', 'ventanas', 'losas', 'cubiertas', 'paneles', 'columnas'];
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), ab = new THREE.Vector3(), ac = new THREE.Vector3();
  niveles.forEach((n) => {
    const pts: number[] = [];
    n.grupo.children.forEach((o) => {
      const mesh = o as THREE.Mesh; if (!mesh.isMesh || !fuente.includes(mesh.name)) return;
      const g = mesh.geometry; const p = g.getAttribute('position'); const idx = g.index;
      const nt = idx ? idx.count / 3 : p.count / 3;
      for (let t = 0; t < nt; t++) {
        const ia = idx ? idx.getX(t * 3) : t * 3, ib = idx ? idx.getX(t * 3 + 1) : t * 3 + 1, ic = idx ? idx.getX(t * 3 + 2) : t * 3 + 2;
        a.fromBufferAttribute(p, ia); b.fromBufferAttribute(p, ib); c.fromBufferAttribute(p, ic);
        let k = ab.subVectors(b, a).cross(ac.subVectors(c, a)).length() / 2 * (MOVIL ? 0.8 : 2.2);
        while (k > 0) {
          if (k < 1 && Math.random() > k) break;
          let u = Math.random(), v = Math.random(); if (u + v > 1) { u = 1 - u; v = 1 - v; }
          pts.push(a.x + (b.x - a.x) * u + (c.x - a.x) * v, a.y + (b.y - a.y) * u + (c.y - a.y) * v, a.z + (b.z - a.z) * u + (c.z - a.z) * v);
          k--;
        }
      }
    });
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const m = new THREE.PointsMaterial({ color: '#e6cf9c', size: 0.16, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
    const nube = new THREE.Points(g, m); nube.raycast = () => {}; nube.visible = false;
    n.grupo.add(nube); nubes.push(nube);
  });
}
const critico = { p: new THREE.Vector3(), d: Infinity, ok: false };
let marcaCritico: THREE.Mesh | null = null;
function buscarPuntoCritico() {
  const p2 = niveles.find((n) => n.info.nombre === 'PISO 2'); if (!p2) return;
  const get = (nombre: string) => p2.grupo.children.find((o) => o.name === nombre && (o as THREE.Mesh).isMesh) as THREE.Mesh | undefined;
  const rci = get('rci'), con = get('conduit'); if (!rci || !con) return;
  const C = 0.25; const celdas = new Map<string, number[]>();
  const pc = con.geometry.getAttribute('position');
  for (let i = 0; i < pc.count; i++) {
    const k = `${Math.floor(pc.getX(i) / C)},${Math.floor(pc.getY(i) / C)},${Math.floor(pc.getZ(i) / C)}`;
    (celdas.get(k) ?? celdas.set(k, []).get(k)!).push(i);
  }
  const pr = rci.geometry.getAttribute('position'); const v = new THREE.Vector3(), w = new THREE.Vector3();
  for (let i = 0; i < pr.count; i++) {
    v.fromBufferAttribute(pr, i); if (v.y > 6.5) continue;
    const cx = Math.floor(v.x / C), cy = Math.floor(v.y / C), cz = Math.floor(v.z / C);
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
      const l = celdas.get(`${cx + dx},${cy + dy},${cz + dz}`); if (!l) continue;
      for (const j of l) { w.fromBufferAttribute(pc, j); const d = v.distanceTo(w); if (d < critico.d) { critico.d = d; critico.p.copy(v).add(w).multiplyScalar(0.5); critico.ok = true; } }
    }
  }
  if (!critico.ok) return;
  marcaCritico = new THREE.Mesh(new THREE.SphereGeometry(0.35, 32, 16), new THREE.MeshBasicMaterial({ color: '#e0533f', transparent: true, opacity: 0, depthTest: false }));
  marcaCritico.position.copy(critico.p); marcaCritico.renderOrder = 10; marcaCritico.raycast = () => {};
  p2.grupo.add(marcaCritico);
}

// ───────────────────────── aplicar estado ─────────────────────────
const tmpC = new THREE.Color(), tmpT = new THREE.Color();
const HOV = { nivel: -1, cat: '', v: 0, meta: 0 };
function aplicar(st: Estado) {
  const e = st.explode, nTop = niveles.length - 1, N = niveles.length;
  const tiempo = performance.now() / 1000;
  niveles.forEach((n, i) => {
    const w = i === nTop ? ss(0.2, 0.45, e) : i >= 3 ? ss(0.45, 0.7, e) : ss(0.7, 1, e);
    n.grupo.position.y = n.destino * w;
    n.vis = THREE.MathUtils.clamp(st.verHasta - i + 1, 0, 1);
    n.grupo.visible = n.vis > 0.01;
    const hecho = ss(i / N, (i + 1) / N, st.obra);
    const bimN = Math.max(st.bim, 1 - hecho);
    const destello = Math.sin(Math.PI * hecho) * (st.obra < 0.999 ? 1 : 0);
    const solido = 1 - st.nube;
    for (const [cat, m] of n.mats) {
      const def = m.userData.def as typeof CATS[string];
      const capa = L[def.disc];
      m.color.copy(tmpC.set(def.arq)).lerp(tmpT.set(def.tec), def.mep ? 0 : bimN);
      let op = def.vidrio ? THREE.MathUtils.lerp(0.5, 0.4, bimN) : 1;
      if (def.cerr || def.disc === 'Arquitectura') op *= THREE.MathUtils.lerp(1, def.vidrio ? 0.18 : 0.1, st.cerr);
      op *= capa * n.vis * solido;
      m.opacity = op; m.transparent = op < 0.999; m.depthWrite = op > 0.6;
      const hov = HOV.nivel === i && HOV.cat === cat ? HOV.v * (0.75 + 0.25 * Math.sin(tiempo * 7)) : 0;
      if (!def.mep) m.emissive.copy(ORO).multiplyScalar(0.55 * destello + 0.7 * hov);
      else m.emissive.set(def.arq).multiplyScalar(0.55 + 1.2 * hov);
      m.visible = op > 0.005;
      if (m.userData.uMapa) { m.userData.uMapa.value = 1 - bimN; m.normalScale.setScalar(1 - bimN); }
      const ed = n.lineas.get(cat);
      if (ed) {
        const lo = Math.max(st.bordes, 0.5 * (1 - hecho) * solido) * n.vis * capa * (def.disc === 'Arquitectura' ? 1 - 0.5 * st.cerr : 1);
        ed.visible = lo > 0.01;
      }
    }
    n.lmat.opacity = Math.max(st.bordes, 0.5 * (1 - hecho) * (1 - st.nube)) * n.vis;
    const nube = nubes[i];
    if (nube) { const pm = nube.material as THREE.PointsMaterial; pm.opacity = st.nube * n.vis * (0.75 + 0.25 * Math.sin(tiempo * 2 + i)); nube.visible = pm.opacity > 0.01; }
  });
  if (marcaCritico) {
    const mm = marcaCritico.material as THREE.MeshBasicMaterial;
    mm.opacity = st.alerta * (0.55 + 0.35 * Math.sin(tiempo * 6)); marcaCritico.visible = mm.opacity > 0.01;
    marcaCritico.scale.setScalar(1 + 0.4 * Math.sin(tiempo * 3));
  }
  corte.constant = st.corteY;
  ctxGrupo.visible = st.ctx > 0.01;
  for (const m of ctxMats) { const op = m.userData.baseOp * st.ctx; m.opacity = op; m.transparent = op < 0.999; m.depthWrite = op > 0.5; }
}
const objetivo = new THREE.Vector3();
function camaraDesde(st: Estado) {
  objetivo.set(st.tx, st.ty, st.tz);
  const az = THREE.MathUtils.degToRad(st.az + st.giro), el = THREE.MathUtils.degToRad(st.el);
  const d = st.dist;
  camera.position.set(objetivo.x + d * Math.cos(el) * Math.sin(az), objetivo.y + d * Math.sin(el), objetivo.z + d * Math.cos(el) * Math.cos(az));
  camera.fov = 35; camera.near = Math.max(0.3, d * 0.01); camera.far = d * 8 + 600;
  camera.updateProjectionMatrix(); camera.lookAt(objetivo);
  const sh = innerWidth < 900 ? 0 : st.shift;
  if (Math.abs(sh) > 0.001) camera.setViewOffset(innerWidth, innerHeight, -innerWidth * sh, innerWidth < 900 ? innerHeight * 0.12 : 0, innerWidth, innerHeight); else camera.clearViewOffset();
}

// ───────────────────────── capas ─────────────────────────
function setCapas(lista: Disc[], dur = 1.1) {
  capasOn.clear(); lista.forEach((d) => capasOn.add(d));
  for (const c of CAPAS) gsap.to(L, { [c.d]: capasOn.has(c.d) ? 1 : 0, duration: dur, ease: 'power2.inOut', overwrite: 'auto' });
  pintarDock();
}
function pintarDock() {
  document.querySelectorAll<HTMLElement>('#capas .capa').forEach((b) => b.classList.toggle('on', capasOn.has(b.dataset.d as Disc)));
}
const MEP_D: Disc[] = ['Hidrosanitaria', 'Red contra incendios', 'Eléctrica', 'Mecánica'];
let avisoT: number | undefined;
function avisarCapa(d: Disc, on: boolean) {
  if (!MOVIL) return;
  let el = document.getElementById('avisoCapa');
  if (!el) { el = document.createElement('div'); el.id = 'avisoCapa'; document.body.appendChild(el); }
  const c = CAPAS.find((x) => x.d === d)!;
  el.innerHTML = `<i style="background:${c.color}"></i>${d} · ${on ? 'prendida' : 'apagada'}`;
  el.classList.add('on'); clearTimeout(avisoT); avisoT = window.setTimeout(() => el!.classList.remove('on'), 1600);
}
function toggleCapa(d: Disc) {
  const on = !capasOn.has(d);
  avisarCapa(d, on);
  on ? capasOn.add(d) : capasOn.delete(d);
  gsap.to(L, { [d]: on ? 1 : 0, duration: 0.9, ease: 'power2.inOut', overwrite: 'auto' });
  // las redes están en el Piso 2 y son finas: al prender una se abre "rayos X" y se acerca al piso
  if (on && MEP_D.includes(d)) {
    if (modo === 'libre') vista('p2', false);
    else gsap.to(S, { cerr: Math.max(S.cerr, 0.9), duration: 1 });
  }
  if (on && d === 'Estructura' && !capasOn.has('Arquitectura')) gsap.to(S, { bim: 1, duration: 1 });
  pintarDock();
}

// ───────────────────────── escenas (una por sección) ─────────────────────────
type Escena = { st: Partial<Estado>; capas: Disc[]; velo?: 'centro'; enter?: () => void };
let ESC: Record<string, Escena> = {};
const PASOS_CAPAS: { d: Disc; st: Partial<Estado>; capas: Disc[] }[] = [];
function definirEscenas() {
  const ip2 = niveles.findIndex((n) => n.info.nombre === 'PISO 2');
  const e2 = niveles[ip2]?.info.elev ?? 3;
  const c2 = niveles[ip2].caja.getCenter(new THREE.Vector3());
  const cm = cajaMep.isEmpty() ? c2 : centroMep;
  const cp = critico.ok ? critico.p : cm;
  const P2: Partial<Estado> = { verHasta: ip2, corteY: e2 + 2.75, cerr: 0.92, bim: 1, bordes: 0.18, ctx: 0, ty: e2 + 1.5, tx: cm.x, tz: cm.z, explode: 0, nube: 0, obra: 1 };
  const ARQ: Disc[] = ['Arquitectura', 'Estructura'];
  ESC = {
    hero: { st: { az: 38, el: 15, dist: 158, ty: 12, tx: 0, tz: 0, ctx: 1, shift: 0.24 }, capas: ARQ },
    problema: { st: { bim: 1, bordes: 0.55, cerr: 0.55, az: -40, el: 22, dist: 150, ctx: 0.12, shift: 0 }, capas: ['Arquitectura', 'Estructura', 'Hidrosanitaria', 'Eléctrica', 'Red contra incendios'], velo: 'centro' },
    escaneo: { st: { nube: 1, bim: 1, ctx: 0, az: 70, el: 16, dist: 108, shift: 0.16 }, capas: ARQ },
    critico: { st: { ...P2, tx: cp.x, ty: cp.y, tz: cp.z, dist: 8, el: 34, az: 40, alerta: 1, shift: 0.18 }, capas: ['Arquitectura', 'Red contra incendios', 'Eléctrica'] },
    etapas: { st: { bim: 0, ctx: 0.6, az: -50, el: 26, dist: 170, ty: 14, shift: 0, cerr: 0 }, capas: ARQ, enter: () => { gsap.fromTo(S, { obra: 0 }, { obra: 1, duration: 5, ease: 'power1.inOut', overwrite: false }); } },
    obra: { st: { verHasta: ip2, corteY: e2 + 1.4, bim: 1, bordes: 0.6, cerr: 0, ctx: 0, el: 62, dist: 82, az: 10, tx: c2.x, tz: c2.z, ty: e2, shift: 0.2 }, capas: ARQ },
    interior: { st: { bim: 1, bordes: 0.25, ctx: 0.1, az: 140, el: 20, dist: 220, ty: 10, shift: 0 }, capas: ARQ, velo: 'centro' },
    planos: { st: { verHasta: ip2, corteY: e2 + 1.4, bim: 1, bordes: 0.7, cerr: 0, ctx: 0, el: 82, dist: 120, az: 0, tx: c2.x, tz: c2.z, ty: e2, shift: 0 }, capas: ARQ, velo: 'centro' },
    actores: { st: { explode: 1, bim: 1, bordes: 0.45, ctx: 0, az: 95, el: 24, dist: 190, ty: 30, shift: 0 }, capas: ['Arquitectura', 'Estructura', 'Hidrosanitaria', 'Eléctrica'], velo: 'centro' },
    honorarios: { st: { bim: 1, bordes: 0.3, ctx: 0.15, az: 200, el: 18, dist: 210, ty: 10, shift: 0 }, capas: ARQ, velo: 'centro' },
    gemelo: { st: { cerr: 0.8, bim: 0, bordes: 0.15, ctx: 0.25, az: 55, el: 30, dist: 78, tx: c2.x, tz: c2.z, ty: 8, shift: 0.18 }, capas: CAPAS.map((c) => c.d) },
    cierre: { st: { az: 25, el: 12, dist: 140, ctx: 1, ty: 10, tx: 0, tz: 0, shift: 0 }, capas: ARQ, velo: 'centro' },
  };
  const camP2 = [{ az: 14, el: 55, dist: 66 }, { az: 60, el: 44, dist: 58 }, { az: -30, el: 50, dist: 62 }, { az: 100, el: 40, dist: 64 }];
  PASOS_CAPAS.push(
    { d: 'Arquitectura', st: { az: 30, el: 18, dist: 175, ty: 10, tx: 0, tz: 0, ctx: 0.5, bim: 0, cerr: 0, bordes: 0, verHasta: 9, corteY: 999, explode: 0, shift: 0.03 }, capas: ['Arquitectura'] },
    { d: 'Estructura', st: { az: -35, el: 24, dist: 185, ty: 16, tx: 0, tz: 0, ctx: 0, bim: 1, cerr: 0, bordes: 0.4, verHasta: 9, corteY: 999, explode: 0.55, shift: 0.03 }, capas: ['Estructura'] },
    ...MEP_D.map((d, k) => ({ d, st: { ...P2, ...camP2[k], shift: 0.03 }, capas: ['Arquitectura', 'Estructura', d] as Disc[] })),
  );
}
let introHecha = false;
function irA(nombre: string) {
  const e = ESC[nombre]; if (!e || modo !== 'cine') return;
  if (nombre === 'hero' && !introHecha) { introHecha = true; return; }
  gsap.to(S, { ...BASE, alerta: 0, ...e.st, duration: 1.9, ease: 'power3.inOut', overwrite: 'auto' });
  setCapas(e.capas);
  document.body.dataset.velo = e.velo ?? '';
  e.enter?.();
}

// ───────────────────────── sección de capas (fijada) ─────────────────────────
let pasoCapa = -1;
function construirCapas() {
  const elem = (c: Disc) => mepCats.filter((m) => CATS[m.nombre]?.disc === c);
  $('#pasosCapas').innerHTML = CAPAS.map((c, i) => `<li data-i="${i}" style="--c:${c.color}"><i></i><span class="t">${c.d}</span><span class="p"><b></b></span></li>`).join('');
  $('#tarjetasCapa').innerHTML = CAPAS.map((c, i) => {
    let filas: string;
    if (i < 2) {
      const cats = Object.entries(CATS).filter(([, v]) => v.disc === c.d).map(([k, v]) => {
        const tris = niveles.reduce((s, n) => s + (n.info.cats.find((x) => x.nombre === k) ? 1 : 0), 0);
        return tris ? `<li>${v.nombre}<b>${tris} niveles</b></li>` : '';
      });
      filas = cats.join('');
    } else filas = elem(c.d).map((m) => `<li>${CATS[m.nombre].nombre}<b>${m.elementos.toLocaleString('es-CO')} elem.</b></li>`).join('');
    return `<div class="glass tcapa" style="--c:${c.color}"><span class="num">CAPA 0${i + 1} / 06</span><h3><i></i>${c.d}</h3><p>${c.texto}</p><ul>${filas}</ul></div>`;
  }).join('');
  const tarjetas = [...document.querySelectorAll<HTMLElement>('.tcapa')];
  const barras = [...document.querySelectorAll<HTMLElement>('#pasosCapas .p b')];
  const activar = (i: number) => {
    if (i === pasoCapa) return;
    const prev = pasoCapa; pasoCapa = i;
    document.querySelectorAll('#pasosCapas li').forEach((li, k) => li.classList.toggle('on', k === i));
    if (prev >= 0) gsap.to(tarjetas[prev], { autoAlpha: 0, rotateY: i > prev ? -35 : 35, x: i > prev ? -120 : 120, z: -200, filter: 'blur(10px)', duration: 0.6, ease: 'power2.in', overwrite: true });
    gsap.fromTo(tarjetas[i], { autoAlpha: 0, rotateY: i > prev ? 40 : -40, x: i > prev ? 160 : -160, z: -260, filter: 'blur(14px)' },
      { autoAlpha: 1, rotateY: 0, x: 0, z: 0, filter: 'blur(0px)', duration: 0.95, ease: 'power3.out', delay: prev >= 0 ? 0.2 : 0, overwrite: true });
    gsap.fromTo(tarjetas[i].querySelectorAll('li'), { autoAlpha: 0, x: 30 }, { autoAlpha: 1, x: 0, stagger: 0.06, duration: 0.5, delay: 0.5 });
    if (modo === 'cine') { const p = PASOS_CAPAS[i]; gsap.to(S, { ...BASE, ...p.st, duration: 1.7, ease: 'power3.inOut', overwrite: 'auto' }); setCapas(p.capas); document.body.dataset.velo = ''; }
  };
  const stc = ScrollTrigger.create({
    trigger: '.capas-sec', start: 'top top', end: 'bottom bottom',
    onUpdate: (self) => {
      const f = self.progress * CAPAS.length; const i = Math.min(CAPAS.length - 1, Math.floor(f));
      barras.forEach((b, k) => (b.style.width = (THREE.MathUtils.clamp(f - k, 0, 1) * 100) + '%'));
      if (self.isActive) activar(i);
    },
    onEnter: () => { pasoCapa = -1; activar(0); },
    onEnterBack: () => { const i = pasoCapa; pasoCapa = -1; activar(Math.max(0, i)); },
  });
  $('#pasosCapas').addEventListener('click', (ev) => {
    const li = (ev.target as HTMLElement).closest<HTMLElement>('li'); if (!li) return;
    const i = +li.dataset.i!; window.scrollTo({ top: stc.start + (stc.end - stc.start) * ((i + 0.5) / CAPAS.length), behavior: 'smooth' });
  });
}

// ───────────────────────── modo libre ─────────────────────────
let scrollGuardado = 0;
function volar(pos: THREE.Vector3, tgt: THREE.Vector3, dur = 1.5) {
  gsap.to(camera.position, { x: pos.x, y: pos.y, z: pos.z, duration: dur, ease: 'power2.inOut' });
  gsap.to(controls.target, { x: tgt.x, y: tgt.y, z: tgt.z, duration: dur, ease: 'power2.inOut' });
}
function entrarLibre() {
  if (modo === 'libre') return;
  modo = 'libre'; document.body.dataset.modo = 'libre';
  scrollGuardado = scrollY; document.documentElement.style.overflow = 'hidden';
  camera.clearViewOffset();
  controls.target.copy(objetivo); controls.enabled = true; controls.update();
  gsap.to(S, { nube: 0, alerta: 0, obra: 1, explode: 0, duration: 0.8 });
  vista('ext');
}
function salirLibre() {
  if (modo === 'cine') return;
  modo = 'cine'; document.body.dataset.modo = 'cine';
  controls.enabled = false; $('#ficha').classList.remove('on');
  document.documentElement.style.overflow = '';
  window.scrollTo(0, scrollGuardado);
  const activa = [...document.querySelectorAll<HTMLElement>('[data-escena]')].find((s) => { const r = s.getBoundingClientRect(); return r.top <= innerHeight / 2 && r.bottom >= innerHeight / 2; });
  if (activa?.dataset.escena === 'capas') { const i = pasoCapa; pasoCapa = -1; ScrollTrigger.refresh(); if (i >= 0) { const p = PASOS_CAPAS[i]; gsap.to(S, { ...BASE, ...p.st, duration: 1.5 }); setCapas(p.capas); } }
  else irA(activa?.dataset.escena ?? 'hero');
}
function vista(v: string, capas = true) {
  const ip2 = niveles.findIndex((n) => n.info.nombre === 'PISO 2'); const e2 = niveles[ip2].info.elev;
  const cm = cajaMep.isEmpty() ? niveles[ip2].caja.getCenter(new THREE.Vector3()) : centroMep;
  if (v === 'salir') return salirLibre();
  if (v === 'ext') { gsap.to(S, { ...BASE, ctx: 1, duration: 1.2 }); if (capas) setCapas(['Arquitectura', 'Estructura']); volar(new THREE.Vector3(85, 55, 95), new THREE.Vector3(0, 9, 0)); }
  if (v === 'rx') { gsap.to(S, { cerr: 0.85, bim: 1, bordes: 0.35, ctx: 0.2, verHasta: 9, corteY: 999, explode: 0, duration: 1.2 }); if (capas) setCapas(CAPAS.map((c) => c.d)); }
  if (v === 'exp') { const abrir = S.explode < 0.5; gsap.to(S, { explode: abrir ? 1 : 0, verHasta: 9, corteY: 999, duration: 2, ease: 'power1.inOut' }); volar(new THREE.Vector3(110, abrir ? 90 : 60, 120), new THREE.Vector3(0, abrir ? 28 : 9, 0), 2); }
  if (v === 'p2') { gsap.to(S, { verHasta: ip2, corteY: e2 + 2.75, cerr: 0.9, bim: 1, bordes: 0.2, ctx: 0, explode: 0, duration: 1.2 }); volar(new THREE.Vector3(cm.x + 22, e2 + 30, cm.z + 26), new THREE.Vector3(cm.x, e2 + 1.5, cm.z)); }
}

// ───────────────────────── selección (modo libre) ─────────────────────────
const ray = new THREE.Raycaster(); const ptr = new THREE.Vector2();
let downAt = 0;
canvas.addEventListener('pointerdown', () => { downAt = performance.now(); });
// pasar el cursor por el modelo: el elemento se enciende y aparece su nombre
const tip = document.createElement('div'); tip.id = 'tip3d'; document.body.appendChild(tip);
let ultimoRay = 0;
let pendiente: number | undefined;
addEventListener('pointermove', function mover(ev: PointerEvent) {
  const ahora = performance.now(); if (ahora - ultimoRay < 120) { tip.style.transform = `translate(${ev.clientX + 16}px, ${ev.clientY + 16}px)`; clearTimeout(pendiente); pendiente = window.setTimeout(() => mover(ev), 130); return; }
  ultimoRay = ahora;
  const encima = (ev.target as Element).closest?.('.txt, .glass, button, a, .chip, .carrusel, .actores, .nube-chips, #dock, #top, .etapas, #lightbox, .flotantes .fcard, .hub, .diag, .gantt, .flujo, .arbol, .alerta, .total, .grafico, .resp, .linea, .frente');
  if (matchMedia('(hover: none)').matches || (modo === 'cine' && encima) || !niveles.length) { HOV.meta = 0; tip.classList.remove('on'); return; }
  ptr.set(ev.clientX / innerWidth * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(ptr, camera);
  const h = ray.intersectObjects(pickables.filter((m) => (m.material as THREE.Material).visible && (m.material as THREE.MeshStandardMaterial).opacity > 0.25), false).find((x) => x.point.y <= corte.constant + 0.01);
  if (!h) { HOV.meta = 0; tip.classList.remove('on'); return; }
  const nv = h.object.userData.nivel as number, cat = h.object.userData.cat as string;
  if (nv !== HOV.nivel || cat !== HOV.cat) { HOV.nivel = nv; HOV.cat = cat; HOV.v = 0; dispatchEvent(new CustomEvent('destello', { detail: { x: ev.clientX, y: ev.clientY } })); }
  HOV.meta = 1;
  tip.innerHTML = `<b>${CATS[cat].nombre}</b>${niveles[nv].info.nombre} · ${CATS[cat].disc}`;
  tip.style.transform = `translate(${ev.clientX + 16}px, ${ev.clientY + 16}px)`; tip.classList.add('on');
}, { passive: true });

canvas.addEventListener('pointerup', (ev) => {
  if (modo !== 'libre' || performance.now() - downAt > 300) return;
  ptr.set(ev.clientX / innerWidth * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(ptr, camera);
  const h = ray.intersectObjects(pickables.filter((m) => (m.material as THREE.Material).visible && (m.material as THREE.Material).opacity > 0.3), false).find((x) => x.point.y <= corte.constant + 0.01);
  if (!h) { $('#ficha').classList.remove('on'); return; }
  const n = niveles[h.object.userData.nivel]; const cat = h.object.userData.cat as string; const def = CATS[cat];
  $('#ficha').innerHTML = `<h4>${def.nombre}</h4><dl><dt>Capa</dt><dd>${def.disc}</dd><dt>Nivel</dt><dd>${n.info.nombre} (+${n.info.elev.toFixed(2)} m)</dd>
    <dt>Cota</dt><dd>${(h.point.y - n.grupo.position.y).toFixed(2)} m</dd>
    <dt>Fuente</dt><dd>${def.mep ? '1001_Hotel_la_fotona_redes.rvt · ' + h.object.userData.elementos + ' elementos' : 'HLF_P2-P6.rvt'}</dd></dl>`;
  $('#ficha').classList.add('on');
});

// ───────────────────────── UI ─────────────────────────
function ui() {
  $('#capas').innerHTML = CAPAS.map((c) => `<button class="capa" data-d="${c.d}" style="--c:${c.color}" aria-label="${c.d}" title="${c.d}">${ico(ICONO_CAPA[c.d])}${c.corto}</button>`).join('');
  $('#capas').addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.capa'); if (b) toggleCapa(b.dataset.d as Disc); });
  pintarDock();
  document.querySelectorAll('[data-explorar]').forEach((b) => b.addEventListener('click', entrarLibre));
  document.querySelectorAll<HTMLElement>('#vistasLibres button').forEach((b) => b.addEventListener('click', () => vista(b.dataset.v!)));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') salirLibre(); });
  addEventListener('pointermove', (ev) => { U.tpx = ev.clientX / innerWidth - 0.5; U.tpy = ev.clientY / innerHeight - 0.5; });
  // escenas por sección: al entrar (bajando o subiendo) el modelo se transforma
  document.querySelectorAll<HTMLElement>('[data-escena]').forEach((sec) => {
    const n = sec.dataset.escena!; if (n === 'capas') return;
    ScrollTrigger.create({ trigger: sec, start: 'top 55%', end: 'bottom 45%', onEnter: () => irA(n), onEnterBack: () => irA(n) });
  });
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (s) => { $('#barra i').style.width = (s.progress * 100) + '%'; U.drift = s.progress; } });
}

// ───────────────────────── bucle ─────────────────────────
addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });
let t0 = performance.now();
function frame() {
  if (document.hidden) { requestAnimationFrame(frame); return; }
  const now = performance.now(); const dt = Math.min(0.05, (now - t0) / 1000); t0 = now;
  HOV.v += (HOV.meta - HOV.v) * 0.12;
  const E = { ...S };
  if (modo === 'cine') {
    U.px += (U.tpx - U.px) * 0.04; U.py += (U.tpy - U.py) * 0.04;
    S.giro += dt * 1.6; // órbita lenta permanente: nada queda quieto
    E.az += U.px * 8 + U.drift * 40; E.el = THREE.MathUtils.clamp(E.el - U.py * 4, 3, 85);
    aplicar(E); camaraDesde(E);
  } else { aplicar(E); controls.update(); }
  // etiqueta del punto crítico
  if (marcaCritico) {
    const el = $('#etqCritico');
    const p = marcaCritico.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.7, 0)).project(camera);
    el.style.opacity = String(modo === 'cine' ? S.alerta : 0);
    el.style.left = ((p.x + 1) / 2 * innerWidth) + 'px'; el.style.top = ((1 - p.y) / 2 * innerHeight - 10) + 'px';
  }
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

(async () => {
  const man = await cargar();
  definirEscenas();
  const etq = document.createElement('div'); etq.className = 'etq'; etq.id = 'etqCritico'; etq.innerHTML = 'Interferencia · RCI ' + ico('cruce') + ' conduit'; $('#etiquetas').appendChild(etq);
  if (critico.ok) { const txt = (critico.d * 100).toFixed(1).replace('.', ',') + ' cm'; $('#dCritico').textContent = txt; const d2 = document.getElementById('dCritico2'); if (d2) d2.textContent = txt; }
  iniciarHero();
  ui();
  construirCapas();
  pintarIconos();
  iniciarCursor();
  iniciarAnimaciones();
  iniciarHonorarios();
  iniciarObra();
  iniciarActores();
  iniciarCarrusel((s) => { // el modelo acompaña la especialidad del carrusel
    if (modo !== 'cine') return;
    if (s === 'arq') { setCapas(['Arquitectura', 'Estructura']); gsap.to(S, { cerr: 0, bordes: 0.7, duration: 1 }); }
    else { setCapas(['Arquitectura', 'Hidrosanitaria']); gsap.to(S, { cerr: 0.92, bordes: 0.2, dist: 60, el: 70, duration: 1.4, ease: 'power3.inOut' }); }
  });
  $('#cargando i b').style.width = '100%';
  setTimeout(() => $('#cargando').classList.add('fin'), 250);
  frame();
  // apertura: la nube de escaneo se solidifica en el edificio
  Object.assign(S, { ...ESC.hero.st, nube: 1 });
  gsap.from(S, { az: 120, el: 58, dist: 260, ty: 22, duration: 5, ease: 'power3.inOut', delay: 0.2 });
  gsap.to(S, { nube: 0, duration: 3.4, delay: 1.4, ease: 'power2.inOut' });
  setCapas(['Arquitectura', 'Estructura'], 0);
  cargarContexto(man.enu).catch((e) => console.warn('contexto', e));
  ScrollTrigger.refresh();
})();
