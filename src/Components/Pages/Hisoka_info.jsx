import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import killua from "../../Assets/killua.png";
import { BsGenderMale } from "react-icons/bs";
import gon from "../../Assets/gonInfo3.png";
import kurapika1 from "../../Assets/kurapika_info3.jpg";
import hisoka from "../../Assets/hisoka_info.jpg";
import hisoka3 from "../../Assets/hisoka_info3.png";
import hisoka4 from "../../Assets/hisoka_info4.png";

export const Hisoka_info = () => {
  const handleScroll = () => {
    const element = document.getElementById("section2");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      name="home"
      className="w-full h-[550px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black"
      style={{
        backgroundImage: `url(${require(`../../Assets/hisoka_info.jpg`)})`,
      }}
    >
      {/* Container */}
      <div
        className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b  from-black"
        style={{ fontFamily: "Fonstars" }}
      >
        <p className="text-white text-[1.5rem]"></p>
        <h1 className="text-4xl sm:text-7xl font-extrabold text-[#f8faff]">
          Hisoka Morow
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]"></h2>
        <p className="text-[#b7c0db] py-4 max-w-[700px] text-center">
          "My greatest pleasure comes when such people crumple to their knees
          and I look down upon their disbelieving faces as their plans fail.{" "}
          <span className="text-[2rem]">♥</span>"
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
          backgroundImage: `url(${require(`../../Assets/hisoka_info2.jpg`)})`,
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
            Hisoka Morow
          </h1>
          <div className="bg-black rounded text-white mb-5">
            <p className="font-bold text-center lg:text-[1rem]">
              "My greatest pleasure comes when such people crumple to their
              knees and I look down upon their disbelieving faces as their plans
              fail. <span className="text-[2rem]">♥</span>"
            </p>
            <p className="text-center" style={{ fontFamily: "Fonstars" }}>
              — hisoka morow
            </p>
          </div>
          <div>
            <p className="text-white mb-7">
              <span className="font-bold">
                Hisoka Morow (ヒソカ゠モロウ, Hisoka Morou){" "}
              </span>
              is a Hunter and former member #4 of the Phantom Troupe; his
              physical strength ranked third in the group. He is always in
              search for strong opponents, and would spare those who have great
              potential, such as Gon and Killua in order for them to get strong
              enough to actually challenge him. He originally served as the
              primary antagonist of the Hunter Exam arc and the Heavens Arena
              arc, before becoming a supporting character during the Yorknew
              City arc and Greed Island arc. During the 13th Hunter Chairman
              Election arc, he reprises his role as a secondary antagonist.
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
                    Hisoka morow
                  </th>
                  <th className="py-2 text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-[#5f5f5f]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Kana</td>
                  <td className="py-3 pl-2">ヒソカ゠モロウ</td>
                </tr>
                <tr>
                  <td className="font-bold py-3 pl-2">Rōmaji</td>
                  <td className="py-3 pl-2">Hisoka Morou</td>
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
                  <td className="py-3 pl-2">Unknown</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Height</td>
                  <td className="py-3 pl-2">187 cm </td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Weight</td>
                  <td className="py-3 pl-2">91 kg</td>
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
                  <td className="py-3 pl-2 flex">Transmutation</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Abilities</td>
                  <td className="py-3 pl-2">Bungee Gum, Texture Surprise</td>
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
          backgroundImage: `url(${require(`../../Assets/hisoka_info2.jpg`)})`,
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
                    src={hisoka}
                    alt=""
                  />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Hisoka is portrayed as entirely self-serving and
                  self-absorbed; he does whatever he likes as long as it pleases
                  him in some way. His insatiable love for spilling the blood of
                  powerful fighters in combat and his enjoyment of extreme pain
                  while doing so fuels his seemingly sadomasochistic desires. In
                  order for them to grow to their full potential (so as to
                  improve the pleasure of killing them later), Hisoka allows the
                  main protagonists to live in situations wherein he is easily
                  able to kill them. Likewise, he grows excited to meet new
                  people he deems worthy of fighting or anyone with the
                  potential to be a good fighter and entertain him in the
                  future. The thrill of fighting strong Nen users in tactical
                  battles and near-death experiences is an orgasmic experience
                  for him. It is likely one of the reasons why he goes out of
                  his way to find new toys to play with. If they break, he
                  either loses interest or kills them before going out to find
                  more potential prey. <br /> <br />
                  With his manipulative and self-centered nature, Hisoka is
                  essentially a murderous sociopath. While he does like Gon,
                  Killua, and many others, he has stated that for him, what is
                  valuable one day could easily become trash the next, and he
                  will not hesitate to kill anyone should they not meet his
                  standards. He does not care for what has happened in the past,
                  as he is only interested in what could be amusing to him in
                  the future or present. While Hisoka's nature tends to be
                  malevolent, he isn't an indiscriminate killer. He has no
                  problems killing anyone regardless of age or sex; however, he
                  only kills people who are in his way or those he deems
                  "worthy". As such, his character is more simply amoral than
                  flat out evil. He even assists the protagonists if there is
                  "fun" in doing so or if it will make them stronger leading to
                  a more entertaining fight in the future. Above all else,
                  Hisoka cares only about having fun and a good challenge which
                  may or may not involve killing people. He has a nasty habit of
                  skipping out on Spider meetings. He also can be a whimsical
                  liar and has a tendency to freak out or play cruel jokes on
                  his victims. Just witnessing their uncomfortable expressions
                  because of him getting under their skin pleases him. His
                  chaotic nature is inherent in everything he does and makes him
                  dangerously unpredictable.
                </td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold py-3 pl-2 flex flex-col">
                  <img
                    className="w-[50rem] lg:h-[20rem] rdm:h-[9rem]"
                    src={hisoka3}
                    alt=""
                  />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Hisoka has displayed a morbid attraction to fight powerful
                  fighters, or people with Nen who have the potential to become
                  strong, which is expressed through barely repressible
                  murderous tendencies; neither age nor gender do seem to
                  influence his desire to fight them. He has expressed a desire
                  to fight or kill random victims just to satiate his bloodlust.
                  After his defeat at the hands of Chrollo, Hisoka's sociopathic
                  nature has taken itself to worse heights by vowing to kill all
                  the members of the Phantom Troupe even if they were
                  defenseless and claiming he will no longer let his opponents
                  fight in their preferred conditions. However, he did
                  temporarily spare Machi, who has been an implied interest of
                  Hisoka's as a potential opponent he likes to flirt with or as
                  a romantic interest, although he stated it was so she could
                  warn the Troupe of his intentions. <br /> <br />
                  Hisoka often exhibits androgynous characteristics throughout
                  the series, manifested in his wearing of "women's" shoes and
                  using an alluring speech style typically reserved for females
                  in Japanese. In the manga, he ends nearly every sentence with
                  a suit symbol.
                </td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold py-3 pl-2 flex flex-col">
                  <img
                    className="w-[50rem] lg:h-[20rem] rdm:h-[9rem]"
                    src={hisoka4}
                    alt=""
                  />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Despite his calm and composed personality, he can express his
                  emotion comically in some situations. An example is when Gon
                  becomes honest and rather innocent about his question of why
                  Hisoka was in Greed Island. Another example is his stunned
                  face when he learns he could not fight Chrollo after
                  Kurapika's Judgment Chain.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
