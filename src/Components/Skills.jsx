import React, { Profiler } from "react";
import php from "../Assets/php.png";
import react from "../Assets/react.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import hisoka from "../Assets/hisoka.png";

const Skills = () => {
  return (
    <div
      className="w-full lg:h-[550px] xsm:h-screen bg-black grid lg:grid-cols-2 xsm:grid-cols-1 gap-4 bg-cover bg-center sm:h-full sm:grid-cols-1"
      style={{ backgroundImage: `url(${require(`../Assets/smoke.jpg`)})` }}
    >
      <div className="col-span-1 flex justify-center text-center items-center flex-col" style={{fontFamily: 'Fonstars'}}>
        <h1 className="lg:text-[3.5rem] xsm:text-[3rem] font-bold text-white sm:mt-8">
          Hisoka Morow
        </h1>
        <div className="">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-[#F24B28]  hover:bg-[#F24B28] hover:border-pink-600">
            Read more
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center  text-center items-center overflow-hidden">
        <img
          src={hisoka}
          alt=""
          className="lg:h-[550px] xsm:h-[400px] drop-shadow-lg relative hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
};

export default Skills;
