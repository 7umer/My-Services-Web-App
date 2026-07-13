/* FLOW HERO
   Full-bleed ember flow field as the hero background.
   Headline spans the entire hero width.
   Mobile / reduced-motion: canvas swaps to a static red glow (zero JS cost). */

   import { useEffect, useRef } from "react";
   import { Link } from "react-router-dom";
   import { useMagnetic, isMobile, reducedMotion } from "../lib/motion";
   
   export default function FlowHero() {
     const canvas = useRef(null);
     const quoteRef = useMagnetic(0.3);
     const waRef = useMagnetic(0.3);
   
     useEffect(() => {
       if (isMobile() || reducedMotion()) return;
       const c = canvas.current;
       if (!c) return;
       const ctx = c.getContext("2d");
   
       let w, h, pts = [], raf, t = 0;
       let mx = -9999, my = -9999;
       const dpr = Math.min(window.devicePixelRatio || 1, 2);
       const COUNT = window.innerWidth > 1400 ? 1600 : 1100;
   
       const init = () => {
         const r = c.getBoundingClientRect();
         w = r.width; h = r.height;
         c.width = w * dpr; c.height = h * dpr;
         ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
         pts = Array.from({ length: COUNT }, () => ({
           x: Math.random() * w,
           y: Math.random() * h,
           px: 0, py: 0,
           l: Math.random() * 140,
         }));
         ctx.fillStyle = "#050505";
         ctx.fillRect(0, 0, w, h);
       };
   
       /* listen on window — the veil + copy sit above the canvas,
          so a canvas-only listener never fires */
       const onMove = (e) => {
         const r = c.getBoundingClientRect();
         mx = e.clientX - r.left;
         my = e.clientY - r.top;
       };
   
       /* cheap flow field — no noise library needed */
       const field = (x, y) =>
         (Math.sin(x * 0.0042 + t) * Math.cos(y * 0.0038 - t * 0.7) +
          Math.sin((x + y) * 0.0026 + t * 1.4) * 0.6) * Math.PI * 2;
   
       const loop = () => {
         t += 0.0032;
   
         /* trail fade */
         ctx.fillStyle = "rgba(5,5,5,.10)";
         ctx.fillRect(0, 0, w, h);
   
         pts.forEach((p) => {
           p.px = p.x; p.py = p.y;
   
           const a = field(p.x, p.y);
           p.x += Math.cos(a) * 1.5;
           p.y += Math.sin(a) * 1.5;
   
           /* cursor pushes the embers apart */
           const dx = p.x - mx, dy = p.y - my;
           const d = Math.hypot(dx, dy);
           if (d < 230 && d > 0) {
             p.x += (dx / d) * (230 - d) * 0.11;
             p.y += (dy / d) * (230 - d) * 0.11;
           }
   
           p.l--;
           if (p.l < 0 || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
             p.x = Math.random() * w;
             p.y = Math.random() * h;
             p.px = p.x; p.py = p.y;
             p.l = 100 + Math.random() * 90;
           }
   
           /* faster = hotter */
           const heat = Math.min(1, Math.hypot(p.x - p.px, p.y - p.py) / 2.2);
           ctx.strokeStyle = `rgba(255,${(20 + heat * 140) | 0},${(20 + heat * 60) | 0},${0.10 + heat * 0.5})`;
           ctx.lineWidth = 0.8;
           ctx.beginPath();
           ctx.moveTo(p.px, p.py);
           ctx.lineTo(p.x, p.y);
           ctx.stroke();
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
   
     const lite = isMobile() || reducedMotion();
   
     return (
       <header className="flow">
         {lite ? (
           <div className="flow-static" aria-hidden="true" />
         ) : (
           <canvas className="flow-canvas" ref={canvas} aria-hidden="true" />
         )}
   
         {/* keeps the text readable over the embers */}
         <div className="flow-veil" aria-hidden="true" />
   
         <div className="flow-inner">
           <div className="hero-eyebrow">
             <span className="hero-pulse" /> Available for new projects
           </div>
   
           <h1 className="flow-title">
             <span className="flow-line"><span>Crafting Digital</span></span>
             <span className="flow-line"><span className="stroke-text">Experiences That</span></span>
             <span className="flow-line"><span className="red-text">Dominate</span></span>
           </h1>
   
           <div className="flow-foot">
             <p className="flow-sub">
               We design and build the full stack — frontend, backend and deployment — so what
               you ship looks and works like it was made by a real engineering team.
             </p>
   
             <div className="hero-ctas">
               <Link ref={quoteRef} to="/contact" className="btn-primary" data-cursor="Let's talk">
                 Get a free quote
               </Link>
               <a
                 ref={waRef}
                 href="https://wa.me/919035477754?text=Hi%2C+I+want+to+discuss+a+project!"
                 target="_blank"
                 rel="noreferrer"
                 className="btn-ghost"
                 data-cursor="Whatsapp"
               >
                 Contact us
               </a>
             </div>
           </div>
   
           <div className="flow-scroll" aria-hidden="true">
             <span>Scroll</span>
             <i />
           </div>
         </div>
       </header>
     );
   }