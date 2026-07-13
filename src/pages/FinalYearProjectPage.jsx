import { Phone, MessageSquare, FileText, Rocket } from "lucide-react";

import SEO from "../components/SEO";
import { Marquee, SplitHeading, TechRail } from "../components/Motion";
import { useFadeUp } from "../hooks/useScrolled";
import { usePageMotion, useMagnetic } from "../lib/motion";

import {
  FYP_WHY_CHOOSE,
  FYP_TECH_STACK,
  FYP_MARQUEE,
  FYP_PACKAGE_INCLUDES,
  FYP_PLANS,
  FYP_WHO_WE_SERVE,
  FYP_PROCESS,
} from "../constants/fyp";

const WA_BASE = "https://wa.me/919035477754?text=Hi%2C+I+need+help+with+my+Final+Year+Project!";

/* one numbered dossier block */
function Block({ index, kicker, title, children }) {
  return (
    <section className="dos-block fade-up">
      <div className="dos-index">
        <b>{index}</b>
        {kicker}
      </div>
      <div>
        <h2 className="font-display dos-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function FinalYearProjectPage() {
  useFadeUp();
  usePageMotion();

  const ctaRef = useMagnetic(0.3);

  return (
    <div>
      <SEO
        title="Final Year Project Development | Expert Help | UM Web Solutions"
        description="Get professional final year project development help from UM Web Solutions. We build industry-ready projects using React, Django, Python, Java, ML, AI and more. Based in Kalaburagi, Karnataka."
        path="/final-year-project"
      />

      {/* ── HERO ── */}
      <header className="wrap page-head">
        <span className="section-tag">Final Year Project Development</span>
        <h1 className="font-display page-title">
          <span className="line"><span>Build a project</span></span>
          <span className="line"><span className="stroke-text">that gets you</span></span>
          <span className="line"><span className="red-text">hired.</span></span>
        </h1>
        <p className="page-lead">
          Industry-oriented final year projects with clean, scalable code, complete
          documentation, and one-to-one technical guidance — not a downloaded template.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 38 }}>
          <a ref={ctaRef} href={WA_BASE} target="_blank" rel="noreferrer" className="btn-primary" data-cursor="Whatsapp">
            <MessageSquare size={15} /> Discuss your project
          </a>
          <a href="#fyp-plans" className="btn-ghost">See plans →</a>
        </div>

        <div className="page-num">Students · BE / MCA / Diploma</div>
      </header>

      <Marquee words={FYP_MARQUEE} />

      {/* ── DOSSIER ── */}
      <div className="wrap dossier" style={{ marginTop: 100 }}>
        <Block index="01" kicker="Who we help" title="Students we work with">
          <div className="chip-grid">
            {FYP_WHO_WE_SERVE.map(({ icon: Icon, label }) => (
              <div key={label} className="chip">
                <Icon size={17} />
                {label}
              </div>
            ))}
          </div>
        </Block>

        <Block index="02" kicker="Why us" title="Why students choose us">
          <div className="chip-grid">
            {FYP_WHY_CHOOSE.map(({ icon: Icon, label }) => (
              <div key={label} className="chip">
                <Icon size={17} />
                {label}
              </div>
            ))}
          </div>
        </Block>

        <Block index="03" kicker="Technologies" title="The stack we build on">
          <p className="dos-lead">
            Professional projects developed using technologies widely used in today&rsquo;s
            software industry.
          </p>
          <TechRail items={FYP_TECH_STACK} duration={52} />
          <TechRail items={[...FYP_TECH_STACK].reverse()} duration={64} reverse />
        </Block>

        <Block index="04" kicker="What you get" title="Inside every package">
          <div className="tick-list">
            {FYP_PACKAGE_INCLUDES.map((item, i) => (
              <div className="tick" key={item}>
                <i>{String(i + 1).padStart(2, "0")}</i>
                {item}
              </div>
            ))}
          </div>
        </Block>

        <Block index="05" kicker="Process" title="From idea to submission">
          <div className="fyp-steps">
            {FYP_PROCESS.map((step) => (
              <div className="fyp-step" key={step.step}>
                <div className="fyp-step-num">STEP {step.step}</div>
                <h3 className="font-display">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </Block>
      </div>

      {/* ── PLANS ── */}
      <section className="wrap section" id="fyp-plans">
        <span className="section-tag">Pricing</span>
        <SplitHeading as="h2" className="sec-title" stroke={[2]}>
          Choose your package
        </SplitHeading>

        <div className="plans">
          {FYP_PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.name}
                className={`plan-card tilt-card fade-up ${plan.popular ? "hot" : ""}`}
              >
                {plan.popular && <div className="plan-badge">Most popular</div>}

                <div style={{ color: "var(--red)", marginBottom: 16, filter: "drop-shadow(0 0 12px var(--red-glow))" }}>
                  <Icon size={26} />
                </div>

                <h3 className="font-display" style={{ fontSize: 24, textTransform: "uppercase", letterSpacing: "-.02em", marginBottom: 22 }}>
                  {plan.name}
                </h3>

                <div className="plan-feats">
                  {plan.features.map((f) => (
                    <div key={f} className="feature-tag">
                      <span className="dot">✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919035477754?text=Hi%2C+I'm+interested+in+the+${encodeURIComponent(plan.name)}+Final+Year+Project+plan!`}
                  target="_blank"
                  rel="noreferrer"
                  className={plan.popular ? "btn-primary" : "btn-ghost"}
                  style={{ width: "100%" }}
                  data-cursor="Enquire"
                >
                  Enquire now →
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wrap" style={{ paddingBottom: 130 }}>
        <div className="trust-band band-pad fade-up">
          <h2 className="font-display band-title">
            Deadline <span className="red-text">approaching?</span>
          </h2>
          <p
            style={{
              color: "var(--muted)", fontSize: 15, maxWidth: 460,
              margin: "0 auto 34px", lineHeight: 1.75, position: "relative", zIndex: 1,
            }}
          >
            Share your idea and submission date. We&rsquo;ll tell you honestly whether it can be
            done in time — and exactly what it will cost.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
            <a href={WA_BASE} target="_blank" rel="noreferrer" className="btn-primary" data-cursor="Whatsapp">
              <Rocket size={15} /> Start now
            </a>
            <a href="tel:+919035477754" className="btn-ghost" data-cursor="Call">
              <Phone size={15} /> Call us
            </a>
            <a href="mailto:um7websolutions@gmail.com" className="btn-ghost">
              <FileText size={15} /> Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}