export type BlogCategory =
  | "Strategy"
  | "Case Study"
  | "How-To"
  | "Industry Report"
  | "Platform";

export type BlogPost = {
  id: string;
  title: string;
  category: BlogCategory;
  icon: string;
  date: string;
  readTime?: string;
  excerpt?: string;
  featured?: boolean;
};

// Blog content reused on /platform and homepage
export const blogPosts: BlogPost[] = [
  {
    id: "india-influencer-report-2025",
    icon: "📊",
    category: "Industry Report",
    title: "India Influencer Marketing Report 2025 — Key Trends Every Brand Must Know",
    excerpt:
      "A comprehensive look at how 500+ brands are allocating influencer budgets in 2025, which niches deliver the best ROI, and what's changing fast.",
    date: "Feb 20",
    readTime: "12 min",
    featured: true,
  },
  {
    id: "micro-vs-mega",
    icon: "🎯",
    category: "Strategy",
    title: "Why Micro-Influencers Beat Mega-Influencers for Conversion",
    date: "Feb 12",
  },
  {
    id: "creator-brief-template",
    icon: "💡",
    category: "How-To",
    title: "The Creator Brief Template That Gets 3x Better Content",
    date: "Feb 5",
  },
  {
    id: "boat-micro-influencers",
    icon: "🚀",
    category: "Case Study",
    title: "How boAt Used 500 Micro-Influencers to Drive 30K Signups",
    date: "Jan 28",
  },
  {
    id: "reels-vs-shorts",
    icon: "📱",
    category: "Platform",
    title: "Reels vs. YouTube Shorts: Where Your Creator Budget Gets More ROI",
    date: "Jan 20",
  },
];

