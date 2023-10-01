import React from "react";

export default function Servicios() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 mx-auto">
          <div class="flex flex-col text-center w-full mb-8 mt-24">
            <h1
              id="servicios"
              class="sm:text-4xl text-2xl font-medium title-font text-white"
            >
              Servicios
            </h1>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-28 h-28 object-cover object-center sm:mb-0 mb-4"
                  src="https://cdn-icons-png.flaticon.com/512/2985/2985967.png"
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-blue-500">
                    Aplicaciones Web Personalizadas
                  </h2>

                  <p class="mb-4 text-gray-400">
                    Creo aplicaciones web hechas a medida que se adaptan
                    perfectamente a las necesidades de tu negocio, desde la
                    concepción hasta el mantenimiento.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-28 h-28 object-cover object-center sm:mb-0 mb-4"
                  src="https://cdn-icons-png.flaticon.com/512/2270/2270789.png"
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-blue-500">
                    Optimización de Rendimiento y Escalabilidad
                  </h2>

                  <p class="mb-4 text-gray-400">
                    Mejoro el rendimiento de tus aplicaciones web existentes y
                    aseguro que sean escalables para el crecimiento futuro de tu
                    empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
