import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";

const Timeline = () => {
  return (
    <div className="mt-10" id="history">
      <h4 className="text-2xl text-white mb-4 font-bold">
        My works and personal projects:{" "}
      </h4>
      <ol className="items-center sm:flex">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-3 h-3 text-blue-600 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Canalizados App
              </h3>
              <a
                href="https://github.com/juliswer/canalizados"
                target="_blank"
                rel="noreferrer"
                className="border rounded-full p-1 bg-gray-600 text-white"
              >
                <AiOutlinePaperClip />
              </a>
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November, 2021.
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              On this work I used Nuxt.js to develop this app.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-3 h-3 text-blue-600 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                MEVN - Crud (Typescript)
              </h3>
              <a
                href="https://github.com/juliswer/mevn-typescript-crud"
                target="_blank"
                rel="noreferrer"
                className="border rounded-full p-1 bg-gray-600 text-white"
              >
                <AiOutlinePaperClip />
              </a>
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              December, 2021.
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              I made a CRUD using Vue with Typescript, and Node.js (with
              typescript too).
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-3 h-3 text-blue-600 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Vanimals App
              </h3>
              <a
                href="https://vanimals.co"
                target="_blank"
                rel="noreferrer"
                className="border rounded-full p-1 bg-gray-600 text-white"
              >
                <AiOutlinePaperClip />
              </a>
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              December, 2021.
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              On this work I used Three.js on Next.js to make 3d Models.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-3 h-3 text-blue-600 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                PERN - Crud (Typescript)
              </h3>
              <a
                href="https://github.com/juliswer/nextjs-postgress-crud-typescript"
                target="_blank"
                rel="noreferrer"
                className="border rounded-full p-1 bg-gray-600 text-white"
              >
                <AiOutlinePaperClip />
              </a>
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January, 2022.
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              On this project I made a PERN Crud using Typescript for front and
              the back.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-3 h-3 text-blue-600 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                ShareMe App
              </h3>
              <a
                href="https://sharemejuliswer.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="border rounded-full p-1 bg-gray-600 text-white"
              >
                <AiOutlinePaperClip />
              </a>
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March, 2022.
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              On this project I used React and Node.js (with Sanity).
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
