import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import hisoka from "../Assets/hisoka.png";
import netero from "../Assets/netero-1.png";
import smoke from "../Assets/smoke.jpg";
import { Link } from "react-router-dom";
import '../fonts/fonts.css'

const About = () => {
  return (
    <div
      className="w-full h-[550px] bg-black grid lg:grid-cols-2  bg-cover	 bg-center sm:h-full sm:grid-cols-1 "
      style={{ backgroundImage: `url(${require(`../Assets/netero2.png`)})` }}
    >
      <div className="col-span-1 flex justify-center text-center items-center flex-col lg:bg-gradient-to-b xsm:bg-gradient-to-l from-black" style={{fontFamily: 'Fonstars'}}>
        <h1 className="lg:text-[3.5rem] xsm:text-[3rem] rdm:text-[2.5rem] rdm:mt-3 font-bold text-white sm:mt-8">
          Isaac Netero
        </h1>

        <div className="">
          <button className="text-white group border-2 lg:px-6 lg:py-3 lg:my-2 xsm:px-5 xsm:py-2 xsm:my-2 rdm:px-5 rdm:py-2 flex items-center bg-[#F24B28]   hover:bg-[#F24B28] hover:border-pink-600">
            <Link to="/netero_info">Read more</Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center text-center items-center overflow-hidden lg:bg-gradient-to-b xsm:bg-gradient-to-l from-black">
        <img
          src={netero}
          alt=""
          className="lg:h-[550px] xsm:h-[400px] drop-shadow-lg relative hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
};

export default About;
