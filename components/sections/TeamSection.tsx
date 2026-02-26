const TEAM = [
    { emoji: "☀️", name: "Mr. Sunny", title: "Strategy Lead & Co-Founder", bio: "Leads creator strategy and brand alignment across campaigns. Focused on building long-term partnerships, not one-off promotions.", delay: "0s" },
    { emoji: "🦁", name: "Mr. Viraj", title: "Founder", bio: "Oversees campaign execution and creator network development. Ensures seamless delivery from brief to performance tracking.", delay: ".12s" },
    { emoji: "🎨", name: "Mr. Shubham", title: "Creative Director", bio: "Hands-on across strategy, creator selection, and campaign reviews. Bridges brand goals with creator authenticity at every step.", delay: ".24s" },
  ];
  
  const LinkedInIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
  
  export default function TeamSection() {
    return (
      <section className="team-bg reveal">
        <div className="tc" style={{ marginBottom: 14 }}>
          <span className="stag">Meet the Team</span>
          <h2 className="sh">Built by Strategists Who Understand <em>Both Sides</em></h2>
          <p className="ssub" style={{ margin: "10px auto 0" }}>
            The team behind India&apos;s most trusted influencer marketing platform
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((member) => (
            <div key={member.name} className="tcard2 reveal" style={{ transitionDelay: member.delay }}>
              <div className="tm-photo">{member.emoji}</div>
              <div className="tm-name">{member.name}</div>
              <div className="tm-title">{member.title}</div>
              <p className="tm-bio">{member.bio}</p>
              <a href="#" className="tm-li"><LinkedInIcon /></a>
            </div>
          ))}
        </div>
      </section>
    );
  }