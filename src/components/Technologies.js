import React, { useEffect, useRef } from 'react';
import './Technologies.css';

function Technologies() {
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

  // Lista plana de todas las tecnologías para el carrusel continuo
  const allTechnologies = [
    { icon: "fab fa-react", name: "React" },
    { icon: "fab fa-vuejs", name: "Vue.js" },
    { icon: "fab fa-angular", name: "Angular" },
    { icon: "fab fa-js", name: "JavaScript" },
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS3" },
    { icon: "fab fa-node-js", name: "Node.js" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fab fa-php", name: "PHP" },
    { icon: "fab fa-laravel", name: "Laravel" },
    { icon: "fas fa-server", name: "Express" },
    { icon: "fas fa-database", name: "MongoDB" },
    { icon: "fab fa-react", name: "React Native" },
    { icon: "fab fa-flutter", name: "Flutter" },
    { icon: "fas fa-mobile-alt", name: "Ionic" },
    { icon: "fab fa-aws", name: "AWS" },
    { icon: "fab fa-google", name: "Google Cloud" },
    { icon: "fab fa-docker", name: "Docker" },
    { icon: "fab fa-git-alt", name: "Git" },
    { icon: "fas fa-code", name: "TypeScript" },
    { icon: "fab fa-bootstrap", name: "Bootstrap" },
    { icon: "fas fa-palette", name: "Tailwind CSS" },
    { icon: "fas fa-tools", name: "Redux" },
    { icon: "fas fa-fire", name: "Firebase" }
  ];

  return (
    <section className="technologies" id="technologies">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tecnologías de <span className="highlight">Vanguardia</span></h2>
          <p className="section-subtitle">Stack tecnológico moderno para soluciones de vanguardia</p>
        </div>

        <div className="tech-carousel-container">
          <div className="tech-carousel" ref={carouselRef}>
            {allTechnologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <i className={tech.icon}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;