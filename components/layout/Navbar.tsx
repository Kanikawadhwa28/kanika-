"use client";

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
    wide: true, // uses grid layout
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
    label: "Pricing",
    links: [
      { icon: "🆓", text: "Free Plan", href: "/#pricing" },
      { icon: "⚡", text: "Growth Plan", href: "/#pricing" },
      { icon: "🏢", text: "Enterprise", href: "/#pricing" },
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

const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  return (
    <>
      <nav id="nav">
        <div className="nav-inner">
          {/* Logo */}
          <a href="/" className="logo">
            Influence<em>IN</em>
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
                    // Grid layout for "Top Creators"
                    <div className="drop-grid">
                      {item.links.map((link) => (
                        <a key={link.text} href={link.href}>
                          <span className="drop-ic">{link.icon}</span>
                          {link.text}
                        </a>
                      ))}
                    </div>
                  ) : (
                    // List layout for other dropdowns
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

          {/* Right side: badge + buttons + hamburger */}
          <div className="nav-r">
            <div className="nav-badge">
              <span className="nav-badge-fire">🔥</span>
              <div>
                <div className="nav-badge-num">7,50,000+</div>
                <div className="nav-badge-lbl">Creators</div>
              </div>
            </div>
            <a href="#" className="btn-ghost">Log in</a>
            <a href="/for-brands" className="btn-cta">Start for Free</a>

            {/* Hamburger - only visible on mobile */}
            <div className="hbg" onClick={() => document.getElementById("mobNav")?.classList.toggle("open")}>
              <span /><span /><span />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile nav drawer */}
      <div className="mob-nav" id="mobNav">
        <a href="/#top-creators">Top Creators</a>
        <a href="/for-creators">For Creators</a>
        <a href="/platform#products">Products</a>
        <a href="/platform#work">Our Work</a>
        <a href="/#pricing">Pricing</a>
        <a href="/contact">Contact</a>
        <a href="/for-brands" style={{ color: "var(--gold)", marginTop: 22, fontSize: 20 }}>
          Start for Free →
        </a>
      </div>
    </>
  );
}