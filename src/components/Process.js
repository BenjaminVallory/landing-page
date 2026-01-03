import React, { useEffect, useRef, useState } from 'react';
import './Process.css';

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const processRef = useRef(null);

  const processSteps = [
    {
      id: 1,
      title: "Descubrimiento",
      subtitle: "Entendemos tu visión",
      description: "Analizamos tus objetivos, audiencia y requisitos técnicos para diseñar la estrategia perfecta.",
      icon: "fas fa-search",
      // duration: "1-2 días",
      deliverables: ["Análisis de requerimientos", "Propuesta técnica", "Cronograma detallado"],
      color: "#ef4444"
    },
    {
      id: 2,
      title: "Planificación",
      subtitle: "Diseñamos la solución",
      description: "Creamos wireframes, arquitectura técnica y definimos el stack de tecnologías más adecuado.",
      icon: "fas fa-pencil-ruler",
      // duration: "3-5 días",
      deliverables: ["Wireframes UX/UI", "Arquitectura técnica", "Base de datos diseñada"],
      color: "#8b5cf6"
    },
    {
      id: 3,
      title: "Desarrollo",
      subtitle: "Construimos tu producto",
      description: "Desarrollo ágil con revisiones semanales y entregas parciales para tu feedback continuo.",
      icon: "fas fa-code",
      // duration: "2-8 semanas",
      deliverables: ["Código limpio", "Testing automatizado", "Documentación completa"],
      color: "#06b6d4"
    },
    {
      id: 4,
      title: "Testing",
      subtitle: "Garantizamos la calidad",
      description: "Pruebas exhaustivas de funcionalidad, rendimiento, seguridad y experiencia de usuario.",
      icon: "fas fa-bug",
      // duration: "3-7 días",
      deliverables: ["Testing funcional", "Optimización performance", "Validación seguridad"],
      color: "#10b981"
    },
    {
      id: 5,
      title: "Lanzamiento",
      subtitle: "Llevamos tu proyecto al mundo",
      description: "Desplegamos en producción con monitoreo 24/7 y capacitación completa para tu equipo.",
      icon: "fas fa-rocket",
      // duration: "1-3 días",
      deliverables: ["Deploy en producción", "Capacitación equipo", "Soporte post-lanzamiento"],
      color: "#f59e0b"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.process-step, .section-header');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [processSteps.length]);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <section className="process" id="process" ref={processRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestro <span className="highlight">Proceso</span></h2>
          <p className="section-subtitle">
            Un enfoque metodológico que garantiza resultados excepcionales en cada proyecto
          </p>
        </div>

        <div className="process-container">
          {/* Timeline */}
          <div className="process-timeline">
            <div className="timeline-line">
              <div
                className="timeline-progress"
                style={{
                  width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                  transition: 'width 0.8s ease'
                }}
              />
            </div>

            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`timeline-step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <div className="step-marker" style={{ backgroundColor: index <= activeStep ? step.color : '#e5e7eb' }}>
                  <i className={step.icon}></i>
                </div>
                <div className="step-info">
                  <h4 className="step-title">{step.title}</h4>
                  <span className="step-duration">{step.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Process Details */}
          <div className="process-details">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`process-step ${index === activeStep ? 'active' : ''}`}
              >
                <div className="step-content">
                  <div className="step-header">
                    <div className="step-icon" style={{ backgroundColor: step.color }}>
                      <i className={step.icon}></i>
                    </div>
                    <div className="step-text">
                      <h3 className="step-name">{step.title}</h3>
                      <p className="step-subtitle">{step.subtitle}</p>
                    </div>
                  </div>

                  <div className="step-description">
                    <p>{step.description}</p>
                  </div>

                  <div className="step-deliverables">
                    <h4>Entregables:</h4>
                    <ul>
                      {step.deliverables.map((deliverable, delIndex) => (
                        <li key={delIndex}>
                          <i className="fas fa-check"></i>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="step-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>Duración: {step.duration}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-layer-group"></i>
                      <span>Paso {index + 1} de {processSteps.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="process-benefits">
          <h3>¿Por qué nuestro proceso funciona?</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h4>Transparencia Total</h4>
              <p>Comunicación constante y acceso a repositorios para que veas el progreso en tiempo real</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h4>Metodología Ágil</h4>
              <p>Entregas incrementales y feedback continuo para ajustar el rumbo cuando sea necesario</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Calidad Garantizada</h4>
              <p>Testing exhaustivo y code review aseguran que cada entrega cumpla los más altos estándares</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h4>Soporte Continuo</h4>
              <p>No terminamos al entregar. Te acompañamos en el crecimiento y evolución de tu producto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;