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
              class="sm:text-4xl text-2xl font-medium title-font text-white"
            >
              Sobre Mi
            </h1>
          </div>
        </div>
      </section>
      <section class="text-gray-500 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="xl:w-1/1 lg:w-3/4 w-full mx-auto text-center">
            <p class="leading-relaxed text-xl mb-6">
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
            <section class="text-white body-font relative">
              <div class="container px-5  mx-auto">
                <div class="flex flex-col text-center w-full mt-6">
                  <h1
                    id="contacto"
                    class="sm:text-4xl text-2xl font-medium py-8 title-font text-white"
                  >
                    <span class="inline-flex">
                      <a class="ml-4 text-gray-500">
                        <svg
                          class="h-8 w-8 text-gray-200"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                          <rect x="2" y="9" width="4" height="12" />{" "}
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                      <a class="ml-4 text-gray-500">
                        <svg
                          class="h-8 w-8 text-gray-200"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                        </svg>
                      </a>
                    </span>
                  </h1>
                </div>
              </div>
            </section>
            <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Descargar CV.
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
