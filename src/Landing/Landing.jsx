import React from 'react';
import Hero from "../Componentes/Hero/Hero";
import Navbar from "../Componentes/Navbar/Navbar"
import Servicios from "../Componentes/Servicios/Servicios"
import Portafolio from "../Componentes/Portafolio/Portafolio"
import Experience from "../Componentes/Experience/Experience"
import SobreMi from "../Componentes/About Me/About me"
import Contacto from "../Componentes/Contacto/Contacto"

export default function Landing(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <SobreMi/>
        <Portafolio/>
        <Servicios/>
        <Experience/>
        <Contacto/>
        </>
        )
}