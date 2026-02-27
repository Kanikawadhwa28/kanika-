"use client";

import { useState } from "react";
import { creators } from "@/data/creators";
import PageHero from "@/components/ui/PageHero";
import StepCards, { Step } from "@/components/ui/StepCards";

const HERO_BADGES = ["Free to Join", "Get Paid on Time", "Top Brand Deals"];

const CREATOR_STEPS: Step[] = [
  { num: "01", icon: "🙋", title: "Create Profile", desc: "Join free and link your social platforms." },
  { num: "02", icon: "🔍", title: "Get Matched", desc: "Brands discover you by niche and audience." },
  { num: "03", icon: "🤝", title: "Collaborate", desc: "Receive briefs, create content, submit for review." },
  { num: "04", icon: "💸", title: "Get Paid", desc: "Payment within 3 days of approved delivery." },
];

export default function ForCreatorsPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleCreators = showAll ? creators : creators.slice(0, 8);

  return (
    <>
      <PageHero
        tag="For Creators"
        h1="Get Discovered. Get Paid. Grow Faster."
        subtitle="Join 7,50,000+ verified creators already earning with India's top brands on Avenue Marketing Agency."
        buttons={[]}
      />

      <section className="reveal" style={{ paddingTop: 10 }}>
        <div className="hero-badges">
          {HERO_BADGES.map((b, i) => (
            <div key={b} className="hero-badge" style={{ animationDelay: `${i * 0.5}s` }}>
              {b}
            </div>
          ))}
        </div>
      </section>

      <section className="reveal">
        <div className="tc" style={{ marginBottom: 26 }}>
          <span className="stag">Community</span>
          <h2 className="sh">Creators Already on <em>Avenue Marketing Agency</em></h2>
          <p className="ssub" style={{ margin: "10px auto 0" }}>Hover any card to see their stats.</p>
          <span className="gold-bar" />
        </div>

        <div className="creator-grid-page">
          {visibleCreators.map((c) => (
            <div key={c.name} className="icard">
              <div className="icard-photo">
                {/* Image with emoji fallback */}
                <div
                  className="icard-img"
                  style={{ background: `linear-gradient(135deg,${c.bg},#0d0d0d)`, position: "relative" }}
                >
                  {c.image ? (
                    <img
                      src={`/images/creators/${c.image}`}
                      alt={c.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        inset: 0,
                      }}
                      onError={(e) => {
                        // Hide broken image, show emoji fallback
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  ) : null}
                  {/* Emoji fallback — hidden if image loads */}
                  <span
                    style={{
                      display: c.image ? "none" : "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                      fontSize: 48,
                    }}
                  >
                    {c.emoji}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="icard-ov">
                  <div className="ov-f">{c.audience}</div>
                  <div className="ov-er">Audience across Instagram & YouTube</div>
                  <div className="ov-plats">
                    <span className="plat ig">📸 Instagram</span>
                    <span className="plat yt">▶ YouTube</span>
                  </div>
                  <span className="ov-cta">View Profile →</span>
                </div>
              </div>

              <div className="icard-info">
                <div className="icard-name">{c.name}</div>
                <div className="icard-meta">
                  <span>{c.audience} audience</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <button
            type="button"
            className="btn btn-o"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "Show Less ↑" : "Load More ↓"}
          </button>
        </div>
      </section>

      <section className="reveal">
        <div className="tc" style={{ marginBottom: 32 }}>
          <span className="stag">Why Avenue</span>
          <h2 className="sh">Why Creators Choose <em>Avenue Marketing Agency</em></h2>
          <span className="gold-bar" />
        </div>
        <div className="benefit-grid">
          <div className="benefit-card">
            <div className="benefit-emoji">🌟</div>
            <h3>Get Discovered</h3>
            <p>Brands search for you by niche, audience size and engagement. No cold emailing, just inbound deals.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-emoji">💸</div>
            <h3>Get Paid Securely</h3>
            <p>Payments processed within 3 days of content approval. Secure, transparent and on time.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-emoji">📈</div>
            <h3>Grow Your Brand</h3>
            <p>Access exclusive deals from 500+ top brands to level up your creator career.</p>
          </div>
        </div>
      </section>

      <section className="reveal">
        <div className="tc" style={{ marginBottom: 40 }}>
          <span className="stag">How It Works</span>
          <h2 className="sh">Turn Your <em>Audience</em> into Income</h2>
          <span className="gold-bar" />
        </div>
        <StepCards steps={CREATOR_STEPS} />
      </section>

      <section className="reveal">
        <div className="tc">
          <span className="stag">Next Step</span>
          <h2 className="sh">Ready to Start <em>Earning?</em></h2>
          <p className="ssub" style={{ margin: "10px auto 0" }}>
            Free forever. Zero commission on your earnings.
          </p>
          <span className="gold-bar" />
        </div>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <a href="/contact?creator=1&query=Creator" className="btn btn-y">
            Join as a Creator →
          </a>
        </div>
        <p style={{ marginTop: 18, fontSize: 10, color: "#555", maxWidth: 720, marginInline: "auto", lineHeight: 1.6 }}>
          The content currently manifested within this digital domain is disseminated exclusively for representational and ornamental visualization, devoid of any immediate contractual, commercial, or affiliative implication. Notwithstanding its purely demonstrative disposition, we remain prospectively inclined toward the cultivation of mutually advantageous, strategically aligned brand affiliations, the materialization of which is contemplated at a subsequent juncture within the foreseeable continuum.
        </p>
      </section>
    </>
  );
}