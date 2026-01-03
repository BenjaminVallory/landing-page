import React, { useEffect, useRef } from 'react';
import './Services.css';

function Services() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone carousel items for infinite scroll
    const carouselItems = Array.from(carousel.children);
    carouselItems.forEach(item => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });

  }, []);

  const services = [
    {
      icon: "fas fa-desktop",
      title: "Landing Pages",
      description: "Páginas web diseñadas para convertir visitantes en clientes. ¡Cada scroll cuenta para tu éxito!",
      features: ["Diseño Premium", "SEO Optimizado", "Conversión Garantizada"]
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce",
      description: "Tu tienda online que vende 24/7. Plataformas robustas que maximizan tus ventas digitales.",
      features: ["Pagos Seguros", "Gestión Total", "Analytics Avanzado"]
    },
    {
      icon: "fas fa-cogs",
      title: "Software a Medida",
      description: "Soluciones únicas para desafíos únicos. Tecnología que se adapta a tu visión empresarial.",
      features: ["100% Personalizado", "Escalabilidad Total", "Soporte Premium"]
    },
    {
      icon: "fas fa-calendar-check",
      title: "Sistemas de Reservas",
      description: "Automatiza tus citas y maximiza tu ocupación. Gestión inteligente que nunca duerme.",
      features: ["Tiempo Real", "Auto-Notificaciones", "Reportes Inteligentes"]
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Apps Móviles",
      description: "Tu negocio en el bolsillo de tus clientes. Apps que enamoran y generan lealtad.",
      features: ["iOS & Android", "UX Excepcional", "Performance Elite"]
    },
    {
      icon: "fas fa-map-marked-alt",
      title: "Turismo Digital",
      description: "Convierte experiencias en aventuras digitales. Plataformas que inspiran a viajar.",
      features: ["Experiencias Inmersivas", "Reservas Inteligentes", "Global Ready"]
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Servicios que <span className="highlight">Transforman</span></h2>
          <p className="section-subtitle">Soluciones tecnológicas premium que impulsan tu éxito digital</p>
        </div>

        <div className="services-carousel-container">
          <div className="services-carousel" ref={carouselRef}>
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">
                  {service.description}
                </p>
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;