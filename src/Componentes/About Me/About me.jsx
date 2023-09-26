import React from "react";
import cv from "../Img/Curriculum vitae.pdf";

export default function SobreMi() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container px- mx-auto">
          <div class="flex flex-col text-center w-full mb-10 mt-10">
            <h1
              id="sobre mi"
              class="sm:text-4xl text-2xl font-medium title-font text-gray-900"
            >
              Sobre Mi
            </h1>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-14 mx-auto">
          <div class="xl:w-1/1 lg:w-3/4 w-full mx-auto text-center">
            <p class="leading-relaxed text-xl mb-14">
              Soy un Full Stack Developer con las habilidades y conocimientos
              para llevar a cabo desarrollos y proyectos web, con buena
              predisposicíon a la hora de trabajar en equipo y en constante
              aprendisaje que poco a poco me ayuda a ser mejor. Me considero un
              programador CREATIVO, desde que era niño siempre me gusto dibujar,
              el arte visual era alguno con el que siempre me eh sentido
              familiarizado, ahora elijo el mundo Front-end como mi mundo.
            </p>
          </div>
          <a href={cv} download>
            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Descargar CV.
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
