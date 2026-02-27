export type BrandCarouselItem = {
  id: string;
  name: string;
  emoji?: string;
  stat: string;
  tooltip: string;
  /** Path in /public/images/brands/ — e.g. zepto.png */
  image?: string;
};

// Brands used in the 3D carousel & other brand-led sections
// Add your brand images to public/images/brands/ (zepto.png, boat.png, etc.)
export const brandCarouselItems: BrandCarouselItem[] = [
  {
    id: "zepto",
    name: "Zepto",
    emoji: "🛒",
    stat: "3x ROAS achieved",
    tooltip: "Zepto 🛒 — 3x ROAS achieved",
    image: "zepto.png",
  },
  {
    id: "boat",
    name: "boAt",
    emoji: "🎧",
    stat: "30K sign-ups",
    tooltip: "boAt 🎧 — 30K sign-ups",
    image: "boat.png",
  },
  {
    id: "samsung",
    name: "Samsung",
    emoji: "📱",
    stat: "22M reach",
    tooltip: "Samsung 📱 — 22M reach",
    image: "samsung.png",
  },
  {
    id: "samsonite",
    name: "Samsonite",
    emoji: "🧳",
    stat: "100M reach",
    tooltip: "Samsonite 🧳 — 100M reach",
    image: "samsonite.png",
  },
  {
    id: "naukri",
    name: "Naukri.com",
    stat: "500+ creators used",
    tooltip: "Naukri.com — 500+ creators used",
    image: "naukri.png",
  },
  {
    id: "tata-cliq",
    name: "TATA CLiQ",
    stat: "Top fashion campaign",
    tooltip: "TATA CLiQ — Top fashion campaign",
    image: "tata-cliq.png",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    emoji: "🛒",
    stat: "Mega sale activation",
    tooltip: "Flipkart 🛒 — Mega sale activation",
    image: "flipkart.png",
  },
  {
    id: "coindcx",
    name: "CoinDCX",
    stat: "Fintech #1 campaign",
    tooltip: "CoinDCX — Fintech #1 campaign",
    image: "coindcx.png",
  },
];

