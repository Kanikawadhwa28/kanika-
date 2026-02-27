"use client";

// Add your logo at public/images/logo/logo.png — fallback uses next.svg until then
export default function BrandLogo() {
  return (
    <div className="brand-logo">
      <img
        src="/images/logo/logo.png"
        alt="Avenue Marketing Agency"
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          if (!t.dataset.fallback) {
            t.dataset.fallback = "1";
            t.src = "/next.svg";
          }
        }}
      />
    </div>
  );
}

