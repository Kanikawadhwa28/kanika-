"use client";

import { useEffect } from "react";

// Each tab panel content
const TABS = [
  {
    label: "🔍 Discover",
    title: "Find Your",
    highlight: "Perfect Creator",
    rest: "— Instantly",
    desc: "Search 7,50,000+ verified influencers with 30+ filters. Audience demographics, location, engagement quality, fake follower detection — all in one place.",
    features: ["30+ advanced search filters", "Fake follower AI detection", "Upcoming creator discovery", "Audience demographic breakdown"],
    cta: "SIGNUP FOR FREE →",
    icon: "🔍",
    mockLabel: "Creator Discovery Dashboard",
  },
  {
    label: "💲 Compare Prices",
    title: "Never",
    highlight: "Overpay",
    rest: "a Creator Again",
    desc: "Real-time Fair Price Index benchmarks 7,50,000+ creators. Know market rates before you negotiate — save up to 40% on every campaign budget.",
    features: ["Real-time rate benchmarking", "Category-wise comparisons", "Negotiation leverage data", "Historical pricing trends"],
    cta: "CHECK FAIR PRICE →",
    icon: "💲",
    mockLabel: "Fair Price Index Dashboard",
  },
  {
    label: "🎯 Track Competitors",
    title: "Spy on Your",
    highlight: "Competitors'",
    rest: "Playbook",
    desc: "See exactly which creators and platforms your competitors are using. Reverse-engineer their strategy and stay two steps ahead.",
    features: ["Competitor creator mapping", "Platform spend analysis", "Share of voice tracking", "Content format insights"],
    cta: "TRY IT FREE →",
    icon: "🎯",
    mockLabel: "Competitor Tracking Dashboard",
  },
  {
    label: "📊 Measure ROI",
    title: "Measure",
    highlight: "Real ROI",
    rest: "— Not Just Views",
    desc: "Track every campaign at creator level in real-time. From awareness to conversions — auto-generated reports that your CFO and CMO will both love.",
    features: ["Creator-level ROI tracking", "Revenue attribution", "Real-time performance data", "One-click PDF reports"],
    cta: "START MEASURING →",
    icon: "📊",
    mockLabel: "Campaign Reporting Dashboard",
  },
];

export default function FeaturesSection() {
  useEffect(() => {
    // Switch tab panels when a tab pill is clicked
    const switchTab = (activeIndex: number) => {
      document.querySelectorAll<HTMLButtonElement>(".tp").forEach((btn, i) => {
        btn.classList.toggle("on", i === activeIndex);
      });
      document.querySelectorAll<HTMLElement>(".tc-panel").forEach((panel, i) => {
        panel.classList.toggle("on", i === activeIndex);
      });
    };

    document.querySelectorAll<HTMLButtonElement>(".tabs-pill .tp").forEach(
      (btn, i) => (btn.onclick = () => switchTab(i))
    );
  }, []);

  return (
    <section className="feat-bg reveal">
      {/* Section header */}
      <div className="tc" style={{ marginBottom: 36 }}>
        <span className="stag">Platform</span>
        <h2 className="sh">
          An Influencer Platform to <em>Discover</em> &amp;
          <br />
          Get the Best ROI for Your Brand
        </h2>
        <span className="gold-bar" />
      </div>

      {/* Tab pills */}
      <div className="tabs-pill">
        {TABS.map((tab) => (
          <button key={tab.label} className="tp">
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {TABS.map((tab, i) => (
        <div key={tab.label} className={`tc-panel${i === 0 ? " on" : ""}`}>
          <div className="tc-text">
            <h3>
              {tab.title} <span>{tab.highlight}</span> {tab.rest}
            </h3>
            <p>{tab.desc}</p>
            <ul className="flist">
              {tab.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#" className="btn btn-y">{tab.cta}</a>
          </div>
          <div className="tc-img">
            <div className="tc-mock">
              <span>{tab.icon}</span>
              <p>{tab.mockLabel}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}