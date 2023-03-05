import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './ProfileA.css';
import abeja from '../assets/Fotico.png';

const Profile = () => {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = () => {
    setLanguage(prevLanguage => prevLanguage === 'es' ? 'en' : 'es');
  };

  return (
    <Container>
    
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <div className="profile-image">
            <img
              src={abeja}
              alt="Profile"
              className="profile-image img-fluid rounded-circle"
            />
          </div>
        </Col>
        <Col md={8}>
          <div className="profile-content-container">
            <h1 className="profile-name display-4">{language === 'es' ? 'César Andrés Abadía Dávila' : 'Cesar Andres Abadia Davila'}</h1>
            <p className="profile-description lead">
              {language === 'es' ? 'Full Stack Web Developer' : 'Desarrollador Full Stack'}
            </p>
            <hr className="profile-divider my-4" />

        
            <h3>{language === 'es' ? 'Ingeniería De Software' : 'Software Engineering'}</h3>
            <br></br>
            <p className="profile-bio">
              {language === 'es' ? 'Como desarrollador full-stack MERN, mi pasión por la tecnología me llevó a adquirir conocimientos avanzados en tecnologías como MongoDB, Express.js, React.js y Node.js. Mi enfoque en el desarrollo de software se centra en proporcionar soluciones efectivas y escalables a los desafíos empresariales, siempre comprometido con la calidad y la excelencia en cada proyecto.' : 'As a full-stack MERN developer, my passion for technology has led me to acquire advanced knowledge in technologies such as MongoDB, Express.js, React.js, and Node.js. My focus on software development is centered on providing effective and scalable solutions to business challenges, always committed to quality and excellence in every project. '}
            </p>

            <p className="profile-bio">
              {language === 'es' ? ' Además de mi experiencia en tecnología, también poseo una sólida formación en la carrera de Contador Público. Esto me brinda una ventaja única para aplicar mis habilidades y conocimientos en la implementación de normas internacionales de contabilidad NIIF, análisis de datos a través de gestores de inteligencia de negocios, manejo de inventarios y análisis financiero.  ' : 'In addition to my technology experience, I also have a strong background in the Public Accounting field. This gives me a unique advantage to apply my skills and knowledge in implementing International Financial Reporting Standards (IFRS), data analysis through business intelligence tools, inventory management, and financial analysis.'}
            </p>

            <p className="profile-bio">
              {language === 'es' ? ' Mi habilidad matemática y estadística aplicada a situaciones prácticas, me permite solucionar problemas de manera eficiente y tomar decisiones informadas basadas en datos. Como profesional, siempre estoy buscando nuevas formas de ampliar mis habilidades y conocimientos en la industria de la tecnología. Me apasiona aprender y experimentar con nuevas herramientas y tecnologías para mantenerme actualizado y ofrecer soluciones innovadoras y de vanguardia a los clientes.' : ' My mathematical and statistical ability applied to practical situations allows me to efficiently solve problems and make informed decisions based on data As a professional, I am always seeking new ways to expand my skills and knowledge in the technology industry. I am passionate about learning and experimenting with new tools and technologies to stay up-to-date and offer innovative and cutting-edge solutions to clients.'}
            </p>

            <p className="profile-bio">
              {language === 'es' ? 'Si está buscando un desarrollador full-stack con habilidades avanzadas en tecnologías MERN, experiencia en contabilidad y análisis de datos, y una actitud de aprendizaje constante, no dude en ponerse en contacto conmigo. Estoy ansioso por trabajar en proyectos emocionantes y desafiantes que me permitan demostrar mis habilidades y contribuir al éxito de su empresa.' : 'If you are looking for a full-stack developer with advanced skills in MERN technologies, experience in accounting and data analysis, and a constant learning attitude, do not hesitate to contact me. I am eager to work on exciting and challenging projects that allow me to demonstrate my skills and contribute to the success of your company.'}
            </p>
            <button className="boton" onClick={handleLanguageChange} > {language === 'es' ? 'To English' : 'En Español'}</button>
            <hr className="profile-divider my-4" />
            <h4 className="profile-skills-header">{language === 'es' ? 'Habilidades' : 'Skills'}</h4>
            <ul className="profile-skills-list">
              <li className="profile-skill">JavaScript</li>
              <li className="profile-skill">React</li>
              <li className="profile-skill">Node.js</li>
              <li className="profile-skill">Express</li>
              <li className="profile-skill">MongoDB</li>
            </ul>
            <hr className="profile-divider my-4" />
            <h4 className="profile-connect-header">{language === 'es' ? 'Conéctate conmigo' : 'Connect with me'}</h4>
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
