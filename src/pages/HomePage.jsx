import medrouteImg from "../assets/medroute-preview.png";
import quikmartImg from "../assets/quikmart-preview.png";
import hardlineImg from "../assets/hardline-preview.png";
import dentalImg from "../assets/dental-preview.png";
import skinImg from "../assets/skin-preview.png";
import genImg from "../assets/gen-preview.png";


import { useFadeUp } from "../hooks/useScrolled";
import { SERVICES } from "../constants/services";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FEATURES } from "../constants/features";
import { ImageIcon, ShieldCheck } from "lucide-react";

const TECH_STACK = ["React", "Django", "PostgreSQL", "Supabase", "Tailwind CSS", "Figma"];

const PORTFOLIO_PROJECTS = [
  {
    title: "MedRoute",
    tag: "SaaS · Pharma CRM",
    desc: "Smart visit management platform for medical representatives — doctor routing, visit logs, sampling, and analytics. Full production deployment with Web app.",
    stack: ["React", "Django", "PostgreSQL", "Supabase", "Razorpay"],
    url: "https://med-route-snowy.vercel.app",
    image: medrouteImg, // add: import medrouteImg from "../assets/medroute-preview.png"
  },
  {
    title: "QuickMart",
    tag: "Startup · Hyperlocal Delivery",
    desc: "10–15 minute grocery delivery platform connecting customers with trusted local stores in Gulbarga. WhatsApp-based ordering, rider recruitment, zero hidden fees.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://quikmart.vercel.app",
    image: quikmartImg,
  },
  {
    title: "Hardline Gym",
    tag: "Client Website · Fitness",
    desc: "Premium gym website with membership plans, trainer profiles, class schedules, and a bold editorial aesthetic built to convert walk-in visitors.",
    stack: ["React", "Tailwind CSS"],
    url: "https://hardline-phi.vercel.app",
    image: hardlineImg,
  },
  {
    title: "Dental Clinic Demo",
    tag: "Demo · Healthcare",
    desc: "Clean, trust-led dental clinic website showcasing services, doctor profiles, appointment booking CTA, and patient testimonials. Ready to white-label for any clinic.",
    stack: ["React", "Tailwind CSS"],
    url: "https://demo-dental-web.vercel.app",
    image: dentalImg,
  },
  {
    title: "Skin Clinic Demo",
    tag: "Demo · Healthcare",
    desc: "Dermatology clinic website with a premium light aesthetic — treatment listings, before/after showcase section, and a contact form with WhatsApp integration.",
    stack: ["React", "Tailwind CSS"],
    url: "https://skin-clinic-demo.vercel.app",
    image: skinImg,
  },
  {
    title: "General Clinic Demo",
    tag: "Demo · Healthcare",
    desc: "General practice clinic template with doctor availability display, service categories, patient FAQ, and a fully responsive mobile layout.",
    stack: ["React", "Tailwind CSS"],
    url: "https://gen-clinic-demo.vercel.app",
    image: genImg,
  },
];

