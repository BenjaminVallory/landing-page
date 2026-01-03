import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Parallax effect for floating elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroSection = document.querySelector('.hero');
      const heroElements = document.querySelectorAll('.element');

      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollProgress = scrolled / heroHeight;

        if (scrollProgress < 1) {
          heroElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translate(-50%, -50%) translateY(${yPos}px)`;
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className={`hero-title ${isLoaded ? 'loaded' : ''}`}>
            <span className="title-line">Transformamos Ideas en</span>
            <span className="title-line highlight">Soluciones Digitales</span>
            <span className="title-line">Extraordinarias</span>
          </h1>
          <p className="hero-subtitle">
            Somos LHAMBDA, tu partner tecnológico de confianza. Desarrollamos software innovador que impulsa tu negocio hacia el éxito digital. Desde apps móviles hasta plataformas web complejas, convertimos tu visión en realidad.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              <span>Descubre Nuestros Servicios</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Creamos Tu Proyecto</span>
              <i className="fas fa-comments"></i>
            </a>
          </div>
        </div>

      </div>

      {/* <div className="hero-scroll">
        <span>Descubre el poder de la innovación</span>
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;