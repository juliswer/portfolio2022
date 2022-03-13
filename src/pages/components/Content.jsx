import React from "react";

const Content = () => {
  return (
    <div className="mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16 border rounded-xl bg-gray-800">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none text-white">
              How many time I have developing apps?
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-white">
              Well, Even I don&apos;t have so much time developing, I studied so
              hard, you can check it on my contributtions on Github.
              <br />I really love what I do, and I want to keep doing it for so
              much time.
            </p>
            <a
              href="mailto:julianswer36@gmail.com"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
