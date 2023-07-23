import React from "react";
import first from "../Assets/greedisland1.png";
import { HiArrowNarrowRight } from "react-icons/hi";

const GreedIsland = () => {
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
                  Greed <span className="text-[#F24B28]">x</span> Island{" "}
                  <span className="text-[#F24B28]">x</span> Arc
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="font-bold">
                  Gon, Killua, and Leorio return to help Kurapika’s recovery
                  after the battle against the Phantom Troupe. Leorio and
                  Kurapika leave again, returning the focus to Gon and Killua.
                  Gon and Killua are able to join a team hired by the
                  billionaire, Battera, to play the game. Gon and Killua are
                  joined and later Nen-trained by Biscuit Krueger, a 57-year-old
                  woman who looks like a 12-year-old girl, and is a master and
                  experienced teacher of Nen. As the story progresses, a player
                  nicknamed the Bomber is blowing other players up. Gon, Killua,
                  and Biscuit team up with other players and take the Bomber
                  out. The Phantom Troupe also travels to Greed Island, looking
                  for a Nen-remover to remove the Nen blade on Chrollo Lucilfer,
                  put by Kurapika to null his powers.
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

export default GreedIsland;
