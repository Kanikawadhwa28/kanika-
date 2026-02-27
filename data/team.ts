export type TeamMember = {
  id: string;
  name: string;
  title: string;
  emoji: string;
  bio: string;
  shortBio: string;
  instagramUrl: string;
};

// Add profile images to public/images/creators/ or public/images/team/ — e.g. yaman-khan.png
export const teamMembers: TeamMember[] = [
  {
    id: "yaman",
    name: "Yaman Khan",
    title: "Founder",
    emoji: "🦁",
    bio: "Oversees strategy, campaign execution and creator network. Ensures seamless delivery from brief to performance.",
    shortBio: "Oversees strategy and scales the creator network sustainably.",
    instagramUrl: "https://www.instagram.com/avenue_marketing_agency?igsh=MXd3MjZtemptMjh0cw==",
  },
  {
    id: "sunny",
    name: "Sunny Kumar",
    title: "Co-founder",
    emoji: "☀️",
    bio: "Leads creator strategy and brand alignment across campaigns. Focused on building long-term partnerships, not one-off promotions.",
    shortBio: "Leads creator strategy and long-term brand partnerships across key categories.",
    instagramUrl: "https://www.instagram.com/itskumarsunny?igsh=MTBqY3B6Z2N2dWhidg==",
  },
  {
    id: "shubham",
    name: "Shubham Chaudhary",
    title: "Creative Lead",
    emoji: "🎨",
    bio: "Bridges brand goals with creator authenticity. Hands-on across strategy, selection and execution.",
    shortBio: "Ensures every campaign feels authentic to creators while delivering brand KPIs.",
    instagramUrl: "https://www.instagram.com/shubhamchaudhary14000?igsh=YnNqMmJvYnhrN3Nq",
  },
];
