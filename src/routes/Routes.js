import React from 'react';
import { Routes, Route } from "react-router-dom";
import Portafolio from '../paginas/Portafolio';
import PaginaIngles from '../paginas/PaginaIngles';
import VideoList from '../Ingles/VideoList';
import EnglishPodcasts from '../Ingles/EnglishPodcast';
import BlogSection from '../Ingles/BlogSection';
import LoginForm from '../paginas/LoginForm'


function Rutas() {
  return (

    <>

      <Routes>
        <Route path="/" element={<Portafolio />}></Route>
        <Route path="/ingles" element={<PaginaIngles />} />
        <Route path="/videos" element={<VideoList />} />
        <Route path="/podcast" element={<EnglishPodcasts />} />
        <Route path="/blog" element={<BlogSection/>} />
        <Route path="/login" element={<LoginForm/>} />
        
      </Routes>
    </>
  );
}


export default Rutas;
