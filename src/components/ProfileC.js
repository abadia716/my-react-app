import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Profile.css';

const ProfileC = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <img
            src="https://via.placeholder.com/300x300"
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </Col>
        <Col md={8}>
          <h1 className="display-4">John Doe</h1>
          <p className="lead">Full Stack Web Developer</p>
          <hr className="my-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              <a href="https://github.com/johndoe">
                <FaGithub />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://linkedin.com/in/johndoe">
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
