import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './routes/Routes';
import Header from './components/Header';




function App() {
  return   <div className='App'>
    <Header /> 
    <Routes />
  </div>;
}

export default App;
