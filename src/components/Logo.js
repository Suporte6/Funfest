import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronDown } from "react-icons/fa";

// Registrando o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Logo() {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const backgroundRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const scrollToMarketplace = () => {
    const marketplaceSection = document.querySelector(".marketplace-section");
    if (marketplaceSection) {
      window.scrollTo({
        top: marketplaceSection.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Animação inicial do logo
    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: -50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Animação do título
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      }
    );

    // Animação de letras do título
    gsap.fromTo(
      ".title-letter",
      {
        opacity: 0,
        y: 20,
        color: "rgba(255, 255, 255, 0.5)",
      },
      {
        opacity: 1,
        y: 0,
        color: "rgba(255, 255, 255, 1)",
        duration: 0.5,
        stagger: 0.05,
        delay: 0.8,
      }
    );

    // Configurando o fundo para transitar entre as seções
    const marketplaceSection = document.querySelector(".marketplace-section");
    const landingPage = document.querySelector(".landing-page");

    // Primeira configuração para ativar a classe marketplace-active
    ScrollTrigger.create({
      trigger: marketplaceSection,
      start: "top bottom", // Começa ativar quando o topo do marketplace chega ao final da viewport
      end: "bottom bottom", // Mantém ativo até o final do marketplace
      onEnter: () => {
        // Quando entra na seção de marketplace
        landingPage.classList.add("marketplace-active");
      },
      onLeaveBack: () => {
        // Quando volta para a seção hero
        landingPage.classList.remove("marketplace-active");
      },
    });

    // Segunda configuração para controlar o parallax do logo
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // Controla o parallax do logo conforme a rolagem
        gsap.set(backgroundRef.current, {
          y: `${self.progress * 15}%`, // Reduzido o movimento vertical para manter mais visível
        });
      },
    });

    // Animação da seta de rolagem
    gsap.fromTo(
      scrollIndicatorRef.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2,
      }
    );

    // Animação de rotação suave ao passar o mouse
    logoRef.current.addEventListener("mouseenter", () => {
      gsap.to(logoRef.current, {
        rotation: 10,
        scale: 1.05,
        duration: 0.3,
      });
    });

    logoRef.current.addEventListener("mouseleave", () => {
      gsap.to(logoRef.current, {
        rotation: 0,
        scale: 1,
        duration: 0.3,
      });
    });
  }, []);

  const title = "";

  return (
    <>
      <div className="parallax-background">
        <div className="hero-background" ref={backgroundRef}>
          <img src="/logo.png" alt="Logo Background" />
        </div>
      </div>
      <div className="logo-container">
        <img
          ref={logoRef}
          src="/logo_nova.png"
          alt="Logo da Empresa"
          className="logo"
        />
        <h1 className="company-title" ref={titleRef}>
          {title}
        </h1>
      </div>

      <div
        className="scroll-indicator"
        ref={scrollIndicatorRef}
        onClick={scrollToMarketplace}
      >
        <div className="scroll-arrow">
          <FaChevronDown />
        </div>
        <div className="scroll-text">Explore mais</div>
      </div>
    </>
  );
}

export default Logo;
