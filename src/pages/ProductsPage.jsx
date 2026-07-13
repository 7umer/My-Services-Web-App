import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SEO from "../components/SEO";
import { SplitHeading } from "../components/Motion";
import { useFadeUp } from "../hooks/useScrolled";
import { usePageMotion, useMagnetic, reducedMotion } from "../lib/motion";
import { PRODUCTS } from "../constants/products";

/* the boot-up sequence typed into the terminal panel */
const BOOT = [
  { t: "$ clinic-saas --status", cls: "" },
  { t: "booting modules…", cls: "" },
  { t: "✓ patient records", cls: "ok" },
  { t: "✓ prescriptions", cls: "ok" },
  { t: "✓ billing engine", cls: "ok" },
  { t: "✓ appointments", cls: "ok" },
  { t: "✓ staff & roles", cls: "ok" },
  { t: "✓ analytics", cls: "ok" },
  { t: "", cls: "" },
  { t: "status: IN ACTIVE DEVELOPMENT", cls: "val" },
  { t: "early access: OPEN", cls: "val" },
];

function Terminal() {
  const [n, setN] = useState(reducedMotion() ? BOOT.length : 0);

  useEffect(() => {
    if (reducedMotion()) return;
    const id = setInterval(() => {
      setN((v) => {
        if (v >= BOOT.length) { clearInterval(id); return v; }
        return v + 1;
      });
    }, 320);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="term" aria-hidden="true">
      <div className="term-bar">
        <i /><i /><i />
        <span>clinic-saas — production</span>
      </div>
      <div className="term-body">
        {BOOT.slice(0, n).map((l, i) => (
          <div key={i} className={l.cls}>{l.t || "\u00A0"}</div>
        ))}
        {n < BOOT.length && <span className="term-caret" />}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  useFadeUp();
  usePageMotion();

  const navigate = useNavigate();
  const demoRef = useMagnetic(0.3);

  const [isIndia, setIsIndia] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setIsIndia(data.country === "IN"))
      .catch(() => setIsIndia(true));
  }, []);

  const product = PRODUCTS[0];

  return (
    <div>
      <SEO
        title="SaaS Products | Clinic Management System | UM Web Solutions"
        description="UM Web Solutions builds SaaS products for Indian businesses. Our Clinic SaaS helps modern clinics manage patients, prescriptions, billing, and appointments at affordable prices."
        path="/products"
      />

      {/* ── HERO ── */}
      <header className="wrap page-head">
        <span className="section-tag">SaaS Products</span>
        <h1 className="font-display page-title">
          <span className="line"><span>Software that</span></span>
          <span className="line"><span className="stroke-text">solves real</span></span>
          <span className="line"><span className="red-text">problems.</span></span>
        </h1>
        <p className="page-lead">
          We build niche SaaS products for specific industries. Currently building for
          clinics — more coming soon.
        </p>
        <div className="page-num">01 Product Live</div>
      </header>

      {/* ── PRODUCT + TERMINAL ── */}
      <section className="wrap" style={{ paddingBottom: 100 }}>
        <div className="prod-hero fade-up dir-left">
          <div>
            <div className="prod-status">
              <span className="hero-pulse" /> {product.status}
            </div>

            <h2 className="font-display prod-name">{product.name}</h2>
            <p className="prod-tag">{product.tagline}</p>

            <div className="prod-price">
              Starting from
              <b>
                {isIndia ? product.startingInr : product.startingUsd}
                <small> /mo</small>
              </b>
            </div>
          </div>

          <Terminal />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <span className="section-tag">Inside the product</span>
        <SplitHeading as="h2" className="sec-title" stroke={[2, 3]}>
          Everything a clinic runs on
        </SplitHeading>

        <div className="prod-feats fade-up">
          {product.features.map(({ emoji, title, desc }) => (
            <div key={title} className="prod-feat">
              <div className="prod-feat-emoji">{emoji}</div>
              <h3 className="font-display">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <span className="section-tag">Subscription plans</span>
        <SplitHeading as="h2" className="sec-title" stroke={[2]}>
          Pick a plan to get started
        </SplitHeading>

        <div className="plan-tiles fade-up">
          {product.pricing.map(({ plan, inr, usd }) => (
            <button
              key={plan}
              type="button"
              onClick={() => setSelectedPlan(plan)}
              className={`plan-tile ${selectedPlan === plan ? "sel" : ""}`}
              aria-pressed={selectedPlan === plan}
              data-cursor="Select"
            >
              <span>{plan}</span>
              <strong>{isIndia ? inr : usd}</strong>
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 34 }}>
          <button
            ref={demoRef}
            className="btn-primary"
            data-cursor="Demo"
            onClick={() => {
              if (!selectedPlan) {
                alert("Please select a plan first");
                return;
              }
              navigate("/contact", { state: { selectedPlan } });
            }}
          >
            Request demo
          </button>

          <a
            href="https://wa.me/919035477754?text=Hi%2C+I'm+interested+in+Clinic+SaaS!"
            target="_blank"
            rel="noreferrer"
            className="btn-wa"
            data-cursor="Whatsapp"
          >
            WhatsApp for details
          </a>
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section className="wrap" style={{ paddingBottom: 130 }}>
        <div className="soon fade-up">
          <div style={{ fontSize: 34, marginBottom: 18 }}>🔭</div>
          <h2 className="font-display band-title band-title-sm">
            More products <span className="stroke-text">coming soon</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 420, margin: "0 auto 28px", lineHeight: 1.75, fontSize: 14.5 }}>
            We&rsquo;re building more niche SaaS solutions. Got an idea? Let&rsquo;s talk.
          </p>
          <a
            href="https://wa.me/919035477754?text=I+have+a+SaaS+idea!"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            data-cursor="Pitch it"
          >
            💡 Share your idea →
          </a>
        </div>
      </section>
    </div>
  );
}