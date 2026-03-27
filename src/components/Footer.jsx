import { useNavigate } from "react-router-dom";

const PAGES = ["Home", "Services", "Products", "Pricing", "Contact"];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "48px 24px 32px",
        marginTop: 40,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <div
              className="font-display"
              style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}
            >
              <span>UM </span>
              <span className="grad-text">Web Solutions</span>
              <span style={{ color: "var(--purple)" }}>.</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
              Building premium web products and SaaS solutions for businesses
              that want to grow.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  fontFamily: "Syne",
                }}
              >
                Pages
              </div>
              {PAGES.map((p) => (
                <div key={p} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      color: "var(--muted)",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.2s",
                    }}
                    onClick={(e) => {
                      e.preventDefault();

                      const routes = {
                        Home: "/",
                        Services: "/services",
                        Products: "/products",
                        Pricing: "/pricing",
                        Contact: "/contact",
                      };
                      navigate(routes[p] || "/");

                      
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--muted)")
                    }
                  >
                    {p}
                  </a>
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  fontFamily: "Syne",
                }}
              >
                Contact
              </div>
              <a
                href="https://wa.me/919035477754"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  color: "var(--green)",
                  textDecoration: "none",
                  fontSize: 14,
                  marginBottom: 10,
                }}
              >
                WhatsApp
              </a>
              <a
                href="mailto:um7websolutions@gmail.com"
                style={{
                  display: "block",
                  color: "var(--muted)",
                  textDecoration: "none",
                  fontSize: 14,
                }}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: 24 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            © 2025 UM Web Solutions. All rights reserved.
          </div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            Design & Development by UM Web Solutions
          </div>
        </div>
      </div>
    </footer>
  );
}
