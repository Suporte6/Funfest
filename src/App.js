import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAmazon, FaShopify, FaShoppingCart, FaStore } from "react-icons/fa";
import "./App.css";

// Importando os componentes criados
import Logo from "./components/Logo";
import SocialIcons from "./components/SocialIcons";
import MarketplaceCard from "./components/MarketplaceCard";
import Footer from "./components/Footer";

// Registrando o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const marketplaceSectionRef = useRef(null);
  const landingPageRef = useRef(null);

  useEffect(() => {
    // Atualiza o título e favicon da página
    document.title = "FunFest";

    // Configura a animação para os cards de marketplace
    gsap.fromTo(
      ".marketplace-grid",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".marketplace-grid",
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação dos cards
    gsap.fromTo(
      ".marketplace-card",
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".marketplace-grid",
          start: "top 80%",
        },
      }
    );

    // Aplica uma animação ao título da seção marketplace
    gsap.fromTo(
      ".section-title",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: marketplaceSectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Garantir que o fundo da seção de marketplace tenha uma opacidade que permita ver o logo
    gsap.set(marketplaceSectionRef.current, {
      background:
        "linear-gradient(180deg, white, rgba(106, 17, 203, 0.6), rgba(37, 117, 252, 0.6))",
    });

    // Limpar animações
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Dados dos marketplaces
  const marketplaces = [
    {
      icon: FaShoppingCart,
      title: "Mercado Livre",
      description: "Encontre nossos produtos com frete grátis",
      link: "https://www.mercadolivre.com.br/pagina/funfestdecor",
      className: "mercado-livre",
    },
    {
      icon: FaStore,
      title: "Shopee",
      description: "Descontos exclusivos na nossa loja oficial",
      link: "https://shopee.com.br/shop/325528540",
      className: "shopee",
    },
    // {
    //   icon: FaAmazon,
    //   title: "Amazon",
    //   description: "Entrega rápida para todo o Brasil",
    //   link: "https://amazon.com.br/loja",
    //   className: "amazon",
    // },
    // {
    //   icon: FaShopify,
    //   title: "Loja Oficial",
    //   description: "Acesse nossa loja oficial com todas as novidades",
    //   link: "https://loja.exemplo.com.br",
    //   className: "shopify",
    // },
  ];

  return (
    <div className="landing-page" ref={landingPageRef}>
      {/* Seção Hero */}
      <div className="hero-section">
        <Logo />
        <SocialIcons />
      </div>

      {/* Seção de Cards de Marketplaces */}
      <div className="marketplace-section" ref={marketplaceSectionRef}>
        <h2 className="section-title">Onde Nos Encontrar</h2>
        <div className="marketplace-grid">
          {marketplaces.map((marketplace, index) => (
            <MarketplaceCard
              key={index}
              icon={marketplace.icon}
              title={marketplace.title}
              description={marketplace.description}
              link={marketplace.link}
              className={marketplace.className}
            />
          ))}
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
