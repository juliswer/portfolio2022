import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { saveAs } from "file-saver";

const Navbar = () => {
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center">
            <Image
              src={logo}
              className="mr-3 h-6 sm:h-10 mr-10"
              alt="Julian Logo"
              widht={10}
              height={50}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Julian Swerdlin
            </span>
          </a>
          <button
            onClick={saveFile}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Download CV
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
