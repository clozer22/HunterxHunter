import React from "react";
import first from "../Assets/zodiac.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Election = () => {
  return (
    <div className="lg:h-[800px] lg:w-[80%] lg:mx-[10rem] rounded-xl rdm:mb-[3rem] bg-black grid lg:grid-rows-2 gap-4">
      <div className=" text-white  text-center ">
        <div className="text-white flex">
          <table class="table-auto lg:m-7 w-full">
            <thead className="bg-[#1c8d0d] border">
              <tr className="py-5 ">
                <th
                  className="py-2 text-center justify-center items-center lg:text-[2rem]"
                  style={{ fontFamily: "Fonstars" }}
                >
                  13th <span className="text-[#F24B28]">x</span> Hunter Chairman{" "}
                  <span className="text-[#F24B28]">x</span> Election Arc
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="font-bold">
                  Netero, the Hunter chairman has passed away after his
                  confrontation with the Chimera Ant King, Meruem. A new Hunter
                  chairman is needed, so the Zodiacs are gathered to establish a
                  new election for their new Hunter chairman. Ging Freecss, one
                  of the Zodiac members is leading the establishment. Leorio
                  returns and quickly rises to prominence as a top candidate in
                  the election. These events act as a backdrop to the efforts of
                  Killua and his servants, who wish to revive a hospitalized Gon
                  using the Nen ability of Alluka Zoldyck. Illumi, aided by
                  Hisoka, attempts to stop Killua due to the potential dangers
                  attached to using Alluka's powers.
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
        <img className="w-full h-[400px] rounded-b-xl" src={first} alt="" />
      </div>
    </div>
  );
};

export default Election;
