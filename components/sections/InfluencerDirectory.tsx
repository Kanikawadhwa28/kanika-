"use client";

import { useEffect } from "react";

const CATEGORIES = ["All", "Fashion", "Travel", "Food", "Beauty", "Fitness", "Tech", "Gaming", "Finance"];

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

export default function InfluencerDirectory() {
  useEffect(() => {
    const catRow = document.getElementById("catRow");
    const infGrid = document.getElementById("infGrid");
    if (!catRow || !infGrid) return;

    // Render influencer cards filtered by category
    const renderCards = (filter: string) => {
      const filtered = filter === "all"
        ? INFLUENCERS
        : INFLUENCERS.filter((inf) => inf.c === filter);

      infGrid.innerHTML = filtered
        .map(
          (inf) => `
          <div class="icard">
            <div class="icard-photo">
              <div class="icard-img" style="background:linear-gradient(135deg,${inf.bg},#0d0d0d);height:100%;">${inf.e}</div>
              <div class="icard-ov">
                <div class="ov-f">${inf.f}</div>
                <div class="ov-er">Engagement: ${inf.er}</div>
                <div class="ov-plats">
                  <span class="plat ig">📸 ${inf.ig}</span>
                  <span class="plat yt">▶ ${inf.yt}</span>
                </div>
                <a href="#" class="ov-cta" onclick="event.stopPropagation()">📊 View Insights</a>
              </div>
            </div>
            <div class="icard-info">
              <div class="icard-name">${inf.n}</div>
              <div class="icard-cat">${inf.cl}</div>
              <div class="icard-meta">
                <span>📸 ${inf.ig}</span>
                <span class="ds"></span>
                <span>${inf.er} ER</span>
              </div>
            </div>
          </div>`
        )
        .join("");
    };

    // Build category filter buttons
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "catb" + (cat === "All" ? " on" : "");
      btn.textContent = cat;
      btn.onclick = () => {
        document.querySelectorAll(".catb").forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
        renderCards(cat.toLowerCase());
      };
      catRow.appendChild(btn);
    });

    renderCards("all");
  }, []);

  return (
    <section id="top-creators" className="inf-bg reveal">
      <div className="tc" style={{ marginBottom: 14 }}>
        <span className="stag">Discover Creators</span>
        <h2 className="sh">7,50,000+ <em>Influencers</em> Across India</h2>
        <p className="ssub" style={{ margin: "10px auto 28px" }}>
          Browse by niche — hover any card to reveal live stats
        </p>
      </div>

      {/* Category filter row - buttons added by useEffect */}
      <div className="cat-row" id="catRow" />

      {/* Cards grid - populated by useEffect */}
      <div className="inf-grid" id="infGrid" />

      <div style={{ textAlign: "center", marginTop: 36 }}>
        <button className="btn btn-o">View More Creators ↓</button>
      </div>
    </section>
  );
}