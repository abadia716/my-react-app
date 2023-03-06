import React from 'react';
import { Routes, Route } from "react-router-dom";
import Portafolio from '../paginas/Portafolio';



function Rutas() {
  return (

    <>
    
      <Routes>
        <Route path="/" element={<Portafolio />}></Route>
      </Routes>
    </>
  );
}

export default Rutas;
