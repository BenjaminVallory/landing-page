import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const aboutRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutRef.current) {
              const elements = entry.target.querySelectorAll('.about-content, .about-image');
              elements.forEach((el, index) => {
                setTimeout(() => {
                  el.style.opacity = '1';
                  el.style.transform = 'translateY(0)';
                }, index * 300);
              });
            }

            if (entry.target === statsRef.current) {
              const stats = entry.target.querySelectorAll('.stat-number');
              stats.forEach((stat) => {
                const finalNumber = parseInt(stat.dataset.number);
                let currentNumber = 0;
                const increment = finalNumber / 60;

                const counter = setInterval(() => {
                  currentNumber += increment;
                  if (currentNumber >= finalNumber) {
                    stat.textContent = finalNumber + '+';
                    clearInterval(counter);
                  } else {
                    stat.textContent = Math.floor(currentNumber) + '+';
                  }
                }, 30);
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  const stats = [
    { number: 150, label: "Proyectos\nCompletados" },
    { number: 95, label: "Clientes\nSatisfechos" },
    { number: 16, label: "Ideas de\nalto impacto" },
    { number: 24, label: "Soporte\n24/7" }
  ];

  const values = [
    {
      icon: "fas fa-rocket",
      title: "Innovación",
      description: "Adoptamos las últimas tecnologías para crear soluciones que marquen la diferencia"
    },
    {
      icon: "fas fa-handshake",
      title: "Compromiso",
      description: "Tu éxito es nuestro éxito. Trabajamos hasta superar tus expectativas"
    },
    {
      icon: "fas fa-cogs",
      title: "Calidad",
      description: "Cada línea de código es revisada para garantizar la excelencia del producto final"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        {/* About Content */}
        <div className="about-container" ref={aboutRef}>
          <div className="about-content">
            <div className="section-header">
              <h2 className="section-title">Sobre <span className="highlight">Nosotros</span></h2>
              <p className="section-subtitle">
                Somos un equipo apasionado por convertir ideas en experiencias digitales excepcionales
              </p>
            </div>

            <div className="about-text">
              <p>
                En <strong>LHAMBDA</strong>, combinamos creatividad y tecnología de vanguardia para construir
                soluciones que no solo cumplen, sino que superan las expectativas de nuestros clientes.
              </p>
              <p>
                Con más de 5 años de experiencia y un enfoque centrado en resultados, hemos ayudado
                a empresas de todos los tamaños a transformar sus procesos y alcanzar sus objetivos digitales.
              </p>
            </div>

            <div className="about-values">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon">
                    <i className={value.icon}></i>
                  </div>
                  <div className="value-content">
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="floating-card card-1">
                <i className="fas fa-code"></i>
                <span>Clean Code</span>
              </div>
              <div className="floating-card card-2">
                <i className="fas fa-mobile-alt"></i>
                <span>Responsive</span>
              </div>
              <div className="floating-card card-3">
                <i className="fas fa-shield-alt"></i>
                <span>Secure</span>
              </div>
              <div className="image-placeholder">
                <i className="fas fa-laptop-code"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-container" ref={statsRef}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number" data-number={stat.number}>
                  0+
                </div>
                <div className="stat-label">
                  {stat.label.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < stat.label.split('\n').length - 1 && <br />}
                    </span>
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

export default About;