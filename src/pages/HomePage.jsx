import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

import SEO from "../components/SEO";
import FlowHero from "../components/FlowHero";
import { Marquee, SplitHeading, CurtainWipe } from "../components/Motion";
import { HorizontalGallery, StackedSteps } from "../components/Scroll";
import { useCardLight, useTilt } from "../lib/motion";
import { useFadeUp } from "../hooks/useScrolled";

import { SERVICES } from "../constants/services";
import { FEATURES } from "../constants/features";

import medrouteImg   from "../assets/medroute-preview.png";
import quikmartImg   from "../assets/quikmart-preview.png";
import hardlineImg   from "../assets/hardline-preview.png";
import realEstateImg from "../assets/real-estate-preview.png";
import makeupImg     from "../assets/makeup-preview.png";
import dentalImg     from "../assets/dental-preview.png";
import skinImg       from "../assets/skin-preview.png";
import genImg        from "../assets/gen-preview.png";

const PORTFOLIO_PROJECTS = [
  {
    title: "MedRoute",
    tag: "SaaS · Pharma CRM",
    desc: "Smart visit management platform for medical representatives — doctor routing, visit logs, sampling, and analytics. Full production deployment with mobile app.",
    stack: ["React", "Django", "PostgreSQL", "Supabase", "Razorpay"],
    url: "https://med-route-snowy.vercel.app",
    image: medrouteImg,
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
    title: "Meridian Estates",
    tag: "Demo · Luxury Real Estate",
    desc: "Ultra-prime real estate website with animated property showcases, a 3D tower explorer, interactive market map, mortgage calculator, and cinematic scroll effects. Built with Next.js, Three.js, and GSAP.",
    stack: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
    url: "https://real-estate-psi-mauve.vercel.app",
    image: realEstateImg,
  },
  {
    title: "Aanya Kapoor Makeup Artistry",
    tag: "Client Website · Beauty",
    desc: "Elegant portfolio site for a luxury bridal and editorial makeup artist — service listings, portfolio gallery, testimonials, pricing, and booking flow with a refined, photo-led aesthetic.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://makeup-artists-self.vercel.app",
    image: makeupImg,
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

const PROCESS = [
  { number: "01", title: "Research",    desc: "We learn your business, your customers and what your competitors are getting wrong — before a single pixel is drawn." },
  { number: "02", title: "Strategy",    desc: "Sitemap, user flows, conversion paths. We decide what the site actually has to make people do." },
  { number: "03", title: "Interface",   desc: "High-fidelity design with real content, a real type scale and real states — no placeholder text." },
  { number: "04", title: "Development", desc: "React, Django, PostgreSQL. Clean, tested and documented — built to be handed over, not held hostage." },
  { number: "05", title: "Launch",      desc: "Deploy, monitor, index. Then we watch the analytics with you and keep tightening." },
];

const MARQUEE_WORDS = [
  "Web Development", "UI / UX Design", "SaaS Products",
  "Web Apps", "Payment Integration", "Bug Fixing",
];

function useCounter(end, start, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let v = 0;
    const step = end / (duration / 16);
    const id = setInterval(() => {
      v += step;
      if (v >= end) { setCount(end); clearInterval(id); }
      else setCount(Math.floor(v));
    }, 16);
    return () => clearInterval(id);
  }, [end, start, duration]);
  return count;
}

