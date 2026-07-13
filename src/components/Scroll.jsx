/* Signature motion #4 — horizontal pinned gallery.
   Vertical scroll drives the projects sideways. Velocity shears the row.
   On mobile it degrades to a normal vertical list of cards — no pinning,
   no transforms, fully swipeable, same DOM (so SEO is identical). */

   import { useEffect, useRef } from "react";
   import { vel, isMobile, reducedMotion } from "../lib/motion";
   
   export function HorizontalGallery({ projects }) {
     const wrap = useRef(null);
     const track = useRef(null);
     const bar = useRef(null);
   
     useEffect(() => {
       if (isMobile() || reducedMotion()) return;
       const w = wrap.current, t = track.current, b = bar.current;
       if (!w || !t) return;
   
       let x = 0, raf;
   
       const loop = () => {
         const r = w.getBoundingClientRect();
         const p = Math.min(1, Math.max(0, -r.top / (w.offsetHeight - window.innerHeight)));
         const maxX = t.scrollWidth - window.innerWidth + 80;
         const target = -p * maxX;
         x += (target - x) * 0.1;
   
         const v = vel(40);
         t.style.transform = `translateX(${x}px) skewX(${v * -0.1}deg)`;
         if (b) b.style.width = `${p * 100}%`;
   
         [...t.children].forEach((c) => {
           const cr = c.getBoundingClientRect();
           const mid = cr.left + cr.width / 2;
           const d = Math.abs(mid - window.innerWidth / 2) / window.innerWidth;
           c.style.transform = `scale(${1 - Math.min(0.14, d * 0.22)})`;
           c.style.opacity = `${1 - Math.min(0.45, d * 0.6)}`;
         });
   
         raf = requestAnimationFrame(loop);
       };
       raf = requestAnimationFrame(loop);
       return () => cancelAnimationFrame(raf);
     }, []);
   
     return (
       <div className="gal" ref={wrap} id="portfolio">
         <div className="gal-pin">
           <div className="gal-head">
             <span className="section-tag">Portfolio</span>
             <h2 className="font-display gal-title">
               Recent <span className="stroke-text">work</span>
             </h2>
             <p className="gal-sub">
               A selection of live projects — client sites, startup builds, and our own SaaS products.
             </p>
           </div>
   
           <div className="gal-track" ref={track}>
             {projects.map((p) => (
               <article className="gal-card" key={p.title}>
                 <a href={p.url} target="_blank" rel="noreferrer" data-cursor="View site">
                   <div className="gal-shot">
                     <img src={p.image} alt={`${p.title} — ${p.tag}`} loading="lazy" />
                   </div>
                 </a>
                 <div className="gal-meta">
                   <h3 className="font-display gal-name">{p.title}</h3>
                   <span className="gal-tag">{p.tag}</span>
                 </div>
                 <p className="gal-desc">{p.desc}</p>
                 <div className="gal-stack">
                   {p.stack.map((s) => (
                     <span key={s}>{s}</span>
                   ))}
                 </div>
                 <a className="gal-link" href={p.url} target="_blank" rel="noreferrer">
                   View website →
                 </a>
               </article>
             ))}
           </div>
   
           <div className="gal-bar">
             <i ref={bar} />
           </div>
         </div>
       </div>
     );
   }
   
   /* Signature motion #5 — stacked pinned cards.
      Each step pins, the next slides over it, the one below scales down + dims + blurs. */
   
   export function StackedSteps({ steps }) {
     const root = useRef(null);
   
     useEffect(() => {
       if (isMobile() || reducedMotion()) return;
       const els = [...root.current.querySelectorAll(".step-card")];
       let raf;
   
       const loop = () => {
         const top = window.innerHeight * 0.14;
         els.forEach((s, i) => {
           const r = s.getBoundingClientRect();
           const push = Math.max(0, Math.min(1, (top - r.top) / (r.height * 0.9)));
           s.style.transform = `scale(${1 - push * 0.08}) translateY(${-push * 10}px)`;
           s.style.filter = `brightness(${1 - push * 0.45}) blur(${push * 2.4}px)`;
           s.style.zIndex = String(i);
         });
         raf = requestAnimationFrame(loop);
       };
       raf = requestAnimationFrame(loop);
       return () => cancelAnimationFrame(raf);
     }, []);
   
     return (
       <div className="steps" ref={root} id="process">
         {steps.map((s) => (
           <section className="step-card" key={s.number}>
             <div>
               <div className="step-num">STEP {s.number}</div>
               <h3 className="font-display step-title">{s.title}</h3>
             </div>
             <p className="step-desc">{s.desc}</p>
           </section>
         ))}
       </div>
     );
   }