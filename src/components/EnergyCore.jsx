/* Signature motion #2 — the living red energy core.
   Canvas 2D particle sphere: mouse parallax, scroll rotation, sparks, pulse.
   On mobile / reduced-motion it renders a static glowing SVG instead (~0 cost). */

   import { useEffect, useRef } from "react";
   import { isMobile, reducedMotion, velocity } from "../lib/motion";
   
   export default function EnergyCore() {
     const ref = useRef(null);
   
     useEffect(() => {
       if (isMobile() || reducedMotion()) return;
       const cv = ref.current;
       if (!cv) return;
       const ctx = cv.getContext("2d");
   
       let P = [], sparks = [], rot = 0, raf;
       let tmx = 0, tmy = 0, pmx = 0, pmy = 0;
       const dpr = Math.min(window.devicePixelRatio || 1, 2);
   
       const init = () => {
         const r = cv.getBoundingClientRect();
         cv.width = r.width * dpr;
         cv.height = r.height * dpr;
         ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
         const N = 520;
         const R = Math.min(r.width, r.height) * 0.31;
         P = [];
         for (let i = 0; i < N; i++) {
           const t = Math.acos(1 - (2 * (i + 0.5)) / N);
           const p = Math.PI * (1 + Math.sqrt(5)) * i;
           P.push({
             x: R * Math.sin(t) * Math.cos(p),
             y: R * Math.sin(t) * Math.sin(p),
             z: R * Math.cos(t),
             R,
           });
         }
       };
   
       const onMove = (e) => {
         tmx = e.clientX / window.innerWidth - 0.5;
         tmy = e.clientY / window.innerHeight - 0.5;
       };
   
       const loop = (t) => {
         const r = cv.getBoundingClientRect();
         const w = r.width, h = r.height, ox = w / 2, oy = h / 2;
         ctx.clearRect(0, 0, w, h);
   
         pmx += (tmx - pmx) * 0.05;
         pmy += (tmy - pmy) * 0.05;
         rot += 0.0028 + Math.abs(velocity.smooth) * 0.0004;
   
         const pulse = Math.pow((Math.sin((t / 1000) * 0.9) + 1) / 2, 7);
         const sc = 1 + pulse * 0.09;
         const tilt = pmy * 0.55;
         const spin = rot + pmx * 0.85;
         const R = P[0] ? P[0].R : 100;
   
         /* red glow */
         const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, Math.min(w, h) * 0.44);
         g.addColorStop(0, `rgba(255,30,30,${0.3 + pulse * 0.34})`);
         g.addColorStop(0.42, "rgba(179,0,0,.10)");
         g.addColorStop(1, "rgba(0,0,0,0)");
         ctx.fillStyle = g;
         ctx.fillRect(0, 0, w, h);
   
         /* floating wireframe rings */
         for (let k = 0; k < 3; k++) {
           const rr = R * (1.16 + k * 0.2) * sc;
           ctx.save();
           ctx.translate(ox, oy);
           ctx.rotate(spin * (k % 2 ? -0.6 : 0.5) + k);
           ctx.strokeStyle = `rgba(255,30,30,${0.16 - k * 0.035})`;
           ctx.lineWidth = 1;
           ctx.beginPath();
           ctx.ellipse(0, 0, rr, rr * (0.2 + k * 0.1 + Math.abs(tilt) * 0.4), 0, 0, Math.PI * 2);
           ctx.stroke();
           ctx.restore();
         }
   
         /* particles, depth-sorted */
         P.map((p) => {
           let x = p.x * Math.cos(spin) - p.z * Math.sin(spin);
           let z = p.x * Math.sin(spin) + p.z * Math.cos(spin);
           const y = p.y * Math.cos(tilt) - z * Math.sin(tilt);
           z = p.y * Math.sin(tilt) + z * Math.cos(tilt);
           const per = 380 / (380 + z * 0.9);
           return { sx: ox + x * per * sc, sy: oy + y * per * sc, z, per };
         })
           .sort((a, b) => a.z - b.z)
           .forEach((p) => {
             const dep = (p.z + R) / (2 * R);
             const al = (0.14 + dep * 0.72) * (0.6 + pulse * 0.5);
             ctx.fillStyle = dep > 0.72 ? `rgba(255,235,235,${al})` : `rgba(255,30,30,${al})`;
             ctx.beginPath();
             ctx.arc(p.sx, p.sy, (0.7 + dep * 1.7) * p.per, 0, 6.283);
             ctx.fill();
           });
   
         /* white-hot core */
         ctx.fillStyle = `rgba(255,255,255,${0.5 + pulse * 0.5})`;
         ctx.beginPath();
         ctx.arc(ox, oy, 3 + pulse * 7, 0, 6.283);
         ctx.fill();
   
         /* sparks */
         if (Math.random() < 0.14 || (pulse > 0.9 && Math.random() < 0.5)) {
           const a = Math.random() * 6.283;
           const s = 1.4 + Math.random() * 2.6;
           sparks.push({ x: ox, y: oy, vx: Math.cos(a) * s, vy: Math.sin(a) * s, l: 1 });
         }
         sparks = sparks.filter((s) => {
           s.x += s.vx; s.y += s.vy; s.vy += 0.012; s.l -= 0.014;
           ctx.strokeStyle = `rgba(255,${(90 + s.l * 120) | 0},${(60 * s.l) | 0},${s.l})`;
           ctx.lineWidth = 1.1;
           ctx.beginPath();
           ctx.moveTo(s.x, s.y);
           ctx.lineTo(s.x - s.vx * 3, s.y - s.vy * 3);
           ctx.stroke();
           return s.l > 0;
         });
   
         raf = requestAnimationFrame(loop);
       };
   
       init();
       window.addEventListener("resize", init);
       window.addEventListener("mousemove", onMove);
       raf = requestAnimationFrame(loop);
   
       return () => {
         window.removeEventListener("resize", init);
         window.removeEventListener("mousemove", onMove);
         cancelAnimationFrame(raf);
       };
     }, []);
   
     /* mobile / reduced-motion fallback — static, no JS, no canvas */
     if (isMobile() || reducedMotion()) {
       return (
         <svg viewBox="0 0 400 400" className="core-static" aria-hidden="true">
           <defs>
             <radialGradient id="coreGlow">
               <stop offset="0%" stopColor="#FF1E1E" stopOpacity=".55" />
               <stop offset="45%" stopColor="#B30000" stopOpacity=".18" />
               <stop offset="100%" stopColor="#050505" stopOpacity="0" />
             </radialGradient>
           </defs>
           <circle cx="200" cy="200" r="190" fill="url(#coreGlow)" />
           <circle cx="200" cy="200" r="120" fill="none" stroke="#FF1E1E" strokeOpacity=".28" />
           <ellipse cx="200" cy="200" rx="160" ry="46" fill="none" stroke="#FF1E1E" strokeOpacity=".16" />
           <ellipse cx="200" cy="200" rx="150" ry="60" transform="rotate(38 200 200)" fill="none" stroke="#FF1E1E" strokeOpacity=".12" />
           <circle cx="200" cy="200" r="7" fill="#fff" />
         </svg>
       );
     }
   
     return <canvas className="core-canvas" ref={ref} aria-hidden="true" />;
   }