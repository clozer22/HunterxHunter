import { HiArrowNarrowRight } from "react-icons/hi";
import React from "react";
import kurapika from '../Assets/kurapika2.png'
import { Link } from "react-router-dom";

const Kurapika = () => {
  return (
    <div
      className="w-full h-[500px] bg-black grid lg:grid-cols-2 gap-4 bg-cover bg-center sm:h-full sm:grid-cols-1 "
      style={{ backgroundImage: `url(${require(`../Assets/redsmoke.jpg`)})` }}
    >
      <div className="col-span-1 flex justify-center text-center items-center flex-col" style={{fontFamily: 'Fonstars'}}>
        <h1 className="lg:text-[3.5rem] xsm:text-[3rem] rdm:text-[2.5rem] rdm:mt-3 font-bold text-white sm:mt-8">
          Kurapika 
        </h1>
        <div className="">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-[#F24B28]  hover:bg-[#F24B28] hover:border-pink-600">
          <Link to="/kurapika_info">Read more</Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center text-center items-center overflow-hidden">
        <img
          src={kurapika}
          alt=""
          className="w-[30rem] lg:h-[40rem] xsm:h-[25rem] rdm:h-[30rem]  drop-shadow-lg relative hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
};

export default Kurapika;
