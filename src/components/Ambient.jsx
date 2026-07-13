/* Ambient layers — grain, grid, node/line field, red spotlight, vignette.
   Node field and grain are disabled on mobile and reduced-motion. */

   import { useEffect, useRef, useState } from "react";
   import { isMobile, reducedMotion } from "../lib/motion";
   
   export default function Ambient() {
     const canvas = useRef(null);
     const [light, setLight] = useState(false); // light mode = mobile / reduced motion
   
     useEffect(() => {
       const lite = isMobile() || reducedMotion();
       setLight(lite);
       if (lite) return;
   
       const c = canvas.current;
       if (!c) return;
       const ctx = c.getContext("2d");
       let W, H, nodes = [], raf;
   
       const init = () => {
         W = c.width = window.innerWidth;
         H = c.height = window.innerHeight;
         nodes = Array.from({ length: 24 }, () => ({
           x: Math.random() * W,
           y: Math.random() * H,
           vx: (Math.random() - 0.5) * 0.22,
           vy: (Math.random() - 0.5) * 0.22,
         }));
       };
   
       const loop = () => {
         ctx.clearRect(0, 0, W, H);
         nodes.forEach((n) => {
           n.x += n.vx; n.y += n.vy;
           if (n.x < 0 || n.x > W) n.vx *= -1;
           if (n.y < 0 || n.y > H) n.vy *= -1;
         });
         for (let i = 0; i < nodes.length; i++) {
           for (let j = i + 1; j < nodes.length; j++) {
             const a = nodes[i], b = nodes[j];
             const d = Math.hypot(a.x - b.x, a.y - b.y);
             if (d < 170) {
               ctx.strokeStyle = `rgba(255,30,30,${(1 - d / 170) * 0.1})`;
               ctx.lineWidth = 0.6;
               ctx.beginPath();
               ctx.moveTo(a.x, a.y);
               ctx.lineTo(b.x, b.y);
               ctx.stroke();
             }
           }
         }
         raf = requestAnimationFrame(loop);
       };
   
       init();
       window.addEventListener("resize", init);
       raf = requestAnimationFrame(loop);
   
       return () => {
         window.removeEventListener("resize", init);
         cancelAnimationFrame(raf);
       };
     }, []);
   
     return (
       <div aria-hidden="true">
         <div className="fx-grid" />
         <div className="fx-spot" />
         {!light && <canvas className="fx-lines" ref={canvas} />}
         <div className="fx-vignette" />
         {!light && <div className="fx-grain" />}
       </div>
     );
   }