"use client";

import { useState } from "react";

const CATEGORIES = ["All", "Fashion", "Travel", "Food", "Beauty", "Fitness", "Tech", "Gaming", "Finance", "Comedy", "Parenting"];

const INFLUENCERS = [
  { n: "Riya Sharma", c: "fashion", cl: "Fashion/Lifestyle", f: "1.5M", er: "4.2%", ig: "1.5M", yt: "800K", e: "👗", bg: "#1a0f0a" },
  { n: "Aarav Gupta", c: "travel", cl: "Travel", f: "980K", er: "5.1%", ig: "980K", yt: "450K", e: "✈️", bg: "#0a0f1a" },
  { n: "Anita Kapoor", c: "beauty", cl: "Beauty", f: "2.1M", er: "6.3%", ig: "2.1M", yt: "1.2M", e: "💄", bg: "#1a0a14" },
  { n: "Rahul Verma", c: "gaming", cl: "Gaming", f: "3.4M", er: "8.7%", ig: "3.4M", yt: "5.2M", e: "🎮", bg: "#001a00" },
  { n: "Pooja Menon", c: "food", cl: "Food", f: "760K", er: "4.8%", ig: "760K", yt: "300K", e: "🍕", bg: "#1a0800" },
  { n: "Arjun Singh", c: "fitness", cl: "Fitness", f: "1.2M", er: "5.5%", ig: "1.2M", yt: "600K", e: "💪", bg: "#001a1a" },
  { n: "Kavya Nair", c: "tech", cl: "Tech", f: "880K", er: "3.9%", ig: "400K", yt: "880K", e: "📱", bg: "#0a001a" },
  { n: "Dev Sharma", c: "finance", cl: "Finance", f: "650K", er: "4.1%", ig: "650K", yt: "900K", e: "💰", bg: "#0a0a00" },
];

type Influencer = (typeof INFLUENCERS)[0];

export default function InfluencerDirectory() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Influencer | null>(null);

  const filtered =
    filter === "all" ? INFLUENCERS : INFLUENCERS.filter((inf) => inf.c === filter);

  return (
    <section id="top-creators" className="inf-bg reveal">
      <div className="tc" style={{ marginBottom: 14 }}>
        <span className="stag">Discover Creators</span>
        <h2 className="sh">7,50,000+ <em>Influencers</em> Across India</h2>
        <p className="ssub" style={{ margin: "10px auto 28px" }}>
          Browse by niche — hover any card to reveal live stats
        </p>
      </div>

      {/* Category filter pills */}
      <div className="cat-row">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`catb${filter === cat.toLowerCase() ? " on" : ""}`}
            onClick={() => setFilter(cat.toLowerCase())}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Influencer cards grid */}
      <div className="inf-grid">
        {filtered.map((inf) => (
          <div key={inf.n} className="icard">
            <div className="icard-photo">
              {/* Emoji only — no image */}
              <div
                className="icard-img"
                style={{ background: `linear-gradient(135deg,${inf.bg},#0d0d0d)` }}
              >
                {inf.e}
              </div>
              <div className="icard-ov">
                <div className="ov-f">{inf.f}</div>
                <div className="ov-er">Engagement: {inf.er}</div>
                <div className="ov-plats">
                  <span className="plat ig">📸 {inf.ig}</span>
                  <span className="plat yt">▶ {inf.yt}</span>
                </div>
                <button
                  type="button"
                  className="ov-cta"
                  onClick={(ev) => { ev.stopPropagation(); setSelected(inf); }}
                >
                  📊 View Insights
                </button>
              </div>
            </div>
            <div className="icard-info">
              <div className="icard-name">{inf.n}</div>
              <div className="icard-cat">{inf.cl}</div>
              <div className="icard-meta">
                <span>📸 {inf.ig}</span>
                <span className="ds" />
                <span>{inf.er} ER</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 36 }}>
        <button className="btn btn-o">View More Creators ↓</button>
      </div>

      {/* Creator detail modal */}
      {selected && (
        <div
          className="modal open"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            {/* Emoji avatar in modal */}
            <div
              className="creator-modal-fallback"
              style={{
                background: `linear-gradient(135deg,${selected.bg},#0d0d0d)`,
                fontSize: 72,
                width: 120,
                height: 120,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              {selected.e}
            </div>
            <div className="modal-title">{selected.n}</div>
            <div className="modal-sub">{selected.cl} · {selected.f} · {selected.er} ER</div>
            <div className="ov-plats" style={{ marginTop: 8, justifyContent: "center" }}>
              <span className="plat ig">📸 {selected.ig}</span>
              <span className="plat yt">▶ {selected.yt}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}