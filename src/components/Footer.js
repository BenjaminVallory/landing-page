import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="images/logo/logo-white.png" alt="LHAMBDA Logo" className="footer-logo-image" />
              <span className="logo-text">LHAMBDA</span>
            </div>
            <p className="footer-description">
              Impulsamos tu negocio hacia el futuro digital con tecnología de vanguardia y pasión por la innovación
            </p>
            <div className="social-links">
              {/* <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a> */}
              <a href="https://www.instagram.com/lhambda?igsh=YnNqOGlvemw2NjAz&utm_source=qr" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Servicios Premium</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Landing Pages que Convierten</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>E-commerce Potente</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Software Personalizado</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Apps que Enamoran</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Explora LHAMBDA</h4>
            <ul className="footer-links">
              <li><a href="#technologies" onClick={(e) => handleLinkClick(e, '#technologies')}>Tecnologías Avanzadas</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Inicia Tu Proyecto</a></li>
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Nuestra Misión</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Soluciones Innovadoras</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Conecta con Nosotros</h4>
            <div className="footer-contact">
              <p><i className="fas fa-envelope"></i> lhambdacompany@gmail.com</p>
              <p><i className="fas fa-rocket"></i> Tu éxito digital te espera</p>
              <p><i className="fas fa-heart"></i> Creamos con pasión</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} LHAMBDA - Transformando el futuro digital, un proyecto a la vez</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;