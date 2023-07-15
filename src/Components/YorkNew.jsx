import React from "react";
import first from "../Assets/phantom.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
const YorkNew = () => {
  return (
    <div className="lg:h-[700px] lg:w-[80%] lg:mx-[10rem] rounded-xl rdm:mb-[3rem] bg-black grid lg:grid-rows-2 gap-4">
      <div className=" text-white  text-center ">
        <div className="text-white flex">
          <table class="table-auto lg:m-7 w-full">
            <thead className="bg-[#1c8d0d] border">
              <tr className="py-5 ">
                <th
                  className="py-2 text-center justify-center items-center lg:text-[2rem]"
                  style={{ fontFamily: "Fonstars" }}
                >
                  York <span className="text-[#F24B28]">x</span> New{" "}
                  <span className="text-[#F24B28]">x</span> City{" "}
                  <span className="text-[#F24B28]">x</span> Arc
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="font-bold">
                  Gon and Killua go to Heavens Arena, a 251-floor building where
                  people compete through fighting tournaments around the clock
                  for cash. It is here they meet the Kung-Fu master Wing, who
                  teaches them about Nen, a chi-like energy that can be used to
                  manifest superhuman powers. He teaches a young child named
                  Zushi, who joins Gon and Killua to fight in the tournament to
                  gain money and experience. Hisoka is also in the tournament.
                  Gon finally gets to battle Hisoka again, to show off how much
                  he has improved.
                  <div className="flex justify-center items-center">
                    <button className="text-white bg-[#F24B28] group lg:text-[1rem] xsm:text-[.6rem] rdm:text-[.7rem] border-2 px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-pink-600">
                      Read More
                      <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3" />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" text-white text-center">
        <img className="w-full h-[350px] rounded-b-xl" src={first} alt="" />
      </div>
    </div>
  );
};

export default YorkNew;
