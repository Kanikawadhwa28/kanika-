const MAIN_POST = {
    icon: "📊",
    bg: "linear-gradient(135deg,#180e00,#0a0a0a)",
    category: "Industry Report",
    title: "India Influencer Marketing Report 2025 — Key Trends Every Brand Must Know",
    excerpt: "A comprehensive look at how 500+ brands are allocating influencer budgets in 2025, which niches deliver the best ROI, and what's changing fast.",
    date: "Feb 20",
    readTime: "12 min",
  };
  
  const SIDE_POSTS = [
    { icon: "🎯", bg: "linear-gradient(135deg,#0a0a1a,#000)", category: "Strategy", title: "Why Micro-Influencers Beat Mega-Influencers for Conversion", date: "Feb 12" },
    { icon: "💡", bg: "linear-gradient(135deg,#001a0a,#000)", category: "How-To", title: "The Creator Brief Template That Gets 3x Better Content", date: "Feb 5" },
    { icon: "🚀", bg: "linear-gradient(135deg,#1a0000,#000)", category: "Case Study", title: "How boAt Used 500 Micro-Influencers to Drive 30K Signups", date: "Jan 28" },
    { icon: "📱", bg: "linear-gradient(135deg,#001a1a,#000)", category: "Platform", title: "Reels vs. YouTube Shorts: Where Your Creator Budget Gets More ROI", date: "Jan 20" },
  ];
  
  export default function BlogSection() {
    return (
      <section className="blog-bg reveal">
        <div className="blog-hdr">
          <div>
            <span className="stag">Resources</span>
            <h2 className="sh">Latest from Our <em>Blog</em></h2>
          </div>
          <a href="#" className="btn btn-o">View All Posts →</a>
        </div>
  
        <div className="blog-grid">
          {/* Main featured post */}
          <a href="#" className="bcard bmain">
            <div className="bcard-img" style={{ height: 260, fontSize: 60, background: MAIN_POST.bg }}>
              {MAIN_POST.icon}
            </div>
            <div className="bcard-body">
              <div className="bcat">{MAIN_POST.category}</div>
              <div className="bttl">{MAIN_POST.title}</div>
              <p className="bexc">{MAIN_POST.excerpt}</p>
              <div className="bfoot">
                <span>📅 {MAIN_POST.date} · {MAIN_POST.readTime}</span>
                <span className="bread">Read →</span>
              </div>
            </div>
          </a>
  
          {/* Smaller side posts */}
          {SIDE_POSTS.map((post) => (
            <a key={post.title} href="#" className="bcard">
              <div className="bcard-img" style={{ height: 130, fontSize: 34, background: post.bg }}>
                {post.icon}
              </div>
              <div className="bcard-body">
                <div className="bcat">{post.category}</div>
                <div className="bttl">{post.title}</div>
                <div className="bfoot">
                  <span>📅 {post.date}</span>
                  <span className="bread">Read →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }