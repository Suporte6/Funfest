import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Footer() {
  const footerRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    // Forçar o fundo preto do footer
    if (footerRef.current) {
      footerRef.current.style.backgroundColor = "#000000";
      footerRef.current.style.background = "#000000";
    }

    // Animação do rodapé
    gsap.fromTo(
      footerRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 1.5,
        ease: "power2.out",
      }
    );

    // Animação flutuante do texto (yoyo)
    gsap.to(messageRef.current, {
      y: -8,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer"
      ref={footerRef}
      style={{ backgroundColor: "#000000" }}
    >
      <div className="footer-content">
        <p className="footer-message" ref={messageRef}>
          Obrigado por nos visitar. Estamos à disposição!
        </p>
        <p className="copyright">
          &copy; {currentYear} FUNFEST INDUSTRIA E COMERCIO LTDA. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
