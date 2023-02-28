import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-intro">
        <h1>Mi nombre</h1>
        <h2>Desarrollador Web Full Stack</h2>
        <p>Bienvenido a mi portafolio. Soy un desarrollador web full stack con experiencia en tecnologías como React, Node.js y MongoDB. Me apasiona el desarrollo web y disfruto creando soluciones creativas y eficientes para problemas complejos.</p>
      </div>
      <div className="portfolio-projects">
        <h3>Proyectos recientes</h3>
        <div className="project">
          <h4>Proyecto 1</h4>
          <p>Descripción del proyecto Descripción del proyectoDescripción del proyectoDescripción del proyectoDescripción del proyectoDescripción del proyectoDescripción del proyectoDescripción del proyecto 1</p>
          <br></br>
          <a href="https://github.com/abadia716">Ver proyecto</a>
        </div>
        <div className="project">
          <h4>Proyecto 2</h4>
          <p>Descripción del proyecto 2</p>
          <br></br>
          <a href="https://github.com/abadia716">Ver proyecto</a>
        </div>
        <div className="project">
          <h4>Proyecto 3</h4>
          <p>Descripción del proyecto 3</p>
          <br></br>
          <a href="https://github.com/abadia716">Ver proyecto</a>
        </div>
      </div>
      <div className="portfolio-contact">
        <h3>Contacto</h3>
        <div className="contact-info">
          <FaEnvelope />
          <a href="mailto:correo@ejemplo.com">correo@ejemplo.com</a>
        </div>
        <div className="contact-info">
          <FaGithub />
          <a href="https://github.com/mi-usuario">github.com/mi-usuario</a>
        </div>
        <div className="contact-info">
          <FaLinkedin />
          <a href="https://linkedin.com/in/mi-usuario">linkedin.com/in/mi-usuario</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
