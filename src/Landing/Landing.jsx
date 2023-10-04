import React from "react";
import Hero from "../Componentes/Hero/Hero";
import Navbar from "../Componentes/Navbar/Navbar";
import Servicios from "../Componentes/Servicios/Servicios";
import Portafolio from "../Componentes/Portafolio/Portafolio";
//import Experience from "../Componentes/Experience/Experience";
import "./Landing.css";
import SobreMi from "../Componentes/About Me/About me";
import Contacto from "../Componentes/Contacto/Contacto";


export default function Landing() {
  return (
    <div class="bg-gray-900">
      <div>
        <Navbar />
      </div>
      <Hero />
      <SobreMi />
      <Portafolio />
      <Servicios />
      <Contacto />
     
    </div>
  );
}
