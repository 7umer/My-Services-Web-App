/* ============================================================
   src/lib/motion.js
   Shared motion engine: smooth scroll, scroll velocity,
   text scramble, magnetic buttons, cursor-position tracking.
   ============================================================ */

   import { useEffect, useRef } from "react";
   import Lenis from "lenis";
   import gsap from "gsap";
   import { ScrollTrigger } from "gsap/ScrollTrigger";
   
   gsap.registerPlugin(ScrollTrigger);
   
   export const isTouch = () =>
     typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
   
   export const isMobile = () =>
     typeof window !== "undefined" && window.innerWidth < 900;
   
   export const reducedMotion = () =>
     typeof window !== "undefined" &&
     window.matchMedia("(prefers-reduced-motion: reduce)").matches;
   
   /* ------------------------------------------------------------
      Scroll velocity — one shared value the whole app reads from.
      Signature motion #8: velocity-reactive everything.
   ------------------------------------------------------------ */
   export const velocity = { current: 0, smooth: 0, direction: 1 };
   
   /* ------------------------------------------------------------
      Lenis smooth scroll. Off on mobile and reduced-motion.
      Drives GSAP's ScrollTrigger so both stay in sync.
   ------------------------------------------------------------ */
   export function useSmoothScroll() {
     useEffect(() => {
       let lenis = null;
       let raf;
       let lastY = window.scrollY;
   
       const readVelocity = () => {
         const y = window.scrollY;
         velocity.current = y - lastY;
         lastY = y;
         if (velocity.current !== 0) velocity.direction = velocity.current > 0 ? 1 : -1;
       };
   
       if (!isMobile() && !reducedMotion()) {
         lenis = new Lenis({
           duration: 1.15,
           easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
           smoothWheel: true,
         });
         lenis.on("scroll", ScrollTrigger.update);
   
         const loop = (time) => {
           lenis.raf(time);
           readVelocity();
           velocity.smooth += (velocity.current - velocity.smooth) * 0.12;
           velocity.current *= 0.9;
           raf = requestAnimationFrame(loop);
         };
         raf = requestAnimationFrame(loop);
       } else {
         const loop = () => {
           readVelocity();
           velocity.smooth += (velocity.current - velocity.smooth) * 0.12;
           velocity.current *= 0.9;
           raf = requestAnimationFrame(loop);
         };
         raf = requestAnimationFrame(loop);
       }
   
       return () => {
         cancelAnimationFrame(raf);
         if (lenis) lenis.destroy();
       };
     }, []);
   }
   
   /* clamped velocity, safe to feed straight into skew/scale */
   export const vel = (cap = 40) =>
     Math.max(-cap, Math.min(cap, velocity.smooth));
   
   /* ------------------------------------------------------------
      Signature motion #7 — text scramble on hover.
      Attach to any element: <span ref={useScramble()}>Word</span>
   ------------------------------------------------------------ */
   const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%$&/@*01";
   
   export function useScramble() {
     const ref = useRef(null);
   
     useEffect(() => {
       const el = ref.current;
       if (!el || isTouch() || reducedMotion()) return;
   
       const real = el.textContent;
       let raf;
   
       const run = () => {
         cancelAnimationFrame(raf);
         let frame = 0;
         const queue = real.split("").map((c, i) => ({
           c,
           start: i * 2,
           end: i * 2 + 8 + Math.random() * 10,
         }));
   
         const step = () => {
           let out = "";
           let done = 0;
           queue.forEach((o) => {
             if (o.c === " ") { out += " "; done++; return; }
             if (frame >= o.end) { out += o.c; done++; }
             else if (frame >= o.start) {
               out += `<span style="color:#FF1E1E">${GLYPHS[(Math.random() * GLYPHS.length) | 0]}</span>`;
             } else out += o.c;
           });
           el.innerHTML = out;
           if (done < queue.length) { frame++; raf = requestAnimationFrame(step); }
           else el.textContent = real;
         };
         step();
       };
   
       el.addEventListener("mouseenter", run);
       return () => {
         el.removeEventListener("mouseenter", run);
         cancelAnimationFrame(raf);
         el.textContent = real;
       };
     }, []);
   
     return ref;
   }
   
   /* ------------------------------------------------------------
      Signature motion #9 — magnetic pull.
      <a ref={useMagnetic()} className="btn-primary">…</a>
   ------------------------------------------------------------ */
   export function useMagnetic(strength = 0.3) {
     const ref = useRef(null);
   
     useEffect(() => {
       const el = ref.current;
       if (!el || isTouch() || reducedMotion()) return;
   
       const move = (e) => {
         const r = el.getBoundingClientRect();
         const x = (e.clientX - r.left - r.width / 2) * strength;
         const y = (e.clientY - r.top - r.height / 2) * strength * 1.4;
         gsap.to(el, { x, y, duration: 0.5, ease: "power3.out" });
       };
       const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.4)" });
   
       el.addEventListener("mousemove", move);
       el.addEventListener("mouseleave", leave);
       return () => {
         el.removeEventListener("mousemove", move);
         el.removeEventListener("mouseleave", leave);
       };
     }, [strength]);
   
     return ref;
   }
   
   /* ------------------------------------------------------------
      Cursor-position light inside cards (--mx / --my).
      Applies to every .service-card, .product-card, .stat-card.
   ------------------------------------------------------------ */
   export function useCardLight() {
     useEffect(() => {
       if (isTouch()) return;
       const cards = document.querySelectorAll(".service-card, .product-card, .stat-card, .pricing-card-hover");
       const handlers = [];
   
       cards.forEach((card) => {
         const move = (e) => {
           const r = card.getBoundingClientRect();
           card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
           card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
         };
         card.addEventListener("mousemove", move);
         handlers.push([card, move]);
       });
   
       return () => handlers.forEach(([c, m]) => c.removeEventListener("mousemove", m));
     }, []);
   }
   
   /* ------------------------------------------------------------
      3D tilt for .tilt-card
   ------------------------------------------------------------ */
   export function useTilt() {
     useEffect(() => {
       if (isTouch() || reducedMotion()) return;
       const cards = document.querySelectorAll(".tilt-card");
       const handlers = [];
   
       cards.forEach((card) => {
         const move = (e) => {
           const r = card.getBoundingClientRect();
           const px = (e.clientX - r.left) / r.width - 0.5;
           const py = (e.clientY - r.top) / r.height - 0.5;
           gsap.to(card, {
             rotateY: px * 8,
             rotateX: -py * 8,
             y: -6,
             duration: 0.6,
             ease: "power3.out",
             transformPerspective: 1000,
           });
         };
         const leave = () =>
           gsap.to(card, { rotateY: 0, rotateX: 0, y: 0, duration: 0.8, ease: "power3.out" });
   
         card.addEventListener("mousemove", move);
         card.addEventListener("mouseleave", leave);
         handlers.push([card, move, leave]);
       });
   
       return () =>
         handlers.forEach(([c, m, l]) => {
           c.removeEventListener("mousemove", m);
           c.removeEventListener("mouseleave", l);
         });
     }, []);
   }
   
   /* ------------------------------------------------------------
      One call = card light + 3D tilt. Drop into any page.
   ------------------------------------------------------------ */
   export function usePageMotion() {
     useCardLight();
     useTilt();
   }
   
   export { gsap, ScrollTrigger };