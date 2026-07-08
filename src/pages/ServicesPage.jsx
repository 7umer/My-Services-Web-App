import { useFadeUp } from "../hooks/useScrolled";
import SEO from "../components/SEO";

import { SERVICES } from "../constants/services";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Analysis",
    desc: "We start by understanding your business goals, challenges, and requirements through comprehensive analysis and stakeholder interviews.",
    color: "#2454d8",
    bg: "rgba(36,84,216,0.08)",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    desc: "Based on our findings, we develop a detailed project roadmap with clear milestones, timelines, and resource allocation.",
    color: "#0e8f86",
    bg: "rgba(14,143,134,0.08)",
  },
  {
    number: "03",
    title: "Design & Development",
    desc: "Our expert team brings your vision to life using cutting-edge technologies and best practices in software development.",
    color: "#b6802a",
    bg: "rgba(182,128,42,0.08)",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    desc: "Rigorous testing ensures your solution meets the highest standards of quality, performance, and security.",
    color: "#c0392b",
    bg: "rgba(192,57,43,0.08)",
  },
  {
    number: "05",
    title: "Deployment & Support",
    desc: "We handle the deployment process and provide ongoing support to ensure your solution continues to perform optimally.",
    color: "#2454d8",
    bg: "rgba(36,84,216,0.08)",
  },
];

export default function ServicesPage() {
  useFadeUp();

  return (
    <div style={{ paddingTop: 100 }}>
      <SEO
        title="Web Development Services | React, Django, Full Stack | UM Web Solutions"
        description="Explore our web development services: React frontends, Django backends, SaaS products, e-commerce, mobile apps, and UI/UX design. Based in Kalaburagi, serving clients across India and globally."
        path="/services"
      />
      {/* ── SERVICES GRID ── */}
      <section style={{ padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div className="fade-up dir-left" style={{ marginBottom: 80 }}>
            <div className="section-tag">Services</div>
            <h1 className="font-display" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Everything You Need to<br /><span className="grad-text">Build &amp; Grow Online</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 18, maxWidth: 540 }}>
              From a simple landing page to a full SaaS platform — We handle the entire build so you can focus on your business.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 24 }}>
            {SERVICES.map((s, i) => (
              <div key={i} className={`fade-up service-card ${i % 2 === 0 ? "dir-left" : "dir-right"}`}>
                <div style={{ padding: "28px 28px 0", background: `linear-gradient(135deg,${s.color}0d 0%,transparent 100%)` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <s.icon size={24} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
                <div style={{ padding: "20px 28px 28px" }}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                    {s.tags.map(t => (
                      <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11.5, padding: "5px 10px", borderRadius: 6, background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/919035477754?text=Hi%2C+I'm+interested+in+${encodeURIComponent(s.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── OUR PROCESS ── */}
      <section style={{ padding: "90px 24px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Heading */}
          <div className="fade-up dir-right" style={{ marginBottom: 72, textAlign: "center" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Our Process</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,3.6vw,44px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 16 }}>
              How We <span className="grad-text">Work</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          {/* Steps — vertical timeline on desktop, left-aligned stack on mobile */}
          <div className="process-timeline" style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>

            {/* Vertical connector line — hidden on mobile via CSS */}
            <div className="process-line" style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, var(--purple), var(--accent), var(--purple))",
              opacity: 0.15,
              transform: "translateX(-50%)",
            }} />

            {PROCESS_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`process-row fade-up ${isLeft ? "dir-left" : "dir-right"}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 32,
                    marginBottom: i < PROCESS_STEPS.length - 1 ? 48 : 0,
                    flexDirection: isLeft ? "row" : "row-reverse",
                  }}
                >
                  {/* Card */}
                  <div
                    className="glass process-card"
                    style={{
                      flex: "0 1 calc(50% - 48px)",
                      padding: "28px 30px",
                      borderRadius: 14,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      height: 3,
                      background: step.color,
                      borderRadius: "14px 14px 0 0",
                    }} />

                    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <div style={{
                        width: 40, height: 40,
                        borderRadius: 10,
                        background: step.bg,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <span className="font-display" style={{ fontSize: 13, fontWeight: 800, color: step.color, letterSpacing: "0.04em" }}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: "var(--text)" }}>
                        {step.title}
                      </h3>
                    </div>

                    <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Centre dot */}
                  <div className="process-dot-col" style={{
                    flexShrink: 0,
                    width: 48,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 18,
                  }}>
                    <div style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: step.color,
                      border: "3px solid var(--bg)",
                      boxShadow: `0 0 0 2px ${step.color}`,
                      flexShrink: 0,
                    }} />
                  </div>

                  {/* Empty half */}
                  <div className="process-spacer" style={{ flex: "0 1 calc(50% - 48px)" }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up dir-left cta-banner-inner" style={{
            borderRadius: 20, padding: "64px 48px",
            background: "var(--text)", textAlign: "center",
          }}>
            <h2 className="font-display" style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 14, color: "#fff" }}>
              Ready to get started?
            </h2>
            <p style={{ color: "#aab3c2", fontSize: 16, maxWidth: 440, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Pick a service, drop us a message — we'll get back within 24 hours.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/919035477754?text=Hi%2C+I+want+to+discuss+a+project!"
                target="_blank"
                rel="noreferrer"
                className="btn-wa cta-shine"
                style={{ fontSize: 15, padding: "14px 28px" }}
              >
                WhatsApp Us
              </a>
              <a
                href="mailto:um7websolutions@gmail.com"
                className="btn-ghost cta-shine-ghost"
                style={{ fontSize: 15, padding: "14px 28px", borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              >
                Send Email →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}