import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img
              src="/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Julian Swerdlin
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
