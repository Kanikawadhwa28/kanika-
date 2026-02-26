export default function SplitPlatform() {
    return (
      <section className="split-bg reveal">
        {/* Block 1: Platform overview */}
        <div className="split">
          <div className="split-img">
            <div className="split-mock"><span>📊</span><p>Influencer Management Platform</p></div>
            <div className="sfloat f1"><div className="sfv">2.3x</div><div className="sfl">Avg. ROI</div></div>
            <div className="sfloat f2"><div className="sfv">98%</div><div className="sfl">Match Accuracy</div></div>
          </div>
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
            <a href="#" className="btn btn-y">SIGNUP NOW →</a>
          </div>
        </div>
  
        {/* Block 2: Fair Price Index */}
        <div className="split rev">
          <div className="split-img">
            <div className="split-mock"><span>💲</span><p>Fair Price Index</p></div>
            <div className="sfloat f1"><div className="sfv">40%</div><div className="sfl">Cost Saved</div></div>
            <div className="sfloat f2"><div className="sfv">7.5L+</div><div className="sfl">Benchmarked</div></div>
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
            <a href="#" className="btn btn-y">CHECK FAIR PRICE →</a>
          </div>
        </div>
      </section>
    );
  }