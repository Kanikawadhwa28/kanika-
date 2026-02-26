"use client";

import { useEffect } from "react";

const CREATORS = [
  { n: "Zayan Saifi", aud: "11.4M+", e: "🌟", bg: "#1a0a00" },
  { n: "Bharti Singh", aud: "9.4M+", e: "😄", bg: "#1a000a" },
  { n: "Nazim Ahmad", aud: "6.7M+", e: "🎭", bg: "#001a0a" },
  { n: "Wasim Ahmad", aud: "3.1M+", e: "🎬", bg: "#0a001a" },
  { n: "Nishu Tiwari", aud: "1.6M+", e: "💃", bg: "#1a1000" },
  { n: "Harsh Limbachiyaa", aud: "1.6M+", e: "😂", bg: "#001018" },
  { n: "Roonak Sachdeva", aud: "1.2M+", e: "✨", bg: "#180010" },
  { n: "Abhishek Kashyap", aud: "1M+", e: "🎯", bg: "#001a14" },
  { n: "Mohit Narang", aud: "569K+", e: "👗", bg: "#140010" },
  { n: "Soniya Rawat", aud: "556K+", e: "💄", bg: "#1a0808" },
  { n: "Mayank Kaushik", aud: "227K+", e: "📱", bg: "#080a1a" },
  { n: "Aayush Sapra", aud: "204K+", e: "🏋️", bg: "#001810" },
];

const PER_PAGE = 4; // Show 4 cards at a time

export default function CreatorNetwork() {
  useEffect(() => {
    const track = document.getElementById("csTrack");
    const dotsContainer = document.getElementById("csDots");
    if (!track || !dotsContainer) return;

    const totalPages = Math.ceil(CREATORS.length / PER_PAGE);
    let currentPage = 0;

    // Render the 4 cards for the current page
    const renderPage = () => {
      const start = currentPage * PER_PAGE;
      const slice = CREATORS.slice(start, start + PER_PAGE);

      track.innerHTML = slice
        .map(
          (c) => `
          <div class="ccard">
            <div class="ccard-photo" style="background:linear-gradient(135deg,${c.bg},#0a0a0a);">${c.e}</div>
            <div class="ccard-name">${c.n}</div>
            <div class="ccard-role">Influencer</div>
            <div class="ccard-aud">
              <span class="ccard-aud-lbl">Audience</span>
              <div class="ccard-aud-val">${c.aud}</div>
            </div>
          </div>`
        )
        .join("");

      // Update dot active state
      dotsContainer.querySelectorAll(".csdot").forEach((dot, i) => {
        dot.classList.toggle("on", i === currentPage);
      });
    };

    // Create navigation dots
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("div");
      dot.className = "csdot" + (i === 0 ? " on" : "");
      dot.onclick = () => { currentPage = i; renderPage(); };
      dotsContainer.appendChild(dot);
    }

    renderPage();

    // Arrow buttons
    document.querySelectorAll<HTMLElement>(".cs-arr.l").forEach(
      (btn) => (btn.onclick = () => {
        currentPage = (currentPage - 1 + totalPages) % totalPages;
        renderPage();
      })
    );
    document.querySelectorAll<HTMLElement>(".cs-arr.r").forEach(
      (btn) => (btn.onclick = () => {
        currentPage = (currentPage + 1) % totalPages;
        renderPage();
      })
    );

    // Auto advance every 5 seconds
    const timer = setInterval(() => {
      currentPage = (currentPage + 1) % totalPages;
      renderPage();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="creator-sec reveal">
      <div className="tc" style={{ marginBottom: 40 }}>
        <span className="stag">Creator Network</span>
        <h2 className="sh">Our <em>Top Creators</em> — Hover to Connect</h2>
        <p className="ssub" style={{ margin: "10px auto 0" }}>
          A curated network of India&apos;s most influential voices across every niche
        </p>
      </div>

      <div className="creator-slider">
        {/* Left arrow */}
        <div className="cs-arr l">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>

        {/* Right arrow */}
        <div className="cs-arr r">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className="cs-viewport">
          <div className="cs-track" id="csTrack" />
        </div>

        <div className="cs-dots" id="csDots" />
      </div>
    </section>
  );
}