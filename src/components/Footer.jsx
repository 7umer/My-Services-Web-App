import { Link } from "react-router-dom";
import { useScramble, useMagnetic } from "../lib/motion";
import logo from "../assets/um-web-solutions-logo-full.png";

const PAGES = [
  { name: "Home",               path: "/" },
  { name: "Services",           path: "/services" },
  { name: "Products",           path: "/products" },
  { name: "Pricing",            path: "/pricing" },
  { name: "Final Year Project", path: "/final-year-project" },
  { name: "Contact",            path: "/contact" },
];

function ScrambleLink({ children, ...props }) {
  const ref = useScramble();
  return (
    <a {...props} className="nav-link" style={{ display: "inline-block", ...props.style }}>
      <span ref={ref}>{children}</span>
    </a>
  );
}

export default function Footer() {
  const ctaRef = useMagnetic(0.3);

  return (
    <footer style={{ position: "relative", zIndex: 2, borderTop: "1px solid var(--border)" }}>
      {/* MEGA CTA */}
      <div className="foot-cta">
        <h2 className="font-display foot-cta-title">
          Let&rsquo;s build
          <br />
          <span className="red-text">something unreal.</span>
        </h2>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link ref={ctaRef} to="/contact" className="btn-primary" data-cursor="Let's talk">
            Start a project
          </Link>
          <a
            href="https://wa.me/919035477754?text=Hi%2C+I+want+to+discuss+a+project!"
            target="_blank"
            rel="noreferrer"
            className="btn-wa"
            data-cursor="Whatsapp"
          >
            WhatsApp now
          </a>
        </div>
      </div>

      <div className="divider" />

      {/* LINKS */}
      <div className="foot-links">
        <div style={{ maxWidth: 300 }}>
          <img
            src={logo}
            alt="UM Web Solutions"
            style={{ height: 38, width: "auto", marginBottom: 16 }}
          />
          <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.75 }}>
            Building premium web products and SaaS solutions for businesses that want to grow.
          </p>
        </div>

        <div className="foot-cols">
          <div>
            <div className="section-tag">Pages</div>
            {PAGES.map((p) => (
              <div key={p.name} style={{ marginBottom: 12 }}>
                <Link
                  to={p.path}
                  className={`nav-link ${p.path === "/final-year-project" ? "nav-fyp" : ""}`}
                >
                  {p.name}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <div className="section-tag">Contact</div>
            <div style={{ marginBottom: 12 }}>
              <ScrambleLink href="https://wa.me/919035477754" target="_blank" rel="noreferrer">
                WhatsApp
              </ScrambleLink>
            </div>
            <div style={{ marginBottom: 12 }}>
              <ScrambleLink href="mailto:um7websolutions@gmail.com">Email</ScrambleLink>
            </div>
            <div style={{ marginBottom: 12 }}>
              <ScrambleLink href="tel:+919035477754">Call</ScrambleLink>
            </div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".14em",
              textTransform: "uppercase", color: "var(--faint)", marginTop: 18, lineHeight: 2 }}>
              Kalaburagi, Karnataka<br />India
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="foot-bottom">
        <div>© 2025 UM Web Solutions. All rights reserved.</div>
        <div>Design &amp; Development by UM Web Solutions</div>
      </div>
    </footer>
  );
}