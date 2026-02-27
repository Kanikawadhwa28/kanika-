"use client";

import { useState } from "react";

const MAIN_POST = {
  icon: "📊",
  bg: "linear-gradient(135deg,#180e00,#0a0a0a)",
  category: "Industry Report",
  title: "India Influencer Marketing Report 2025 — Key Trends Every Brand Must Know",
  excerpt: "A comprehensive look at how 500+ brands are allocating influencer budgets in 2025, which niches deliver the best ROI, and what's changing fast.",
  content: "India's influencer marketing landscape has transformed in 2025. Brands are doubling down on micro and nano-influencers, barter collaborations are on the rise, and ROI measurement has become non-negotiable. This report dives into budget allocation, platform preferences, and emerging trends that every marketer needs to know.",
  date: "Feb 20",
  readTime: "12 min",
};

const SIDE_POSTS = [
  { icon: "🎯", bg: "linear-gradient(135deg,#0a0a1a,#000)", category: "Strategy", title: "Why Micro-Influencers Beat Mega-Influencers for Conversion", date: "Feb 12", excerpt: "Data shows micro-influencers drive higher conversion rates." },
  { icon: "💡", bg: "linear-gradient(135deg,#001a0a,#000)", category: "How-To", title: "The Creator Brief Template That Gets 3x Better Content", date: "Feb 5", excerpt: "A step-by-step template for briefing creators effectively." },
  { icon: "🚀", bg: "linear-gradient(135deg,#1a0000,#000)", category: "Case Study", title: "How boAt Used 500 Micro-Influencers to Drive 30K Signups", date: "Jan 28", excerpt: "Inside boAt's successful micro-influencer campaign." },
  { icon: "📱", bg: "linear-gradient(135deg,#001a1a,#000)", category: "Platform", title: "Reels vs. YouTube Shorts: Where Your Creator Budget Gets More ROI", date: "Jan 20", excerpt: "Platform-by-platform ROI analysis for short-form video." },
];

export default function BlogSection() {
  const [openPost, setOpenPost] = useState<typeof MAIN_POST | (typeof SIDE_POSTS)[0] | null>(null);

  return (
    <section className="blog-bg reveal">
      <div className="blog-hdr">
        <div>
          <span className="stag">Resources</span>
          <h2 className="sh">Latest from Our <em>Blog</em></h2>
        </div>
      </div>

      <div className="blog-grid">
        <button
          type="button"
          className="bcard bmain"
          onClick={() => setOpenPost(MAIN_POST)}
        >
          <div className="bcard-img" style={{ height: 260, fontSize: 60, background: MAIN_POST.bg }}>
            {MAIN_POST.icon}
          </div>
          <div className="bcard-body">
            <div className="bcat">{MAIN_POST.category}</div>
            <div className="bttl">{MAIN_POST.title}</div>
            <p className="bexc">{MAIN_POST.excerpt}</p>
            <div className="bfoot">
              <span>📅 {MAIN_POST.date} · {MAIN_POST.readTime}</span>
              <span className="bread">Read →</span>
            </div>
          </div>
        </button>

        {SIDE_POSTS.map((post) => (
          <button
            key={post.title}
            type="button"
            className="bcard"
            onClick={() => setOpenPost(post)}
          >
            <div className="bcard-img" style={{ height: 130, fontSize: 34, background: post.bg }}>
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
          </button>
        ))}
      </div>

      {openPost && (
        <div
          className="modal open"
          id="blogModal"
          onClick={() => setOpenPost(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenPost(null)}>✕</button>
            <div
              className="bcard-img"
              style={{
                height: 180,
                fontSize: 60,
                background: openPost === MAIN_POST ? MAIN_POST.bg : (openPost as { bg: string }).bg,
                marginBottom: 16,
                borderRadius: 12,
              }}
            >
              {openPost === MAIN_POST ? MAIN_POST.icon : (openPost as { icon: string }).icon}
            </div>
            <div className="bcat">{openPost === MAIN_POST ? MAIN_POST.category : (openPost as { category: string }).category}</div>
            <div className="modal-title">{openPost === MAIN_POST ? MAIN_POST.title : (openPost as { title: string }).title}</div>
            <p className="modal-sub">
              {openPost === MAIN_POST
                ? MAIN_POST.content
                : "excerpt" in openPost
                ? (openPost as { excerpt: string }).excerpt
                : MAIN_POST.excerpt}
            </p>
            <span className="bfoot">📅 {openPost === MAIN_POST ? MAIN_POST.date : (openPost as { date: string }).date}</span>
          </div>
        </div>
      )}
    </section>
  );
}
