import React from "react";
import personalPic from '../../assets/cv.jpg';
import Image from 'next/image';

const Presentation = () => {
  const date = new Date();
  const result = date.toDateString().slice(4);

  return (
    <div id="aboutme">
      <div className="dark:bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border rounded-xl bg-gray-200 shadow-xl">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase sm:text-center">
          {result}
        </p>
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4">
            <a
              aria-label="Article"
              className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-white transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
            >
              Who Am I?
            </a>
          </div>
          <p className="text-base text-gray-200 md:text-lg">
            I&apos;m a Fullstack and Mobile Developer from Argentina. <br />I
            have learned everything online, watching videos, making tutorials
            and courses. I have a diploma on Data Science, and right now
            I&apos;m doing a Mobile Apps Course (with Kotlin). For sure
            It&apos;s on my{" "}
            <a
              href="https://www.github.com/juliswer"
              className="underline text-blue-500"
            >
              Github.
            </a>
          </p>
        </div>
        <div className="mb-10 sm:text-center">
          <a aria-label="Author" className="inline-block mb-1">
            <Image
              alt="avatar"
              src={personalPic}
              width={70}
              height={70}
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <p className="mt-1 text-sm font-bold leading-4 text-white">
              Julian Swerdlin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
