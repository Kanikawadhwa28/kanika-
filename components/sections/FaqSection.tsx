"use client";

import { useEffect } from "react";

const FAQS = [
  {
    q: "How does Avenue Marketing Agency verify its 7,50,000+ creators?",
    a: "Every creator goes through API-based extraction, our proprietary AI fake-follower detection model, and manual review for 100K+ accounts. Engagement data refreshes every 72 hours.",
  },
  {
    q: "What is the Fair Price Index and how accurate is it?",
    a: "Built on 5,000+ real brand-creator transactions, updated monthly. Brands using FPI consistently report 25-40% cost savings versus negotiating without data benchmarks.",
  },
  {
    q: "Which platforms do you support — Instagram, YouTube, LinkedIn?",
    a: "Yes — Instagram (Reels, Stories, Feed), YouTube (Shorts & long-form), Twitter/X, LinkedIn, and emerging platforms like Moj and Josh. All data unified in one dashboard.",
  },
  {
    q: "How quickly can I launch my first campaign?",
    a: "Most brands go live within 7-14 days of signup. Managed service clients with dedicated support can launch in 3-5 business days.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! Free plan lets you search 50 creators and run 1 campaign — no credit card required. Pro plan includes a 14-day full-access trial.",
  },
];

export default function FaqSection() {
  useEffect(() => {
    // Accordion: click question to open/close answer
    document.querySelectorAll<HTMLElement>(".faq-q").forEach((questionEl) => {
      questionEl.onclick = () => {
        const item = questionEl.parentElement;
        if (!item) return;
        const wasOpen = item.classList.contains("open");

        // Close all items first
        document.querySelectorAll<HTMLElement>(".faqitem").forEach((i) =>
          i.classList.remove("open")
        );

        // If it wasn't open before, open it now
        if (!wasOpen) item.classList.add("open");
      };
    });
  }, []);

  const PlusIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );

  return (
    <section className="faq-bg reveal">
      <div className="tc">
        <span className="stag">FAQ</span>
        <h2 className="sh">Frequently Asked <em>Questions</em></h2>
        <span className="gold-bar" />
      </div>

      <div className="faq-wrap">
        {FAQS.map((faq) => (
          <div key={faq.q} className="faqitem">
            <div className="faq-q">
              <span className="faq-qt">{faq.q}</span>
              <span className="faq-ic"><PlusIcon /></span>
            </div>
            <div className="faq-a">
              <div className="faq-a-in">{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}