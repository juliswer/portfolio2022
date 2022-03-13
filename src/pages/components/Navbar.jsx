import React from "react";
import logo from "../../assets/logo_dev-inc.png";
import Image from "next/image";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center hover:cursor-pointer">
            <Link href="/">
            <div className="flex align-items-center">
              <Image
                src={logo}
                className="mr-3 h-6 sm:h-10"
                alt="Julian Logo"
                width={90}
                height={50}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-4">
                Julian Swerdlin
              </span>
            </div>
            </Link>
          </a>
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
