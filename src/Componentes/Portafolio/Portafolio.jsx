import React from "react";

export default function Portafolio() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 mx-auto">
          <div class="flex flex-col text-center w-full mb-16 mt-20 ">
            <h1
              id="portafolio"
              class="sm:text-4xl text-2xl font-medium title-font text-white"
            >
              Portafolio
            </h1>
          </div>
        </div>
      </section>

      <section class="text-gray-400 body-font">
        <div class="container px-5 py-4 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1201x501"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Fast COLOR Pintureria
              </h2>
              <p class="leading-relaxed text-base">
                Un sitio web para una pintureria automotriz que tiene una
                landing con toda la informacion general mas un apartado de
                contacto, sucursales, etc...
              </p>
              <button class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Ver sitio
              </button>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1202x502"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                TechNexus
              </h2>
              <p class="leading-relaxed text-base">
                Este proyecto se basa en un ecommerce sobre productos de
                tecnologia, cumpliendo con los requisitos propuestos por Henry y
                con otras funcionalidades mas.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-8 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1201x501"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                All Market
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Ver sitio
              </button>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1202x502"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                VideoGames (Henry)
              </h2>
              <p class="leading-relaxed text-base">
                El proyecto es un S.P.A (Single Page Application) sobre
                Videojuegos. Toda la información es extraída de la API, donde
                con diversas lógicas podemos mostrar los juegos en la página de
                manera diversificada y ordenada.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Ver sitio
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
