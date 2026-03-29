

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// ─── REPLACE THESE THREE VALUES ───────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_111ee9u";   
const EMAILJS_TEMPLATE_ID = "template_5tdfjz6";  
const EMAILJS_PUBLIC_KEY  = "i80LgdF1sGuHRmEt9";   
// ──────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]     = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus] = useState({ text: "", type: "" }); // type: sending | success | error
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.from_name.trim() || !form.from_email.trim() || !form.message.trim()) {
      setStatus({ text: "// fill all fields first.", type: "error" });
      return;
    }

    setSending(true);
    setStatus({ text: "// sending...", type: "sending" });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ text: "// message delivered. i'll get back to you soon.", type: "success" });
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ text: "// failed to send. try emailing me directly.", type: "error" });
    } finally {
      setSending(false);
      // Clear status after 6 seconds
      setTimeout(() => setStatus({ text: "", type: "" }), 6000);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-header sr sr-scale">
        <h2>GET IN TOUCH</h2>
        <p>// let's build something together</p>
      </div>

      <form
        ref={formRef}
        className="contact-form sr"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-group">
          <label htmlFor="from_name">NAME</label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            placeholder="Your name"
            value={form.from_name}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="form-underline" />
        </div>

        <div className="form-group">
          <label htmlFor="from_email">EMAIL</label>
          <input
            id="from_email"
            type="email"
            name="from_email"
            placeholder="your@email.com"
            value={form.from_email}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="form-underline" />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
          />
          <span className="form-underline" />
        </div>

        <button
          type="submit"
          className="contact-submit"
          disabled={sending}
        >
          {sending ? "SENDING..." : "SEND MESSAGE"}
        </button>

        {status.text && (
          <p className={`form-status ${status.type}`}>{status.text}</p>
        )}
      </form>
    </section>
  );
}
