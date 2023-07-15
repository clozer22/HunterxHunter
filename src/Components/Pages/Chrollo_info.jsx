import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import killua from "../../Assets/killua.png";
import { BsGenderMale } from "react-icons/bs";
import chrollo from "../../Assets/chrolloInfo.jpg";
import chrollo2 from "../../Assets/chrolloinfo4.png";

const Chrollo_info = () => {
  const handleScroll = () => {
    const element = document.getElementById("section2");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      name="home"
      className="w-full h-[550px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center"
      style={{
        backgroundImage: `url(${require(`../../Assets/chrolloInfo3.jpg`)})`,
      }}
    >
      {/* Container */}
      <div
        className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-br from-black "
        style={{ fontFamily: "Fonstars" }}
      >
        <p className="text-white text-[1.5rem]"></p>
        <h1 className="text-4xl sm:text-7xl font-extrabold text-[#f8faff]">
          CHrollo lucilfer
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]"></h2>
        <p className="text-[#b7c0db] py-4 max-w-[700px] text-center">
          "Making the ability yours while exploring the darkness within the soul
          of the original owner... that's the true pleasure of a skill hunter."
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
          className="lg:text-[4rem] rdm:text-[2.5rem] font-extrabold"
          style={{ fontFamily: "Fonstars" }}
        >
          Info
        </h1>
      </div>
      <div
        className="grid lg:grid-cols-2 h-[1240px] w-full bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${require(`../../Assets/chrolloInfo2.jpg`)})`,
        }}
      >
        <div
          id="section2"
          className="col-span-1 items-center lg:px-7 lg:bg-gradient-to-br from-black"
        >
          <h1
            className="font-bold lg:text-[3.5rem] rdm:text-[2.5rem] rdm:mt-5 text-white text-center"
            style={{ fontFamily: "Fonstars" }}
          >
            Chrollo lucilfer
          </h1>
          <div className="bg-black rounded text-white mb-5">
            <p className="font-bold text-center text-[1.5rem]">
              "Making the ability yours while exploring the darkness within the
              soul of the original owner... that's the true pleasure of a skill
              hunter."
            </p>
            <p className="text-center" style={{ fontFamily: "Fonstars" }}>
              — Chrollo lucilfer
            </p>
          </div>
          <div>
            <p className="text-white mb-7">
              <span className="font-bold">
                Chrollo Lucilfer (クロロ゠ルシルフル, Kuroro Rushirufuru)
              </span>
              is the founder, leader, and member #0 of the Phantom Troupe.[4]
              His physical strength ranked seventh among the group.
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
                    Chrollo lucilfer
                  </th>
                  <th className="py-2 text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-[#5f5f5f]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Kana</td>
                  <td className="py-3 pl-2">クロロ゠ルシルフル</td>
                </tr>
                <tr>
                  <td className="font-bold py-3 pl-2">Rōmaji</td>
                  <td className="py-3 pl-2">JKuroro Rushirufuru</td>
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
                  <td className="py-3 pl-2">26 (Debut) 28 (Current)</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Height</td>
                  <td className="py-3 pl-2">177 cm</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Weight</td>
                  <td className="py-3 pl-2">68 kg</td>
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
                  <td className="py-3 pl-2 flex">Specialization</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Abilities</td>
                  <td className="py-3 pl-2">
                    Skill Hunter Indoor Fish (Stolen), Fun Fun Cloth (Stolen),
                    Teleportation (Stolen), Black Voice ("Stolen"), The Sun and
                    Moon (Stolen), Order Stamp (Stolen), Gallery Fake
                    ("Stolen"), Convert Hands (Stolen), Lovely Ghostwriter
                    (Stolen; Former), Double Face
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 text-center items-center lg:bg-gradient-to-bl from-black"></div>
      </div>
      <div
        className=" w-full h-[1300px] bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${require(`../../Assets/spider.jpg`)})`,
        }}
      >
        <div className="py-5 lg:px-10 flex justify-center items-center text-white">
          <table class="table-auto w-[100rem]">
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
                <td className="font-bold py-3 pl-2 flex flex-col">
                  <img
                    className="w-[50rem] lg:h-[20rem] rdm:h-[9rem]"
                    src={chrollo}
                    alt=""
                  />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Chrollo is calm, intelligent, and charismatic, as he seems to
                  be a born leader and able to hold the Troupe together despite
                  the volatile personalities of its members. While he is a very
                  capable strategist, Chrollo is also very confident in his own
                  fighting abilities as well as in those of the other members of
                  the Spider. He always has at least two people with him, which
                  is why Hisoka found it so difficult to fight him.[8] After he
                  has admired the items that he targeted and acquired, Chrollo
                  sells them all.[9] It is also stated that Chrollo likes
                  antique books.
                  <br /> <br />
                  Unflinching and unshakable, he is also an observer of human
                  nature. Gon's hostility toward the Troupe led Chrollo to
                  reflect upon the nature of himself and his actions.[10]
                  Additionally, when fighting Hisoka, who refused to back down
                  even after seeing the extent of his abilities, Chrollo
                  expressed a fascination for the inner workings of human
                  beings. However, by his own claim, he sees no difference
                  between a puppet and a person.
                  <br /> <br /> Chrollo shows no fear of his own death, even
                  anticipating it. Melody stated that his heartbeat sounded as
                  if he was happy living alongside death. To Chrollo, the Troupe
                  is more important than his own life.[12] He once stated that
                  the survival of the group comes before the well-being of the
                  leader, stressing that the head of the Spider is just another
                  limb that can be sacrificed for the survival of the whole.[13]
                  In order to prevent their negative fortunes from coming true,
                  Chrollo ordered the Troupe members to stay close and to assist
                  one another.[10] The only people Chrollo seems to care about
                  are his fellow Troupe members. When he reads his fortune
                  written by Neon which alludes to Uvogin's death, he cries for
                  him. Later on, he orchestrates a massacre of Mafia members as
                  a requiem to his fallen comrade.[14][15] After the deaths of
                  Kortopi and Shalnark at the hands of Hisoka, Chrollo appears
                  visibly distraught[16] and furious,[17] vowing to kill him as
                  soon as he sees him
                </td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold py-3 pl-2 flex flex-col">
                  <img
                    className="w-[50rem] lg:h-[20rem] rdm:h-[9rem]"
                    src={chrollo2}
                    alt=""
                  />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Like the other Troupe members, Chrollo is cold-blooded and not
                  above inhuman mass murder, most notably when they brutally
                  massacred the Kurta Clan. In addition, his use of Indoor Fish
                  on an assassin reflects his apathetic nature towards his
                  enemies. There is also an implied hostility between Chrollo
                  and Silva Zoldyck, most likely stemming from their previous
                  encounter after Silva's killing of a Troupe member.
                  <br /> <br />
                  Chrollo is a skilled actor and quite manipulative, as shown
                  when he met Neon Nostrade and "befriended" her to steal her
                  fortune-telling ability. During that time, he presented
                  himself as an amiable and helpful man, always enthusiastic and
                  smiling, who also displayed curiosity. However, Chrollo only
                  intended to learn about Neon's ability to fulfill one of the
                  conditions needed to steal it.
                  <br /> <br /> Chrollo is shown to have been emotional, caring,
                  and bright as a child. He also always brought fresh flowers
                  for the graves of children in church. Father Lisores comments
                  to a Meteor City elder that he sees much promise in Chrollo
                  because of his spirit and original ideas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chrollo_info;
