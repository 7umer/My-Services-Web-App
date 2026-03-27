import { useFadeUp } from "../hooks/useScrolled";
import { SERVICES } from "../constants/services";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { FEATURES } from "../constants/features";


export default function HomePage() {
  const navigate = useNavigate();
  useFadeUp();

 
  
  const [isIndia, setIsIndia] = useState(true);
  useEffect(() => {
    fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      setIsIndia(data.country === "IN");
    })
    .catch(() => setIsIndia(true));
  }, []);
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        <div className="grid-bg" />
        <div className="orb" style={{ width: 500, height: 500, background: "rgba(124,58,237,0.12)", top: -100, right: -100 }} />
        <div className="orb" style={{ width: 300, height: 300, background: "rgba(16,185,129,0.08)", bottom: 100, left: -50 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>

            {/* Left */}
            <div style={{ flex: "1 1 480px" }}>
              <div className="hero-badge fade-up">
                <span /> Available for new projects
              </div>
              <h1 className="font-display fade-up" style={{ fontSize: "clamp(25px,3vw,50px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
                We Build Websites,<br />
                <span className="grad-text">Web Apps & SaaS Products That Actually</span><br />
                Get You Clients
              </h1>
              <p className="fade-up" style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
                Premium web design, web apps, and SaaS solutions built for businesses that want to grow faster — not just look good.
              </p>
              <div className="fade-up" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => navigate("/contact")}>
                  Get Free Demo
                </button>
                <a href="https://wa.me/919035477754?text=Hi%2C+I+want+to+discuss+a+project!" target="_blank" rel="noreferrer" className="btn-wa">
                  <span></span> Chat on WhatsApp
                </a>
              </div>
              <div className="fade-up" style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
                {[["10+", "Projects Built"], ["5+", "Technologies"], ["100%", "Client Focus"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display" style={{ fontSize: 28, fontWeight: 800, color: "var(--purple-g)" }}>{n}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — SaaS mockup */}
            <div className="fade-up hide-mobile" style={{ flex: "1 1 380px", maxWidth: 480 }}>
              <div style={{ position: "relative" }}>
                <div style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.15),rgba(7,7,9,0.9))", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 20, padding: 20, backdropFilter: "blur(12px)" }}>
                  {/* Browser chrome */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                    {["#EF4444","#FBBF24","#10B981"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                    <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: 6, height: 22, marginLeft: 8 }} />
                  </div>
                  {/* Dashboard */}
                  <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 12, fontFamily: "Syne" }}>CLINIC SAAS — DASHBOARD</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                      {[["48","Patients Today","#8B5CF6"],["₹24,500","Revenue","#10B981"],["12","Appointments","#FBBF24"],["3","Pending Bills","#EF4444"]].map(([v,l,c]) => (
                        <div key={l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 12, border: `1px solid ${c}22` }}>
                          <div style={{ fontSize: 20, fontWeight: 700, color: c, fontFamily: "Syne" }}>{v}</div>
                          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{l}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: 12, marginBottom: 10 }}>
                      <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 8 }}>RECENT PATIENTS</div>
                      {["Rahul Sharma — 10:30 AM","Priya Patel — 11:00 AM","Arjun Singh — 11:45 AM"].map(p => (
                        <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(139,92,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>👤</div>
                          <div style={{ fontSize: 12, color: "var(--muted)" }}>{p}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <div style={{ flex: 1, background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "var(--purple-g)", textAlign: "center" }}>+ Add Patient</div>
                      <div style={{ flex: 1, background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "var(--green)", textAlign: "center" }}>New Bill</div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div style={{ position: "absolute", bottom: -16, left: -16, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 12, padding: "10px 16px", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#10B981", fontSize: 18 }}>✓</span>
                  <span style={{ fontSize: 13, color: "#10B981" }}>Clinic SaaS — Live Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up" style={{ marginBottom: 60 }}>
            <div className="section-tag">What We Do</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Services Built for<br /><span className="grad-text">Real Business Growth</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card fade-up"   style={{ padding: "28px 24px",   // ✅ MORE INNER SPACE
                                                              borderRadius: 16, height: "100%" }}>
                <div
  className="service-icon"
  style={{
    background: s.bg,
    color: s.color,
    marginBottom: 16   // ✅ space below icon
  }}
>
  {s.icon}
</div>

<h3
  className="font-display"
  style={{
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 10   // ✅ more space
  }}
>
  {s.title}
</h3>

<p
  style={{
    color: "var(--muted)",
    fontSize: 14,
    lineHeight: 1.7,   // ✅ more readable
    marginBottom: 20   // ✅ spacing before tags
  }}
>
  {s.desc}
</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 100, background: `${s.color}11`, border: `1px solid ${s.color}33`, color: s.color }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SAAS HIGHLIGHT ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up" style={{ marginBottom: 60 }}>
            <div className="section-tag">SaaS Products</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Products We're Building<br /><span className="grad-text-green">For Real Businesses</span>
            </h2>
          </div>
          <div className="product-card fade-up" style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 400px", padding: 48, position: "relative" }}>
              <div className="orb" style={{ width: 200, height: 200, background: "rgba(139,92,246,0.12)", top: -60, left: -60 }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", fontSize: 12, color: "var(--green)", marginBottom: 20 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s infinite" }} /> In Development
                </div>
                <h3 className="font-display" style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Clinic SaaS</h3>
                <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
                  A complete clinic management system — patient records, prescriptions, billing, and appointment tracking. Built for modern clinics.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
                  {["Patient Management","Prescription System","Billing & Invoices","Appointment Tracking","Staff Management","Reports & Analytics"].map(f => (
                    <div key={f} className="feature-tag"><span className="dot">✓</span>{f}</div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="btn-primary" onClick={() => navigate("/contact")}>🎯 Request Demo</button>
                  <button className="btn-ghost" onClick={() => navigate("/products")}>Learn More →</button>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 300px", background: "rgba(0,0,0,0.3)", padding: 32, display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid var(--border)" }}>
              <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 20, fontFamily: "Syne", letterSpacing: "0.08em" }}>PRICING PLANS</div>
              {[["Basic","₹499/mo","$15/mo"],["Pro","₹1499/mo","$35/mo"],["Clinic Chain","₹2999/mo","$79/mo"]].map(([plan,inr,usd]) => (
                <div
                key={plan}
                className="pricing-card-hover"
                style={{
                  padding: 16,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border)",
                  marginBottom: 10,
                  transition: "all 0.3s ease",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{plan}</span><div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>
                        {isIndia ? inr : usd}
                        </div>
                        </div>
                        </div>
                        </div>
                      ))}
              <a href="https://wa.me/919035477754?text=Hi%2C+I'm+interested+in+Clinic+SaaS!" target="_blank" rel="noreferrer" className="btn-wa" style={{ marginTop: 16, justifyContent: "center" }}>
                 Get Early Access
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── WHY ME ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up" style={{ marginBottom: 60 }}>
            <div className="section-tag">Why Choose Us</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Not Just Developers.<br /><span className="grad-text">Your Growth Partner.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {FEATURES.map((f, i) => (
  <div key={i} className="stat-card glass fade-up">
    
    {/* Icon */}
    <div style={{ marginBottom: 16, color: "var(--purple-g)" }}>
      {f.icon}
    </div>

    {/* Title */}
    <h3
      className="font-display"
      style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 8
      }}
    >
      {f.title}
    </h3>

    {/* Description */}
    <p
      style={{
        fontSize: 14,
        color: "var(--muted)",
        lineHeight: 1.6
      }}
    >
      {f.desc}
    </p>

  </div>
))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up" style={{ position: "relative", borderRadius: 24, overflow: "hidden", padding: "60px 48px", background: "linear-gradient(135deg,rgba(124,58,237,0.2) 0%,rgba(7,7,9,0.9) 60%,rgba(16,185,129,0.1) 100%)", border: "1px solid rgba(139,92,246,0.25)", textAlign: "center" }}>
            <div className="orb" style={{ width: 300, height: 300, background: "rgba(124,58,237,0.15)", top: -100, left: "50%", transform: "translateX(-50%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
                Ready to <span className="grad-text">Build Something Great?</span>
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 480, margin: "0 auto 36px" }}>
                Let's talk about your project. First consultation is free — no pressure, just a real conversation.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <button className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }} onClick={() => navigate("/contact")}>
                   Book Free Call
                </button>
                <a href="https://wa.me/919035477754" target="_blank" rel="noreferrer" className="btn-wa" style={{ fontSize: 16, padding: "16px 32px" }}>
                   WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
