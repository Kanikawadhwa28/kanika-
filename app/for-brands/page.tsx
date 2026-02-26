"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { brandCarouselItems } from "@/data/brands";
import { campaigns } from "@/data/campaigns";
import PageHero from "@/components/ui/PageHero";
import StepCards, { Step } from "@/components/ui/StepCards";
import CampaignModal from "@/components/ui/CampaignModal";

const HERO_BADGES = ["2.3x Avg ROI", "7,50,000+ Creators", "500+ Campaigns"];

const STEPS: Step[] = [
  { num: "01", icon: "📋", title: "Share Your Brief", desc: "Tell us goals, audience, budget and timeline." },
  { num: "02", icon: "🔍", title: "Discover Creators", desc: "Browse 7.5L+ verified influencers across every niche." },
  { num: "03", icon: "🚀", title: "Launch Campaign", desc: "Contracts, briefs, approvals, payments in one place." },
  { num: "04", icon: "📈", title: "Measure & Scale", desc: "Real-time dashboards show exactly what's working." },
];

const PAINS = [
  {
    top: "😤 You're overpaying creators",
    bottom: "✅ Fair Price Index shows real market rates",
  },
  {
    top: "😤 You can't prove ROI to your CFO",
    bottom: "✅ Real-time dashboard with revenue attribution",
  },
  {
    top: "😤 You don't know what competitors are doing",
    bottom: "✅ Competitor tracker maps their creator strategy",
  },
];

export default function ForBrandsPage() {
  const [activeCampaignId, setActiveCampaignId] = useState<string | null>(null);

  return (
    <>
      <PageHero
        tag="For Brands"
        h1="Run Campaigns That Actually Drive ROI"
        subtitle="Stop guessing. Start measuring. Connect with 7,50,000+ verified creators on India's most data-driven influencer marketing platform."
        buttons={[
          { label: "Start Free →", href: "#", variant: "gold" },
          { label: "Talk to Sales →", href: "/contact", variant: "outline" },
        ]}
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
        <div className="tc" style={{ marginBottom: 40 }}>
          <span className="stag">Brands</span>
          <h2 className="sh">Trusted by India&apos;s Fastest-Growing Brands</h2>
          <span className="gold-bar" />
        </div>
        <div className="brand-3d-wrap">
          <div className="brand-3d">
            <div className="brand-ring">
              {brandCarouselItems.map((b, i) => (
                <div
                  key={b.id}
                  className="brand-card"
                  style={{ "--i": i } as CSSProperties}
                >
                  <div className="brand-card-title">
                    <span>{b.emoji ?? ""}</span>
                    {b.name}
                  </div>
                  <div className="brand-card-stat">{b.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="brand-stats">
          <div className="brand-stat">
            <div className="brand-stat-val">₹500Cr+</div>
            <div className="brand-stat-label">Managed</div>
          </div>
          <div className="brand-stat">
            <div className="brand-stat-val">3x</div>
            <div className="brand-stat-label">Avg ROI</div>
          </div>
          <div className="brand-stat">
            <div className="brand-stat-val">500+</div>
            <div className="brand-stat-label">Campaigns</div>
          </div>
        </div>
      </section>

      <section className="reveal">
        <div className="tc" style={{ marginBottom: 32 }}>
          <span className="stag">Challenges</span>
          <h2 className="sh">Sound Familiar?</h2>
          <span className="gold-bar" />
        </div>
        <div className="pain-grid">
          {PAINS.map((p) => (
            <div key={p.top} className="pain-card">
              <div className="pain-top">{p.top}</div>
              <div className="pain-divider" />
              <div className="pain-bottom">{p.bottom}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal">
        <div className="tc" style={{ marginBottom: 40 }}>
          <span className="stag">How It Works</span>
          <h2 className="sh">From Brief to <em>Measurable ROI</em></h2>
          <span className="gold-bar" />
        </div>
        <StepCards steps={STEPS} />
      </section>

      <section className="reveal">
        <div className="tc" style={{ marginBottom: 32 }}>
          <span className="stag">Case Studies</span>
          <h2 className="sh">Results We&apos;ve Delivered</h2>
          <span className="gold-bar" />
        </div>
        <div className="case-grid">
          {campaigns.slice(0, 3).map((c) => (
            <button
              key={c.id}
              className="case-card"
              type="button"
              onClick={() => setActiveCampaignId(c.id)}
            >
              <div className="case-emoji">{c.emoji}</div>
              <div className="case-label">{c.label}</div>
              <div className="case-title">{c.title}</div>
              <div className="case-stat">{c.stat}</div>
              <div className="case-cta">View details →</div>
            </button>
          ))}
        </div>
      </section>

      <CampaignModal
        campaignId={activeCampaignId}
        isOpen={!!activeCampaignId}
        onClose={() => setActiveCampaignId(null)}
      />
    </>
  );
}

