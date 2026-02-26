"use client";

import { useEffect, useState } from "react";
import { campaigns } from "@/data/campaigns";
import { blogPosts } from "@/data/blog";
import PageHero from "@/components/ui/PageHero";
import CampaignModal from "@/components/ui/CampaignModal";

const SECTIONS = ["products", "work", "blog", "guides"] as const;

export default function PlatformPage() {
  const [active, setActive] = useState<(typeof SECTIONS)[number]>("products");
  const [activeCampaignId, setActiveCampaignId] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as (typeof SECTIONS)[number]);
        });
      },
      { threshold: 0.4 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const featured = blogPosts.find((b) => b.featured);
  const others = blogPosts.filter((b) => !b.featured).slice(0, 4);

  return (
    <>
      <PageHero
        tag="Platform"
        h1="One Platform. Every Tool You Need."
        subtitle="From creator discovery to Fair Price Index, competitor tracking and reporting — InfluenceIN is your full-stack influencer OS."
        buttons={[{ label: "Start Free →", href: "#", variant: "gold" }]}
      />

      <div className="platform-layout">
        <aside className="platform-nav">
          {SECTIONS.map((id) => (
            <button
              key={id}
              type="button"
              className={`platform-pill${active === id ? " on" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {id === "products" && "Products"}
              {id === "work" && "Our Work"}
              {id === "blog" && "Blog"}
              {id === "guides" && "Guides"}
            </button>
          ))}
        </aside>

        <div className="platform-content">
          <section id="products" className="reveal">
            <span className="stag">Products</span>
            <h2 className="sh">Powerful Tools for Modern Teams</h2>
            <span className="gold-bar" />
            <div className="prod-grid">
              <div className="prod-block">
                <div className="prod-mock">
                  <div className="prod-search">Search creators...</div>
                  <div className="prod-pills">
                    <span>Fashion</span>
                    <span>Gaming</span>
                    <span>Finance</span>
                  </div>
                  <div className="prod-cards">
                    <div>👗 1.2M • Fashion</div>
                    <div>🎮 900K • Gaming</div>
                    <div>💰 650K • Finance</div>
                  </div>
                </div>
                <div className="prod-text">
                  <h3>📊 Creator Discovery</h3>
                  <p>Find your perfect creator instantly with 30+ filters, fake follower detection and engagement scoring.</p>
                  <a href="#" className="btn btn-y">Try Free →</a>
                  <span className="prod-badge">7,50,000+ Creators</span>
                </div>
              </div>
              <div className="prod-block rev">
                <div className="prod-text">
                  <h3>💲 Fair Price Index</h3>
                  <p>Never overpay a creator again with real-time benchmarks, tier-based pricing and negotiation data.</p>
                  <a href="#" className="btn btn-y">Check Fair Price →</a>
                  <span className="prod-badge">Save up to 40%</span>
                </div>
                <div className="prod-mock">
                  <div className="prod-input">@creator_handle</div>
                  <div className="prod-bars">
                    <div />
                    <div />
                    <div />
                  </div>
                  <div className="prod-rate">Market Rate: ₹12,000</div>
                </div>
              </div>
              <div className="prod-block">
                <div className="prod-mock">
                  <div className="prod-graph">
                    <div className="node brand">Zepto</div>
                    <div className="node brand">boAt</div>
                    <div className="node brand">Samsung</div>
                    <div className="node creator">Creator A</div>
                    <div className="node creator">Creator B</div>
                    <div className="node creator">Creator C</div>
                  </div>
                </div>
                <div className="prod-text">
                  <h3>🎯 Competitor Tracker</h3>
                  <p>Spy on your competitors&apos; playbook with creator mapping, platform spend analysis and share-of-voice insights.</p>
                  <a href="#" className="btn btn-y">Start Tracking →</a>
                  <span className="prod-badge">Real-time Intel</span>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="reveal">
            <span className="stag">Our Work</span>
            <h2 className="sh">Real Campaigns. Real Results.</h2>
            <span className="gold-bar" />
            <div className="work-stats">
              <div>500+ Campaigns</div>
              <div>10B+ Reach</div>
              <div>100+ Brands</div>
              <div>8+ Years</div>
            </div>
            <div className="case-grid">
              {campaigns.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className="case-card"
                  onClick={() => setActiveCampaignId(c.id)}
                >
                  <div className="case-emoji">{c.emoji}</div>
                  <div className="case-label">{c.category}</div>
                  <div className="case-title">{c.title}</div>
                  <div className="case-stat">{c.stat}</div>
                  <div className="case-cta">View details →</div>
                </button>
              ))}
            </div>
          </section>

          <section id="blog" className="reveal">
            <span className="stag">Blog</span>
            <h2 className="sh">Insights &amp; Strategy</h2>
            <span className="gold-bar" />
            <div className="blog-grid">
              {featured && (
                <a href="#" className="bcard bmain">
                  <div className="bcard-img" style={{ height: 260 }}>
                    {featured.icon}
                  </div>
                  <div className="bcard-body">
                    <div className="bcat">{featured.category}</div>
                    <div className="bttl">{featured.title}</div>
                    <p className="bexc">{featured.excerpt}</p>
                    <div className="bfoot">
                      <span>
                        📅 {featured.date} · {featured.readTime}
                      </span>
                      <span className="bread">Read Full Report →</span>
                    </div>
                  </div>
                </a>
              )}
              {others.map((post) => (
                <a key={post.id} href="#" className="bcard">
                  <div className="bcard-img" style={{ height: 130 }}>
                    {post.icon}
                  </div>
                  <div className="bcard-body">
                    <div className="bcat">{post.category}</div>
                    <div className="bttl">{post.title}</div>
                    <div className="bfoot">
                      <span>📅 {post.date}</span>
                      <span className="bread">Read →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section id="guides" className="reveal">
            <span className="stag">Guides</span>
            <h2 className="sh">Learn Influencer Marketing</h2>
            <span className="gold-bar" />
            <div className="guide-grid">
              <div className="guide-card blue">
                <div className="guide-emoji">📘</div>
                <h3>Beginner&apos;s Guide to Influencer Marketing</h3>
                <p>Everything a brand needs before their first campaign.</p>
                <a href="#" className="btn btn-y">Read Guide →</a>
              </div>
              <div className="guide-card green">
                <div className="guide-emoji">📗</div>
                <h3>The Complete Creator Brief Template</h3>
                <p>Get 3x better content with this step-by-step template.</p>
                <a href="#" className="btn btn-y">Download Free →</a>
              </div>
              <div className="guide-card orange">
                <div className="guide-emoji">📙</div>
                <h3>ROI Measurement Playbook</h3>
                <p>Track and report ROI in a way your CFO will love.</p>
                <a href="#" className="btn btn-y">Get Playbook →</a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="nl-bg reveal" style={{ marginTop: 40 }}>
        <span className="nl-ico">📬</span>
        <span className="stag" style={{ display: "block", textAlign: "center" }}>
          Newsletter
        </span>
        <h2 className="sh" style={{ textAlign: "center", fontSize: "clamp(24px,3vw,40px)" }}>
          Get Weekly <em>Influencer Marketing</em> Insights
        </h2>
        <p className="ssub" style={{ textAlign: "center", margin: "10px auto 0" }}>
          The same insights we share with India&apos;s fastest-growing brands — every Tuesday.
        </p>
      </section>

      <CampaignModal
        campaignId={activeCampaignId}
        isOpen={!!activeCampaignId}
        onClose={() => setActiveCampaignId(null)}
      />
    </>
  );
}