export default function HomePage() {
  // `start` gates the counter so it only begins once the stats section has
  // actually scrolled into view, instead of finishing instantly on mount
  // (which is why it used to look like a static number by the time anyone
  // scrolled down to it).
  const useCounter = (end, start, duration = 2000) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!start) return;
      let startVal = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        startVal += increment;
        if (startVal >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(startVal));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [end, start, duration]);
    return count;
  };

  const navigate = useNavigate();
  useFadeUp();

  const [isIndia, setIsIndia] = useState(true);

  // Trigger the count-up only once the trust band scrolls into view.
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const projects = useCounter(10, statsInView);
  const tech = useCounter(5, statsInView);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setIsIndia(data.country === "IN"))
      .catch(() => setIsIndia(true));
  }, []);

  return (
    <div>
      {/* ── HERO PHOTO BANNER (text overlaid on the image) ──
          Photo by Jakub Żerdzicki on Unsplash (unsplash.com/photos/bWVBCDtTRJI)
          Free to use under the Unsplash License. */}
      <div style={{ position: "relative", width: "100%", minHeight: "clamp(560px, 78vw, 760px)", overflow: "hidden", background: "linear-gradient(135deg, #1a2540, #0b1220)" }}>
        <img
          src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?fm=jpg&q=80&w=2400&auto=format&fit=crop"
          alt="Programmer coding at a desk with several monitors"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,18,32,0.78) 0%, rgba(11,18,32,0.6) 45%, rgba(11,18,32,0.82) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto", padding: "150px 24px 70px", width: "100%", textAlign: "center" }}>
          <div className="fade-up dir-left" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "7px 14px", borderRadius: 100,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            fontSize: 13, fontWeight: 500, color: "#cfd6e2", marginBottom: 24,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1faa59", flexShrink: 0 }} />
            Available for new projects
          </div>
          <h1 className="font-display fade-up dir-right" style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, lineHeight: 1.14, letterSpacing: "-0.025em", marginBottom: 22, color: "#fff" }}>
            Creative &amp; Reliable Development<br />
            <span style={{ color: "#8fb0ff" }}>for Businesses That Want to</span><br />
            Grow Online
          </h1>
          <p className="fade-up dir-left" style={{ fontSize: 17.5, color: "#c5cbd6", lineHeight: 1.7, marginBottom: 34, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            We design and build the full stack — frontend, backend and deployment —
            so what you ship to clients and customers looks and works like it was
            made by a real engineering team.
          </p>
          <div className="fade-up dir-right" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36, justifyContent: "center" }}>
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Get a Free Quote
            </button>
            <a
              href="https://wa.me/919035477754?text=Hi%2C+I+want+to+discuss+a+project!"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
            >
              Contact Us
            </a>
          </div>

          <div className="fade-up dir-left" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {TECH_STACK.map((t) => (
              <span key={t} style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 12.5,
                color: "#c5cbd6",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 6,
                padding: "5px 10px",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO MOCKUP + QUICK SERVICES (white, below the photo) ── */}
      <section style={{ paddingTop: 0, paddingBottom: 70, position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" />

        {/* Dashboard mockup — its own showcase row, fully below the hero text */}
        <div style={{ maxWidth: 620, margin: "56px auto 0", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div className="fade-up dir-left demo-mockup" style={{ position: "relative" }}>
            <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: 18, boxShadow: "0 0 0 1px rgba(16,25,43,0.04), 0 0 70px rgba(0,0,0,0.35), 0 25px 50px rgba(0,0,0,0.25)", position: "relative", overflow: "hidden" }}>
              {/* Simulated cursor */}
              <div className="demo-cursor demo-anim" />
              {/* Browser chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
                {["#c0392b", "#b6802a", "#0e8f86"].map((c) => (
                  <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                ))}
                <div style={{ flex: 1, background: "var(--bg2)", borderRadius: 6, height: 20, marginLeft: 10 }} />
              </div>
              {/* Dashboard */}
              <div style={{ background: "var(--bg2)", borderRadius: 10, padding: 16, border: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--muted)", marginBottom: 12, letterSpacing: "0.04em" }}>
                  CLINIC SAAS — DASHBOARD
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                  {[["48", "Patients Today", "#2454d8"], ["₹24,500", "Revenue", "#0e8f86"], ["12", "Appointments", "#b6802a"], ["3", "Pending Bills", "#c0392b"]].map(([v, l, c], i) => (
                    <div key={l} className={i === 0 ? "demo-ring demo-anim" : ""} style={{ background: "#fff", borderRadius: 8, padding: 12, border: "1px solid var(--border)" }}>
                      <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: c }}>
                        {i === 3 ? <span className="demo-tick demo-anim">{v}</span> : v}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", borderRadius: 8, padding: 12, marginBottom: 10, border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 6, fontWeight: 600 }}>RECENT PATIENTS</div>
                  {["Rahul Sharma — 10:30 AM", "Priya Patel — 11:00 AM", "Arjun Singh — 11:45 AM"].map((p) => (
                    <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(36,84,216,0.12)", flexShrink: 0 }} />
                      <div style={{ fontSize: 12.5, color: "var(--text)" }}>{p}</div>
                    </div>
                  ))}
                  <div className="demo-row-reveal demo-anim" style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(14,143,134,0.14)", flexShrink: 0 }} />
                    <div style={{ fontSize: 12.5, color: "var(--text)" }}>Sneha Reddy — 12:15 PM</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <div className="demo-press demo-anim" style={{ flex: 1, background: "var(--purple)", borderRadius: 7, padding: "8px 12px", fontSize: 12, color: "#fff", textAlign: "center", fontWeight: 600 }}>+ Add Patient</div>
                  <div className="demo-press-2 demo-anim" style={{ flex: 1, background: "#fff", border: "1px solid var(--border)", borderRadius: 7, padding: "8px 12px", fontSize: 12, color: "var(--text)", textAlign: "center", fontWeight: 600 }}>New Bill</div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div style={{ position: "absolute", bottom: -14, left: -14, background: "#fff", border: "1px solid var(--border)", borderRadius: 10, padding: "9px 14px", boxShadow: "0 10px 24px rgba(16,25,43,0.1)", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#0e8f86", fontSize: 16 }}>✓</span>
              <span style={{ fontSize: 12.5, color: "var(--text)", fontWeight: 600 }}>Clinic SaaS — Live Preview</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 26, fontSize: 12, color: "var(--faint)" }}>
            Live demo — hover to pause
          </div>
        </div>

        {/* Quick services row */}
        <div style={{ maxWidth: 1200, margin: "64px auto 0", padding: "32px 24px 0", borderTop: "1px solid var(--border)" }}>
          <div className="fade-up dir-right" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 24 }}>
            {SERVICES.slice(0, 4).map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, flexShrink: 0 }}>
                  <s.icon size={20} />
                </div>
                <span style={{ fontSize: 14.5, fontWeight: 600, color: "var(--text)" }}>{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST / STATS BAND (dark) ── */}
      <section style={{ padding: "0 24px 90px" }}>
        <div className="fade-up dir-left trust-band" style={{ maxWidth: 1200, margin: "0 auto", background: "#121619", borderRadius: 18, padding: "48px 40px" }}>
          <div style={{ maxWidth: 640, marginBottom: 40 }}>
            <div className="section-tag" style={{ color: "#8fb0ff" }}>Why Trust Us</div>
            <p style={{ fontSize: 16, color: "#aab3c2", lineHeight: 1.7 }}>
              Whether you're a startup founder or a small business owner, every project gets the
              same full attention — from the first call to final deployment, with direct access
              to the person actually building it.
            </p>
          </div>

          {/* 4 equal boxes — CSS Grid, repeat(4, 1fr) */}
          <div className="stats-grid" ref={statsRef}>
            <div className="stat-box">
              <div className="font-display stat-box-num">{projects}+</div>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-box">
              <div className="font-display stat-box-num">{tech}+</div>
              <p>Core Technologies</p>
            </div>
            <div className="stat-box">
              <div className="font-display stat-box-num">&lt;24h</div>
              <p>Avg. Response Time</p>
            </div>
            <div className="stat-box logo-box">
              {/* Spinning trust badge — pure CSS/SVG, no image asset needed */}
              <div className="trust-badge" aria-hidden="true">
                <svg className="trust-badge-ring" viewBox="0 0 120 120">
                  <path id="badgeCirclePath" fill="none" d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
                  <text fontSize="8.6" letterSpacing="2.2" fill="#cfd6e2">
                    <textPath href="#badgeCirclePath" startOffset="0%">
                      • TRUSTED DEV PARTNER • UM WEB SOLUTIONS
                    </textPath>
                  </text>
                </svg>
                <div className="trust-badge-center">
                  <ShieldCheck size={26} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up dir-right" style={{ marginBottom: 56 }}>
            <div className="section-tag">What We're Offering</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,3.6vw,44px)", fontWeight: 800, letterSpacing: "-0.025em" }}>
              Services built for <span className="grad-text">real business growth</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))", gap: 20 }}>
            {SERVICES.map((s, i) => (
              <div key={i} className={`service-card fade-up ${i % 2 === 0 ? "dir-left" : "dir-right"}`} style={{ padding: "26px 24px", height: "100%" }}>
                <div className="service-icon" style={{ background: s.bg, color: s.color, marginBottom: 16 }}>
                  <s.icon size={22} />
                </div>
                <h3 className="font-display" style={{ fontSize: 17.5, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.65, marginBottom: 18 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {s.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11.5, padding: "4px 9px", borderRadius: 6, background: "var(--bg2)", color: "var(--muted)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PORTFOLIO (real projects) ── */}
      <section style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up dir-left" style={{ marginBottom: 56 }}>
            <div className="section-tag">Portfolio</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,3.6vw,44px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 12 }}>
              Recent <span className="grad-text">work</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15 }}>
              A selection of live projects — client sites, startup builds, and our own SaaS products.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))", gap: 20, perspective: 1000 }}>
            {PORTFOLIO_PROJECTS.map((project, i) => (
              <div key={i} className={`portfolio-card tilt-card fade-up ${i % 2 === 0 ? "dir-left" : "dir-right"}`}>

                {/* Thumbnail — set project.image to an imported asset to show a real screenshot */}
                <div className="portfolio-thumb" style={{ position: "relative", overflow: "hidden" }}>
                  {project.image
                    ? <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <ImageIcon size={28} />
                  }
                </div>

                <div style={{ padding: 22 }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--faint)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {project.tag}
                  </span>
                  <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, margin: "6px 0 8px" }}>{project.title}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6, marginBottom: 14 }}>{project.desc}</p>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                    {project.stack.map((t) => (
                      <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, padding: "3px 8px", borderRadius: 5, background: "var(--bg2)", color: "var(--muted)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href={project.url} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "var(--purple)", fontWeight: 600, textDecoration: "none" }}>
                    View Website →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SAAS HIGHLIGHT ── */}
      <section style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up dir-right" style={{ marginBottom: 56 }}>
            <div className="section-tag">SaaS Products</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,3.6vw,44px)", fontWeight: 800, letterSpacing: "-0.025em" }}>
              A product we're building <span className="grad-text-green">for real businesses</span>
            </h2>
          </div>
          <div className="fade-up dir-left" style={{ display: "flex", flexWrap: "wrap", borderRadius: 16, overflow: "hidden", background: "#121619" }}>
            <div style={{ flex: "1 1 400px", padding: 44 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, background: "rgba(14,143,134,0.12)", border: "1px solid rgba(14,143,134,0.3)", fontSize: 12, color: "#4fd1c5", marginBottom: 18, fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4fd1c5", display: "inline-block" }} /> In Development
              </div>
              <h3 className="font-display" style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, color: "#fff" }}>Clinic SaaS</h3>
              <p style={{ color: "#aab3c2", fontSize: 15, lineHeight: 1.7, marginBottom: 26 }}>
                A complete clinic management system — patient records, prescriptions, billing, and appointment tracking. Built for modern clinics.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 30 }}>
                {["Patient Management", "Prescription System", "Billing & Invoices", "Appointment Tracking", "Staff Management", "Reports & Analytics"].map((f) => (
                  <div key={f} className="feature-tag" style={{ color: "#c5cbd6" }}><span className="dot">✓</span>{f}</div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => navigate("/contact")}>Request Demo</button>
                <button className="btn-ghost" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }} onClick={() => navigate("/products")}>Learn More →</button>
              </div>
            </div>
            <div style={{ flex: "1 1 280px", background: "rgba(255,255,255,0.03)", padding: 32, display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#8b96a8", marginBottom: 16, letterSpacing: "0.06em" }}>PRICING PLANS</div>
              {[["Basic", "₹499/mo", "$15/mo"], ["Pro", "₹1499/mo", "$35/mo"], ["Clinic Chain", "₹2999/mo", "$79/mo"]].map(([plan, inr, usd]) => (
                <div key={plan} className="pricing-card-hover" style={{ padding: 16, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>{plan}</span>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{isIndia ? inr : usd}</div>
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
      <section style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up dir-right" style={{ marginBottom: 56 }}>
            <div className="section-tag">Why Choose Us</div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,3.6vw,44px)", fontWeight: 800, letterSpacing: "-0.025em" }}>
              Not just developers. <span className="grad-text">Your growth partner.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, perspective: 1000 }}>
            {FEATURES.map((f, i) => (
              <div key={i} className={`stat-card glass tilt-card fade-up ${i % 2 === 0 ? "dir-left" : "dir-right"}`} style={{ textAlign: "left" }}>
                <div style={{ marginBottom: 16, color: "var(--purple)" }}>{f.icon}</div>
                <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "0 24px 70px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="fade-up dir-left" style={{ borderRadius: 20, padding: "64px 48px", background: "var(--text)", textAlign: "center" }}>
            <h2 className="font-display" style={{ fontSize: "clamp(26px,3.6vw,40px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 16, color: "#fff" }}>
              Ready to build something great?
            </h2>
            <p style={{ color: "#aab3c2", fontSize: 16, maxWidth: 480, margin: "0 auto 36px" }}>
              Let's talk about your project. The first consultation is free — no pressure, just a real conversation.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                className="btn-primary"
                style={{ fontSize: 16, padding: "15px 30px", background: "#fff", color: "var(--text)", border: "1px solid #fff" }}
                onClick={() => navigate("/contact")}
              >
                Book Free Call
              </button>
              <a href="https://wa.me/919035477754" target="_blank" rel="noreferrer" className="btn-wa" style={{ fontSize: 16, padding: "15px 30px" }}>
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}