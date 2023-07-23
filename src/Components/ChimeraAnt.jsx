import React from "react";
import first from "../Assets/chimera.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
const ChimeraAnt = () => {
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
                  Chimera <span className="text-[#F24B28]">x</span> Ant{" "}
                  <span className="text-[#F24B28]">x</span> Arc
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="font-bold">
                  After leaving Greed Island, Gon and Killua meet up with Kite.
                  They're all hired to investigate a strange insect leg that
                  washed up on a beach. Genetic testing determines that the leg
                  belongs to an abnormally large Chimera Ant Queen, which just
                  happens to wash up on the shore of an island called the NGL
                  (Neo-Green Life). The Chimera Ants proceed to wipe most of the
                  population out and spawn hundreds of offspring for next
                  generation before Gon, Killua, and Kite arrive to stop her.
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

export default ChimeraAnt;
