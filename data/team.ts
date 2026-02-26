export type TeamMember = {
  id: string;
  name: string;
  title: string;
  emoji: string;
  bio: string;
  shortBio: string;
  instagramUrl: string;
};

// Core leadership team used on /team and /contact pages
export const teamMembers: TeamMember[] = [
  {
    id: "sunny",
    name: "Mr. Sunny",
    title: "Strategy Lead & Co-Founder",
    emoji: "☀️",
    bio:
      "Leads creator strategy and brand alignment across campaigns. Focused on building long-term partnerships, not one-off promotions.",
    shortBio:
      "Leads creator strategy and long-term brand partnerships across key categories.",
    instagramUrl: "#", // TODO: replace with real Instagram URL
  },
  {
    id: "viraj",
    name: "Mr. Viraj",
    title: "Founder",
    emoji: "🦁",
    bio:
      "Oversees campaign execution and creator network. Ensures seamless delivery from brief to performance.",
    shortBio:
      "Owns campaign execution end-to-end and scales the creator network sustainably.",
    instagramUrl: "#", // TODO: replace with real Instagram URL
  },
  {
    id: "shubham",
    name: "Mr. Shubham",
    title: "Creative Director",
    emoji: "🎨",
    bio:
      "Bridges brand goals with creator authenticity. Hands-on across strategy, selection and execution.",
    shortBio:
      "Ensures every campaign feels authentic to creators while delivering brand KPIs.",
    instagramUrl: "#", // TODO: replace with real Instagram URL
  },
];

