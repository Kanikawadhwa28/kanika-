const PLANS = [
    {
      tier: "Starter",
      name: "Free",
      price: "0",
      desc: "For brands exploring influencer marketing for the first time",
      features: [
        { text: "50 creator searches/mo", yes: true },
        { text: "Basic audience insights", yes: true },
        { text: "1 active campaign", yes: true },
        { text: "Fair Price Index", yes: false },
        { text: "Competitor tracking", yes: false },
        { text: "Advanced reporting", yes: false },
      ],
      cta: "Get Started Free",
      btnClass: "btn btn-o",
      featured: false,
    },
    {
      tier: "Growth",
      name: "Pro",
      price: "9,999",
      desc: "For growing brands running multiple campaigns simultaneously",
      features: [
        { text: "Unlimited searches", yes: true },
        { text: "Deep audience analytics", yes: true },
        { text: "10 active campaigns", yes: true },
        { text: "Full Fair Price Index", yes: true },
        { text: "Competitor tracking", yes: true },
        { text: "Dedicated manager", yes: false },
      ],
      cta: "Start Pro Trial →",
      btnClass: "btn btn-y",
      featured: true,
      badge: "⭐ Most Popular",
    },
    {
      tier: "Enterprise",
      name: "Custom",
      price: null, // null = show "Let's Talk"
      desc: "For large brands and agencies needing bespoke solutions",
      features: [
        { text: "Everything in Pro", yes: true },
        { text: "Dedicated manager", yes: true },
        { text: "Custom integrations", yes: true },
        { text: "White-label reports", yes: true },
        { text: "Priority SLA", yes: true },
        { text: "Custom AI models", yes: true },
      ],
      cta: "Talk to Sales →",
      btnClass: "btn btn-w",
      featured: false,
    },
  ];
  
  export default function PricingSection() {
    return (
      <section id="pricing" className="price-bg reveal">
        <div className="tc">
          <span className="stag">Pricing</span>
          <h2 className="sh">Simple, <em>Transparent</em> Pricing</h2>
          <p className="ssub" style={{ margin: "10px auto 0" }}>
            No hidden fees. No lock-ins. Scale as you grow.
          </p>
          <span className="gold-bar" />
        </div>
  
        <div className="price-grid">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`pcard${plan.featured ? " feat" : ""}`}>
              {plan.badge && <div className="pbadge">{plan.badge}</div>}
              <div className="p-tier">{plan.tier}</div>
              <div className="p-name">{plan.name}</div>
  
              {/* Price display */}
              {plan.price !== null ? (
                <div className="p-price">₹<span>{plan.price}</span><sub>/mo</sub></div>
              ) : (
                <div className="p-price" style={{ fontSize: 30, lineHeight: 1.3 }}>Let&apos;s<br />Talk</div>
              )}
  
              <p className="p-desc">{plan.desc}</p>
  
              <ul className="p-feats">
                {plan.features.map((f) => (
                  <li key={f.text}>
                    <span className={f.yes ? "pf-y" : "pf-n"}>{f.yes ? "✓" : "–"}</span> {f.text}
                  </li>
                ))}
              </ul>
  
              <a href="#" className={plan.btnClass} style={{ width: "100%", justifyContent: "center" }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }