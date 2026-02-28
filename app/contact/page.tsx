"use client";

import { useState, useEffect, useRef, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import TeamCards from "@/components/ui/TeamCards";

// ── Calendly inline widget ────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/avenueteamofficial/30min";
const SCRIPT_ID    = "calendly-widget-js";
const CSS_ID       = "calendly-widget-css";

type BookingState = "idle" | "booked" | "rebooked";

function CalendlyEmbed({ height = 700 }: { height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bookingState, setBookingState] = useState<BookingState>("idle");

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        setBookingState(prev => prev === "idle" ? "booked" : "rebooked");
      }
      if (e.data?.event === "calendly.event_canceled") {
        // Reset to idle and remount widget so the latest availability is fetched fresh
        setBookingState("idle");
        setTimeout(mountWidget, 50);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const mountWidget = () => {
    if (!document.getElementById(CSS_ID)) {
      const link = document.createElement("link");
      link.id   = CSS_ID;
      link.rel  = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const init = () => {
      const w = window as typeof window & {
        Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void };
      };
      if (w.Calendly && containerRef.current) {
        containerRef.current.innerHTML = "";
        w.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: containerRef.current });
      }
    };

    if (!document.getElementById(SCRIPT_ID)) {
      const script  = document.createElement("script");
      script.id     = SCRIPT_ID;
      script.src    = "https://assets.calendly.com/assets/external/widget.js";
      script.async  = true;
      script.onload = init;
      document.body.appendChild(script);
    } else {
      const w = window as typeof window & { Calendly?: unknown };
      w.Calendly ? init() : document.getElementById(SCRIPT_ID)!.addEventListener("load", init, { once: true });
    }
  };

  useEffect(() => { mountWidget(); }, []);

  const handleDismiss = () => {
    setBookingState("idle");
    setTimeout(mountWidget, 50);
  };

  return (
    <section className="reveal" id="book-a-call">
      <div className="tc" style={{ marginBottom: 20 }}>
        <span className="stag">Book a Meeting</span>
        <h2 className="sh">Pick a Time That Works for You</h2>
        <span className="gold-bar" />
        <p style={{ marginTop: 12, color: "var(--muted, #888)", fontSize: 15 }}>
          Free 30-minute discovery call — no commitment required.
        </p>
      </div>

      {bookingState === "booked" && (
        <div className="calendly-booked-banner">
          <div className="calendly-booked-inner">
            <div className="calendly-booked-icon">🎉</div>
            <div style={{ flex: 1 }}>
              <p className="calendly-booked-title">You&apos;re booked! See you soon.</p>
              <p className="calendly-booked-sub">Need another slot for a colleague or a follow-up?</p>
            </div>
            <button onClick={handleDismiss} aria-label="Dismiss"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted, #888)", fontSize: "1.2rem", lineHeight: 1, padding: "2px 4px", flexShrink: 0 }}>
              ✕
            </button>
          </div>
          <div className="calendly-booked-actions">
            <button className="btn btn-y" onClick={handleDismiss}>Book Another Meeting →</button>
            <span className="calendly-booked-or">or</span>
            <div className="calendly-priority-box">
              <p className="calendly-priority-text">
                <strong>Already booked?</strong> Want to be seen as a priority client?
              </p>
              <a href="https://wa.me/919801458766?text=Hi%20Avenue!%20I%20already%20have%20a%20meeting%20booked%20and%20I%27d%20like%20to%20discuss%20priority%20onboarding."
                className="btn btn-y" target="_blank" rel="noreferrer">
                💬 Message Us on WhatsApp →
              </a>
              <span className="contact-note">⚡ We reply within 24 hours.</span>
            </div>
          </div>
        </div>
      )}

      {bookingState === "rebooked" && (
        <div className="calendly-booked-banner">
          <div className="calendly-booked-inner">
            <div className="calendly-booked-icon">✅</div>
            <div style={{ flex: 1 }}>
              <p className="calendly-booked-title">Another meeting booked!</p>
              <p className="calendly-booked-sub">You&apos;re all set. Want priority attention from our team?</p>
            </div>
            <button onClick={handleDismiss} aria-label="Dismiss"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted, #888)", fontSize: "1.2rem", lineHeight: 1, padding: "2px 4px", flexShrink: 0 }}>
              ✕
            </button>
          </div>
          <div className="calendly-booked-actions">
            <div className="calendly-priority-box">
              <p className="calendly-priority-text">
                <strong>Get priority access</strong> — reach us directly on WhatsApp.
              </p>
              <a href="https://wa.me/919801458766?text=Hi%20Avenue!%20I%20already%20have%20a%20meeting%20booked%20and%20I%27d%20like%20to%20discuss%20priority%20onboarding."
                className="btn btn-y" target="_blank" rel="noreferrer">
                💬 Message Us on WhatsApp →
              </a>
              <span className="contact-note">⚡ We reply within 24 hours.</span>
            </div>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        style={{
          minWidth: 320,
          height: bookingState === "idle" ? height : 0,
          overflow: "hidden",
          borderRadius: 16,
          border: bookingState === "idle" ? "1px solid var(--border, rgba(255,255,255,0.08))" : "none",
          transition: "height 0.3s ease",
        }}
      />
    </section>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

// Only this part needs Suspense (it uses useSearchParams)
function ContactFormInner() {
  const searchParams = useSearchParams();
  const presetQuery = searchParams.get("query") || "";
  const isCreator = searchParams.get("creator") === "1";

  const [sendStatus, setSendStatus] = useState<"idle" | "sending" | "sent" | "error" | "more">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sendStatus === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name    = (data.get("name")    || "").toString();
    const email   = (data.get("email")   || "").toString();
    const query   = (data.get("query")   || presetQuery || "").toString();
    const phone   = (data.get("phone")   || "").toString();
    const message = (data.get("message") || "").toString();

    setSendStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/avenueteamofficial@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone:   phone || "Not provided",
          query:   query || "General enquiry",
          message,
          _subject:  "New enquiry from Avenue Marketing Agency website",
          _captcha:  "false",
          _template: "table",
        }),
      });

      if (res.ok) {
        setSendStatus("sent");
        form.reset();
        setTimeout(() => setSendStatus("more"), 2500);
      } else {
        setSendStatus("error");
        setTimeout(() => setSendStatus("idle"), 3000);
      }
    } catch {
      setSendStatus("error");
      setTimeout(() => setSendStatus("idle"), 3000);
    }
  };

  return (
    <>
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
            <button type="submit" className="btn btn-y">Send Message →</button>
          )}
          {sendStatus === "sending" && (
            <div className="contact-status">Sending…</div>
          )}
          {sendStatus === "sent" && (
            <div className="contact-status contact-status-ok">Message sent ✓</div>
          )}
          {sendStatus === "error" && (
            <div className="contact-status contact-status-err">Something went wrong. Please try again.</div>
          )}
          {sendStatus === "more" && (
            <>
              <p className="contact-more">Do you have something more to send?</p>
              <button type="submit" className="btn btn-y">Send Again →</button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact Us"
        h1="Let's Build Something Together"
        subtitle="Brands, creators, partners — we'd love to hear from you."
        buttons={[{ label: "Talk to Sales →", href: "#contact-form", variant: "gold" }]}
      />

      {/* Suspense only wraps the part that uses useSearchParams */}
      <Suspense fallback={null}>
        <ContactFormInner />
      </Suspense>

      {/* ── Quick-contact cards ───────────────────────────────────────────── */}
      <section className="reveal">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-emoji">📅</div>
            <h3>Schedule a Meeting</h3>
            <p>Free 30-minute discovery call. Pick a time that works for you.</p>
            <a href="#book-a-call" className="btn btn-y">Book a Call →</a>
            <span className="contact-note">No commitment required.</span>
          </div>
          <div className="contact-card">
            <div className="contact-emoji whatsapp">💬</div>
            <h3>Chat on WhatsApp</h3>
            <p>Quickest way to reach us directly.</p>
            <a
              href="https://wa.me/919801458766?text=Hi%20Avenue%20Marketing%20Agency!%20I%20came%20across%20your%20website%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20campaign%20or%20collaboration.%20Could%20we%20connect%3F"
              className="btn btn-y" target="_blank" rel="noreferrer"
            >
              Open WhatsApp →
            </a>
            <span className="contact-note">⚡ We reply within 24 hours.</span>
          </div>
        </div>
      </section>

      {/* CalendlyEmbed is fully outside Suspense — state changes here will NEVER trigger loading dots */}
      <CalendlyEmbed />

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="reveal">
        <div className="tc" style={{ marginBottom: 20 }}>
          <span className="stag">The People You'll Work With</span>
          <h2 className="sh">Meet the Team</h2>
          <span className="gold-bar" />
        </div>
        <TeamCards size="small" />
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <a href="/team" className="btn btn-o">View Full Team Page →</a>
        </div>
      </section>
    </>
  );
}