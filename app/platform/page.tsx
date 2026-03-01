"use client";

import { useEffect, useState } from "react";
import { campaigns } from "@/data/campaigns";
import { blogPosts, type BlogPost } from "@/data/blog";
import PageHero from "@/components/ui/PageHero";
import CampaignModal from "@/components/ui/CampaignModal";

const SECTIONS = ["products", "work", "blog", "guides"] as const;

export default function PlatformPage() {
  const [active, setActive] = useState<(typeof SECTIONS)[number]>("products");
  const [activeCampaignId, setActiveCampaignId] = useState<string | null>(null);
  const [openBlog, setOpenBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    // ── Handle scroll intent from other pages (e.g. newsletter nudge) ──
    const scrollTarget = sessionStorage.getItem("scrollTo");
    if (scrollTarget) {
      sessionStorage.removeItem("scrollTo");
      setTimeout(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }

    // ── Active section tracker ──
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
        subtitle="From creator discovery to Fair Price Index, competitor tracking and reporting — Avenue Marketing Agency is your full-stack influencer OS."
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
                  <a href="/for-creators" className="btn btn-y">See few Creators→</a>
                  <span className="prod-badge">7,50,000+ Creators</span>
                </div>
              </div>
              <div className="prod-block rev">
                <div className="prod-text">
                  <h3>💲 Fair Price Index</h3>
                  <p>Never overpay a creator again with real-time benchmarks, tier-based pricing and negotiation data.</p>
                  <a href="/#split-fair-price" className="btn btn-y">What is Fair Price Index→</a>
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
                    <div className="node brand">Creator A</div>
                    <div className="node brand">Creator B</div>
                    <div className="node brand">Creator C</div>
                    <div className="node creator">Creator D</div>
                    <div className="node creator">Creator E</div>
                    <div className="node creator">Creator F</div>
                  </div>
                </div>
                <div className="prod-text">
                  <h3>🎯 Competitor Tracker</h3>
                  <p>Spy on your competitors&apos; playbook with creator mapping, platform spend analysis and share-of-voice insights.</p>
                  <a href="/contact" className="btn btn-y">Reach Out to Us→</a>
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
              {campaigns
                .filter((c) => !["navi", "bgmi"].includes(c.id))
                .map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className="case-card"
                    onClick={() => setActiveCampaignId(c.id)}
                  >
                    {/* Campaign image */}
                    {c.image && (
                      <div style={{
                        width: "100%", height: 140, marginBottom: 12,
                        borderRadius: 10, overflow: "hidden",
                        background: "#0a0a0a",
                      }}>
                        <img
                          src={`/images/campaigns/${c.image}`}
                          alt={c.brand}
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                    )}
                    {!c.image && <div className="case-emoji">{c.emoji}</div>}
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
                <button type="button" className="bcard bmain" onClick={() => setOpenBlog(featured)}>
                  <div
                    className="bcard-img"
                    style={{
                      height: 260,
                      fontSize: 60,
                      background: featured.image ? "none" : "linear-gradient(135deg,#180e00,#0a0a0a)",
                      backgroundImage: featured.image ? `url(/images/blogs/${featured.image})` : undefined,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#0a0a0a",
                    }}
                  >
                    {!featured.image && featured.icon}
                  </div>
                  <div className="bcard-body">
                    <div className="bcat">{featured.category}</div>
                    <div className="bttl">{featured.title}</div>
                    <p className="bexc">{featured.excerpt}</p>
                    <div className="bfoot">
                      <span>📅 {featured.date} · {featured.readTime}</span>
                      <span className="bread">Read Full Report →</span>
                    </div>
                  </div>
                </button>
              )}
              {others.map((post) => (
                <button key={post.id} type="button" className="bcard" onClick={() => setOpenBlog(post)}>
                  <div
                    className="bcard-img"
                    style={{
                      height: 130,
                      fontSize: 34,
                      background: post.image ? "none" : "linear-gradient(135deg,#0a0a1a,#000)",
                      backgroundImage: post.image ? `url(/images/blogs/${post.image})` : undefined,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#0a0a0a",
                    }}
                  >
                    {!post.image && post.icon}
                  </div>
                  <div className="bcard-body">
                    <div className="bcat">{post.category}</div>
                    <div className="bttl">{post.title}</div>
                    <div className="bfoot">
                      <span>📅 {post.date}</span>
                      <span className="bread">Read →</span>
                    </div>
                  </div>
                </button>
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
                <a href="/contact" className="btn btn-y">→Contact Us</a>
              </div>
              <div className="guide-card green">
                <div className="guide-emoji">📗</div>
                <h3>The Complete Creator Brief Template</h3>
                <p>Get 3x better content with this step-by-step template.</p>
                <a href="/contact" className="btn btn-y">Know from Us</a>
              </div>
              <div className="guide-card orange">
                <div className="guide-emoji">📙</div>
                <h3>ROI Measurement Playbook</h3>
                <p>Track and report ROI in a way your CFO will love.</p>
                <a href="/contact" className="btn btn-y">Call Us</a>
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

      {openBlog && (
        <div className="modal open" onClick={() => setOpenBlog(null)} role="dialog" aria-modal="true">
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenBlog(null)}>✕</button>
            <div
              className="bcard-img"
              style={{
                height: 200, fontSize: 60, borderRadius: 12, marginBottom: 16, flexShrink: 0,
                background: openBlog.image ? "none" : "linear-gradient(135deg,#180e00,#0a0a0a)",
                backgroundImage: openBlog.image ? `url(/images/blogs/${openBlog.image})` : undefined,
                backgroundSize: "contain", backgroundPosition: "center",
                backgroundRepeat: "no-repeat", backgroundColor: "#0a0a0a",
              }}
            >
              {!openBlog.image && openBlog.icon}
            </div>
            <div className="bcat">{openBlog.category}</div>
            <div className="modal-title">{openBlog.title}</div>
            <p className="modal-sub" style={{ lineHeight: 1.7, marginTop: 10 }}>
              {openBlog.content ?? openBlog.excerpt}
            </p>
            <span className="bfoot" style={{ marginTop: 12, display: "block" }}>
              📅 {openBlog.date}{openBlog.readTime ? ` · ${openBlog.readTime}` : ""}
            </span>
          </div>
        </div>
      )}

      <CampaignModal
        campaignId={activeCampaignId}
        isOpen={!!activeCampaignId}
        onClose={() => setActiveCampaignId(null)}
      />
    </>
  );
}