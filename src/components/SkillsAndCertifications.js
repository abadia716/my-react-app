import React from 'react';
import mr from '../assets/Marketing.png';
import Cs from '../assets/Cservice.png';
import BD from '../assets/BigData.png';
import Seo from '../assets/seo.jpg';
import ED from '../assets/Educacion.png';
import Seg from '../assets/seguridad.png';
import Lupa from '../assets/lupa.png';
import TR from '../assets/trabajo.png';
import './SkillsAndCertifications.css';


const SkillsAndCertifications = () => {

    const skillsAndCerts = [
      
      
        {
            title: 'Big Data',
            description: 'Esta certificación brinda una comprensión de los conceptos básicos de Big Data y cómo utilizar la información para tomar decisiones informadas. La certificación se obtuvo a través de LinkedIn en 2021.',
            icon: BD
        },
        {
            title: 'Fundamentos de la Seguridad Informática',
            description: 'Este programa brinda una comprensión básica de la seguridad informática y cómo proteger los datos y sistemas de la organización. La certificación se obtuvo a través de LinkedIn en 2021.',
            icon: Seg
        },
        {
            title: 'Auditorias SEO',
            description: 'Este programa se enfoca en cómo realizar auditorías de SEO para mejorar la visibilidad de un sitio web en los motores de búsqueda. La certificación se obtuvo a través de LinkedIn en 2021.',
            icon: Seo
        },
        {
            title: 'Metodologías para Educación y Tecnología',
            description: 'Este programa se enfoca en cómo utilizar la tecnología y metodologías pedagógicas efectivas para mejorar la educación. La certificación se obtuvo a través de LinkedIn en 2021.',
            icon: ED
        },
       
        {
            title: 'Especialización en NIAS (Normas Internacionales de Auditoría)',
            description: 'Este programa brinda una comprensión de las normas internacionales de auditoría y cómo aplicarlas en la práctica. El diplomado se obtuvo en el Politécnico de Colombia en 2019.',
            icon: Lupa
        },
        {
            title: 'Gerencia en Derecho Laboral y Seguridad Social',
            description: 'Este programa se enfoca en la gerencia de derecho laboral y seguridad social y cómo aplicar los conceptos en la práctica. El diplomado se obtuvo en la Escuela Empresarial Unipymes en 2017.',
            icon: TR
        },
        {
            title: 'Marketing, Sales, Customer Service, and Soft Skills',
            description: 'Esta habilidad combina los conceptos de marketing, ventas, atención al cliente y habilidades blandas en un solo programa de formación. La formación se realizó en inglés en la Universidad Tecnológica Autónoma del Pacífico UTAP en 2022.',
            icon: mr
        },
        {
            title: 'Certificación en Atención al Cliente',
            description: 'Este programa de certificación se enfoca en mejorar las habilidades de atención al cliente y brindar una mejor experiencia a los clientes. La certificación se obtuvo en el Sena en 2022.',
            icon:Cs
        },
        {
          title: 'Certificación en Atención al Cliente',
          description: 'Este programa de certificación se enfoca en mejorar las habilidades de atención al cliente y brindar una mejor experiencia a los clientes. La certificación se obtuvo en el Sena en 2022.',
          icon:Cs
      }

    ];

    return (
        <div className="skills-and-certs-container">
          {skillsAndCerts.map((item, index) => (
            <div className="skill-card" key={index}>
              <span className="icon">
                <img 
                  
                  
                  src={item.icon} 
                  alt={item.title} 
                />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      );
      
};


export default SkillsAndCertifications;
