"use client";

import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    let currentSlide = 2;
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
      autoPlay = setInterval(() => nextSlide(1), 5500);
      dots.forEach((dot, idx) => {
        dot.onclick = () => {
          goToSlide(idx);
          if (autoPlay) clearInterval(autoPlay);
          autoPlay = setInterval(() => nextSlide(1), 5500);
        };
      });
      document.querySelectorAll<HTMLElement>(".harr.prev").forEach((btn) => (btn.onclick = () => nextSlide(-1)));
      document.querySelectorAll<HTMLElement>(".harr.next").forEach((btn) => (btn.onclick = () => nextSlide(1)));
    }

    return () => {
      if (autoPlay) clearInterval(autoPlay);
    };
  }, []);

  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="harr prev">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>

      <div className="harr next">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>

      {/* Slide 1 */}
      <div className="slide">
        <div className="slide-bg" style={{ background: "linear-gradient(135deg,#1a0e00,#0d0600,#000)" }}>🌟</div>
        <div className="slide-ov" />
        <div className="slide-body">
          <div className="slide-chip">👋 Welcome to Avenue Marketing Agency</div>
          <h1 className="slide-h">
            Are you a <em>Brand</em> or a <em>Creator</em>?
          </h1>
          <p className="slide-sub">
            We work with both — tell us who you are and we&apos;ll show you exactly what Avenue can do for you.
          </p>
          <div className="slide-btns">
            <a href="/for-brands" className="btn btn-y">Are you a Brand? →</a>
            <a href="/for-creators" className="btn btn-w">Are you a Creator? →</a>
          </div>
        </div>
        <div className="hero-prog" />
      </div>

      {/* Slide 2 */}
      <div className="slide">
        <div className="slide-bg" style={{ background: "linear-gradient(135deg,#0a0800,#1a1300,#000)" }}>🧳</div>
        <div className="slide-ov" />
        <div className="slide-body">
          <div className="slide-chip">🎥 For Creators</div>
          <h1 className="slide-h">
            Join 7,50,000+ creators already earning with top brands
          </h1>
          <p className="slide-sub">
            Get matched with brands, earn from barter collabs, and grow your network — all in one place.
          </p>
          <div className="slide-btns">
            <a href="/for-brands" className="btn btn-y">I&apos;m a Brand →</a>
            <a href="/for-creators" className="btn btn-w">I&apos;m a Creator →</a>
          </div>
        </div>
        <div className="hero-prog" />
      </div>

      {/* Slide 3: Barter Collab — default on */}
      <div className="slide slide-barter on">
        <div className="slide-bg slide-bg-barter" style={{ background: "linear-gradient(135deg,#0e0800,#1a0f00,#000)" }}>
          <span className="slide-barter-emoji">🤝</span>
          <div className="slide-barter-logo">
            <img src="/images/logo/logo.png" alt="" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        </div>
        <div className="slide-ov" />
        <div className="slide-body">
          <div className="slide-chip">🤝 Barter Collab</div>
          <h1 className="slide-h">
            Our role is <em>Barter Collaboration</em> — brands and creators win together
          </h1>
          <p className="slide-sub">
            We specialise in meaningful barter deals that drive ROI for brands and value for creators.
          </p>
          <div className="slide-btns">
            <a href="/for-brands" className="btn btn-y">I&apos;m a Brand →</a>
            <a href="/for-creators" className="btn btn-w">I&apos;m a Creator →</a>
          </div>
        </div>
        <div className="hero-prog" />
      </div>

      {/* Slide 4: Fashion Icons */}
      <div className="slide">
        <div className="slide-bg" style={{ background: "linear-gradient(135deg,#1a0a14,#0a0508,#000)" }}>👗</div>
        <div className="slide-ov" />
        <div className="slide-body">
          <div className="slide-chip">👗 Fashion & Lifestyle</div>
          <h1 className="slide-h">
            500+ fashion creators. One campaign. 15 million engagements.
          </h1>
          <p className="slide-sub">
            India&apos;s top fashion and lifestyle influencer activations — coordinated end-to-end on Avenue Marketing Agency.
          </p>
          <div className="slide-btns">
            <a href="/for-brands" className="btn btn-y">Explore for Brands →</a>
            <a href="/for-creators" className="btn btn-w">Join as Creator →</a>
          </div>
        </div>
        <div className="hero-prog" />
      </div>

      <div className="hero-dots">
        <div className="hdot" />
        <div className="hdot" />
        <div className="hdot on" />
        <div className="hdot" />
      </div>
    </section>
  );
}