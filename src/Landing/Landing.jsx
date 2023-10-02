import React from "react";
import Hero from "../Componentes/Hero/Hero";
import Navbar from "../Componentes/Navbar/Navbar";
import Servicios from "../Componentes/Servicios/Servicios";
import Portafolio from "../Componentes/Portafolio/Portafolio";
//import Experience from "../Componentes/Experience/Experience";
import "./Landing.css";
import SobreMi from "../Componentes/About Me/About me";
import Contacto from "../Componentes/Contacto/Contacto";
import Productos from "../Componentes/loProductos/losProductos";

export default function Landing() {
  return (
    <div class="bg-gray-900">
      <div className="navegador">
        <Navbar />
      </div>
      <Hero />
      <SobreMi />
      <Portafolio />
      <Servicios />
      <Contacto />
      <Productos/>
    </div>
  );
}
