import { HiArrowNarrowRight } from "react-icons/hi";
import React from "react";
import killua from "../Assets/killua.png";
import { Link } from "react-router-dom";

const Killua = () => {
  return (
    <div
      className="w-full h-[500px] bg-black grid lg:grid-cols-2 gap-4 bg-cover bg-center sm:h-full sm:grid-cols-1 "
      style={{ backgroundImage: `url(${require(`../Assets/light.png`)})` }}
    >
      <div
        className="col-span-1 flex justify-center text-center items-center flex-col"
        style={{ fontFamily: "Fonstars" }}
      >
        <h1 className="lg:text-[3.5rem] xsm:text-[3rem] rdm:text-[2.5rem] rdm:mt-3 font-bold text-white sm:mt-8">
          Killua Zoldyck
        </h1>
        <div className="">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-[#F24B28]  hover:bg-[#F24B28] hover:border-pink-600">
            <Link to="/killua_info">Read more</Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center text-center items-center overflow-hidden">
        <img
          src={killua}
          alt=""
          className="lg:w-[50rem] lg:h-[40rem] xsm:h-[20rem] rdm:h-[20rem] drop-shadow-lg relative hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
};

export default Killua;
