import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-intro">
        <h1>César Andrés Abadía Dávila</h1>
        <h2>Desarrollador Web Full Stack</h2>
        <p>Bienvenido a mi portafolio. Soy un desarrollador web full stack con experiencia en tecnologías como React, Node.js y MongoDB. Me apasiona el desarrollo web y disfruto creando soluciones creativas y eficientes para problemas complejos.</p>
      </div>
      <div className="portfolio-projects">
        <h3>Proyectos recientes</h3>
        <div className="project">
          <h4>Pedidos App  </h4>
          <p>La aplicación de pedidos es una herramienta diseñada para automatizar y simplificar el proceso de recibir y gestionar pedidos de productos o servicios. Con una aplicación de pedidos, los clientes pueden hacer sus solicitudes de manera rápida y eficiente a través de una interfaz en línea o una aplicación móvil. La información del pedido se registra y se guarda en una base de datos, lo que permite a los proveedores monitorear y gestionar fácilmente las solicitudes.</p>
          <br></br>
          <a href="https://github.com/seuz716/pedidosapp">Ver proyecto </a>
        </div>
        <div className="project">
          <h4>Api de consulta de centrales eléctricas.</h4>
          <p>Es una API de consulta de generación de electricidad es una aplicación programable que permite a los usuarios acceder a datos sobre la generación de electricidad en tiempo real. Esta información se obtiene de diversas centrales eléctricas y se puede utilizar para monitorear la disponibilidad de energía en diferentes regiones, optimizar la gestión de la red eléctrica y mejorar la eficiencia energética. La API también puede brindar información sobre los costos y la emisión de gases de efecto invernadero asociados con la generación de electricidad.</p>
          <br></br>
          <a href="https://github.com/seuz716/Energia">Ver proyecto</a>
        </div>
        <div className="project">
          <h4>inmobiliaria Api</h4>
          <p>Una API inmobiliaria es una aplicación programable que permite a los usuarios acceder a datos relevantes en el sector inmobiliario. Esta información puede incluir detalles sobre propiedades en venta o alquiler, tendencias del mercado inmobiliario, precios y ubicaciones, entre otros. La API permite a los desarrolladores integrar esta información en sus aplicaciones y servicios, lo que puede mejorar la eficiencia y la eficacia de la búsqueda y la toma de decisiones en el mercado inmobiliario</p>
          <br></br>
          <a href="https://github.com/seuz716/inmobiliarioApi">Ver proyecto</a>
        </div>
      </div>
      <div className="portfolio-contact">
        <h3>Contacto</h3>
        <div className="contact-info">
          <FaEnvelope />
          <a href="mailto:correo@ejemplo.com">ceanabad@gmail.com</a>
        </div>
        <div className="contact-info">
          <FaGithub />
          <a href="https://www.linkedin.com/in/cesarabad%C3%ADa/?locale=es_ES">github.com/mi-usuario</a>
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
