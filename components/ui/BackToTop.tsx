"use client";

export default function BackToTop() {
  return (
    <button
      id="btt"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}