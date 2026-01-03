import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: `Email: ${formData.email}\nTeléfono: ${formData.phone || 'No proporcionado'}\nServicio: ${formData.service}\n\nMensaje:\n${formData.message}`,
          time: new Date().toLocaleString('es-ES', {
            dateStyle: 'medium',
            timeStyle: 'short'
          })
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      // Éxito
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      showNotification('¡Genial! Tu mensaje fue enviado. Prepárate para el despegue de tu proyecto, te contactaremos pronto.', 'success');

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('');
      }, 3000);
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setIsSubmitting(false);
      showNotification('Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente o escríbenos directamente a lhambdacompany@gmail.com', 'error');
    }
  };

  const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
      </div>
    `;

    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      color: #f5f5f5;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      border: 1px solid ${type === 'success' ? '#28a745' : '#a80505'};
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      z-index: 9999;
      max-width: 400px;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
      background: none;
      border: none;
      color: #f5f5f5;
      cursor: pointer;
      margin-left: 1rem;
      padding: 0;
    `;

    closeBtn.addEventListener('click', () => {
      removeNotification(notification);
    });

    setTimeout(() => {
      removeNotification(notification);
    }, 5000);
  };

  const removeNotification = (notification) => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  };

  const contactInfo = [
    {
      icon: "fas fa-rocket",
      title: "¿Listo para el éxito?",
      content: "¡Transformemos tu idea en realidad digital!"
    },
    {
      icon: "fas fa-envelope",
      title: "Escríbenos",
      content: "lhambdacompany@gmail.com"
    },
    {
      icon: "fas fa-clock",
      title: "Respuesta rápida",
      content: "Te respondemos en menos de 24 horas"
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¡Tu Éxito Digital <span className="highlight">Comienza Aquí!</span></h2>
          <p className="section-subtitle">Cuéntanos tu visión y la convertiremos en la próxima gran innovación tecnológica</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-details">
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="name">Nombre completo</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <label htmlFor="phone">Telefono (opcional)</label>
            </div>

            <div className="form-group">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                <option value="landing">Landing Page</option>
                <option value="ecommerce">E-commerce</option>
                <option value="software">Software a Medida</option>
                <option value="mobile">App Movil</option>
                <option value="reservas">Sistema de Reservas</option>
                <option value="turismo">Turismo Digital</option>
                <option value="consulta">Consulta</option>
              </select>
              <label htmlFor="service">Tipo de servicio</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <label htmlFor="message">Describe tu proyecto soñado</label>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={submitStatus === 'success' ? {
                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)'
              } : {}}
            >
              <span>
                {isSubmitting ? 'Enviando...' : submitStatus === 'success' ? '¡Enviado!' : 'Enviar Mensaje'}
              </span>
              <i className={`fas fa-${isSubmitting ? 'spinner fa-spin' : submitStatus === 'success' ? 'check' : 'paper-plane'}`}></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;