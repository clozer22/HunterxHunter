import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import leorio from '../Assets/leorio3.png'
const Leorio = () => {
  return (
    <div
    className="w-full h-[500px] bg-black grid lg:grid-cols-2 gap-4 bg-cover bg-center sm:h-full sm:grid-cols-1 "
   
  >
    <div className="col-span-1 flex justify-center text-center items-center flex-col" style={{fontFamily: 'Fonstars'}}>
      <h1 className="lg:text-[5rem] xsm:text-[3rem] font-bold text-white sm:mt-8">
        Leorio 
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
    <div className="col-span-1 flex justify-center text-center items-center overflow-hidden">
      <img
        src={leorio}
        alt=""
        className="lg:h-[550px] xsm:h-[350px] drop-shadow-lg relative hover:scale-105 duration-300"
      />
    </div>
  </div>
  )
}

export default Leorio