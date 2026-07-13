import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import { SplitHeading, Marquee } from "../components/Motion";
import { useFadeUp } from "../hooks/useScrolled";
import { usePageMotion, useMagnetic } from "../lib/motion";

import { SERVICES } from "../constants/services";
import servicesVisual from "../assets/services-visual.png";

const PROCESS_STEPS = [
  { number: "01", title: "Discovery & Analysis",        desc: "We start by understanding your business goals, challenges, and requirements through comprehensive analysis and stakeholder interviews." },
  { number: "02", title: "Strategy & Planning",         desc: "Based on our findings, we develop a detailed project roadmap with clear milestones, timelines, and resource allocation." },
  { number: "03", title: "Design & Development",        desc: "Our expert team brings your vision to life using cutting-edge technologies and best practices in software development." },
  { number: "04", title: "Testing & Quality Assurance", desc: "Rigorous testing ensures your solution meets the highest standards of quality, performance, and security." },
  { number: "05", title: "Deployment & Support",        desc: "We handle the deployment process and provide ongoing support to ensure your solution continues to perform optimally." },
];

const MARQUEE = ["React", "Django", "PostgreSQL", "Supabase", "Tailwind", "Celery"];

export default function ServicesPage() {
  useFadeUp();
  usePageMotion();

  const ctaRef = useMagnetic(0.3);
  const [active, setActive] = useState(0);
  const panels = useRef([]);

  /* sticky index highlights whichever panel is nearest mid-screen */
  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = 0, bestD = Infinity;
      panels.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestD) { bestD = d; best = i; }
      });
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (i) =>
    panels.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div>
      <SEO
        title="Web Development Services | React, Django, Full Stack | UM Web Solutions"
        description="Explore our web development services: React frontends, Django backends, SaaS products, e-commerce, mobile apps, and UI/UX design. Based in Kalaburagi, serving clients across India and globally."
        path="/services"
      />

      {/* ── HERO ── */}
      <header className="wrap page-head svc-head">
        <div>
          <span className="section-tag">Services</span>
          <h1 className="font-display page-title">
            <span className="line"><span>Everything</span></span>
            <span className="line"><span className="stroke-text">you need to</span></span>
            <span className="line"><span className="red-text">build &amp; grow</span></span>
          </h1>
          <p className="page-lead">
            From a simple landing page to a full SaaS platform — we handle the entire build so
            you can focus on your business.
          </p>
        </div>

        <figure className="svc-hero-art">
          <img src={servicesVisual} alt="UM Web Solutions — premium web development" loading="lazy" />
          <figcaption>{String(SERVICES.length).padStart(2, "0")} Services</figcaption>
        </figure>
      </header>

      <Marquee words={MARQUEE} speed={2.1} />

      {/* ── STICKY INDEX + SERVICE PANELS ── */}
      <section className="wrap section">
        <div className="svc-split">
          <aside className="svc-index">
            <div className="section-tag">Index</div>
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`svc-index-item ${active === i ? "on" : ""}`}
                onClick={() => jump(i)}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{s.title}</span>
              </div>
            ))}
          </aside>

          <div>
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                ref={(el) => (panels.current[i] = el)}
                className={`svc-panel fade-up ${i % 2 ? "dir-right" : "dir-left"}`}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
                  e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
                }}
              >
                <div className="svc-panel-num font-display">{String(i + 1).padStart(2, "0")}</div>

                <div className="svc-panel-icon">
                  <s.icon size={24} />
                </div>

                <h2 className="font-display svc-panel-title">{s.title}</h2>
                <p className="svc-panel-desc">{s.desc}</p>

                <div className="svc-panel-tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919035477754?text=Hi%2C+I'm+interested+in+${encodeURIComponent(s.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  data-cursor="Get quote"
                >
                  Get quote →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — horizontal rail ── */}
      <section className="wrap section">
        <span className="section-tag">Our process</span>
        <SplitHeading as="h2" className="sec-title" stroke={[2, 3]}>
          How we actually work
        </SplitHeading>

        <div className="rail">
          {PROCESS_STEPS.map((s) => (
            <div className="rail-step" key={s.number}>
              <div className="rail-num">STEP {s.number}</div>
              <h3 className="rail-title">{s.title}</h3>
              <p className="rail-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wrap" style={{ paddingBottom: 120 }}>
        <div className="trust-band band-pad fade-up">
          <h2 className="font-display band-title">
            Ready to get <span className="red-text">started?</span>
          </h2>
          <p
            style={{
              color: "var(--muted)", fontSize: 15, maxWidth: 440,
              margin: "0 auto 34px", lineHeight: 1.75, position: "relative", zIndex: 1,
            }}
          >
            Pick a service, drop us a message — we&rsquo;ll get back within 24 hours.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
            <a
              ref={ctaRef}
              href="https://wa.me/919035477754?text=Hi%2C+I+want+to+discuss+a+project!"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              data-cursor="Whatsapp"
            >
              WhatsApp us
            </a>
            <Link to="/contact" className="btn-ghost">Send email →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}