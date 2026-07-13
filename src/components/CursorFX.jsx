/* Signature motion #9 — cursor.
   Ring + core dot + cursor text. The red spotlight lives in <Ambient />
   but is driven from here so there's only one mousemove listener. */

   import { useEffect, useRef } from "react";
   import { isTouch, reducedMotion } from "../lib/motion";
   
   export default function CursorFX() {
     const ring = useRef(null);
     const dot = useRef(null);
     const label = useRef(null);
   
     useEffect(() => {
       if (isTouch() || reducedMotion()) return;
   
       const r = ring.current, d = dot.current, l = label.current;
       const spot = document.querySelector(".fx-spot");
   
       let mx = window.innerWidth / 2, my = window.innerHeight / 2;
       let rx = mx, ry = my, sx = mx, sy = my;
       let raf;
   
       const move = (e) => {
         mx = e.clientX; my = e.clientY;
         d.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
       };
   
       /* delegated hover — works for elements added later by route changes */
       const over = (e) => {
         const t = e.target.closest("a, button, .service-card, .portfolio-card, .srow, [data-cursor]");
         if (!t) return;
         r.classList.add("is-active");
         const text = t.getAttribute("data-cursor");
         if (text) { l.textContent = text; l.classList.add("is-visible"); }
       };
       const out = (e) => {
         const t = e.target.closest("a, button, .service-card, .portfolio-card, .srow, [data-cursor]");
         if (!t) return;
         r.classList.remove("is-active");
         l.classList.remove("is-visible");
       };
   
       const loop = () => {
         rx += (mx - rx) * 0.17; ry += (my - ry) * 0.17;
         sx += (mx - sx) * 0.07; sy += (my - sy) * 0.07;
         r.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
         l.style.transform = `translate(${rx}px, ${ry + 2}px) translate(-50%, -50%)`;
         if (spot) spot.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -50%)`;
         raf = requestAnimationFrame(loop);
       };
   
       window.addEventListener("mousemove", move);
       document.addEventListener("mouseover", over);
       document.addEventListener("mouseout", out);
       raf = requestAnimationFrame(loop);
   
       return () => {
         window.removeEventListener("mousemove", move);
         document.removeEventListener("mouseover", over);
         document.removeEventListener("mouseout", out);
         cancelAnimationFrame(raf);
       };
     }, []);
   
     return (
       <>
         <div className="fx-cursor" ref={ring} aria-hidden="true" />
         <div className="fx-cursor-dot" ref={dot} aria-hidden="true" />
         <div className="fx-cursor-label" ref={label} aria-hidden="true" />
       </>
     );
   }