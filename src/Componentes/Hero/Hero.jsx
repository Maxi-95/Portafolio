import React from "react";
//import './Hero.css';

export default function Hero() {
  return (
    <>
      <section class="text-gray-400 body-font mt-20">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md: -left mb-16 md:mb-0 items-center text-left">
            <h1 class="title-font sm:text-7xl text-5xl mb-4 font-medium text-white">
              Full Stack Web
              <br class="hidden lg:inline-block" />
              Developer
            </h1>

            <div class="flex justify-center">
              <a href="#portafolio">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-indigo-600 rounded text-2xl mt-4">
                Mis proyectos
              </button>

              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </>
  );
}
