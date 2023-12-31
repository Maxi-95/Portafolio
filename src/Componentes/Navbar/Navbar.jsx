import React from "react";

export default function Navbar() {
  return (
    <>
      <header class="bg-gray-900 text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-3xl text-white">Maximiliano Fonseca</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a
              class="text-blue-400 mr-2 px-3 md:mr-7 hover:bg-white hover:text-blue-600 hover:px-3 hover:py-1 rounded-full no-underline transition-all duration-300"
              href="#sobre mi"
            >
              Sobre Mi
            </a>
            <a
              class="text-blue-400 mr-2 px-3 md:mr-7 hover:bg-white hover:text-blue-500 hover:px-3 hover:py-1 rounded-full no-underline transition-all duration-300"
              href="#portafolio"
            >
              Portafolio
            </a>
            <a
              class="text-blue-400 mr-2 px-3 md:mr-7 hover:bg-white hover:text-blue-500 hover:px-3 hover:py-1 rounded-full no-underline transition-all duration-300"
              href="#servicios"
            >
              Servicios
            </a>
          </nav>
          <a href="#contacto">
            <button class="inline-flex flex justify-center items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-0 md:mt-0">
              Contacto
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </header>
    </>
  );
}
