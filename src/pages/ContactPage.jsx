import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFadeUp } from "../hooks/useScrolled";
import { FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || "";


 
  const [form, setForm] = useState({
  name: "",
  email: "",
  service: "",
  message: ""
});
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  useFadeUp();

  // Autofill message if plan selected & clear storage after
  
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

    // Send to Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, // replace with your key
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          subject: form.service ? `New Inquiry: ${form.service}` : "New Inquiry",
        })
      });

      const data = await response.json();
      if (data.success) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ paddingTop: 100 }}>
      <section style={{ padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60 }}>

            {/* Left info */}
            <div className="fade-up">
              <div className="section-tag">Contact</div>
              {selectedPlan && (
                <p style={{ color: "var(--yellow)", marginBottom: 20 }}>
                  Selected Plan: <strong>{selectedPlan}</strong>
                </p>
              )}
              <h1 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
                Let's Build<br /><span className="grad-text">Something Together</span>
              </h1>
              <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
                Whether you need a landing page, a full web app, or want to try the Clinic SaaS — We're ready to help. First call is always free.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                {[
                   [<FaWhatsapp size={22} color="#25D366" />, "WhatsApp (Fastest)", "+91 9035477754", "https://wa.me/919035477754"],
                   [<FaEnvelope size={22} color="#6b21a8" />, "Email", "um7websolutions@gmail.com", "mailto:um7websolutions@gmail.com"],
                   [<FaClock size={22} color="#fbbf24" />, "Response Time", "Within 24 hours", null],
                ].map(([icon, label, value, href]) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: 22, width: 40, textAlign: "center" }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 2 }}>{label}</div>
                      {href
                        ? <a href={href} style={{ color: "var(--purple-g)", textDecoration: "none", fontSize: 15 }}>{value}</a>
                        : <div style={{ fontSize: 15 }}>{value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/9035477754?text=Hi%2C+I+want+to+discuss+a+project!" target="_blank" rel="noreferrer" className="btn-wa" style={{ fontSize: 16, padding: "18px 32px" }}>
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Right form */}
            <div className="fade-up glass" style={{ padding: 40 }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                  <h3 className="font-display" style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: "var(--muted)" }}>We'll get back to you within 24 hours. You can also WhatsApp us for a faster response.</p>
                  <button className="btn-ghost" style={{ marginTop: 24 }} onClick={() => { setSent(false); setForm({ name: "", email: "", service: "", message: "" }); }}>
                    Send Another →
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, marginBottom: 28 }}>Send a Message</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div>
                      <label>Your Name *</label>
                      <input className="form-input" placeholder="Rahul Sharma" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label>Email Address *</label>
                      <input className="form-input" type="email" placeholder="rahul@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label>Service Interested In</label>
                      <select className="form-input" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
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
                      <label>Your Message *</label>
                      <textarea className="form-input" rows={4} placeholder="Tell me about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                    </div>
                    {error && <p style={{ color: "var(--red)", fontSize: 13 }}>{error}</p>}
                    <button className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: 16 }} onClick={handleSubmit}>
                      Send Message
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}