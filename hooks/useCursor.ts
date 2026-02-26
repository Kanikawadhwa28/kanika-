import { useEffect } from "react";

// This hook controls the custom gold cursor dot + ring
// It reads the #cur and #cur-ring divs from your HTML
export function useCursor() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    const ring = document.getElementById("cur-ring");

    // Move cursor dot instantly, ring follows with a small delay
    const onMouseMove = (e: MouseEvent) => {
      if (!cur || !ring) return;

      // Dot follows immediately
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";

      // Ring follows 65ms later = the "lag" trailing effect
      setTimeout(() => {
        if (!ring) return;
        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";
      }, 65);
    };

    document.addEventListener("mousemove", onMouseMove);

    // When hovering links/buttons, cursor grows bigger + ring turns brighter gold
    const hoverTargets = document.querySelectorAll(
      "a, button, .icard, .vcard, .cmpcard, .bcard, .ccard, .tcard2"
    );

    const grow = () => {
      if (!cur || !ring) return;
      cur.style.width = "18px";
      cur.style.height = "18px";
      ring.style.width = "48px";
      ring.style.height = "48px";
      (ring as HTMLElement).style.borderColor = "rgba(255,215,0,.8)";
    };

    const shrink = () => {
      if (!cur || !ring) return;
      cur.style.width = "10px";
      cur.style.height = "10px";
      ring.style.width = "34px";
      ring.style.height = "34px";
      (ring as HTMLElement).style.borderColor = "rgba(255,215,0,.45)";
    };

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    // Cleanup: remove listeners when component unmounts
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []); // [] means run once when page loads
}