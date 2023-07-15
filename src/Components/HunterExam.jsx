import React from "react";
import first from "../Assets/hxhback.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";

const HunterExam = () => {
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
                  Hunter <span className="text-[#F24B28]">x</span> Exam <span className="text-[#F24B28]">x</span> Arc
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="font-bold">
                  The journey begins with Gon taking a series of bizarre tests
                  to become a Hunter, which includes navigating a deadly jungle,
                  hunting other applicants, killing a wild boar, an
                  extraordinarily long underground marathon, and making sushi.
                  During the Hunter Exam, Gon meets and befriends three of the
                  applicants, Kurapika, Killua, and Leorio. The series' first
                  antagonist is also introduced as one of the applicants. Hisoka
                  is a complex villain who uses playing cards as weapons and
                  views Gon as an "unripe fruit" that he will take great
                  pleasure in killing once he's grown up enough to present a
                  challenge. Before the end of the Hunter Exam, Killua faces his
                  brother, Illumi, who makes him come home before he can even
                  finish the exam.
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
        <img className="w-full lg:h-[350px] rounded-b-xl" src={first} alt="" />
      </div>
    </div>
  );
};

export default HunterExam;
