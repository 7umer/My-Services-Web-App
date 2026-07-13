import { useNavigate } from "react-router-dom";

import SEO from "../components/SEO";
import { useFadeUp } from "../hooks/useScrolled";
import { usePageMotion } from "../lib/motion";
import { PRICING_USD as PLANS } from "../constants/pricing";

export default function PricingPage() {
  const navigate = useNavigate();

  useFadeUp();
  usePageMotion();

  return (
    <div>
      <SEO
        title="Web Development Pricing | Packages in USD | UM Web Solutions"
        description="Transparent web development pricing in USD. Professional websites, SaaS products, and mobile apps with fixed packages and no hidden costs. Free consultation included."
        path="/pricing"
      />

      {/* ── HERO ── */}
      <header className="wrap page-head">
        <span className="section-tag">Pricing</span>
        <h1 className="font-display page-title">
          <span className="line"><span>Transparent</span></span>
          <span className="line"><span className="stroke-text">pricing. Built</span></span>
          <span className="line"><span className="red-text">for growth.</span></span>
        </h1>
        <p className="page-lead">
          Flexible packages for businesses, startups, and enterprises. No hidden costs, no
          surprise invoices — you know the number before we start.
        </p>

        <div className="page-num">{String(PLANS.length).padStart(2, "0")} Plans</div>
      </header>

      {/* ── SPOTLIGHT PLANS — hover one, the rest fade back ── */}
      <section className="wrap" style={{ paddingBottom: 120 }}>
        <div className="plans">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`plan-card tilt-card fade-up ${p.popular ? "hot" : ""}`}
            >
              {p.popular && <div className="plan-badge">Most popular</div>}

              <div className="plan-name">{p.name}</div>
              <div className="plan-price">{p.price}</div>
              <div className="plan-sub">{p.sub}</div>

              <div className="plan-feats">
                {p.features.map((f) => (
                  <div key={f} className="feature-tag">
                    <span className="dot">✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  sessionStorage.setItem("selectedPlan", p.name);
                  navigate("/contact", { state: { selectedPlan: p.name } });
                }}
                className={p.popular ? "btn-primary" : "btn-ghost"}
                style={{ width: "100%" }}
                data-cursor="Select"
              >
                Get started →
              </button>
            </article>
          ))}
        </div>

        <div className="cur-note fade-up">
          All plans include domain registration and hosting setup. Renewal charges after the
          first year are billed separately at actual provider costs.
        </div>
      </section>
    </div>
  );
}