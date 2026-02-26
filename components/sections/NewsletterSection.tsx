"use client";

export default function NewsletterSection() {
  const handleSubscribe = () => {
    const input = document.querySelector<HTMLInputElement>(".nl-inp");
    if (!input?.value.includes("@")) return;
    alert("Subscribed! Check " + input.value + " for confirmation.");
    input.value = "";
  };

  return (
    <section className="nl-bg reveal">
      <span className="nl-ico">📬</span>
      <span className="stag" style={{ display: "block", textAlign: "center" }}>Stay Ahead</span>
      <h2 className="sh" style={{ textAlign: "center", fontSize: "clamp(24px,3vw,40px)" }}>
        Get Weekly <em>Influencer Marketing</em> Insights
      </h2>
      <p className="ssub" style={{ textAlign: "center", margin: "10px auto 0" }}>
        Join 12,000+ marketers. No spam. Unsubscribe anytime.
      </p>
      <div className="nl-form">
        <input className="nl-inp" type="email" placeholder="Enter your work email..." />
        <button className="btn btn-y" onClick={handleSubscribe}>Subscribe →</button>
      </div>
      <p className="nl-note">📋 Weekly insights • 📊 Campaign data • 🎯 Creator spotlights — every Tuesday</p>
    </section>
  );
}