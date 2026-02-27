"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubscribe = () => {
    if (status === "sending") return;
    setStatus("sending");

    const subject = encodeURIComponent("Newsletter subscribe — Avenue Marketing Agency");
    const body = encodeURIComponent(
      "Hey, visited website and clicked on subscribe."
    );

    window.location.href = `mailto:avenueteamofficial@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus("sent"), 200);
  };

  return (
    <section className="nl-bg reveal">
      <span className="nl-ico">📬</span>
      <span className="stag" style={{ display: "block", textAlign: "center" }}>Stay Ahead</span>
      <h2 className="sh" style={{ textAlign: "center", fontSize: "clamp(24px,3vw,40px)" }}>
        Get Weekly <em>Influencer Marketing</em> Insights
      </h2>
      <p className="ssub" style={{ textAlign: "center", margin: "10px auto 0" }}>
        Join 12,000+ marketers. No spam. Unsubscribe anytime.
      </p>
      <div className="nl-form">
        <button
          type="button"
          className="btn btn-y"
          onClick={handleSubscribe}
          disabled={status === "sending"}
        >
          {status === "idle" && "Subscribe →"}
          {status === "sending" && "Sending…"}
          {status === "sent" && "Sent ✓"}
        </button>
      </div>
      <p className="nl-note">📋 Weekly insights • 📊 Campaign data • 🎯 Creator spotlights — every Tuesday</p>
    </section>
  );
}
