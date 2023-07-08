import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import killua from "../../Assets/killua.png";
import { BsGenderMale } from "react-icons/bs";
import ging from "../../Assets/ging_info2.jpg";

const Ging_info = () => {
  const handleScroll = () => {
    const element = document.getElementById("section2");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      name="home"
      className="w-full h-[550px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black"
      style={{
        backgroundImage: `url(${require(`../../Assets/ging_info.jpg`)})`,
      }}
    >
      {/* Container */}
      <div
        className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b  from-black"
        style={{ fontFamily: "Fonstars" }}
      >
        <p className="text-white text-[1.5rem]"></p>
        <h1 className="text-4xl sm:text-7xl font-extrabold text-[#f8faff]">
          Ging freecss
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]"></h2>
        <p className="text-[#b7c0db] py-4 max-w-[700px] text-center">
          "I'm enjoying the journey. So if your destination is the same as mine,
          enjoy the side trips. A lot. Something more important than the thing
          you're hunting could be right there by the side of the road."
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
          backgroundImage: `url(${require(`../../Assets/zodiac.jpg`)})`,
        }}
      >
        <div
          id="section2"
          className="col-span-1 items-center lg:px-7 lg:bg-gradient-to-br from-black"
        >
          <h1
            className="font-bold lg:text-[4rem] rdm:text-[2.5rem] rdm:mt-5 text-white text-center"
            style={{ fontFamily: "Fonstars" }}
          >
            Ging freecss
          </h1>
          <div className="bg-black rounded text-white mb-5">
            <p className="font-bold text-center text-[1.5rem]">
              "I'm enjoying the journey. So if your destination is the same as
              mine, enjoy the side trips. A lot. Something more important than
              the thing you're hunting could be right there by the side of the
              road."
            </p>
            <p className="text-center" style={{ fontFamily: "Fonstars" }}>
              — Ging freecss
            </p>
          </div>
          <div>
            <p className="text-white mb-7">
              <span className="font-bold">
                Ging Freecss (ジン゠フリークス, Jin Furīkusu)
              </span>
              is the father of Gon Freecss. He is a Double-Star Ruins Hunter[2]
              (though he can apply for a Triple-Star License),[3] and a former
              Zodiac[4] with the codename "Boar" (亥い, I).[5] Finding Ging was
              Gon's motivation for becoming a Hunter.
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
                    ging freecss
                  </th>
                  <th className="py-2 text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-[#5f5f5f]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Kana</td>
                  <td className="py-3 pl-2">ジン゠フリークス</td>
                </tr>
                <tr>
                  <td className="font-bold py-3 pl-2">Rōmaji</td>
                  <td className="py-3 pl-2">Jin Furīkusu</td>
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
                  <td className="py-3 pl-2">31 (Debut) 34 (Current)</td>
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
                  <td className="py-3 pl-2 flex">Unknown</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Abilities</td>
                  <td className="py-3 pl-2">
                    Remote Punch, Ultrasound, Phasing Bullets
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 text-center items-center lg:bg-gradient-to-bl from-black"></div>
      </div>
      <div
        className=" w-full h-[1100px] bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${require(`../../Assets/gonInfo2.jpg`)})`,
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
                    src={ging}
                    alt=""
                  />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Ging has a shy and stubborn personality, to the point that he
                  only wants Gon to meet him alone and claims that it would be
                  cowardly of Gon to bring a friend to meet him, causing one of
                  his friends to wonder if he is afraid of crowds. Based on his
                  actions at the election to ensure that Netero's is carried
                  out, he seems to respect the late Chairman considerably. Ging
                  is also rather volatile, yet extremely intelligent. In spite
                  of his ability to make flawless plans years in advance, he
                  occasionally acts without knowing why, surprising even
                  himself.
                  <br /> <br /> According to his friends, Ging has a childlike
                  enthusiasm, going on about a game he created.[7] He is also
                  somewhat dismissive, having changed Dwun's name without his
                  consent and refusing to offer an explanation to Elena.[8]
                  Nonetheless, his charm would draw more colleagues later in his
                  life. Ging also admires people who rely on their own
                  capabilities to achieve their goals (as his challenges to Gon
                  and Kite prove) and show passion in what they do. In fact,
                  Ging is, above all, an enthusiastic Hunter. He is always after
                  something, no matter how impossible it seems, but aside from
                  the goal, it is the quest that he enjoys.
                  <br /> <br /> Due to his carefree and eccentric nature, most
                  people often consider Ging to be a bad father to Gon. This
                  might be due to his apparent lack of care when Gon was dying
                  and never visiting him in the hospital. His indifference to
                  his son's state caused the Hunters during the election to
                  insult and chastise him.[10] Despite all this, Ging cares
                  greatly for Gon in his own way; he sent Gon through onerous
                  tasks to strengthen himself rather than using parental
                  guidance. However, at the same time, it is also implied that
                  Ging cannot handle the responsibility as a hands-on father to
                  his son.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ging_info;
