import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <div className="profile-image-container">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Profile"
              className="profile-image img-fluid rounded-circle"
            />
          </div>
        </Col>
        <Col md={8}>
          <div className="profile-content-container">
            <h1 className="profile-name display-4">John Doe</h1>
            <p className="profile-description lead">
              Full Stack Web Developer
            </p>
            <hr className="profile-divider my-4" />
            <p className="profile-bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
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
                <a href="https://linkedin.com/in/johndoe">
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
