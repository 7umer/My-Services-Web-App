/* Signature motion #1 — preloader.
   000 → 100, red hairline, then a red curtain wipes upward.
   Runs once per session (sessionStorage), so route changes don't replay it. */

   import { useEffect, useRef, useState } from "react";
   import { reducedMotion } from "../lib/motion";
   
   export default function Preloader() {
     const [done, setDone] = useState(
       () => reducedMotion() || sessionStorage.getItem("um-preloaded") === "1"
     );
     const [n, setN] = useState(0);
     const curtainRef = useRef(null);
     const rootRef = useRef(null);
   
     useEffect(() => {
       if (done) return;
       document.body.style.overflow = "hidden";
   
       let v = 0;
       const id = setInterval(() => {
         v += Math.random() * 9;
         if (v >= 100) {
           v = 100;
           clearInterval(id);
           setTimeout(finish, 320);
         }
         setN(Math.floor(v));
       }, 55);
   
       const finish = () => {
         const curtain = curtainRef.current;
         const root = rootRef.current;
         if (!curtain) return;
   
         curtain.animate(
           [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }],
           { duration: 520, easing: "cubic-bezier(.7,0,.2,1)", fill: "forwards" }
         );
   
         setTimeout(() => {
           if (root) root.style.display = "none";
           curtain.animate(
             [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }],
             { duration: 620, easing: "cubic-bezier(.7,0,.2,1)", fill: "forwards" }
           );
           document.body.style.overflow = "";
           sessionStorage.setItem("um-preloaded", "1");
           window.dispatchEvent(new Event("um:preloaded"));
           setTimeout(() => setDone(true), 640);
         }, 560);
       };
   
       return () => {
         clearInterval(id);
         document.body.style.overflow = "";
       };
     }, [done]);
   
     if (done) return null;
   
     return (
       <>
         <div className="pre" ref={rootRef} aria-hidden="true">
           <div className="pre-num">{String(n).padStart(3, "0")}</div>
           <div className="pre-label">UM Web Solutions — loading experience</div>
         </div>
         <div className="pre-line" style={{ width: `${n}%` }} aria-hidden="true" />
         <div className="pre-curtain" ref={curtainRef} aria-hidden="true" />
       </>
     );
   }