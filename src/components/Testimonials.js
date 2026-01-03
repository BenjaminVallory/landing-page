import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonialsRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "CEO, TechStart",
      company: "TechStart Solutions",
      avatar: "M",
      rating: 5,
      text: "LHAMBDA transformó completamente nuestra presencia digital. Su enfoque profesional y atención al detalle superaron todas nuestras expectativas. El ROI fue inmediato.",
      project: "E-commerce Platform",
      result: "+150% ventas online"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      position: "Director de Marketing",
      company: "InnovateLab",
      avatar: "C",
      rating: 5,
      text: "Increíble experiencia trabajando con LHAMBDA. Entregaron un sistema de reservas que automatizó completamente nuestro negocio. Altamente recomendados.",
      project: "Booking System",
      result: "+200% eficiencia operativa"
    },
    {
      id: 3,
      name: "Ana Ruiz",
      position: "Fundadora",
      company: "EcoTravel",
      avatar: "A",
      rating: 5,
      text: "Su expertise en turismo digital nos ayudó a crear una plataforma que realmente conecta con nuestros usuarios. El equipo es excepcional y muy profesional.",
      project: "Travel Platform",
      result: "+300% reservas digitales"
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: "CTO",
      company: "FinanceHub",
      avatar: "R",
      rating: 5,
      text: "La aplicación móvil que desarrollaron es exactamente lo que necesitábamos. Interfaz intuitiva, performance excepcional y soporte post-lanzamiento sobresaliente.",
      project: "Mobile App",
      result: "+180% engagement usuarios"
    },
    {
      id: 5,
      name: "Laura Torres",
      position: "Gerente General",
      company: "FitnessPro",
      avatar: "L",
      rating: 5,
      text: "LHAMBDA nos entregó una landing page que convierte increíblemente bien. Desde el primer día vimos un aumento significativo en leads calificados.",
      project: "Landing Page",
      result: "+250% conversión leads"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const header = entry.target.querySelector('.section-header');
            if (header) {
              header.style.opacity = '1';
              header.style.transform = 'translateY(0)';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'active' : ''}`}
      ></i>
    ));
  };

  return (
    <section className="testimonials" id="testimonials" ref={testimonialsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Lo que Dicen <span className="highlight">Nuestros Clientes</span></h2>
          <p className="section-subtitle">
            Testimonios reales de empresas que confiaron en nosotros para transformar su negocio
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonials-slider">
            <div
              className="testimonials-track"
              style={{ transform: `translateX(-${currentTestimonial * 20}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="card-content">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>

                    <div className="testimonial-text">
                      <p>"{testimonial.text}"</p>
                    </div>

                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>

                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <span>{testimonial.avatar}</span>
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-position">{testimonial.position}</p>
                        <p className="author-company">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="testimonial-project">
                      <div className="project-info">
                        <span className="project-label">Proyecto:</span>
                        <span className="project-name">{testimonial.project}</span>
                      </div>
                      <div className="project-result">
                        <span className="result-label">Resultado:</span>
                        <span className="result-value">{testimonial.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-navigation">
            <div className="nav-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Ver testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="stat-content">
              <span className="stat-number">4.9/5</span>
              <span className="stat-label">Calificación Promedio</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-heart"></i>
            </div>
            <div className="stat-content">
              <span className="stat-number">98%</span>
              <span className="stat-label">Clientes Satisfechos</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-sync-alt"></i>
            </div>
            <div className="stat-content">
              <span className="stat-number">85%</span>
              <span className="stat-label">Clientes Recurrentes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;