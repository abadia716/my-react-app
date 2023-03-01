import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfileA from './components/ProfileA';
import ProfileC from './components/ProfileC';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import SkillsAndCertifications from './components/SkillsAndCertifications';




function App() {
  return <div className='App'>
    
    <ProfileA />
    <br></br>
    <SkillsAndCertifications />
    <br></br>
    <Certifications />
    <br></br>
    <ProfileC />
    <br></br>
    <Portfolio />
    


  </div>;
}

export default App;
