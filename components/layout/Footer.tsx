"use client";

import { useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const FOOTER_COLS = [
  {
    title: "Company",
    links: ["About Us", "Our Team", "For Brands", "For Creators", "Platform", "Blog"],
  },
  {
    title: "Platform",
    links: ["Dashboard", "Fair Price Index", "Competitor Tracker", "Case Studies"],
  },
  {
    title: "Top Niches",
    links: ["Fashion & Lifestyle", "Food & Travel", "Beauty & Skincare", "Gaming", "Finance & Edu"],
  },
];

export default function Footer() {
  const pathname = usePathname();
  const [showTerms, setShowTerms] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  const getHref = (link: string, colTitle: string) => {
    if (colTitle === "Top Niches") return "/#top-creators";
    if (link === "About Us") return "/contact";
    if (link === "Our Team") return "/team";
    if (link === "For Brands") return "/for-brands";
    if (link === "For Creators") return "/for-creators";
    if (link === "Platform") return "/platform";
    if (link === "Blog") return "/platform#blog";
    if (["Dashboard", "Fair Price Index", "Competitor Tracker"].includes(link)) return "/platform#products";
    if (link === "Case Studies") return "/platform#work";
    return "/";
  };

  const termsText =
    "The content currently manifested within this digital domain is disseminated exclusively for representational and ornamental visualization, devoid of any immediate contractual, commercial, or affiliative implication. Notwithstanding its purely demonstrative disposition, we remain prospectively inclined toward the cultivation of mutually advantageous, strategically aligned brand affiliations, the materialization of which is contemplated at a subsequent juncture within the foreseeable continuum.";

  const handleFooterClick = () => {
    const now = Date.now();
    if (now - lastClickTime < 400) {
      const next = clickCount + 1;
      setClickCount(next);
      if (next >= 3) {
        setShowTerms(true);
        setClickCount(0);
      }
    } else {
      setClickCount(1);
    }
    setLastClickTime(now);
  };

  const handleTermsClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowTerms((prev) => !prev);
  };

  const shouldShowTerms = showTerms && !pathname.startsWith("/for-creators");

  return (
    <footer onClick={handleFooterClick}>
      <div className="ft-top">
        {/* Brand column */}
        <div className="ft-brand">
          <h4>
            Avenue Marketing <em>Agency</em>
          </h4>
          <p>
            Avenue Marketing Agency connects 7,50,000+ creators with brands that demand real ROI and
            meaningful barter collaborations — powered by data, run by experts.
          </p>
          <div className="socials">
            <a
              href="https://www.instagram.com/avenue_marketing_agency?igsh=MXd3MjZtemptMjh0cw=="
              className="soc soc-ig"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/avenue-marketing-agency"
              className="soc soc-li"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.facebook.com"
              className="soc soc-fb"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.title} className="ft-col">
            <h5>{col.title}</h5>
            {col.links.map((link) => (
              <a key={link} href={getHref(link, col.title)}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="ft-bot">
        <p>© 2025 Avenue Marketing Agency. All rights reserved.</p>
        <div className="ft-bot-links">
          <a href="#">Privacy</a>
          <a href="#" onClick={handleTermsClick}>
            Terms
          </a>
          <a href="#">Cookies</a>
        </div>
      </div>

      {shouldShowTerms && (
        <p className="terms-text">
          {termsText}
        </p>
      )}
    </footer>
  );
}