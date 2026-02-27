"use client";

import { useEffect } from "react";

const CAMPAIGNS = [
  {
    title: "Navi — 45M Views",
    sub: "200+ fintech creators drove 45M views with 3.2% engagement — 4x industry average.",
    label: "FINTECH",
    brand: "Navi",
    stat: "🔥 45M Views • 200+ Creators",
    icon: "🎬",
    bg: "linear-gradient(135deg,#1a0000,#0d0d00)",
    big: true, // first card is bigger
  },
  {
    title: "Samsonite — 100M Reach",
    sub: "Celebrity + mega-influencer mix. 100M+ reach in 3 weeks.",
    label: "LUXURY",
    brand: "Samsonite",
    stat: "🌟 100M+ Reach",
    icon: "🧳",
    bg: "linear-gradient(135deg,#0d0d00,#1a1800)",
  },
  {
    title: "boAt — 30K Sign-Ups",
    sub: "500+ micro-influencers drove 30K direct sign-ups.",
    label: "D2C",
    brand: "boAt",
    stat: "📈 30K Sign-Ups",
    icon: "🎧",
    bg: "linear-gradient(135deg,#000a1a,#00051f)",
  },
  {
    title: "BGMI — 15M Engagements",
    sub: "India's largest gaming influencer activation. 500+ streamers, 15M engagements.",
    label: "GAMING",
    brand: "BGMI",
    stat: "⚡ 15M Engagements",
    icon: "🎮",
    bg: "linear-gradient(135deg,#001400,#001a00)",
  },
  {
    title: "Samsung — 22M Reach",
    sub: "Galaxy launch with 300+ tech creators. 22M reach in 10 days.",
    label: "TECH",
    brand: "Samsung",
    stat: "📱 22M Reach, 10 Days",
    icon: "📱",
    bg: "linear-gradient(135deg,#001a1a,#000d0d)",
  },
  {
    title: "Puma — 8M Impressions",
    sub: "120+ fitness and fashion creators drove 8M impressions in 2 weeks.",
    label: "SPORTS",
    brand: "Puma India",
    stat: "👟 8M Impressions",
    icon: "👟",
    bg: "linear-gradient(135deg,#0a0000,#1a0000)",
  },
];

export default function VideoGallery() {
  useEffect(() => {
    // When a campaign card is clicked, open the modal with its data
    document.querySelectorAll<HTMLElement>("[data-modal-title]").forEach((card) => {
      card.addEventListener("click", () => {
        const title = card.dataset.modalTitle || "";
        const sub = card.dataset.modalSub || "";

        const modal = document.getElementById("modal");
        const mTitle = document.getElementById("mTitle");
        const mSub = document.getElementById("mSub");
        const mIco = document.getElementById("mIco");

        // Pick an emoji based on which brand
        const icons: Record<string, string> = {
          Navi: "🎬", Samsonite: "🧳", boAt: "🎧", BGMI: "🎮", Samsung: "📱", Puma: "👟",
        };
        const key = Object.keys(icons).find((k) => title.includes(k));

        if (mTitle) mTitle.textContent = title;
        if (mSub) mSub.textContent = sub;
        if (mIco) mIco.textContent = key ? icons[key] : "🎬";
        modal?.classList.add("open");
      });
    });
  }, []);

  return (
    <section id="video-gallery" className="vid-bg reveal">
      <div className="tc" style={{ marginBottom: 44 }}>
        <span className="stag">Portfolio</span>
        <h2 className="sh">Our <em>Recent Work</em> — Brands We Work With</h2>
        <p className="ssub" style={{ margin: "10px auto 0" }}>
          Real campaigns. Real results. Click to explore.
        </p>
      </div>

      <div className="vid-grid">
        {CAMPAIGNS.map((c) => (
          <div
            key={c.title}
            className={`vcard${c.big ? " vbig" : ""}`}
            data-modal-title={c.title}
            data-modal-sub={c.sub}
          >
            <div
              className="vcard-bg"
              style={{
                height: c.big ? 300 : 210,
                background: c.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: c.big ? 90 : 64,
              }}
            >
              {c.icon}
            </div>
            <div className="vcard-ov" />
            <div className="vcard-lbl">{c.label}</div>
            <div className="play-ring">
              <svg width="17" height="17" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3" fill="#000" />
              </svg>
            </div>
            <div className="vcard-meta">
              <div className="vcard-brand">{c.brand}</div>
              <div className="vcard-stat">{c.stat}</div>
              <div className="vcard-hint">▶ Click for campaign details</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}