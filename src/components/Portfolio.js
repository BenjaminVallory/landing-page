import React, { useEffect, useRef } from 'react';
import './Portfolio.css';

function Portfolio() {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.portfolio-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, index * 150);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  const portfolioItems = [
    {
      icon: "fas fa-shopping-cart",
      previewTitle: "E-commerce Premium",
      title: "Tienda Online Luxury",
      description: "Plataforma de e-commerce para productos de lujo con pasarela de pagos integrada",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      icon: "fas fa-hotel",
      previewTitle: "Sistema Hotelero",
      title: "Hotel Management Pro",
      description: "Sistema completo de gestion hotelera con reservas online y check-in digital",
      technologies: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      icon: "fas fa-mobile-alt",
      previewTitle: "App de Fitness",
      title: "FitTracker Mobile",
      description: "Aplicacion movil para seguimiento de ejercicios con integracion de wearables",
      technologies: ["React Native", "Firebase", "Node.js"]
    }
  ];

  return (
    <section className="portfolio" id="portfolio" ref={portfolioRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestros <span className="highlight">Proyectos</span></h2>
          <p className="section-subtitle">Casos de exito que demuestran nuestra experiencia</p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <div className="project-preview">
                  <div className="preview-content">
                    <i className={item.icon}></i>
                    <h4>{item.previewTitle}</h4>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">
                  {item.description}
                </p>
                <div className="portfolio-tech">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;