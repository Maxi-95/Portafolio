import React from "react";

export default function Navbar() {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900" href="#sobre mi">
              Sobre Mi
            </a>
            <a class="mr-5 hover:text-gray-900" href="#portafolio">
              Portafolio
            </a>
            <a class="mr-5 hover:text-gray-900" href="#servicios">
              Servicios
            </a>
          </nav>
          <a href="#contacto">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out mt-4">
              Contacto
            </button>
          </a>
        </div>
      </header>
    </>
  );
}
