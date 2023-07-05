import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import hxh from "../Assets/hxh.png";
import "../fonts/fonts.css";
import About from "./About";

const Home = () => {
  const handleScroll = () => {
    const element = document.getElementById("about1");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div name="home" className="w-full h-screen  bg-no-repeat  sm:grid-cols-1">
      {/* Container */}
      <div className="bg-black grid lg:grid-cols-2 gap-4 w-full lg:h-full rdm:h-screen">
        <div
          className="col-span-1 max-w-[1000px] mx-auto flex flex-col sm:justify-center rdm:justify-center h-full sm:mb-8 lg:pl-10 "
          style={{ fontFamily: "Fonstars" }}
        >
          <p className="text-white lg:text-[1.5rem] lg:text-left sm:text-center xsm:text-center rdm:text-center xsm:text-[.8rem] rdm:text-[1rem]  xsm:mt-[5rem] sm:text-[1rem]">
            Welcome to
          </p>
          <h1 className="lg:text-[2rem] sm:text-[2rem] lg:text-left sm:text-center xsm:text-center rdm:text-center xsm:text-[1.7rem] rdm:text-[1.7rem] font-extrabold text-[#f8faff] ">
            <span className="text-white">Hunter</span>{" "}
            <span className="text-[#3cb62b]">x</span>{" "}
            <span className="text-[#F24B28]">Website</span>{" "}
          </h1>
          <h2 className="lg:text-[2rem] sm:text-[2rem] lg:text-left sm:text-center xsm:text-center rdm:text-center xsm:text-[1.5rem] rdm:text-[1.5rem] font-bold text-[#8892b0]">
            I'm a{" "}
            <Typed
              className=""
              strings={["BOUNTY HUNTER"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />{" "}
          </h2>
          <p className="text-[#8892b0] lg:text-[1rem] xsm:text-[.7rem] rdm:text-[.7rem] lg:py-4 xsm:py-3 max-w-[700px] lg:mx-auto lg:text-left sm:text-center rdm:text-center xsm:mx-5">
            The Hunter Website Bartender is an interactive conduit for giving
            information on the Hunters' Tavern.
          </p>
          <div className="flex lg:mx-0 sm:mx-auto xsm:mx-auto rdm:mx-auto">
            <button
              onClick={handleScroll}
              className="text-white group lg:text-[1rem] xsm:text-[.9rem] rdm:text-[.9rem] border-2 lg:px-6 lg:py-3 xsm:px-4 rdm:px-4 xsm:py-2 rdm:py-2  xsm:items-center rdm:items-center lg:my-2 rdm:my-2 flex sm:items-center hover:bg-[#F24B28] hover:border-pink-600"
            >
              View more
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-1 sm:flex sm:justify-center sm:items-center xsm:items-center rdm:items-center rdm:flex xsm:justify-center rdm:justify-center xsm:flex ">
          <img
            src={hxh}
            alt=""
            className="lg:w-[30rem] hover:scale-105 duration-300 sm:w-[30rem] xsm:w-[20rem] rdm:w-[20rem]"
          />
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
