"use client";

// The modal popup for campaign case studies
// VideoGallery section opens this by adding class "open" to #modal
export default function Modal() {
  const closeModal = () => {
    document.getElementById("modal")?.classList.remove("open");
  };

  return (
    <div className="modal" id="modal" onClick={(e) => {
      // Close if clicking the dark backdrop (not the box itself)
      if (e.target === e.currentTarget) closeModal();
    }}>
      <div className="modal-box">
        <button className="modal-close" onClick={closeModal}>✕</button>
        <div style={{ fontSize: 50, marginBottom: 14 }} id="mIco">🎬</div>
        <div className="modal-title" id="mTitle">Campaign</div>
        <div className="modal-sub" id="mSub">Details...</div>
        <a href="#" className="btn btn-y" style={{ marginTop: 6 }}>
          View Full Case Study →
        </a>
      </div>
    </div>
  );
}