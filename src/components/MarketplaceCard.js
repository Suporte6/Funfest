import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function MarketplaceCard({ icon: Icon, title, description, link, className }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (card) {
      // Hover effects para os cards
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)",
          duration: 0.3,
        });
        gsap.to(card.querySelector(".card-shine"), {
          opacity: 1,
          duration: 0.4,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        });
        gsap.to(card.querySelector(".card-shine"), {
          opacity: 0,
          duration: 0.4,
        });
      });
    }
  }, []);

  return (
    <div className="marketplace-card" ref={cardRef}>
      <div className="card-shine"></div>
      <div className={`card-icon ${className || ""}`}>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-button"
      >
        Acessar
      </a>
    </div>
  );
}

export default MarketplaceCard;
