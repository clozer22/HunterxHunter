import React from "react";
import second from "../Assets/zoldycks2.png";
import { HiArrowNarrowRight } from "react-icons/hi";

const ZoldyckFam = () => {
  return (
    <div className="lg:h-[700px] lg:w-[80%] lg:mx-[10rem] rounded-xl rdm:mb-[3rem] bg-black grid lg:grid-rows-2 gap-4">
      <div className=" text-white  text-center">
        <div className="text-white flex">
          <table class="table-auto lg:m-7 w-full">
            <thead className="bg-[#1c8d0d] border">
              <tr className="py-5 ">
                <th
                  className="py-2 text-center justify-center items-center lg:text-[2rem]"
                  style={{ fontFamily: "Fonstars" }}
                >
                  zoldyck <span className="text-[#F24B28]">x</span> family <span className="text-[#F24B28]">x</span> arc
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="font-bold">
                  After passing the Hunter Exam, Gon, Kurapika, and Leorio go
                  off on a new adventure to spring Killua from his parents'
                  mansion in Kukuroo Mountain. After the three reunite with
                  Killua, Leorio leaves for medical school so he can become a
                  professional doctor, and Kurapika leaves to find work as a
                  bounty hunter. Gon and Killua decide to go together to Heavens
                  Arena so they can gain combat experience by training.
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
        <img className="w-full h-full rounded-b-xl" src={second} alt="" />
      </div>
    </div>
  );
};

export default ZoldyckFam;
