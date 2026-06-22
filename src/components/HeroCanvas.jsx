import { useEffect, useRef } from 'react';

// Ported from the design's initHero(): a rotating Fibonacci-sphere wireframe that
// reacts to the mouse, drawn on a DPR-aware canvas with the accent colour.
export default function HeroCanvas({ nodeDensity = 110 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const accentRgb = () => {
      let v = '';
      try {
        v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      } catch (e) {
        /* noop */
      }
      v = v || '#a855f7';
      if (v[0] === '#') {
        let hex = v.slice(1);
        if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
        const n = parseInt(hex, 16);
        if (!isNaN(n)) return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
      }
      return [168, 85, 247];
    };

    let pts = [];
    let edges = [];
    const build = () => {
      const N = Math.max(40, Math.min(180, nodeDensity || 110));
      pts = [];
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const th = Math.PI * (3 - Math.sqrt(5)) * i;
        pts.push({ x: Math.cos(th) * r, y, z: Math.sin(th) * r });
      }
      edges = [];
      for (let i = 0; i < N; i++)
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dz = pts[i].z - pts[j].z;
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 0.62) edges.push([i, j]);
        }
    };
    build();

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let tmx = 0;
    let tmy = 0;
    let smx = 0;
    let smy = 0;
    const onMove = (e) => {
      tmx = e.clientX / window.innerWidth - 0.5;
      tmy = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let spin = 0;
    let raf;
    const project = (p, ry, rx) => {
      const cyy = Math.cos(ry);
      const syy = Math.sin(ry);
      const cxx = Math.cos(rx);
      const sxx = Math.sin(rx);
      const x1 = p.x * cyy - p.z * syy;
      const z1 = p.x * syy + p.z * cyy;
      const y1 = p.y * cxx - z1 * sxx;
      const z2 = p.y * sxx + z1 * cxx;
      return { x: x1, y: y1, z: z2 };
    };

    const draw = () => {
      if (!w || !h) {
        raf = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, w, h);
      spin += 0.0016;
      smx += (tmx - smx) * 0.05;
      smy += (tmy - smy) * 0.05;
      const ry = spin + smx * 1.15;
      const rx = smy * 0.85;
      const R = Math.min(w, h) * 0.42;
      const cxp = w > 900 ? w * 0.64 : w * 0.5;
      const cyp = h * 0.5;
      const rgb = accentRgb();
      const pr = pts.map((p) => project(p, ry, rx));

      for (let k = 0; k < edges.length; k++) {
        const a = pr[edges[k][0]];
        const b = pr[edges[k][1]];
        const za = (a.z + 1) / 2;
        const zb = (b.z + 1) / 2;
        const al = ((za + zb) / 2) * 0.5;
        ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${al.toFixed(3)})`;
        ctx.lineWidth = 0.5 + ((za + zb) / 2) * 0.7;
        ctx.beginPath();
        ctx.moveTo(cxp + a.x * R, cyp + a.y * R);
        ctx.lineTo(cxp + b.x * R, cyp + b.y * R);
        ctx.stroke();
      }

      for (let k = 0; k < pr.length; k++) {
        const p = pr[k];
        const z = (p.z + 1) / 2;
        const x = cxp + p.x * R;
        const y = cyp + p.y * R;
        const sz = 1.0 + z * 2.6;
        if (z > 0.7) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.09)`;
          ctx.arc(x, y, sz * 4.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${(0.32 + z * 0.6).toFixed(3)})`;
        ctx.arc(x, y, sz, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [nodeDensity]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[2] h-full w-full" />;
}
