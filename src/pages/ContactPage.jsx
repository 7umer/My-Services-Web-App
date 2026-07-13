import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

import SEO from "../components/SEO";
import { useFadeUp } from "../hooks/useScrolled";
import { usePageMotion, useMagnetic } from "../lib/motion";

export default function ContactPage() {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || "";

  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useFadeUp();
  usePageMotion();

  const waRef = useMagnetic(0.28);

  useEffect(() => {
    if (selectedPlan) {
      setForm((prev) => ({
        ...prev,
        message: `Hi, I'm interested in the ${selectedPlan} plan.`,
      }));
    }
  }, [selectedPlan]);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          subject: form.service ? `New Inquiry: ${form.service}` : "New Inquiry",
        }),
      });

      const data = await response.json();
      if (data.success) setSent(true);
      else setError("Something went wrong. Please try again.");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  const CHANNELS = [
    {
      icon: <FaWhatsapp size={20} color="#25D366" />,
      label: "WhatsApp — fastest",
      value: "+91 9035477754",
      href: "https://wa.me/919035477754",
    },
    {
      icon: <FaEnvelope size={20} color="#FF1E1E" />,
      label: "Email",
      value: "um7websolutions@gmail.com",
      href: "mailto:um7websolutions@gmail.com",
    },
    {
      icon: <FaClock size={20} color="#FF5A3C" />,
      label: "Response time",
      value: "Within 24 hours",
      href: null,
    },
  ];

  return (
    <div>
      <SEO
        title="Contact UM Web Solutions | Web Development Agency Kalaburagi"
        description="Get in touch with UM Web Solutions, a web development agency in Kalaburagi, Karnataka. Contact us for a free consultation on your website, SaaS product, or mobile app project."
        path="/contact"
      />

      <section className="wrap ct-section">
        <div className="ct-split fade-up">
          {/* ── LEFT ── */}
          <div className="ct-left">
            <span className="section-tag">Contact</span>

            {selectedPlan && <div className="ct-plan">Selected plan: {selectedPlan}</div>}

            <h1 className="font-display ct-title">
              Let&rsquo;s build
              <br />
              <span className="red-text">something together</span>
            </h1>

            <p className="ct-lead">
              Whether you need a landing page, a full web app, or want to try the Clinic SaaS —
              we&rsquo;re ready to help. First call is always free.
            </p>

            <div className="ct-channels">
              {CHANNELS.map((c) =>
                c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="ct-row"
                    data-cursor="Open"
                  >
                    <span className="ct-row-icon">{c.icon}</span>
                    <span className="ct-row-text">
                      <span className="ct-row-label">{c.label}</span>
                      <span className="ct-row-val">{c.value}</span>
                    </span>
                    <span className="ct-row-arrow">→</span>
                  </a>
                ) : (
                  <div key={c.label} className="ct-row">
                    <span className="ct-row-icon">{c.icon}</span>
                    <span className="ct-row-text">
                      <span className="ct-row-label">{c.label}</span>
                      <span className="ct-row-val">{c.value}</span>
                    </span>
                  </div>
                )
              )}
            </div>

            <a
              ref={waRef}
              href="https://wa.me/919035477754?text=Hi%2C+I+want+to+discuss+a+project!"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: 36 }}
              data-cursor="Chat now"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* ── RIGHT — FORM ── */}
          <div className="ct-right">
            {sent ? (
              <div className="ct-sent">
                <div className="ct-sent-icon">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="font-display ct-form-title">Message sent</h2>
                <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.75 }}>
                  We&rsquo;ll get back to you within 24 hours. You can also WhatsApp us for a
                  faster response.
                </p>
                <button
                  className="btn-ghost"
                  style={{ marginTop: 28 }}
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", service: "", message: "" });
                  }}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display ct-form-title">Send a message</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <div>
                    <label htmlFor="ct-name">Your name *</label>
                    <input
                      id="ct-name"
                      className="form-input"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="ct-email">Email address *</label>
                    <input
                      id="ct-email"
                      className="form-input"
                      type="email"
                      placeholder="rahul@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="ct-service">Service interested in</label>
                    <select
                      id="ct-service"
                      className="form-input"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      <option>Web Design</option>
                      <option>Web Development</option>
                      <option>Web App Development</option>
                      <option>SaaS Development</option>
                      <option>Bug Fixing</option>
                      <option>Clinic SaaS Demo</option>
                      <option>Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="ct-msg">Your message *</label>
                    <textarea
                      id="ct-msg"
                      className="form-input"
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {error && (
                    <p style={{ color: "var(--red)", fontSize: 13, fontFamily: "var(--mono)" }}>
                      {error}
                    </p>
                  )}

                  <button
                    className="btn-primary"
                    style={{ width: "100%" }}
                    onClick={handleSubmit}
                    data-cursor="Send"
                  >
                    Send message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}