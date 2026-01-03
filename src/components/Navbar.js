import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

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

    // Close mobile menu
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="images/logo/logo-black.png" alt="LHAMBDA Logo" className="logo-image" />
          <span className="logo-text">LHAMBDA</span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, '#home')}
            >
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, '#about')}
            >
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#services"
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, '#services')}
            >
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#technologies"
              className={`nav-link ${activeSection === 'technologies' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, '#technologies')}
            >
              Tecnologias
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#testimonials"
              className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, '#testimonials')}
            >
              Testimonios
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#process"
              className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, '#process')}
            >
              Proceso
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Contacto
            </a>
          </li>
        </ul>

        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={handleMenuToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;