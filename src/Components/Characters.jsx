import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import hxh from "../Assets/hxh.png";
import Navbar from "./Navbar";
import About from "./About";
import Gon from "./Gon";
import Kurapika from "./Kurapika";
import Leorio from "./Leorio";
import Killua from "./Killua";
import "../fonts/fonts.css";
import Skills from "./Skills";
import Netero from "./Netero";

const Characters = () => {
  return (
    <div
      name="home"
      className="w-full h-[500px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black"
      style={{ backgroundImage: `url(${require(`../Assets/phantom.jpg`)})` }}
    >
      {/* Container */}
      <div
        className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b from-black"
        style={{ fontFamily: "Fonstars" }}
      >
        <p className="text-white text-[1.5rem]"></p>
        <h1 className="lg:text-5xl sm:text-[2.5rem] xsm:text-[1.5rem] rdm:text-[1.5rem] xsm:text-center font-extrabold text-[#f8faff] mb-5">
          <span className="text-white">Hunter</span>{" "}
          <span className="text-[#3cb62b]">x</span>{" "}
          <span className="text-[#F24B28]">
            Characters
          </span>{" "}
        </h1>
        <h2 className="lg:text-4xl sm:text-[2.3rem] xsm:text-[1.3rem] font-bold text-[#8892b0]">
          Nen Type:{" "}
          <Typed
            className=""
            strings={["ENHANCER", "TRANSMUTER", "EMITTER", "CONJURER"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] lg:text-[1rem] xsm:px-6  xsm:text-[.7rem] text-center"></p>
        <div>
          <input
            className="lg:w-full lg:px-[7rem] xsm:px-[4rem] rdm:px-[3rem] lg:py-3 rdm:py-2 rounded text-center"
            type="text"
            placeholder="Search name"
          />
        </div>
        <div>
          <button className="text-white bg-[#F24B28] group lg:text-[1rem] xsm:text-[.6rem] rdm:text-[.7rem] border-2 px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-pink-600">
            Search
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="text-center mt-11 mb-10 xsm:mt-5 xsm:mb-5 rdm:mt-3 rdm:mb-3 bg-black text-white">
        <h1
          className="lg:text-[4rem] xsm:text-[2rem] rdm:text-[2rem] font-extrabold"
          style={{ fontFamily: "Fonstars" }}
        >
          CHARACTERS
        </h1>
      </div>
      <Netero />
      <Killua />
      <Gon />
      <Kurapika />
      <Leorio />
      <Skills />
    </div>
  );
};

export default Characters;
