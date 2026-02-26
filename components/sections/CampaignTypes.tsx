const CAMPAIGN_TYPES = [
    { icon: "📡", title: "Reach & Frequency", desc: "Maximise brand visibility with precision targeting and frequency capping across millions of users.", tag: "Awareness → 🔥", delay: "0s" },
    { icon: "🎁", title: "Product Sampling", desc: "Send product to creators for authentic reviews. Real UGC that builds trust no ad ever could.", tag: "Trust → 🌟", delay: ".1s" },
    { icon: "🎪", title: "Live Events", desc: "Online and offline activations that create cultural moments, buzz, and massive UGC at scale.", tag: "Buzz → 🎉", delay: ".2s" },
    { icon: "💸", title: "Affiliate & Conversion", desc: "Track every rupee. Performance-first campaigns where you only pay for real, measurable results.", tag: "ROI → 📈", delay: ".3s" },
    { icon: "📦", title: "Unboxing Campaigns", desc: "Authentic, unscripted first reactions — the most trusted content format for purchase intent.", tag: "Authenticity → ✅", delay: ".4s" },
    { icon: "🎬", title: "Product Placement", desc: "Seamlessly integrate your brand into long-form content for organic, non-disruptive exposure.", tag: "Native → 🎯", delay: ".5s" },
  ];
  
  export default function CampaignTypes() {
    return (
      <section className="camp-bg reveal">
        <div className="tc" style={{ marginBottom: 44 }}>
          <span className="stag">Services</span>
          <h2 className="sh">Driving Impact with <em>Multiple Approaches</em></h2>
        </div>
        <div className="camp-grid">
          {CAMPAIGN_TYPES.map((ct) => (
            <div key={ct.title} className="cmpcard reveal" style={{ transitionDelay: ct.delay }}>
              <span className="cmp-ico">{ct.icon}</span>
              <div className="cmp-ttl">{ct.title}</div>
              <p className="cmp-d">{ct.desc}</p>
              <span className="cmp-tag">{ct.tag}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }