import { useFadeUp } from "../hooks/useScrolled";
import { Phone, MessageSquare, FileText, Rocket } from "lucide-react";
import {
  FYP_WHY_CHOOSE,
  FYP_TECH_STACK,
  FYP_PACKAGE_INCLUDES,
  FYP_PLANS,
  FYP_WHO_WE_SERVE,
  FYP_PROCESS,
} from "../constants/fyp";

const WA_BASE = "https://wa.me/919035477754?text=Hi%2C+I+need+help+with+my+Final+Year+Project!";

/* ── All 25 technologies for the marquee ── */
const MARQUEE_TECHS = [
  { label: "Python",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { label: "Java",         img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { label: "JavaScript",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { label: "PHP",          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { label: "React",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { label: "Angular",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
  { label: "Vue.js",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { label: "Node.js",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { label: "Express.js",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", bg: "#333" },
  { label: "Django",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"  },
  { label: "Flask",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", bg: "#333" },
  { label: "Spring Boot",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { label: "Laravel",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { label: "Flutter",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { label: "MongoDB",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { label: "MySQL",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { label: "PostgreSQL",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { label: "Firebase",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { label: "TensorFlow",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { label: "PyTorch",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { label: "Pandas",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { label: "Bootstrap",    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { label: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { label: "Docker",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { label: "REST APIs",    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
];

/* ── tiny reusable check icon ── */
function Check({ color = "#0e8f86" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="10" fill={color} />
      <path d="M5.5 10.5l3 3 6-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FinalYearProjectPage() {
  useFadeUp();

  return (
    <div style={{ paddingTop: 100 }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up" style={{ maxWidth: 760 }}>
            <div className="section-tag">Final Year Project Development</div>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(36px,5vw,68px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
                lineHeight: 1.1,
              }}
            >
              Build Industry-Ready Projects{" "}
              <span className="grad-text">with Expert Guidance</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 560 }}>
              Whether you're starting from scratch or already have an idea — we
              provide professional development, documentation, and support to
              help you submit with confidence.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={WA_BASE} target="_blank" rel="noreferrer" className="btn-primary">
                Get Free Consultation →
              </a>
              <a href="#fyp-plans" className="btn-ghost">
                View Plans
              </a>
            </div>
          </div>

          {/* Hero feature pills */}
          <div className="fade-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 48 }}>
            {["Modern Technologies", "Professional Documentation", "Technical Mentoring", "Presentation Support"].map((f) => (
              <span
                key={f}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 18px", borderRadius: 100,
                  background: "rgba(14,143,134,0.08)",
                  border: "1px solid rgba(14,143,134,0.2)",
                  color: "#0e8f86", fontSize: 13, fontWeight: 500,
                }}
              >
                <Check color="#0e8f86" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────── */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Who We Help</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Designed for Students Who Want to{" "}
              <span className="grad-text">Build Better Projects</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, marginTop: 14, maxWidth: 580, margin: "14px auto 0" }}>
              Whether you're starting from scratch or already have an idea, we provide
              professional development guidance and technical support.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {FYP_WHO_WE_SERVE.map((item) => (
              <div key={item.label} className="fade-up glass" style={{ padding: "36px 24px", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(14,143,134,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, margin: "0 auto 16px" }}>
                  <item.icon size={24} />
                </div>
                <p style={{ fontWeight: 700, fontSize: 16 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Why Us</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Why Students Choose{" "}
              <span className="grad-text">UM Web Solutions</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, marginTop: 14 }}>
              We focus on helping students build practical software projects while understanding the technologies behind them.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 14 }}>
            {FYP_WHY_CHOOSE.map((item) => (
              <div key={item.label} className="fade-up glass" style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 22px" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(36,84,216,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#2454d8", fontSize: 16, flexShrink: 0 }}>
                  <item.icon size={18} />
                </div>
                <span style={{ fontWeight: 600, fontSize: 15 }}>{item.label}</span>
              </div>
            ))}
            <div className="fade-up" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 22px", border: "1px dashed rgba(14,143,134,0.35)", borderRadius: 16, color: "#0e8f86", fontStyle: "italic", fontSize: 14, fontWeight: 500 }}>
              Practical projects, real understanding
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK MARQUEE ───────────────────────────── */}
      <section style={{ padding: "60px 0" }}>
        <style>{`
          @keyframes techMarquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .tech-marquee-track {
            display: flex;
            width: max-content;
            animation: techMarquee 40s linear infinite;
          }
          .tech-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="fade-up" style={{ textAlign: "center", marginBottom: 48, padding: "0 24px" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>Technologies</div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Modern <span className="grad-text">Development Stack</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, marginTop: 14 }}>
            Professional projects developed using technologies widely used in today's software industry.
          </p>
        </div>

        <div style={{ overflow: "hidden", position: "relative" }}>
          {/* left fade */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, zIndex: 1, background: "linear-gradient(to right, var(--bg), transparent)", pointerEvents: "none" }} />
          {/* right fade */}
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, zIndex: 1, background: "linear-gradient(to left, var(--bg), transparent)", pointerEvents: "none" }} />

          <div className="tech-marquee-track">
            {[...MARQUEE_TECHS, ...MARQUEE_TECHS].map((tech, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, margin: "0 28px", minWidth: 110 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 18,
                  background: tech.bg || "var(--bg2)",
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 2px 10px rgba(16,25,43,0.07)",
                  padding: 14, flexShrink: 0,
                }}>
                  <img src={tech.img} alt={tech.label} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", textAlign: "center", whiteSpace: "nowrap" }}>
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVERY PACKAGE INCLUDES ───────────────────────── */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>What You Get</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Every Project Package{" "}
              <span className="grad-text">Includes</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, marginTop: 14 }}>
              Built to help you understand, demonstrate, and confidently present your project.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 14 }}>
            {FYP_PACKAGE_INCLUDES.map((item) => (
              <div key={item} className="fade-up glass" style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 22px" }}>
                <Check color="#0e8f86" />
                <span style={{ fontWeight: 600, fontSize: 15 }}>{item}</span>
              </div>
            ))}
            <div className="fade-up" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 22px", border: "1px dashed rgba(14,143,134,0.35)", borderRadius: 16, color: "#0e8f86", fontStyle: "italic", fontSize: 14, fontWeight: 500, textAlign: "center" }}>
              Everything you need to submit with confidence
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Process</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              How It <span className="grad-text">Works</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {FYP_PROCESS.map((step) => (
              <div key={step.step} className="fade-up glass" style={{ padding: "28px", position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: `${step.color}18`, position: "absolute", top: 12, right: 18, lineHeight: 1, fontFamily: "Inter, sans-serif" }}>
                  {step.step}
                </div>
                <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, background: `${step.color}15`, color: step.color, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", marginBottom: 14 }}>
                  STEP {step.step}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANS ────────────────────────────────────────── */}
      <section id="fyp-plans" style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Pricing</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Choose the Support That{" "}
              <span className="grad-text">Fits Your Needs</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, marginTop: 14 }}>
              Every project is unique, so pricing depends on requirements and complexity.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 36 }}>
            {FYP_PLANS.map((plan) => (
              <div key={plan.name} className="fade-up service-card" style={{ position: "relative", outline: plan.popular ? `1.5px solid ${plan.color}55` : "none" }}>
                {plan.popular && (
                  <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", padding: "4px 16px", borderRadius: 100 }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ padding: "32px 28px 0" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${plan.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18 }}>
                    <plan.icon size={28} color={plan.color} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: 22, fontWeight: 800, marginBottom: 6, letterSpacing: "-0.02em" }}>{plan.name}</h3>
                  <div style={{ height: 2, width: 40, background: plan.color, borderRadius: 2, marginBottom: 20 }} />
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <Check color={plan.color} />
                        <span style={{ fontSize: 14, lineHeight: 1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: "24px 28px 28px" }}>
                  <a href={`${WA_BASE}&plan=${encodeURIComponent(plan.name)}`} target="_blank" rel="noreferrer" className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                    Get Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-up" style={{ textAlign: "center" }}>
            <a href={WA_BASE} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", borderRadius: 100, background: "rgba(14,143,134,0.1)", border: "1px solid rgba(14,143,134,0.3)", color: "#0e8f86", fontWeight: 600, fontSize: 15, textDecoration: "none", transition: "all 0.25s ease" }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M3 4h14M3 8h10M3 12h14M3 16h8" stroke="#0e8f86" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Contact Us for Custom Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────── */}
      <section style={{ padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="fade-up glass" style={{ padding: "60px 40px", textAlign: "center", background: "linear-gradient(135deg, rgba(36,84,216,0.08) 0%, rgba(14,143,134,0.05) 100%)", borderColor: "rgba(36,84,216,0.15)" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Get Started</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Ready to Build{" "}
              <span className="grad-text">Your Project?</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
              Turn your idea into a professional project. Let's discuss your requirements and
              build something that showcases your skills with confidence.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14, marginBottom: 40 }}>
              {[
                { icon: Phone, label: "Free Consultation" },
                { icon: MessageSquare, label: "Technical Guidance" },
                { icon: FileText, label: "Documentation Support" },
                { icon: Rocket, label: "End-to-End Development Assistance" },
              ].map((item) => (
                <div key={item.label} className="glass" style={{ padding: "20px 14px", textAlign: "center" }}>
                  <div style={{ color: "var(--purple)", marginBottom: 10, display: "flex", justifyContent: "center" }}>
                    <item.icon size={20} />
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>{item.label}</p>
                </div>
              ))}
            </div>
            <a href={WA_BASE} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: 16, padding: "16px 40px" }}>
              Contact UM Web Solutions Today →
            </a>
            <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 20 }}>
              Let's discuss your requirements and build a project that showcases your skills with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}