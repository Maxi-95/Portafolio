import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const form = useRef();
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sseotwq",
        "template_t63vfvu",
        form.current,
        "aExGl1B7OrVuY94LU"
      )
      .then(
        (result) => {
          setMostrarAlerta(true);
          console.log(result.text);
          setTimeout(() => {
            setMostrarAlerta(false);
            window.location.reload();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form id="contacto" ref={form} onSubmit={sendEmail}>
        <section class="text-white body-font relative">
          <div class="container px-5 mx-auto">
            <div class="flex flex-col text-center w-full mb-6 mt-24">
              <h1
                
                class="sm:text-4xl text-2xl font-medium title-font text-white"
              >
                Contacto
              </h1>
            </div>
          </div>
        </section>
        <section class="text-gray-400 body-font relative">
          <div class="container px-5 py-14 mx-auto">
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <input
                    class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    type="submit"
                    value="Enviar"
                  />
                </div>
              </div>
            </div>
          </div>

          {mostrarAlerta && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
              <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="flex items-center justify-center w-12 bg-blue-500">
                  <svg
                    class="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                  </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="text-3xl font-semibold text-blue-500 dark:text-blue-400">
                      Enviado
                    </span>
                    <p class="text-2sm mt-4 text-gray-500 dark:text-gray-500">
                      Tu mensaje fue enviado con exito!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto pb-24">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    class="h-8 w-8 text-blue-500"
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
                    <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-500 text-lg title-font font-medium mb-3">
                    Email:
                  </h2>
                  <p class="leading-relaxed text-base">
                    maximilianofonseca19@gmail.com
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    class="h-8 w-8 text-blue-500"
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
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{" "}
                    <path d="M15 6l2 2l4 -4" />
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-500 text-lg title-font font-medium mb-3">
                    Telefono:
                  </h2>
                  <p class="leading-relaxed text-base">+51 3517316163</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    class="h-8 w-8 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-500 text-lg title-font font-medium mb-3">
                    Ubicacion:
                  </h2>
                  <p class="leading-relaxed text-base">
                    Cordoba, capita (Argentina)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
