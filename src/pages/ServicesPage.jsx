import { useFadeUp } from "../hooks/useScrolled";
import { SERVICES } from "../constants/services";

export default function ServicesPage() {
  useFadeUp();

  return (
    <div style={{ paddingTop: 100 }}>
      <section style={{ padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div className="fade-up" style={{ marginBottom: 80 }}>
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
              <div key={i} className="fade-up service-card" >
                <div style={{ padding: "28px 28px 0", background: `linear-gradient(135deg,${s.color}0d 0%,transparent 100%)` }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16 }}>
                    {s.icon}
                  </div>
                  <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
                <div style={{ padding: "20px 28px 28px" }}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                    {s.tags.map(t => (
                      <span key={t} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 100, background: `${s.color}11`, border: `1px solid ${s.color}33`, color: s.color }}>
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
    </div>
  );
}
