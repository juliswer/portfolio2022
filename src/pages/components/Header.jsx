import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import BGHero from "../../assets/backgroundHero.png";
import Image from "next/image";

const Header = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
        "Mobile Developer",
      ],
      typeSpeed: 70,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-blue-900 mb-10" id="header">
      <div className="pt-10 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <svg className="absolute left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,224L30,224C60,224,120,224,180,213.3C240,203,300,181,360,170.7C420,160,480,160,540,181.3C600,203,660,245,720,234.7C780,224,840,160,900,154.7C960,149,1020,203,1080,224C1140,245,1200,235,1260,229.3C1320,224,1380,224,1410,224L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div className="space-y-4 flex-1 sm:text-center lg:text-left relative">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Are you looking for a <br />
            <span ref={typeTarget} className="font-bold text-amber-500" />?
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Hi! I&apos;m Julian, a Fullstack and Mobile Developer from Argentina.
            I have experience working with different technologies, like Vue, Nuxt.js, React, Next.js, Three.js, and others.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="mailto:julianswer36@gmail.com"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <Image
            src={BGHero}
            alt="background"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
