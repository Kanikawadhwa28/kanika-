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
    tooltip: "Zepto — 3x ROAS achieved",
    image: "zepto.png",
  },
  {
    id: "coindcx",
    name: "CoinDCX",
    emoji: "💰",
    stat: "Fintech #1 campaign",
    tooltip: "CoinDCX — Fintech #1 campaign",
    image: "CoinDCX.png",
  },
  {
    id: "naukri",
    name: "Naukri.com",
    emoji: "💼",
    stat: "500+ creators used",
    tooltip: "Naukri.com — 500+ creators used",
    image: "Naukri.com.png",
  },
  {
    id: "cashify",
    name: "Cashify",
    emoji: "📱",
    stat: "Top resale campaign",
    tooltip: "Cashify — Top resale campaign",
    image: "Cashify.png",
  },
  {
    id: "hostinger",
    name: "Hostinger",
    emoji: "🌐",
    stat: "Mass creator activation",
    tooltip: "Hostinger — Mass creator activation",
    image: "Hostinger.png",
  },
  {
    id: "kotak",
    name: "Kotak811",
    emoji: "🏦",
    stat: "Fintech reach campaign",
    tooltip: "Kotak811 — Fintech reach campaign",
    image: "Kotak811.png",
  },
  {
    id: "aditya-birla",
    name: "Aditya Birla",
    emoji: "🏢",
    stat: "Premium brand campaign",
    tooltip: "Aditya Birla Group",
    image: "AdityaBirlaGroup.png",
  },
  {
    id: "airtel",
    name: "Airtel Payments",
    emoji: "📡",
    stat: "Payments activation",
    tooltip: "Airtel Payments Bank",
    image: "AirtelPaymentsBank.png",
  },
  {
    id: "bharat-matrimony",
    name: "BharatMatrimony",
    emoji: "💍",
    stat: "Lifestyle campaign",
    tooltip: "BharatMatrimony — Lifestyle campaign",
    image: "BharatMatrimony.png",
  },
  {
    id: "kalyan-matrimony",
    name: "KalyanMatrimony",
    emoji: "💒",
    stat: "Regional creator campaign",
    tooltip: "KalyanMatrimony — Regional creator campaign",
    image: "KalyanMatrimony.png",
  },
  {
    id: "thepanelstation",
    name: "ThePanelStation",
    emoji: "📊",
    stat: "Survey & insights campaign",
    tooltip: "ThePanelStation — Survey campaign",
    image: "ThePanelStation.png",
  },
  {
    id: "yougov",
    name: "YouGov",
    emoji: "🗳️",
    stat: "Research activation",
    tooltip: "YouGov — Research activation",
    image: "YouGov.png",
  },
];