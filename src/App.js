import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfileA from './components/ProfileA';
import ProfileC from './components/ProfileC';
import Portfolio from './components/Portfolio';



function App() {
  return <div className='App'>
    
    <ProfileA />
    <ProfileC />
    <Portfolio />
    

  </div>;
}

export default App;
