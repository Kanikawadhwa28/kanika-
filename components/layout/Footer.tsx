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
  const getHref = (link: string) => {
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

  return (
    <footer>
      <div className="ft-top">
        {/* Brand column */}
        <div className="ft-brand">
          <h4>
            Influence<em>IN</em>
          </h4>
          <p>
            India&apos;s #1 Influencer Marketing Platform. Connecting 7,50,000+ creators
            with brands that demand real ROI — powered by data, run by experts.
          </p>
          <div className="socials">
            <a href="#" className="soc">
              📸
            </a>
            <a href="#" className="soc">
              🐦
            </a>
            <a href="#" className="soc">
              💼
            </a>
            <a href="#" className="soc">
              ▶
            </a>
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.title} className="ft-col">
            <h5>{col.title}</h5>
            {col.links.map((link) => (
              <a key={link} href={getHref(link)}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="ft-bot">
        <p>© 2025 InfluenceIN. All rights reserved.</p>
        <div className="ft-bot-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>

      <p style={{ marginTop: 12, fontSize: 10, color: "#555", lineHeight: 1.6 }}>
        {termsText}
      </p>
    </footer>
  );
}