import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import killua from "../../Assets/killua.png";
import { BsGenderMale } from "react-icons/bs";
import gon from "../../Assets/gonInfo3.png";
import kurapika1 from "../../Assets/kurapika_info3.jpg";

const Kurapika_info = () => {
  const handleScroll = () => {
    const element = document.getElementById("section2");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      name="home"
      className="w-full h-[550px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black"
      style={{
        backgroundImage: `url(${require(`../../Assets/kurapika_info.jpg`)})`,
      }}
    >
      {/* Container */}
      <div
        className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b  from-black"
        style={{ fontFamily: "Fonstars" }}
      >
        <p className="text-white text-[1.5rem]"></p>
        <h1 className="text-4xl sm:text-7xl font-extrabold text-[#f8faff]">
          Kurapika
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]"></h2>
        <p className="text-[#b7c0db] py-4 max-w-[700px] text-center">
          "I do not fear death. What I fear is that my rage will one day fade
          away."
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
        className="grid lg:grid-cols-2 h-[1240px] w-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${require(`../../Assets/kurapika_info2.jpg`)})`,
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
            Kurapika
          </h1>
          <div className="bg-black rounded text-white mb-5">
            <p className="font-bold text-center lg:text-[1rem]">
              "I do not fear death. What I fear is that my rage will one day
              fade away."
            </p>
            <p className="text-center" style={{ fontFamily: "Fonstars" }}>
              — kurapika
            </p>
          </div>
          <div>
            <p className="text-white mb-7">
              <span className="font-bold"> Kurapika (クラピカ, Kurapika) </span>
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
                    Kurapika
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
                  <td className="py-3 pl-2">Kurapika</td>
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
          backgroundImage: `url(${require(`../../Assets/kurapika_info2.jpg`)})`,
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
                <td className="font-bold py-3 pl-2">
                  <img className="w-[50rem] lg:h-[20rem] rdm:h-[10rem]" src={kurapika1} alt="" />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Kurapika is a cool and intelligent individual, possessing vast
                  knowledge. He is reticent; not one to open up to people easily
                  and quite judgmental. His distance from others initially keeps
                  him level-headed and moralistic, but his heart has been
                  poisoned with sadness and hatred. Having been traumatized from
                  losing everyone he loved at the age of twelve, Kurapika closes
                  his heart to new people and remains introverted as to stay
                  focused on his goal. However, Kurapika can be kind and
                  affectionate, smiling when those friends are happy. Though
                  Kurapika outwardly states that he desires to become a
                  Blacklist Hunter and his ultimate goal is to capture the band
                  of thieves that massacred his family, he is willing to
                  compromise his personal morality and delve into the squalid
                  side of society in order to achieve his goal. He is prone to
                  fits of uncontrollable anger should the memory of his clan be
                  insulted in any way.<br /> <br /> After becoming a professional Hunter,
                  Kurapika starts upon a self-destructive path. His anger leads
                  him to commit villainous acts of wrath as catharsis for his
                  pain. Kurapika's reserved demeanor makes him very ruthless and
                  unreasonable at times, but his friends are the only ones able
                  to slightly settle his seething enough for him to think
                  rationally. He slowly transitioned from considering his
                  friendships to be a weakness hindering him from succeeding in
                  his aims to appreciating their value, and he was willing to
                  put his revenge on the Phantom Troupe on hold for his friends'
                  well-being. He even questioned the legitimacy of his quest
                  after experiencing the deep ties that bind the Spiders
                  together, particularly Pakunoda's loyalty, although it
                  ultimately did not deter him.<br /> <br /> Although he made himself
                  unavailable for a period, the people dear to him became part
                  of his drives, leading him to search for more power in order
                  not to lose anyone else. Upon nearly completing his goal of
                  retrieving the eyes of his brethren, he began to feel a deep
                  sense of loss, believing to have no one and nowhere to return
                  to. <br /> <br /> As a child, his personality was more akin to Gon's where
                  he sought out adventure and had an impulsive nature. Kurapika
                  was still protective of his friends, however, going as far as
                  to beat a man for his derogatory comments against one.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Kurapika_info;
