import PageHero from "@/components/ui/PageHero";
import TeamCards from "@/components/ui/TeamCards";

export default function TeamPage() {
  return (
    <>
      <section className="team-hero reveal">
        <div className="team-hero-bg" />
        <PageHero
          tag="The People"
          h1="Built by Strategists Who Understand Both Sides"
          subtitle="The team behind India's most trusted influencer marketing platform."
          buttons={[
            { label: "Contact Us →", href: "/contact", variant: "gold" },
            { label: "Join the Team →", href: "/contact", variant: "outline" },
          ]}
        />
      </section>

      <section className="team-bg reveal">
        <div className="tc" style={{ marginBottom: 18 }}>
          <span className="stag">Leadership</span>
          <h2 className="sh">Meet the Team</h2>
          <span className="gold-bar" />
        </div>
        <TeamCards size="large" />
        <div className="team-values">
          <span>🎯 Data-Driven</span>
          <span>🤝 Creator-First</span>
          <span>📈 ROI Obsessed</span>
        </div>
      </section>

      <section className="reveal" style={{ textAlign: "center" }}>
        <span className="stag">Work With Us</span>
        <h2 className="sh">Want to work with us?</h2>
        <p className="ssub" style={{ margin: "10px auto 0" }}>
          Whether you&apos;re a brand, creator or future teammate — we&apos;d love to talk.
        </p>
        <span className="gold-bar" />
        <div style={{ marginTop: 30, display: "flex", justifyContent: "center", gap: 12 }}>
          <a href="/contact" className="btn btn-y">
            Contact Us →
          </a>
          <a href="/contact" className="btn btn-o">
            Join the Team →
          </a>
        </div>
      </section>
    </>
  );
}

