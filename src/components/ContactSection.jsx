"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("iI06aHPL0yRtwcbb3");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_xhxaumm",
        "template_znptsqf",
        {
          from_name: form.name,
          from_email: form.email,   // ✔️ optional but good
          reply_to: form.email,     // ✔️ reply goes to user
          message: form.message,
        }
      )
      .then(() => {
        alert("Message sent successfully 🎉");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send. Please try again.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="contactSection">
      <h2 className="aboutTitle">Get In Touch</h2>

      <div className="underline"></div>

      <p className="aboutSub">
        Have a project in mind? Let's talk.
      </p>

      <form className="contactForm fadeIn" onSubmit={handleSubmit}>
        <div className="row">
          <div className="field">
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              type="email"
              required
            />
          </div>
        </div>

        <div className="field">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
          />
        </div>

        <button className="sendBtn" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
