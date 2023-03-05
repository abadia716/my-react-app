import React from 'react';
import ProfileA from '../components/ProfileA';
// import ProfileC from '../components/ProfileC';
import Portfolio from '../components/Portfolio';
import SkillsAndCertifications from '../components/SkillsAndCertifications';
import './Portafolio.css';



function Portafolio() {
  return (
    <div className="container portfolio-container">
      <div >
        <ProfileA />
      </div>
      <div className="col-md-12">
        <SkillsAndCertifications />
      </div>
      <div className="col-md-20">
        <Portfolio />
      </div>
    </div>
  );
}


export default Portafolio;


