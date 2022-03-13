import React from "react";
import { AiOutlinePushpin } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="mt-7 dark:bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border rounded-xl bg-gray-200 shadow-xl">
        <h1 className="text-white font-bold text-3xl mb-2">About My Work: </h1>
        <div className="">
          <div className=" z-0 w-full h-full lg:w-3/4" />
        </div>
        <div className="relative">
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div className="grid gap-12 row-gap-5 md:grid-cols-2">
              <div className="relative">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:-mt-12"
                >
                  <rect
                    fill="url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <div className="relative">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                    <AiOutlinePushpin
                      style={{ color: "#fff", height: "30px", width: "30px" }}
                    />
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 text-white">
                    How fast Am I?
                  </h6>
                  <p className="text-sm text-gray-400">
                    It depends of the project. Sometimes there are projects thar
                    requires some more time, but in most cases it&apos;s fast.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                  <MdWorkOutline
                    style={{ color: "#fff", height: "30px", width: "30px" }}
                  />
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white">
                  Am I Engaged with my work?
                </h6>
                <p className="text-sm text-gray-400">
                  Absolutely yes. When I accept a work, I&apos;m totally engaged
                  with it, and I don&apos;t stop until get it.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                  <BiMoney
                    style={{ color: "#fff", height: "30px", width: "30px" }}
                  />
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white">
                  Is my work expensive?
                </h6>
                <p className="text-sm text-gray-400">
                  Not really. I think that my work is really cheap, compared to
                  others.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                  <BsPeople
                    style={{ color: "#fff", height: "30px", width: "30px" }}
                  />
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white">
                  Do I work alone?
                </h6>
                <p className="text-sm text-gray-400">
                  Yes, but I don&apos; have any problem with work with another
                  people. I really love it.
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
