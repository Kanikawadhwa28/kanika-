"use client";

import { teamMembers } from "@/data/team";

type TeamCardsProps = {
  size?: "large" | "small";
};

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <linearGradient id="ig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F58529" />
      <stop offset="50%" stopColor="#DD2A7B" />
      <stop offset="100%" stopColor="#8134AF" />
    </linearGradient>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      ry="5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
  </svg>
);

export default function TeamCards({ size = "large" }: TeamCardsProps) {
  const isLarge = size === "large";
  return (
    <div className="team-grid">
      {teamMembers.map((member) => (
        <div key={member.id} className="tcard2 team-card">
          <div
            className="tm-photo"
            style={{
              width: isLarge ? 120 : 80,
              height: isLarge ? 120 : 80,
              fontSize: isLarge ? 42 : 32,
            }}
          >
            {member.emoji}
          </div>
          <div className="tm-name">{member.name}</div>
          <div className="tm-title">{member.title}</div>
          <p className="tm-bio">{isLarge ? member.bio : member.shortBio}</p>
          <a
            href={member.instagramUrl}
            className="insta-btn"
            target="_blank"
            rel="noreferrer"
          >
            <span className="insta-ic">
              <InstagramIcon />
            </span>
            <span>Follow on Instagram</span>
          </a>
        </div>
      ))}
    </div>
  );
}

