import { useFadeUp } from "../hooks/useScrolled";
import { PRODUCTS } from "../constants/products";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductsPage({ setActivePage }) {
  useFadeUp();
  const navigate = useNavigate();

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
    <div style={{ paddingTop: 100 }}>
      <section style={{ padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div className="fade-up" style={{ marginBottom: 80 }}>
            <div className="section-tag">SaaS Products</div>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(36px,5vw,64px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              Software That Solves
              <br />
              <span className="grad-text-green">Real Problems</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 18, maxWidth: 540 }}>
              We build niche SaaS products for specific industries. Currently
              building for clinics — more coming soon.
            </p>
          </div>

          {/* Product Card */}
          <div className="product-card fade-up" style={{ marginBottom: 40 }}>
            <div style={{ padding: 48 }}>
              {/* Top Info */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 20,
                  marginBottom: 32,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      padding: "5px 14px",
                      borderRadius: 100,
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      color: "var(--green)",
                      display: "inline-block",
                      marginBottom: 14,
                    }}
                  >
                    🟢 {product.status}
                  </div>
                  <h2
                    className="font-display"
                    style={{ fontSize: 36, fontWeight: 800 }}
                  >
                    {product.name}
                  </h2>
                  <p
                    style={{
                      color: "var(--muted)",
                      marginTop: 8,
                      fontSize: 15,
                    }}
                  >
                    {product.tagline}
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      marginBottom: 4,
                    }}
                  >
                    Starting from
                  </div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      color: "var(--purple-g)",
                    }}
                  >
                    {isIndia ? product.startingInr : product.startingUsd}
                    <span style={{ fontSize: 16, color: "var(--muted)" }}>
                      /mo
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                  gap: 12,
                  marginBottom: 36,
                }}
              >
                {product.features.map(({ emoji, title, desc }) => (
                  <div
                    key={title}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: 14,
                      padding: 18,
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{emoji}</div>
                    <div
                      style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}
                    >
                      {title}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>
                      {desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div style={{ marginBottom: 36 }}>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    marginBottom: 14,
                    fontFamily: "Syne",
                    letterSpacing: "0.08em",
                  }}
                >
                  SUBSCRIPTION PLANS
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {product.pricing.map(({ plan, inr, usd }) => (
                    <div
                      key={plan}
                      onClick={() => setSelectedPlan(plan)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.border =
                          "1px solid rgba(139,92,246,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.border =
                          selectedPlan === plan
                            ? "1px solid rgba(139,92,246,0.6)"
                            : "1px solid var(--border)";
                      }}
                      style={{
                        flex: "1 1 160px",
                        padding: 16,
                        borderRadius: 12,
                        cursor: "pointer",
                        background:
                          selectedPlan === plan
                            ? "rgba(139,92,246,0.18)"
                            : "rgba(255,255,255,0.03)",
                        border:
                          selectedPlan === plan
                            ? "1px solid rgba(139,92,246,0.6)"
                            : "1px solid var(--border)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <div style={{ fontSize: 13, marginBottom: 6 }}>
                        {plan}
                      </div>
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 700,
                          color:
                            selectedPlan === plan
                              ? "var(--purple-g)"
                              : "var(--text)",
                        }}
                      >
                        {isIndia ? inr : usd}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  className="btn-primary"
                  style={{ fontSize: 16, padding: "16px 32px" }}
              
                  
                  onClick={() => {
                    if (!selectedPlan) {
                      alert("Please select a plan first");
                      return;
                    }
                    navigate("/contact", {
                      state: { selectedPlan }
                    });
                  }}

                >
                  Request Demo
                </button>

                <a
                  href="https://wa.me/9035477754?text=Hi%2C+I'm+interested+in+Clinic+SaaS!"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wa"
                >
                  WhatsApp for Details
                </a>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div
            className="fade-up"
            style={{
              borderRadius: 20,
              border: "1px dashed rgba(255,255,255,0.1)",
              padding: 48,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔭</div>
            <h3
              className="font-display"
              style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}
            >
              More Products Coming Soon
            </h3>
            <p
              style={{
                color: "var(--muted)",
                maxWidth: 400,
                margin: "0 auto 24px",
              }}
            >
              We're building more niche SaaS solutions. Got an idea? Let's talk.
            </p>
            <a
              href="https://wa.me/919035477754?text=I+have+a+SaaS+idea!"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              💡 Share Your Idea →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
