"use client";

import { useState } from "react";

const CATEGORIES = ["All", "Fashion", "Travel", "Food", "Beauty", "Fitness", "Tech", "Gaming", "Finance", "Comedy", "Parenting"];

const INFLUENCERS = [
  {
    n: "Yashita Nk",        c: "fashion",   cl: "Fashion",   f: "1.4M",
    e: "👗",  bg: "#1a0f0a", image: "Yashi.png",
    instagram: "https://www.instagram.com/yashitank05?igsh=MWVhYnFtZ3RobGZkbw==",
  },
  {
    n: "Brinda Sharma",     c: "travel",    cl: "Travel",    f: "1.6M",
    e: "✈️",  bg: "#0a0f1a", image: "Brinda.png",
    instagram: "https://www.instagram.com/brindasharma?igsh=MWdvNWIxYjBjMzl6Yg==",
  },
  {
    n: "Yogishruti",        c: "beauty",    cl: "Beauty",    f: "585K",
    e: "💄",  bg: "#1a0a14", image: "Shruti.png",
    instagram: "https://www.instagram.com/yogishruti?igsh=MWhlcTY1NjhwMXZpbw==",
  },
  {
    n: "Triggered Insaan",  c: "gaming",    cl: "Gaming",    f: "13.2M",
    e: "🎮",  bg: "#001a00", image: "Nischay.png",
    instagram: "https://www.instagram.com/triggeredinsaan?igsh=dzd4MjhtbDBuMGl6",
  },
  {
    n: "Chef Kunal",        c: "food",      cl: "Food",      f: "4M",
    e: "🍕",  bg: "#1a0800", image: "Kunal.png",
    instagram: "https://www.instagram.com/chefkunal?igsh=MWxoZnM3ZTRrYnRnbQ==",
  },
  {
    n: "Gaurav Taneja",     c: "fitness",   cl: "Fitness",   f: "3.4M",
    e: "💪",  bg: "#001a1a", image: "Gaurav.png",
    instagram: "https://www.instagram.com/taneja.gaurav?igsh=eXlqZ3I2ZmhwODBk",
  },
  {
    n: "Jai Arora",         c: "tech",      cl: "Tech",      f: "3.7M",
    e: "📱",  bg: "#0a001a", image: "Jai.png",
    instagram: "https://www.instagram.com/tech_iela?igsh=MWEwNGVpaGs1YXZqNA==",
  },
  {
    n: "Sakchi Jain",       c: "finance",   cl: "Finance",   f: "1.8M",
    e: "💰",  bg: "#0a0a00", image: "Sakchi.png",
    instagram: "https://www.instagram.com/ca.sakchijain?igsh=N3doNGNiNXhoN3Vt",
  },
  {
    n: "Tanmay Bhat",       c: "comedy",    cl: "Comedy",    f: "2M",
    e: "😂",  bg: "#1a0a00", image: "Tanmay.png",
    instagram: "https://www.instagram.com/tanmaybhat?igsh=NWJwN3U3NHJsd3Iy",
  },
  {
    n: "Payal",             c: "parenting", cl: "Parenting", f: "139K",
    e: "👨‍👩‍👧", bg: "#0a1a0a", image: "Payal.png",
    instagram: "https://www.instagram.com/powerful.parentingg?igsh=MWcxejhwcnh6d2ZqZg==",
  },
];

export default function InfluencerDirectory() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? INFLUENCERS : INFLUENCERS.filter((inf) => inf.c === filter);

  return (
    <>
      <style>{`
        /* 2 columns on mobile so 2 cards always visible */
        @media (max-width: 860px) {
          .inf-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .icard-photo {
            aspect-ratio: 1 / 1 !important;
          }
          .icard-img {
            font-size: 42px !important;
          }
        }
        @media (max-width: 560px) {
          .inf-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .icard-info {
            padding: 9px 10px 11px !important;
          }
          .icard-name {
            font-size: 12px !important;
          }
          .icard-cat {
            font-size: 9.5px !important;
          }
          .icard-meta {
            font-size: 10px !important;
          }
          .ov-f {
            font-size: 20px !important;
          }
          .ov-er {
            font-size: 10px !important;
          }
          .ov-cta {
            font-size: 11px !important;
            padding: 6px 12px !important;
          }
        }
      `}</style>

      <section id="top-creators" className="inf-bg reveal">
        <div className="tc" style={{ marginBottom: 14 }}>
          <span className="stag">Discover Creators</span>
          <h2 className="sh">7,50,000+ <em>Influencers</em> Across India</h2>
          <p className="ssub" style={{ margin: "10px auto 28px" }}>
            Browse by niche — hover any card to visit their profile
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

        {/* Grid */}
        <div className="inf-grid">
          {filtered.map((inf) => (
            <div key={inf.n} className="icard">
              <div className="icard-photo">

                {/* Default: photo */}
                <div
                  className="icard-img"
                  style={{ background: `linear-gradient(135deg,${inf.bg},#0d0d0d)`, position: "relative", overflow: "hidden" }}
                >
                  <img
                    src={`/images/influencers/${inf.image}`}
                    alt={inf.n}
                    style={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute", inset: 0, display: "block" }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>

                {/* Hover overlay: emoji + followers + Visit Profile */}
                <div className="icard-ov">
                  <div style={{ fontSize: 48, lineHeight: 1, marginBottom: 8 }}>{inf.e}</div>
                  <div className="ov-f">{inf.f}</div>
                  <div className="ov-er" style={{ marginBottom: 12 }}>Instagram Followers</div>
                  <a
                    href={inf.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="ov-cta"
                    style={{ textDecoration: "none" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Profile →
                  </a>
                </div>

              </div>

              {/* Always-visible card info */}
              <div className="icard-info">
                <div className="icard-name">{inf.n}</div>
                <div className="icard-cat">{inf.cl}</div>
                <div className="icard-meta">
                  <span>📸 {inf.f} followers</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="/for-creators" className="btn btn-o">View More Creators On Creators Page↓</a>
        </div>
      </section>
    </>
  );
}