export default function HomePage() {
  useFadeUp();
  useCardLight();
  useTilt();

  const [isIndia, setIsIndia] = useState(true);
  const statsRef = useRef(null);
  const [statsIn, setStatsIn] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsIn(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const projects = useCounter(20, statsIn);
  const tech = useCounter(10, statsIn);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => setIsIndia(d.country === "IN"))
      .catch(() => setIsIndia(true));
  }, []);

  return (
    <div>
      <SEO
        title="Web Development Agency in Kalaburagi | UM Web Solutions"
        description="UM Web Solutions is a professional web development agency in Kalaburagi, Karnataka. We build React, Django, and full-stack websites, SaaS products, and mobile apps for startups and businesses across India."
        path="/"
      />

      <CurtainWipe label="Portfolio" targetId="portfolio" />

      {/* ─────────────── HERO — flow field ─────────────── */}
      <FlowHero />

      {/* ─────────────── MARQUEE ─────────────── */}
      <Marquee words={MARQUEE_WORDS} />

      {/* ─────────────── TRUST / STATS ─────────────── */}
      <section className="wrap section">
        <div className="trust-band band-pad band-pad-sm fade-up dir-left">
          <div style={{ maxWidth: 640, marginBottom: 40, position: "relative", zIndex: 1 }}>
            <span className="section-tag">Why trust us</span>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75 }}>
              Whether you&rsquo;re a startup founder or a small business owner, every project gets
              the same full attention — from the first call to final deployment, with direct
              access to the person actually building it.
            </p>
          </div>

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
              <div className="trust-badge" aria-hidden="true">
                <svg className="trust-badge-ring" viewBox="0 0 120 120">
                  <path id="badgeCirclePath" fill="none" d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
                  <text fontSize="8.6" letterSpacing="2.2">
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

      {/* ─────────────── SERVICES — full-bleed rows ─────────────── */}
      <section className="wrap section" id="services">
        <span className="section-tag">What we&rsquo;re offering</span>
        <SplitHeading as="h2" className="sec-title" stroke={[3, 4, 5]}>
          Services built for real business growth
        </SplitHeading>

        <div className="svc-list">
          {SERVICES.map((s, i) => (
            <a
              key={s.title}
              className="srow"
              href={`https://wa.me/919035477754?text=Hi%2C+I'm+interested+in+${encodeURIComponent(s.title)}`}
              target="_blank"
              rel="noreferrer"
              data-cursor="Get quote"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
              }}
            >
              <span className="srow-blast" />
              <span className="srow-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="srow-icon"><s.icon size={20} /></span>
              <h3 className="font-display srow-name">{s.title}</h3>
              <span className="srow-desc">{s.desc}</span>
              <span className="srow-tags">{s.tags.join(" · ")}</span>
              <span className="srow-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* ─────────────── PORTFOLIO — horizontal pinned ─────────────── */}
      <HorizontalGallery projects={PORTFOLIO_PROJECTS} />

      {/* ─────────────── PROCESS — stacked pinned cards ─────────────── */}
      <section className="wrap section">
        <span className="section-tag">How we work</span>
        <SplitHeading as="h2" className="sec-title" stroke={[2]}>
          From first call to launch
        </SplitHeading>
      </section>
      <StackedSteps steps={PROCESS} />

      {/* ─────────────── CLINIC SAAS ─────────────── */}
      <section className="wrap section">
        <span className="section-tag">SaaS Products</span>
        <SplitHeading as="h2" className="sec-title" stroke={[4, 5, 6]}>
          A product we&rsquo;re building for real businesses
        </SplitHeading>

        <div className="saas fade-up dir-left">
          <div className="saas-main">
            <div className="saas-status">
              <span className="hero-pulse" /> In Development
            </div>
            <h3 className="font-display saas-title">Clinic SaaS</h3>
            <p className="saas-desc">
              A complete clinic management system — patient records, prescriptions, billing,
              and appointment tracking. Built for modern clinics.
            </p>
            <div className="saas-features">
              {[
                "Patient Management", "Prescription System", "Billing & Invoices",
                "Appointment Tracking", "Staff Management", "Reports & Analytics",
              ].map((f) => (
                <div key={f} className="feature-tag">
                  <span className="dot">✓</span>{f}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
              <Link to="/contact" className="btn-primary">Request demo</Link>
              <Link to="/products" className="btn-ghost">Learn more →</Link>
            </div>
          </div>

          <div className="saas-side">
            <div className="section-tag">Pricing plans</div>
            {[
              ["Basic", "₹499/mo", "$15/mo"],
              ["Pro", "₹1499/mo", "$35/mo"],
              ["Clinic Chain", "₹2999/mo", "$79/mo"],
            ].map(([plan, inr, usd]) => (
              <div key={plan} className="pricing-card-hover saas-plan">
                <span>{plan}</span>
                <strong>{isIndia ? inr : usd}</strong>
              </div>
            ))}
            <a
              href="https://wa.me/919035477754?text=Hi%2C+I'm+interested+in+Clinic+SaaS!"
              target="_blank"
              rel="noreferrer"
              className="btn-wa"
              style={{ marginTop: 18, width: "100%" }}
            >
              Get early access
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── WHY US ─────────────── */}
      <section className="wrap section">
        <span className="section-tag">Why choose us</span>
        <SplitHeading as="h2" className="sec-title" stroke={[3, 4]}>
          Not just developers. Your growth partner.
        </SplitHeading>

        <div className="why-grid">
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`stat-card tilt-card fade-up ${i % 2 ? "dir-right" : "dir-left"}`}>
              <div className="why-icon">{f.icon}</div>
              <h3 className="font-display why-title">{f.title}</h3>
              <p className="why-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}