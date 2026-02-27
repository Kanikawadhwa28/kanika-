export default function SplitPlatform() {
  return (
    <section className="split-bg reveal">
      {/* Block 1: Platform overview */}
      <div className="split">
        <div className="split-img">
          {/* All-in-one platform mockup image */}
          <img
            src="/mockups/5_all_in_one_collab.png"
            alt="Influencer Management Platform"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
<div style={{ position: "absolute", top: 20, right: 20, transform: "scale(0.7)", transformOrigin: "top right" }}>
  <div className="sfloat f1"><div className="sfv">2.3x</div><div className="sfl">Avg. ROI</div></div></div>        </div>
        <div className="split-txt">
          <span className="stag">All-in-One Platform</span>
          <h3>Plan, Track & Scale Your Campaign <em style={{ color: "var(--gold)" }}>Effortlessly</em></h3>
          <p>Replace 5 tools with one. Discovery, contracts, briefs, approvals, payments, and real-time analytics — all in a single centralised dashboard.</p>
          <ul className="flist">
            <li>7,50,000+ creator database</li>
            <li>Real-time campaign tracking</li>
            <li>Creator contracts & payments</li>
            <li>Auto ROI reporting</li>
          </ul>
          <a href="/contact" className="btn btn-y">Sign In →</a>
        </div>
      </div>

      {/* Block 2: Fair Price Index */}
      <div id="split-fair-price" className="split rev">
        <div className="split-img">
          {/* Fair price index mockup image */}
          <img
            src="/mockups/6_avg_fair_price.png"
            alt="Fair Price Index"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", top: 20, right: 20, transform: "scale(0.7)", transformOrigin: "top right" }}>
          <div className="sfloat f1"><div className="sfv">40%</div><div className="sfl">Cost Saved</div></div>
        </div>
        </div>
        <div className="split-txt">
          <span className="stag">Fair Price Index</span>
          <h3>Stop Overpaying. Know the <em style={{ color: "var(--gold)" }}>Fair Price</em> Today</h3>
          <p>India&apos;s only real-time creator rate benchmarking engine. Enter any creator&apos;s handle — see instantly whether you&apos;re being quoted above, at, or below market rate.</p>
          <ul className="flist">
            <li>Real-time rate cards</li>
            <li>Platform-wise benchmarks</li>
            <li>Tier-based pricing insights</li>
          </ul>
          <a href="/#split-fair-price" className="btn btn-y">Check Fair Price →</a>
        </div>
      </div>
    </section>
  );
}