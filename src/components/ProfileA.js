import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Profile.css';
import abeja from '../assets/Fotico.png'

const Profile = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <div className="profile-image-container">
            <img
              src={abeja}
              alt="Profile"
              className="profile-image img-fluid rounded-circle"
            />
          </div>
        </Col>
        <Col md={8}>
          <div className="profile-content-container">
            <h1 className="profile-name display-4">César Andrés Abadía Dávila</h1>
            <p className="profile-description lead">
              Full Stack Web Developer
            </p>
            <hr className="profile-divider my-4" />
            <h3> Ingenierìa De Software</h3>
            <p className="profile-bio">
              Como desarrollador full-stack MERN, mi pasión por la tecnología me llevó a adquirir conocimientos avanzados en tecnologías como MongoDB, Express.js, React.js y Node.js. Mi enfoque en el desarrollo de software se centra en proporcionar soluciones efectivas y escalables a los desafíos empresariales, siempre comprometido con la calidad y la excelencia en cada proyecto.

              Además de mi experiencia en tecnología, también poseo una sólida formación en la carrera de Contador Público. Esto me brinda una ventaja única para aplicar mis habilidades y conocimientos en la implementación de normas internacionales de contabilidad NIIF, análisis de datos a través de gestores de inteligencia de negocios, manejo de inventarios y análisis financiero. Mi habilidad matemática y estadística aplicada a situaciones prácticas, me permite solucionar problemas de manera eficiente y tomar decisiones informadas basadas en datos.

              Como profesional, siempre estoy buscando nuevas formas de ampliar mis habilidades y conocimientos en la industria de la tecnología. Me apasiona aprender y experimentar con nuevas herramientas y tecnologías para mantenerme actualizado y ofrecer soluciones innovadoras y de vanguardia a los clientes.

              Si está buscando un desarrollador full-stack con habilidades avanzadas en tecnologías MERN, experiencia en contabilidad y análisis de datos, y una actitud de aprendizaje constante, no dude en ponerse en contacto conmigo. Estoy ansioso por trabajar en proyectos emocionantes y desafiantes que me permitan demostrar mis habilidades y contribuir al éxito de su empresa.
            </p>
            <hr className="profile-divider my-4" />
            <h4 className="profile-skills-header">Skills</h4>
            <ul className="profile-skills-list">
              <li className="profile-skill">JavaScript</li>
              <li className="profile-skill">React</li>
              <li className="profile-skill">Node.js</li>
              <li className="profile-skill">Express</li>
              <li className="profile-skill">MongoDB</li>
            </ul>
            <hr className="profile-divider my-4" />
            <h4 className="profile-connect-header">Connect with me</h4>
            <ul className="profile-connect-list list-inline">
              <li className="profile-connect-item list-inline-item">
                <a href="https://github.com/johndoe">
                  <FaGithub className="profile-icon" />
                </a>
              </li>
              <li className="profile-connect-item list-inline-item">
                <a href="https://www.linkedin.com/in/cesarabad%C3%ADa/">
                  <FaLinkedin className="profile-icon" />
                </a>
              </li>
              <li className="profile-connect-item list-inline-item">
                <a href="https://twitter.com/johndoe">
                  <FaTwitter className="profile-icon" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
