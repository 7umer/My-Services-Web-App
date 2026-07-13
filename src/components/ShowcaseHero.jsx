/* SHOWCASE HERO
   The reel effect: your live sites float as browser windows on a shifting
   backdrop, swapping as the user scrolls (or automatically). Giant headline
   sits behind them.

   SEO note: the <h1> and the project names are real text in the DOM. The
   images carry descriptive alt text. Nothing here is baked into canvas. */

   import { useEffect, useRef, useState } from "react";
   import { Link } from "react-router-dom";
   import { useMagnetic, isMobile, reducedMotion } from "../lib/motion";
   
   /* backdrop glow per project — all in the red family, from ember to deep blood */
   const GLOWS = [
     "#FF1E1E", "#FF5A3C", "#B30000", "#FF2E5B",
     "#E01020", "#FF7A2F", "#C4001D", "#FF1E1E",
   ];
   
   export default function ShowcaseHero({ projects }) {
     const [i, setI] = useState(0);
     const [paused, setPaused] = useState(false);
     const stage = useRef(null);
     const quoteRef = useMagnetic(0.3);
     const waRef = useMagnetic(0.3);
   
     const n = projects.length;
     const active = projects[i];
   
     /* auto-advance */
     useEffect(() => {
       if (paused || reducedMotion()) return;
       const id = setInterval(() => setI((v) => (v + 1) % n), 3600);
       return () => clearInterval(id);
     }, [paused, n]);
   
     /* scroll also drives it — scrolling the hero cycles projects */
     useEffect(() => {
       if (reducedMotion()) return;
       const onScroll = () => {
         const el = stage.current;
         if (!el) return;
         const wrap = el.closest(".show");
         if (!wrap) return;
         const r = wrap.getBoundingClientRect();
         const total = wrap.offsetHeight - window.innerHeight;
         if (total <= 0) return;
         const p = Math.min(0.999, Math.max(0, -r.top / total));
         setI(Math.floor(p * n));
       };
       window.addEventListener("scroll", onScroll, { passive: true });
       return () => window.removeEventListener("scroll", onScroll);
     }, [n]);
   
     /* mouse parallax on the floating window */
     useEffect(() => {
       if (isMobile() || reducedMotion()) return;
       const el = stage.current;
       if (!el) return;
       const move = (e) => {
         const px = e.clientX / window.innerWidth - 0.5;
         const py = e.clientY / window.innerHeight - 0.5;
         el.style.setProperty("--rx", `${-py * 7}deg`);
         el.style.setProperty("--ry", `${px * 9}deg`);
         el.style.setProperty("--tx", `${px * 18}px`);
       };
       window.addEventListener("mousemove", move);
       return () => window.removeEventListener("mousemove", move);
     }, []);
   
     return (
       <header className="show" id="showcase">
         <div className="show-pin">
           {/* backdrop glow — shifts colour per project */}
           <div
             className="show-glow"
             style={{ background: `radial-gradient(ellipse at 62% 45%, ${GLOWS[i % GLOWS.length]}38, transparent 58%)` }}
             aria-hidden="true"
           />
   
           {/* headline sits BEHIND the floating windows */}
           <div className="show-copy">
             <div className="hero-eyebrow">
               <span className="hero-pulse" /> Available for new projects
             </div>
   
             <h1 className="hero-title show-title">
               <span className="hero-line"><span>Crafting</span></span>
               <span className="hero-line"><span className="stroke-text">Digital</span></span>
               <span className="hero-line"><span>Experiences</span></span>
               <span className="hero-line"><span className="stroke-text">That</span></span>
               <span className="hero-line"><span className="red-text">Dominate</span></span>
             </h1>
   
             <p className="hero-sub">
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
   
           {/* the floating browser stack */}
           <div
             className="show-stage"
             ref={stage}
             onMouseEnter={() => setPaused(true)}
             onMouseLeave={() => setPaused(false)}
           >
             {projects.map((p, k) => {
               const state = k === i ? "on" : k === (i - 1 + n) % n ? "out" : "wait";
               return (
                 <a
                   key={p.title}
                   href={p.url}
                   target="_blank"
                   rel="noreferrer"
                   className={`show-win ${state}`}
                   data-cursor="Open site"
                   tabIndex={k === i ? 0 : -1}
                   aria-hidden={k !== i}
                 >
                   <div className="show-bar">
                     <i /><i /><i />
                     <span>{p.url.replace("https://", "")}</span>
                   </div>
                   <div className="show-shot">
                     <img src={p.image} alt={`${p.title} — ${p.tag}`} loading={k === 0 ? "eager" : "lazy"} />
                   </div>
                 </a>
               );
             })}
           </div>
   
           {/* readout */}
           <div className="show-meta">
             <div className="show-index">
               {String(i + 1).padStart(2, "0")}
               <em>/{String(n).padStart(2, "0")}</em>
             </div>
             <div className="show-name">
               <strong className="font-display">{active.title}</strong>
               <span>{active.tag}</span>
             </div>
             <div className="show-dots">
               {projects.map((p, k) => (
                 <button
                   key={p.title}
                   className={k === i ? "on" : ""}
                   onClick={() => setI(k)}
                   aria-label={`Show ${p.title}`}
                 />
               ))}
             </div>
           </div>
         </div>
       </header>
     );
   }