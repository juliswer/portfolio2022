import React from "react";
import Head from "next/head";
import Image from 'next/image';

const ErrorPage = () => {

  return (
    <div>
        <Head>
            <title>404</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Image src="https://miro.medium.com/max/1400/1*9m-WDdL_ji01bGbjEnutEw.gif" alt="404" />
        <h1 className="text-3xl text-white">Hello world</h1>
    </div>
  );
};

export default ErrorPage;
