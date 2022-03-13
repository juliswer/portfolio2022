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
    <div className="relative bg-blue-900 mb-10">
      <div className="pt-10 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <svg className="absolute left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,213.3C672,224,768,224,864,234.7C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="space-y-4 flex-1 sm:text-center lg:text-left relative">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            One page Template for <br />
            <span ref={typeTarget} className="font-bold text-amber-500" />
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Get started
            </a>
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Try it out
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
