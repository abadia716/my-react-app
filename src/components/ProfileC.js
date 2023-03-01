import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Profile.css';
import abeja from '../assets/abejaGirasol.png'
const ProfileC = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <img
            src={abeja}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </Col>
        <Col md={8}>
          <h1 className="display-4">César Andrés Abadía Dávila</h1>
          <p className="lead">Full Stack Web Developer</p>
          <hr className="my-4" />
          <h3>  Coordinador contable</h3>
          <p className="profile-bio">
            Soy un profesional con amplia experiencia en el campo de la informática y tecnología, y he complementado mis habilidades con una formación sólida en áreas como Marketing, Ventas y Atención al Cliente. Me considero una persona con habilidades blandas desarrolladas y una capacidad excepcional para trabajar en equipo.

            En cuanto a mi formación académica, en 2022 realicé un programa de formación en inglés en la Universidad Tecnológica Autónoma del Pacífico UTAP, que combina los conceptos de Marketing, Ventas, Atención al Cliente y habilidades blandas en un solo programa de formación.

            Además, en 2022 obtuve una Certificación en Atención al Cliente en el Sena. Asimismo, cuento con varias certificaciones en temas de informática y tecnología, incluyendo Big Data, Fundamentos de Seguridad Informática, Metodologías para Educación y Tecnología, Auditorías SEO y Actualización Tributaria y Contable bajo NIIF, todas obtenidas a través de LinkedIn en 2021 y 2018.

            También he completado el Diplomado en NIAS en el Politécnico de Colombia en 2019, el Diplomado en Gerencia en Derecho Laboral y Seguridad Social en la Escuela Empresarial Unipymes en 2017, y el Diplomado en Normas Internacionales de Contabilidad, lo que me permite tener una comprensión profunda de las normas y estándares internacionales de contabilidad y su aplicación en la gestión financiera de una empresa.

            Además de mis habilidades en contabilidad y finanzas, también he adquirido habilidades en Análisis Financiero y Administración y Control de Inventarios, lo que me permite optimizar los recursos y reducir costos a través de una gestión eficiente de los inventarios.

            En resumen, mi formación y experiencia en el campo de la informática y tecnología, combinada con mis habilidades en Marketing, Ventas, Atención al Cliente y habilidades blandas, me permiten ser un profesional versátil y altamente capacitado para enfrentar cualquier desafío en un entorno empresarial dinámico y cambiante.



          </p>
          <hr className="my-4" />
          <h4>Skills</h4>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
          <hr className="my-4" />
          <h4>Connect with me</h4>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://github.com/seuz716">
                <FaGithub />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/cesarabad%C3%ADa/">
                <FaLinkedin />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/johndoe">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileC;
