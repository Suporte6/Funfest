import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

function SocialIcons() {
  useEffect(() => {
    // Animação dos ícones sociais
    gsap.fromTo(
      ".social-icon",
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: "back.out(1.7)",
      }
    );

    // Adicionar efeitos de hover específicos
    const icons = document.querySelectorAll(".social-icon");

    icons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          y: -5,
          duration: 0.3,
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          y: 0,
          duration: 0.3,
          boxShadow: "none",
        });
      });
    });
  }, []);

  return (
    <div className="social-icons">
      <a
        href="https://wa.me/seunumero"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://facebook.com/suapagina"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="https://instagram.com/seuusuario"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default SocialIcons;
