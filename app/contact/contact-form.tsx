"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation request from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:contact@rajeshmehtaAdviser.in?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-navy/10 rounded-lg p-6 space-y-4">
      <div>
        <label className="block text-sm text-navy/70 mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-navy/20 rounded px-3 py-2 focus:outline-none focus:border-gold"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm text-navy/70 mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-navy/20 rounded px-3 py-2 focus:outline-none focus:border-gold"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm text-navy/70 mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-navy/20 rounded px-3 py-2 focus:outline-none focus:border-gold"
          placeholder="Briefly describe your matter..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-navy text-cream py-3 rounded font-semibold hover:bg-navy/90 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
