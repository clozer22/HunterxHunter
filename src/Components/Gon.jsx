import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import gon from "../Assets/gon3.png";
import { Link } from "react-router-dom";
const Gon = () => {
  return (
    <div className="w-full h-[550px] bg-black grid lg:grid-cols-2  bg-cover	 bg-center sm:h-full sm:grid-cols-1">
      <div className="col-span-1 flex justify-center text-center items-center flex-col" style={{fontFamily: 'Fonstars'}}>
        <h1 className="lg:text-[3.5rem] xsm:text-[3rem] rdm:text-[2.5rem] font-bold text-white sm:mt-8">
          Gon Freecss
        </h1>
        <div className="">
          <button className="text-white group border-2 lg:px-6 lg:py-3 lg:my-2 xsm:px-5 xsm:py-2 xsm:my-2 my-2 flex items-center bg-[#F24B28]  hover:bg-[#F24B28] hover:border-pink-600">
          <Link to="/gon_info">Read more</Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center text-center items-center overflow-hidden">
        <img
          src={gon}
          alt=""
          className="lg:h-[35rem] xsm:h-[20rem] rdm:h-[20rem]  bg-transparent drop-shadow-lg relative hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
};

export default Gon;
