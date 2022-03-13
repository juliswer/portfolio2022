import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center hover:cursor-pointer">
            <Link href="/" passHref>
              <div className="flex align-items-center">
                <Image src={logo} alt="Julian Logo" width={100} height={60} />
                <span
                  className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                  style={{ marginLeft: "-20px" }}
                >
                  Julian Swerdlin
                </span>
              </div>
            </Link>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <LinkScroll to="aboutme" smooth={true}>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    About Me
                  </a>
                </LinkScroll>
              </li>
              <li>
                <LinkScroll to="mywork" smooth={true}>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    My Work
                  </a>
                </LinkScroll>
              </li>
              <li>
                <LinkScroll to="history" smooth={true}>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    History
                  </a>
                </LinkScroll>
              </li>
              <li>
                <LinkScroll to="faqs" smooth={true}>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    FAQs
                  </a>
                </LinkScroll>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download CV
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
