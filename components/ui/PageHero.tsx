"use client";

import { motion } from "framer-motion";

type ButtonVariant = "gold" | "outline";

type HeroButton = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

type PageHeroProps = {
  tag: string;
  h1: string;
  subtitle: string;
  buttons?: HeroButton[];
};

const btnClassMap: Record<ButtonVariant, string> = {
  gold: "btn btn-y",
  outline: "btn btn-o",
};

export default function PageHero({ tag, h1, subtitle, buttons = [] }: PageHeroProps) {
  return (
    <section className="reveal" style={{ paddingTop: 120, paddingBottom: 40 }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <motion.span
          className="stag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.5 }}
        >
          {tag}
        </motion.span>
        <motion.h1
          className="sh"
          style={{ fontSize: "clamp(30px,3.8vw,46px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          {h1}
        </motion.h1>
        <motion.p
          className="ssub"
          style={{ marginTop: 8, maxWidth: 620 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          {subtitle}
        </motion.p>
        {buttons.length > 0 && (
          <motion.div
            className="ph-btns"
            style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={btnClassMap[btn.variant ?? "gold"]}
              >
                {btn.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

