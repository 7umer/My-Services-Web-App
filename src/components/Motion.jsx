/* Three small shared motion pieces:
   Marquee      — signature #3, velocity + direction reactive
   SplitHeading — signature #2, word mask-reveal on scroll (real <h*> text, SEO-safe)
   CurtainWipe  — signature #6, red panel wipe between sections
*/

import { useEffect, useRef } from "react";
import { velocity, vel, reducedMotion, isMobile } from "../lib/motion";

/* ------------------------------------------------------------------ */
/* MARQUEE                                                             */
/* ------------------------------------------------------------------ */
export function Marquee({ words, speed = 0.7 }) {
  const track = useRef(null);

  useEffect(() => {
    const el = track.current;
    if (!el || reducedMotion()) return;
    let off = 0, raf;

    const loop = () => {
      const v = vel(40);
      off -= (speed + Math.abs(v) * 0.14) * velocity.direction;
      const row = el.scrollWidth / 3;
      if (off <= -row) off += row;
      if (off > 0) off -= row;
      el.style.transform = `translateX(${off}px) skewX(${v * -0.14}deg)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const row = words.map((w, i) => (
    <span key={i}>
      {w}
      <i className="marquee-dot" />
    </span>
  ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={track}>
        {row}{row}{row}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SPLIT HEADING — text stays real text in the DOM (crawlable)         */
/* Usage: <SplitHeading as="h2">Services built for real growth</SplitHeading>
/* ------------------------------------------------------------------ */
export function SplitHeading({ as: Tag = "h2", children, className = "", style, stroke = [] }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;

    const spans = el.querySelectorAll(".sh-word i");
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          spans.forEach((s, k) =>
            s.animate(
              [{ transform: "translateY(105%)" }, { transform: "translateY(0)" }],
              { duration: 900, delay: k * 55, fill: "forwards", easing: "cubic-bezier(.16,1,.3,1)" }
            )
          );
          o.unobserve(e.target);
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = String(children).split(" ");

  return (
    <Tag ref={ref} className={`sh ${className}`} style={style}>
      {words.map((w, i) => (
        <span className="sh-word" key={i}>
          <i className={stroke.includes(i) ? "stroke-text" : undefined}>{w}</i>
        </span>
      ))}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* CURTAIN WIPE — fires once when the target section reaches mid-screen */
/* Usage: <CurtainWipe label="Portfolio" targetId="portfolio" />        */
/* ------------------------------------------------------------------ */
export function CurtainWipe({ label, targetId }) {
  const curt = useRef(null);

  useEffect(() => {
    if (reducedMotion() || isMobile()) return;
    const target = document.getElementById(targetId);
    const el = curt.current;
    if (!target || !el) return;

    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const t = target.getBoundingClientRect().top;
      if (t < window.innerHeight * 0.55 && t > 0) {
        fired = true;
        const b = el.querySelector("b");
        el.animate(
          [{ transform: "translateY(101%)" }, { transform: "translateY(0)" }],
          { duration: 420, easing: "cubic-bezier(.7,0,.2,1)", fill: "forwards" }
        );
        b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, delay: 300, fill: "forwards" });
        setTimeout(() => {
          b.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 180, fill: "forwards" });
          el.animate(
            [{ transform: "translateY(0)" }, { transform: "translateY(-101%)" }],
            { duration: 520, easing: "cubic-bezier(.7,0,.2,1)", fill: "forwards" }
          );
          setTimeout(() => { el.style.transform = "translateY(101%)"; }, 540);
        }, 640);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [targetId]);

  return (
    <div className="fx-curtain" ref={curt} aria-hidden="true">
      <b>{label}</b>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TECH RAIL — infinite single-line strip of real brand icons          */
/* items: [{ icon, label, color }]                                     */
/* ------------------------------------------------------------------ */
export function TechRail({ items, duration = 46, reverse = false }) {
  const row = items.map(({ icon: Icon, label, color }) => (
    <span className="tech-pill" key={label}>
      <Icon size={19} style={{ color }} />
      {label}
    </span>
  ));

  return (
    <div className="tech-rail">
      <div
        className="tech-rail-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {row}
        {row}
      </div>
    </div>
  );
}