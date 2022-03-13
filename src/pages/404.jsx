import React from "react";
import Head from "next/head";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="grid place-content-center">
        <Head>
          <title>404</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="mt-20">
          <img
            src="https://i.pinimg.com/originals/96/c8/84/96c884d67bb675db49ac6b8ee438a243.gif"
            alt="404"
            className="rounded-full"
          />
          <h1 className="text-3xl container mx-auto text-center font-sans text-white font-bold">
            Oooopss...
          </h1>
          <p className="text-xl container mx-auto text-center text-white">
            Parece que la página que buscas todavia no la he creado 😥
          </p>
        </div>
      </div>
      <div className="grid place-content-center mt-3">
        <button className="py-4 px-4 text-white duration-100 bg-indigo-600 rounded-md shadow focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2">
          <Link href="/">Volver al inicio</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
