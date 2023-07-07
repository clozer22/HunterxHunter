import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import killua from "../../Assets/killua.png";
import { BsGenderMale } from "react-icons/bs";
import gon from "../../Assets/gonInfo3.png";
import kurapika1 from "../../Assets/kurapika_info3.jpg";
import leorio from "../../Assets/leorio_info2.png";

const Leorio_info = () => {
  const handleScroll = () => {
    const element = document.getElementById("section2");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      name="home"
      className="w-full h-[550px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black"
      style={{
        backgroundImage: `url(${require(`../../Assets/leorio_info.png`)})`,
      }}
    >
      {/* Container */}
      <div
        className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b  from-black"
        style={{ fontFamily: "Fonstars" }}
      >
        <p className="text-white text-[1.5rem]"></p>
        <h1 className="lg:text-4xl sm:text-7xl rdm:text-[2rem] rdm:text-center font-extrabold text-[#f8faff]">
          Leorio Paradinight
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]"></h2>
        <p className="text-[#b7c0db] py-4 max-w-[700px] lg:text-[1rem] text-center rdm:text-[.7rem]">
          "I'm a simple guy. Figured I'd become a doctor... so I could cure some
          kid with the same disease, tell his parents they owed me nothing!
          Me... A doctor! Now there's a joke!! Do you know how much it costs to
          even try to become a doctor? The mind boggles!! It's always about
          money! Always!! That's why I want it!"
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
        className="grid lg:grid-cols-2 lg:h-[1240px] rdm:h-[1300px] w-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${require(`../../Assets/leorio_info.png`)})`,
        }}
      >
        <div
          id="section2"
          className="col-span-1 items-center lg:pl-5 lg:bg-gradient-to-bl to-black"
        >
          <h1
            className="font-bold lg:text-[3rem] rdm:text-[2rem] rdm:mt-5 text-white text-center"
            style={{ fontFamily: "Fonstars" }}
          >
            Leorio
          </h1>
          <div className="bg-black rounded text-white mb-5">
            <p className="font-bold text-center lg:text-[1rem]">
              "I do not fear death. What I fear is that my rage will one day
              fade away."
            </p>
            <p className="text-center" style={{ fontFamily: "Fonstars" }}>
              — Leorio Paradinight
            </p>
          </div>
          <div>
            <p className="text-white mb-7">
              <span className="font-bold">
                {" "}
                Leorio Paradinight (クラピカ, Kurapika){" "}
              </span>
              is the last survivor of the Kurta Clan. He is a Blacklist Hunter
              and current leader of the organization founded by Light Nostrade.
              He is a member of the Zodiacs with the codename "Rat" (子ね, Ne).
              His goal is to avenge his clan and recover the remaining Scarlet
              Eyes. He takes the role of the main protagonist in the Yorknew
              City and Succession Contest arcs. He was also the deuteragonist of
              the Hunter Exam arc.
            </p>
          </div>
          <div className=" text-white flex">
            <table class="table-auto lg:m-7 w-full">
              <thead className="bg-black">
                <tr className="py-5 ">
                  <th
                    className="py-2 text-center justify-center items-center lg:text-[2rem]"
                    style={{ fontFamily: "Fonstars" }}
                  >
                    Leorio
                  </th>
                  <th className="py-2 text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-[#5f5f5f]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Kana</td>
                  <td className="py-3 pl-2">クラピカ</td>
                </tr>
                <tr>
                  <td className="font-bold py-3 pl-2">Rōmaji</td>
                  <td className="py-3 pl-2">Leorio Paradinight</td>
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
              <tbody className="bg-[#5f5f5f]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Gender</td>
                  <td className="py-3 pl-2 flex">
                    <BsGenderMale style={{ color: "blue" }} /> Male
                  </td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Age</td>
                  <td className="py-3 pl-2">
                    12[inference 🖱] (Volume 0) 17*[2] (Heavens Arena arc) 19
                  </td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Height</td>
                  <td className="py-3 pl-2">171 cm</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Weight</td>
                  <td className="py-3 pl-2">59 kg</td>
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
              <tbody className="bg-[#5f5f5f]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Type</td>
                  <td className="py-3 pl-2 flex">
                    Conjuration, Specialization (When eyes are scarlet)
                  </td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Abilities</td>
                  <td className="py-3 pl-2">
                    Holy Chain Steal Chain Little Eye (Stolen; Former) Air Blow
                    (Stolen; Former) Erigeron ("Stolen"; Former) Chain Jail
                    Dowsing Chain Judgment Chain Emperor Time Stealth Dolphin
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 text-center items-center lg:bg-gradient-to-br to-black"></div>
      </div>
      <div
        className=" w-full bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${require(`../../Assets/leorio_info.png`)})`,
        }}
      >
        <div className="py-5  lg:px-10 flex justify-center items-center text-white">
          <table class="table-auto w-[100rem]">
            <thead className="bg-black text-white">
              <tr className=" ">
                <th
                  className="py-2  text-center justify-center items-center lg:text-[2rem]"
                  style={{ fontFamily: "Fonstars" }}
                >
                  Personality
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#5f5f5f]">
              <tr className="border-black border-b-2">
                <td className="font-bold py-3 pl-2 flex flex-col">
                  <img
                    className="w-[50rem] lg:h-[20rem] rdm:h-[9rem]"
                    src={leorio}
                    alt=""
                  />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Leorio is initially introduced as a very selfish narcissist
                  who places great emphasis on material wealth. Despite his
                  assertions that he is only after money, he eventually reveals
                  to Kurapika that his dream is to one day become a doctor in
                  order to help the poor. He believes that all things in the
                  world (lives, dreams, etc.) can be bought and that becoming a
                  Hunter will provide him with the necessary funds for his
                  medical education. Due to his first spat with Kurapika, as
                  well as the test on the way to the navigator's cabin, it seems
                  that he has a sensitivity for those who do not take him
                  seriously or treat him with disrespect. His real priorities
                  seem to be friends first, then his dream of becoming a great
                  doctor, with everything else afterward.
                  <br /> <br />
                  Leorio is not one to balk and retreat when faced with
                  overwhelming odds in battle. A loyal, trustworthy ally who
                  greatly values the ties of friendship, he acts like the 'big
                  brother' of the group. He often provides comic relief; Killua
                  sometimes ridicules him for his comparatively older age,
                  although he swears that his appearance is that of a mere
                  teenager. His impulsive and brash nature has sometimes caused
                  more trouble for the people around him. Another flair he has
                  is his ability to 'straight-talk' through many situations at
                  hand. It could be seen that his closest relationship in the
                  group is with Kurapika because they have spent the most time
                  with each other.
                  <br /> <br /> Although he made himself unavailable for a
                  period, the peopAt the tail end of the Yorknew City arc,
                  Melody claims that he has "the nicest heartbeat in the city",
                  stating that "it's warm and gentle" and that he would make for
                  a better doctor than a Hunter.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leorio_info;
