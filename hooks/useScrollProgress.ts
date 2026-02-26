import { useEffect } from "react";

// This hook does 2 things on scroll:
// 1. Updates the gold progress bar at the top of the page (#sprog)
// 2. Shows/hides the "back to top" button (#btt)
// 3. Adds "scrolled" class to navbar so it can change style (#nav)
export function useScrollProgress() {
  useEffect(() => {
    const onScroll = () => {
      const sprog = document.getElementById("sprog");
      const nav = document.getElementById("nav");
      const btt = document.getElementById("btt");

      // Calculate how far down the page we've scrolled (0% to 100%)
      const scrolled = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = (scrolled / (totalHeight || 1)) * 100;

      // Update the progress bar width
      if (sprog) sprog.style.width = percentage + "%";

      // Add/remove "scrolled" class on nav after 50px
      if (nav) nav.classList.toggle("scrolled", scrolled > 50);

      // Show back-to-top button after 480px
      if (btt) btt.classList.toggle("vis", scrolled > 480);
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}