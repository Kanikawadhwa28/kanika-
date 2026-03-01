"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { campaigns } from "@/data/campaigns";

type CampaignModalProps = {
  campaignId: string | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function CampaignModal({ campaignId, isOpen, onClose }: CampaignModalProps) {
  const campaign = campaigns.find((c) => c.id === campaignId);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && campaign && (
        <motion.div
          className="case-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="case-modal-box"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ✕ close button */}
            <button className="case-modal-close" onClick={onClose}>
              ✕
            </button>

            <div style={{ fontSize: 48, marginBottom: 10 }}>{campaign.emoji}</div>
            <h3 className="case-modal-title">{campaign.title}</h3>
            <p className="case-modal-sub">{campaign.summary}</p>

            <div className="case-modal-badges">
              {campaign.badges.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>

            {/* "View Other Stories" closes the modal */}
            <button
              onClick={onClose}
              className="btn btn-y"
              style={{
                marginTop: 16,
                justifyContent: "center",
                width: "100%",
                cursor: "pointer",
              }}
            >
              View Other Stories →
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}