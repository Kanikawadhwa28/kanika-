"use client";

import { useState } from "react";
import BrandLogo from "@/components/ui/BrandLogo";

// Dropdown menu data - easy to edit here without touching JSX
const NAV_ITEMS = [
  {
    label: "Top Creators",
    links: [
      { icon: "😄", text: "Comedy", href: "/#top-creators" },
      { icon: "💰", text: "Finance", href: "/#top-creators" },
      { icon: "👶", text: "Parenting", href: "/#top-creators" },
      { icon: "💄", text: "Beauty", href: "/#top-creators" },
      { icon: "👗", text: "Fashion", href: "/#top-creators" },
      { icon: "💪", text: "Fitness", href: "/#top-creators" },
      { icon: "🍕", text: "Food", href: "/#top-creators" },
      { icon: "🎮", text: "Gaming", href: "/#top-creators" },
      { icon: "📱", text: "Tech", href: "/#top-creators" },
      { icon: "✈️", text: "Travel", href: "/#top-creators" },
    ],
    wide: true,
  },
  {
    label: "For Creators",
    links: [
      { icon: "🌟", text: "Join Community", href: "/for-creators" },
      { icon: "📣", text: "Live Campaigns", href: "/for-creators" },
      { icon: "💸", text: "Get Paid", href: "/for-creators" },
    ],
  },
  {
    label: "Products",
    links: [
      { icon: "📊", text: "Dashboard", href: "/platform#products" },
      { icon: "💲", text: "Fair Price Index", href: "/platform#products" },
      { icon: "🎯", text: "Competitor Tracker", href: "/platform#products" },
    ],
  },
  {
    label: "Our Work",
    links: [
      { icon: "📁", text: "Case Studies", href: "/platform#work" },
      { icon: "✍️", text: "Blog", href: "/platform#blog" },
      { icon: "📖", text: "Guides", href: "/platform#guides" },
    ],
  },
  {
    label: "Contact",
    links: [
      { icon: "👥", text: "Meet the Team", href: "/team" },
      { icon: "🚀", text: "Join Us", href: "/contact" },
      { icon: "📞", text: "Talk to Sales", href: "/contact" },
    ],
  },
];

const ChevronDown = ({ open }: { open?: boolean }) => (
  <svg
    width="10" height="10" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5"
    style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMobItem = (i: number) =>
    setOpenIndex(prev => (prev === i ? null : i));

  return (
    <>
      <nav id="nav">
        <div className="nav-inner">
          {/* Logo */}
          <a href="/" className="logo">
            <BrandLogo />
            <span>
              Avenue <em>Marketing Agency</em>
            </span>
            <div className="logo-dot" />
          </a>

          {/* Desktop nav links */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="nav-item">
                <span className="nav-a">
                  {item.label} <ChevronDown />
                </span>
                <div className={`drop${item.wide ? " wide" : ""}`}>
                  {item.wide ? (
                    <div className="drop-grid">
                      {item.links.map((link) => (
                        <a key={link.text} href={link.href}>
                          <span className="drop-ic">{link.icon}</span>
                          {link.text}
                        </a>
                      ))}
                    </div>
                  ) : (
                    item.links.map((link) => (
                      <a key={link.text} href={link.href}>
                        <span className="drop-ic">{link.icon}</span>
                        {link.text}
                      </a>
                    ))
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Right side: badge + primary CTA + hamburger */}
          <div className="nav-r">
            <div className="nav-badge">
              <span className="nav-badge-fire">🔥</span>
              <div>
                <div className="nav-badge-num">7,50,000+</div>
                <div className="nav-badge-lbl">Creators</div>
              </div>
            </div>
            <a href="/contact" className="btn-cta">
              Talk to Us
            </a>

            {/* Hamburger - only visible on mobile */}
            <div className="hbg" onClick={() => document.getElementById("mobNav")?.classList.toggle("open")}>
              <span /><span /><span />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile nav drawer with collapsible sub-categories */}
      <div className="mob-nav" id="mobNav">
        {NAV_ITEMS.map((item, i) => (
          <div key={item.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: 0 }}>
            {/* Tappable header row */}
            <button
              onClick={() => toggleMobItem(i)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: "var(--disp)",
                fontSize: 17,
                fontWeight: 700,
                color: "var(--text, #fff)",
                padding: "14px 0",
              }}
            >
              {item.label}
              <ChevronDown open={openIndex === i} />
            </button>

            {/* Collapsible links */}
            {openIndex === i && (
              <div style={{ paddingBottom: 10 }}>
                {item.links.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    onClick={() => {
                      setOpenIndex(null);
                      document.getElementById("mobNav")?.classList.remove("open");
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "9px 12px",
                      fontSize: 14,
                      color: "var(--muted, #aaa)",
                      borderRadius: 8,
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{link.icon}</span>
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <a href="/contact" style={{ color: "var(--gold)", marginTop: 16, fontSize: 17, display: "block" }}>
          Talk to Us →
        </a>
      </div>
    </>
  );
}