// No "use client" - the counter animation is triggered by
// useScrollReveal hook in ClientProviders (already set up globally)
// When this section scrolls into view, the hook fires startStatsCounter()

const STATS = [
    { value: "750", suffix: "K+", label: "Registered Influencers" },
    { value: "500", suffix: "+", label: "Brand Campaigns" },
    { value: "10", suffix: "B+", label: "Total Reach Generated" },
    { value: "8", suffix: "+ Yrs", label: "Industry Experience" },
  ];
  
  export default function StatsBand() {
    return (
      // "stats-band" class is detected by useScrollReveal to trigger counters
      <div className="stats-band reveal">
        <div className="sg">
          {STATS.map((stat) => (
            <div key={stat.label} className="si">
              {/*
                data-t = target number to count to
                data-s = suffix to append (K+, B+, etc.)
                The counter animation reads these attributes
              */}
              <div className="sv" data-t={stat.value} data-s={stat.suffix}>
                0
              </div>
              <div className="sl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }