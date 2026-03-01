"use client";

import { useState } from "react";
import { blogPosts, type BlogPost } from "@/data/blog";

const MAIN_POST = blogPosts.find((b) => b.featured)!;
const SIDE_POSTS = blogPosts.filter((b) => !b.featured);

export default function BlogSection() {
  const [openPost, setOpenPost] = useState<BlogPost | null>(null);

  return (
    <section className="blog-bg reveal">
      <div className="blog-hdr">
        <div>
          <span className="stag">Resources</span>
          <h2 className="sh">Latest from Our <em>Blog</em></h2>
        </div>
      </div>

      <div className="blog-grid">
        {/* ── Featured post ── */}
        <button
          type="button"
          className="bcard bmain"
          onClick={() => setOpenPost(MAIN_POST)}
        >
          <div
            className="bcard-img"
            style={{
              height: 260,
              fontSize: 60,
              background: MAIN_POST.image
                ? "none"
                : "linear-gradient(135deg,#180e00,#0a0a0a)",
              backgroundImage: MAIN_POST.image
                ? `url(/images/blogs/${MAIN_POST.image})`
                : undefined,
              backgroundSize: "contain",
              backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#0a0a0a",
            }}
          >
            {!MAIN_POST.image && MAIN_POST.icon}
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

        {/* ── Side posts ── */}
        {SIDE_POSTS.map((post) => (
          <button
            key={post.id}
            type="button"
            className="bcard"
            onClick={() => setOpenPost(post)}
          >
            <div
              className="bcard-img"
              style={{
                height: 130,
                fontSize: 34,
                background: post.image
                  ? "none"
                  : "linear-gradient(135deg,#0a0a1a,#000)",
                backgroundImage: post.image
                  ? `url(/images/blogs/${post.image})`
                  : undefined,
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

      {/* ── Modal ── */}
      {openPost && (
        <div
          className="modal open"
          onClick={() => setOpenPost(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenPost(null)}>✕</button>

            <div
              className="bcard-img"
              style={{
                height: 200,
                fontSize: 60,
                background: openPost.image
                  ? "none"
                  : "linear-gradient(135deg,#180e00,#0a0a0a)",
                backgroundImage: openPost.image
                  ? `url(/images/blogs/${openPost.image})`
                  : undefined,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#0a0a0a",
                marginBottom: 16,
                borderRadius: 12,
                flexShrink: 0,
              }}
            >
              {!openPost.image && openPost.icon}
            </div>

            <div className="bcat">{openPost.category}</div>
            <div className="modal-title">{openPost.title}</div>
            <p className="modal-sub" style={{ lineHeight: 1.7, marginTop: 10 }}>
              {openPost.content ?? openPost.excerpt}
            </p>
            <span className="bfoot" style={{ marginTop: 12, display: "block" }}>
              📅 {openPost.date}{openPost.readTime ? ` · ${openPost.readTime}` : ""}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}