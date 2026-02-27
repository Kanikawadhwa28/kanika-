export type Creator = {
  name: string;
  audience: string;
  emoji: string;
  bg: string;
  /** Path in /public/images/creators/ — e.g. zayan-saifi.png */
  image?: string;
};

// Creators showcased across the site — add images to public/images/creators/
export const creators: Creator[] = [
  { name: "Zayan Saifi", audience: "11.4M+", emoji: "🌟", bg: "#1a0a00", image: "zayan-saifi.png" },
  { name: "Bharti Singh", audience: "9.4M+", emoji: "😄", bg: "#1a000a", image: "bharti-singh.png" },
  { name: "Nazim Ahmad", audience: "6.7M+", emoji: "🎭", bg: "#001a0a", image: "nazim-ahmad.png" },
  { name: "Wasim Ahmad", audience: "3.1M+", emoji: "🎬", bg: "#0a001a", image: "wasim-ahmad.png" },
  { name: "Nishu Tiwari", audience: "1.6M+", emoji: "💃", bg: "#1a1000", image: "nishu-tiwari.png" },
  { name: "Harsh Limbachiyaa", audience: "1.6M+", emoji: "😂", bg: "#001018", image: "harsh-limbachiyaa.png" },
  { name: "Roonak Sachdeva", audience: "1.2M+", emoji: "✨", bg: "#180010", image: "roonak-sachdeva.png" },
  { name: "Abhishek Kashyap", audience: "1M+", emoji: "🎯", bg: "#001a14", image: "abhishek-kashyap.png" },
  { name: "Mohit Narang", audience: "569K+", emoji: "👗", bg: "#140010", image: "mohit-narang.png" },
  { name: "Soniya Rawat", audience: "556K+", emoji: "💄", bg: "#1a0808", image: "soniya-rawat.png" },
  { name: "Mayank Kaushik", audience: "227K+", emoji: "📱", bg: "#080a1a", image: "mayank-kaushik.png" },
  { name: "Aayush Sapra", audience: "204K+", emoji: "🏋️", bg: "#001810", image: "aayush-sapra.png" },
];

