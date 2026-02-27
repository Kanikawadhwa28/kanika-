"use client";

import { useState, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import TeamCards from "@/components/ui/TeamCards";

function ContactForm() {
  const searchParams = useSearchParams();
  const presetQuery = searchParams.get("query") || "";
  const isCreator = searchParams.get("creator") === "1";

  const [sendStatus, setSendStatus] = useState<"idle" | "sending" | "sent" | "more">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sendStatus === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") || "").toString();
    const email = (data.get("email") || "").toString();
    const query = (data.get("query") || presetQuery || "").toString();
    const phone = (data.get("phone") || "").toString();
    const message = (data.get("message") || "").toString();

    setSendStatus("sending");

    const subject = encodeURIComponent("New enquiry from Avenue Marketing Agency website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery: ${query}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:teamavenueofficial@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSendStatus("sent");
      setTimeout(() => setSendStatus("more"), 1500);
    }, 300);
  };

  return (
    <>
      <PageHero
        tag="Contact Us"
        h1="Let's Build Something Together"
        subtitle="Brands, creators, partners — we'd love to hear from you."
        buttons={[{ label: "Talk to Sales →", href: "#contact-form", variant: "gold" }]}
      />

      <section className="reveal" id="contact-form">
        <div className="tc" style={{ marginBottom: 20 }}>
          <span className="stag">Get in Touch</span>
          <h2 className="sh">Tell Us What You&apos;re Looking For</h2>
          <span className="gold-bar" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="name">Name*</label>
              <input id="name" name="name" required />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email*</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" />
            </div>
            <div className="contact-field">
              <label htmlFor="query">Query</label>
              <input
                id="query"
                name="query"
                defaultValue={presetQuery || (isCreator ? "Creator / Join as creator" : "")}
                placeholder="Campaign brief, partnership, support..."
              />
            </div>
          </div>
          <div className="contact-field">
            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" required rows={4} />
          </div>

          {sendStatus === "idle" && (
            <button type="submit" className="btn btn-y">
              Send Email →
            </button>
          )}
          {sendStatus === "sending" && (
            <div className="contact-status">Sending…</div>
          )}
          {sendStatus === "sent" && (
            <div className="contact-status contact-status-ok">Sent ✓</div>
          )}
          {sendStatus === "more" && (
            <>
              <p className="contact-more">Do you have something more to send?</p>
              <button type="submit" className="btn btn-y">
                Send Again →
              </button>
            </>
          )}
        </form>
      </section>

      <section className="reveal">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-emoji">📅</div>
            <h3>Schedule a Meeting</h3>
            <p>Free 30-minute discovery call. Pick a time that works for you.</p>
            <a href="#" className="btn btn-y" target="_blank" rel="noreferrer">
              Book a Call →
            </a>
            <span className="contact-note">No commitment required.</span>
          </div>
          <div className="contact-card">
            <div className="contact-emoji whatsapp">💬</div>
            <h3>Chat on WhatsApp</h3>
            <p>Quickest way to reach us directly.</p>
            <a
              href="https://wa.me/919801458766?text=Hi%20Avenue%20Marketing%20Agency!%20I%20came%20across%20your%20website%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20campaign%20or%20collaboration.%20Could%20we%20connect%3F"
              className="btn btn-y"
              target="_blank"
              rel="noreferrer"
            >
              Open WhatsApp →
            </a>
            <span className="contact-note">⚡ We reply within 24 hours.</span>
          </div>
        </div>
      </section>

      <section className="reveal">
        <div className="tc" style={{ marginBottom: 20 }}>
          <span className="stag">The People You'll Work With</span>
          <h2 className="sh">Meet the Team</h2>
          <span className="gold-bar" />
        </div>
        <TeamCards size="small" />
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <a href="/team" className="btn btn-o">
            View Full Team Page →
          </a>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ padding: 100, textAlign: "center" }}>Loading…</div>}>
      <ContactForm />
    </Suspense>
  );
}
