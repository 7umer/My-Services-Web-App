import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFadeUp } from "../hooks/useScrolled";
import { PRICING_INR, PRICING_USD } from "../constants/pricing";

export default function PricingPage() {

  const navigate = useNavigate();

  const getUserCurrency = () => {
    const locale = navigator.language || "";

    if (locale.endsWith("-IN")) {
      return "INR";
    }

    return "USD";
  };

  const [currency, setCurrency] = useState(getUserCurrency());

  // Updated USD prices
  const updatedUSD = PRICING_USD.map(plan => {
    switch (plan.name.toLowerCase()) {
      case "starter":
        return { ...plan, price: "$599", sub: "per project" };
      case "growth":
        return { ...plan, price: "$2,499", sub: "per project" };
      case "enterprise":
        return { ...plan, price: "$8,000+", sub: "custom quote" };
      default:
        return plan;
    }
  });

  const plans = currency === "INR" ? PRICING_INR : updatedUSD;
  useFadeUp();

  return (
    <div style={{ paddingTop: 100 }}>
      <section style={{ padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div className="fade-up" style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Pricing</div>
            <h1 className="font-display" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Transparent Pricing.<br /><span className="grad-text">No Hidden Fees.</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 18, marginBottom: 36 }}>
              Choose what fits your budget. All projects include free consultation.
            </p>

            {/* Currency toggle */}
            <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 4, border: "1px solid var(--border)" }}>
              <button
                className={`toggle-btn ${currency === "INR" ? "active" : ""}`}
                onClick={() => setCurrency("INR")}
              >
                🇮🇳 INR
              </button>
              <button
                className={`toggle-btn ${currency === "USD" ? "active" : ""}`}
                onClick={() => setCurrency("USD")}
              >
                🌍 USD
              </button>
            </div>

          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {plans.map((p, i) => (
              <div key={i} className={`pricing-card fade-up ${p.popular ? "popular" : ""}`}>
                {p.popular && (
                  <div style={{ display: "inline-block", background: "var(--purple)", color: "#fff", fontSize: 11, padding: "4px 12px", borderRadius: 100, marginBottom: 16, letterSpacing: "0.06em" }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ color: p.color, fontSize: 14, fontWeight: 500, marginBottom: 8 }}>
                  {p.name}
                </div>

                <div className="font-display" style={{ fontSize: 44, fontWeight: 800, marginBottom: 4 }}>
                  {p.price}
                </div>

                <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 28 }}>
                  {p.sub}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {p.features.map(f => (
                    <div key={f} className="feature-tag">
                      <span className="dot">✓</span>{f}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    sessionStorage.setItem("selectedPlan", p.name);
                    navigate("/contact");
                  }}
                  className={p.popular ? "btn-primary" : "btn-ghost"}
                  style={{ display: "flex", justifyContent: "center", width: "100%" }}
                >
                  Get Started →
                </button>
              </div>
            ))}
          </div>

          <div className="fade-up" style={{ textAlign: "center", marginTop: 48, padding: 32, borderRadius: 16, background: "rgba(251,191,36,0.05)", border: "1px solid rgba(251,191,36,0.15)" }}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>💡</div>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              Need something custom?{" "}
              <strong style={{ color: "var(--yellow)" }}>Drop us a WhatsApp message</strong>{" "}
              and We'll give you a personalised quote within 24 hours.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}