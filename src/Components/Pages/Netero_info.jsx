import { HiArrowNarrowRight } from "react-icons/hi";
import { BsGenderMale } from "react-icons/bs";
import React from "react";
import netero from "../../Assets/netero-1.png";
import netero1 from "../../Assets/netero-2.jpg";
import netero2 from "../../Assets/neteroInfo5.png";

const Netero_info = () => {
  const handleScroll = () => {
    const element = document.getElementById("section2");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      name="home"
      className="w-full lg:h-[550px] rdm:h-[550px]  bg-black bg-no-repeat  sm:grid-cols-1 rdm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black"
      style={{
        backgroundImage: `url(${require(`../../Assets/netero2.png`)})`,
      }}
    >
      {/* Container */}
      <div
        className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b  from-black"
        style={{ fontFamily: "Fonstars" }}
      >
        <p className="text-white text-[1.5rem]"></p>
        <h1 className="lg:text-4xl sm:text-7xl rdm:text-[2rem] font-extrabold text-[#f8faff]">
          Isaac Netero
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]"></h2>
        <p className="text-[#b7c0db] py-4 max-w-[700px] text-center">
          Isaac Netero (アイザック゠ネテロ, Aizakku Netero) was the 12th
          Chairman of the Hunter Association and the Head of the Exam
          Commission. In his youth, he was extolled as the most powerful Nen
          user in the world, and retained dreadful strength even in his old age.
        </p>
        <div>
          <button
            onClick={handleScroll}
            className="text-white bg-[#F24B28] group border-2 px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-pink-600"
          >
            View more
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="text-center  bg-black text-white">
        <h1
          className="lg:text-[4rem] rdm:text-[3rem] font-extrabold"
          style={{ fontFamily: "Fonstars" }}
        >
          Info
        </h1>
      </div>
      <div
        className=" lg:h-[1240px] sm:h-[1450px] rdm:h-[1200px]  lg:w-full  bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${require(`../../Assets/neteroInfo2.png`)})`,
        }}
      >
        <div
          id="section2"
          className="col-span-1 items-center  lg:pl-6 h-[1240px] lg:bg-gradient-to-bl sm:absolute  from-black"
        >
          <h1
            className="font-bold lg:text-[3rem] rdm:text-[2rem] text-white text-center"
            style={{ fontFamily: "Fonstars" }}
          >
            Isaac netero
          </h1>
          <div className="bg-black rounded text-white lg:mb-5 rdm:mb-2">
            <p className="font-bold lg:text-center rdm:text-center text-[1rem]">
              "When? When did I start waiting for my opponent to make the first
              move? When, indeed? It became a routine. The loser held out his
              hands in gratitude for the lesson and I graciously accepted
              without skipping a beat. As if that was what I wanted!! That's not
              how it should be!! For so long, I sought the height of perfection.
              I dreamed of giving my heart and soul to battle an unstoppable
              adversary!! I'm a lucky man. I'm thankful for everything that led
              me to this point... that led me to you!!"
            </p>
            <p className="text-center" style={{ fontFamily: "Fonstars" }}>
              — Isaac netero vs KING
            </p>
          </div>
          <div>
            <p className="text-white mb-7 lg:text-[.8rem] font-bold">
              <span className="font-bold"> Isaac Netero(アイザック゠ネテロ, Aizakku Netero)</span> was the 12th Chairman of the
              Hunter Association[6] and the Head of the Exam Commission.[7] In
              his youth, he was extolled as the most powerful Nen user in the
              world, and retained dreadful strength even in his old age.
            </p>
          </div>
          <div className=" text-white flex sm:h-[400px]">
            <table class="table-auto lg:m-7 w-full">
              <thead className="bg-black">
                <tr className="py-5 ">
                  <th
                    className="py-2 lg:text-center lg:justify-center lg:items-center lg:text-[2rem]"
                    style={{ fontFamily: "Fonstars" }}
                  >
                    Isaac netero
                  </th>
                  <th className="py-2 text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-[#5f5f5f] lg:text-[.8rem]">
                <tr className="border-black border-b-2 ">
                  <td className="font-bold py-3 pl-2">Kana</td>
                  <td className="py-3 pl-2">アイザック゠ネテロ</td>
                </tr>
                <tr>
                  <td className="font-bold py-3 pl-2">Rōmaji</td>
                  <td className="py-3 pl-2">Aizakku Netero</td>
                </tr>
              </tbody>
              <thead className="bg-black">
                <tr className="py-7 ">
                  <th
                    className="py-3 text-center justify-center items-center lg:text-[2rem]"
                    style={{ fontFamily: "Fonstars" }}
                  >
                    Characteristics
                  </th>
                  <th className="py-3 text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-[#5f5f5f] lg:text-[.8rem]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Gender</td>
                  <td className="py-3 pl-2 flex">
                    <BsGenderMale style={{ color: "blue" }} /> Male
                  </td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Age</td>
                  <td className="py-3 pl-2">110-120+</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Eye Color</td>
                  <td className="py-3 pl-2">Gray (1999) Brown (2011)</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">State</td>
                  <td className="py-3 pl-2">Deceased</td>
                </tr>
              </tbody>
              <thead className="bg-black">
                <tr className="">
                  <th
                    className="py-3 lg:text-[2rem]"
                    style={{ fontFamily: "Fonstars" }}
                  >
                    Nen
                  </th>
                  <th className="py-3 text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-[#5f5f5f] lg:text-[.8rem]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Type</td>
                  <td className="py-3 pl-2 flex">Enhancement</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Abilities</td>
                  <td className="py-3 pl-2">
                    100-Type Guanyin Bodhisattva First Hand,
                    <br />
                    Third Hand, Ninety-Ninth Hand, Zero Hand
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 text-center items-center flex justify-center h-[1240px] lg:bg-gradient-to-br sm:bg-transparent from-black "></div>
      </div>
      <div
        className=" w-full lg:h-[1000px]  bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${require(`../../Assets/netero5.jpg`)})`,
        }}
      >
        <div className="py-5 lg:px-10 flex justify-center items-center text-white">
          <table class="table-auto">
            <thead className="bg-black text-white">
              <tr className=" ">
                <th
                  className="py-2 text-center justify-center items-center lg:text-[2rem]"
                  style={{ fontFamily: "Fonstars" }}
                >
                  Personality
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#5f5f5f]">
              <tr className="border-black border-b-2">
                <td className="font-bold py-3 pl-2">
                  <img
                    className="lg:w-[50rem] lg:h-[20rem] rdm:h-[10rem] rdm:w-[50rem]"
                    src={netero2}
                    alt=""
                  />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Netero was energetic, playful to the point of being
                  mischievous, and, sssat times, seemingly absentminded.
                  Although he was capable of acting professionally when called
                  to intervene as Chairman of the Hunter Association, on all
                  other occasions, he proved himself to be so extravagant he was
                  sometimes called insane. There were clear discrepancies
                  between his words and his thoughts during the 287th Hunter
                  Exam. However, he was a true martial artist who was nothing
                  but earnest during fights. He enjoyed challenges, and was
                  thrilled by the prospect of a formidable enemy.[9] This
                  strange passion affected the way in which he governed the
                  Hunter Association, frequently testing the physical limits of
                  those attempting to become Hunters. Biscuit Krueger even
                  called Netero a "twisted individual", as he often enjoyed
                  giving Hunters he trusted impossible assignments, sometimes
                  with deadlines of only a few months, that should take years to
                  complete.[10] He himself liked challenges, to the point of
                  wanting his Vice-Chairman to be someone he just could not get
                  along with.[11] He apparently made a name for himself as a
                  lustful man in the Hunter Association, since many Hunters left
                  risqué magazines under his effigy as a tribute.[6]
                  Additionally, he gave a quick glance at Menchi's cleavage
                  during the 287th Hunter Exam. <br /> <br /> Netero had
                  dedicated his life to the martial arts and prayer, intended as
                  a form of appreciation. He displayed a great deal of pride in
                  his own abilities and had no respect for the weak. However, he
                  was not arrogant, as he presented the possibility of Gon
                  threatening him without saying the boy would stand no chance
                  against him. His goal in life was to find a worthy adversary
                  against whom he could fight with his all. His strength of mind
                  and selflessness were beyond unwavering, and he did not
                  hesitate to end his own life in a last attempt to kill Meruem.{" "}
                  <br /> <br /> Despite his tendency to act as he pleased,
                  Netero was not amoral. He banned expeditions to the Dark
                  Continent as a response to cases of Hunters trying to imitate
                  him and ultimately dying in the process,[12] and in spite of
                  his fondness for challenges, he preferred to avoid fighting
                  both Neferpitou[8] and Meruem,[13][note 2] hoping to end the
                  conflict with the fewest casualties. Nonetheless, in certain
                  occasions he prioritized results over sacrifices, as shown
                  when he was willing to let as many as five million people die
                  if that ensured the end of the Chimera Ant kingdom and saving
                  humanity as a whole.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Netero_info;
