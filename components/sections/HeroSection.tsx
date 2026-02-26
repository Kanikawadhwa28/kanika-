"use client";

import { useEffect } from "react";

// The hero manages its own slider logic inside useEffect
// Only slider-related code lives here
export default function HeroSection() {
  useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll<HTMLElement>(".slide");
    const dots = document.querySelectorAll<HTMLElement>(".hdot");
    let autoPlay: ReturnType<typeof setInterval> | null = null;

    const goToSlide = (n: number) => {
      slides[currentSlide]?.classList.remove("on");
      dots[currentSlide]?.classList.remove("on");
      currentSlide = n;
      slides[currentSlide]?.classList.add("on");
      dots[currentSlide]?.classList.add("on");
    };

    const nextSlide = (direction: number) => {
      const next = (currentSlide + direction + slides.length) % slides.length;
      goToSlide(next);
    };

    if (slides.length) {
      // Auto advance every 5.5 seconds
      autoPlay = setInterval(() => nextSlide(1), 5500);

      // Dot clicks
      dots.forEach((dot, idx) => {
        dot.onclick = () => {
          goToSlide(idx);
          if (autoPlay) clearInterval(autoPlay);
          autoPlay = setInterval(() => nextSlide(1), 5500);
        };
      });

      // Arrow clicks
      document.querySelectorAll<HTMLElement>(".harr.prev").forEach(
        (btn) => (btn.onclick = () => nextSlide(-1))
      );
      document.querySelectorAll<HTMLElement>(".harr.next").forEach(
        (btn) => (btn.onclick = () => nextSlide(1))
      );
    }

    return () => {
      if (autoPlay) clearInterval(autoPlay);
    };
  }, []);

  return (
    <section className="hero" style={{ padding: 0 }}>
      {/* Prev arrow */}
      <div className="harr prev">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>

      {/* Next arrow */}
      <div className="harr next">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>

      {/* Slide 1 */}
      <div className="slide on">
        <div className="slide-bg" style={{ background: "linear-gradient(135deg,#1a0e00,#0d0600,#000)" }}>🌟</div>
        <div className="slide-ov" />
        <div className="slide-body">
          <div className="slide-chip">📈 India&apos;s #1 Platform</div>
          <h1 className="slide-h">
            &quot;70% of brands increased their influencer marketing spends in 2025&quot;
          </h1>
          <p className="slide-sub">
            India&apos;s most data-driven influencer marketing ecosystem — built for brands that demand ROI.
          </p>
          <div className="slide-btns">
            <a href="#" className="btn btn-y">Read the Report →</a>
            <a href="#" className="btn btn-w">Watch Demo</a>
          </div>
        </div>
        <div className="hero-prog" />
      </div>

      {/* Slide 2 */}
      <div className="slide">
        <div className="slide-bg" style={{ background: "linear-gradient(135deg,#0a0800,#1a1300,#000)" }}>🧳</div>
        <div className="slide-ov" />
        <div className="slide-body">
          <div className="slide-chip">🧳 Samsonite × InfluenceIN</div>
          <h1 className="slide-h">
            Celebrity meets creator — 100M+ audience reached for Samsonite India
          </h1>
          <p className="slide-sub">
            A luxury campaign that redefined what influencer marketing can achieve at scale.
          </p>
          <div className="slide-btns">
            <a href="#" className="btn btn-y">View Case Study →</a>
            <a href="#" className="btn btn-o">Talk to Us</a>
          </div>
        </div>
        <div className="hero-prog" />
      </div>

      {/* Slide 3 */}
      <div className="slide">
        <div className="slide-bg" style={{ background: "linear-gradient(135deg,#00050f,#001428,#000)" }}>🎮</div>
        <div className="slide-ov" />
        <div className="slide-body">
          <div className="slide-chip">🎮 Gaming — BGMI</div>
          <h1 className="slide-h">
            500+ gaming streamers. One campaign. 15 million engagements.
          </h1>
          <p className="slide-sub">
            India&apos;s largest gaming influencer activation — coordinated end-to-end on InfluenceIN.
          </p>
          <div className="slide-btns">
            <a href="#" className="btn btn-y">Talk to Us →</a>
            <a href="#" className="btn btn-w">View Campaign</a>
          </div>
        </div>
        <div className="hero-prog" />
      </div>

      {/* Dots */}
      <div className="hero-dots">
        <div className="hdot on" />
        <div className="hdot" />
        <div className="hdot" />
      </div>
    </section>
  );
}