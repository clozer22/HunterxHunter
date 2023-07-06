import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import killua from "../../Assets/killua.png";
import { BsGenderMale } from "react-icons/bs";
import killua2 from "../../Assets/killua_info2.png";
import killua3 from "../../Assets/killua_info3.png";
import killua4 from "../../Assets/killua_info4.png";
import killua5 from "../../Assets/killua_info5.png";

const Killua_info = () => {
  const handleScroll = () => {
    const element = document.getElementById("section2");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      name="home"
      className="w-full h-[500px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black"
      style={{
        backgroundImage: `url(${require(`../../Assets/KilluaInfo4.jpg`)})`,
      }}
    >
      {/* Container */}
      <div
        className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b  from-black"
        style={{ fontFamily: "Fonstars" }}
      >
        <p className="text-white lg:text-[1.5rem]"></p>
        <h1 className="lg:text-4xl sm:text-7xl rdm:text-[2rem] font-extrabold text-[#f8faff]">
          Killua Zoldyck
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]"></h2>
        <p className="text-[#b7c0db] py-4 max-w-[700px] text-center">
          "I'm so tired of killing... I just want to be a kid. Hanging out,
          doing stuff with Gon. That's it."
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
        className="grid lg:grid-cols-2 lg:h-[1240px] w-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${require(`../../Assets/KilluaInfo5.png`)})`,
        }}
      >
        <div id="section2" className="col-span-1 items-center lg:ml-7">
          <h1
            className="font-bold lg:text-[3rem] rdm:text-[2rem] rdm:mt-5 text-white text-center"
            style={{ fontFamily: "Fonstars" }}
          >
            Killua Zoldyck
          </h1>
          <div className="bg-black rounded text-white mb-5">
            <p className="font-bold text-center lg:text-[1rem]">
              "I'm so tired of killing... I just want to be a kid. Hanging out,
              doing stuff with Gon. That's it."
            </p>
            <p className="text-center" style={{ fontFamily: "Fonstars" }}>
              — Killua Zoldyck
            </p>
          </div>
          <div>
            <p className="text-white mb-7">
              <span className="font-bold">Killua Zoldyck</span>{" "}
              (キルア゠ゾルディック, Kirua Zorudikku) is the third child of
              Silva and Kikyo Zoldyck and the heir of the Zoldyck Family, until
              he runs away from home and becomes a Rookie Hunter. He is the best
              friend of Gon Freecss and is currently traveling with Alluka
              Zoldyck.
            </p>
            <p className="text-white mb-3">
              He has served as the deuteragonist for the series, having said
              role in the Heavens Arena, Greed Island, and Chimera Ant arcs. He
              was the main protagonist of the 13th Hunter Chairman Election arc.
              He also was the tritagonist of the Hunter Exam arc and the Yorknew
              City arc.
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
                    Killua Zoldyck
                  </th>
                  <th className="py-2 text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-[#5f5f5f]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Kana</td>
                  <td className="py-3 pl-2">キルア゠ゾルディック</td>
                </tr>
                <tr>
                  <td className="font-bold py-3 pl-2">Rōmaji</td>
                  <td className="py-3 pl-2">Kirua Zorudikku</td>
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
                    11 (Debut) 12*+[note 1][2] (Contradicts the Timeline) <br />{" "}
                    14* (by the Timeline)
                  </td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Height</td>
                  <td className="py-3 pl-2">158 cm</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Weight</td>
                  <td className="py-3 pl-2">45 kg</td>
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
                  <td className="py-3 pl-2">
                    Lightning Palm, Thunderbolt, Godspeed, <br /> Whirlwind
                    Speed of Lightning
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 text-center items-center"></div>
      </div>
      <div
        className=" w-full h-[2000px] bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${require(`../../Assets/KilluaInfo5.png`)})`,
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
              <tr className="">
                <td className="font-bold py-3 pl-2">
                  <img className="w-[50rem] h-[20rem]" src={killua2} alt="" />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Initially, Killua is introduced as a character who appears
                  similar to Gon: cheeky, cheerful, and full of mischievous
                  ideas. However, contrasting Gon's politeness, Killua can be
                  quite rude to others, mostly strangers and older people. He is
                  most commonly known for having a sweet tooth; he loves
                  everything sweet and spent almost Jenny Symbol 2011200 million
                  on snacks when he was at the Heavens Arena. His favorite snack
                  is chocolate, specifically Chocolate Balls and Chocolate
                  Robots. <br /> <br /> He is also one of the quickest-thinking
                  characters and often analyzes a situation with great ease and
                  accuracy. In spite of his young age, his way of thinking,
                  knowledge, and pragmatism give him the attitude of an adult.
                  He is initially very confident about his own abilities, going
                  as far as questioning Gon's capability during the Hunter Exam,
                  and compares his strength with other people. As time passed,
                  Killua became humble about it and no longer touts his own
                  abilities. Despite his advanced knowledge and level-headed
                  nature, he is not very open in general and will become very
                  embarrassed when Gon openly calls him his best friend or
                  compliments him about their bond. <br /> <br /> Despite his
                  horrendous upbringing and the torturous training his family
                  has put him under, Killua has managed to remain generally
                  positive and does not seem too psychologically affected by the
                  pain he's endured, demonstrating a noble, pure side of him.
                  When showcasing his abilities and turning his Nen into
                  electricity, both Netero and Biscuit have noted how truly
                  tragic his childhood must have been, with the former stating
                  that it's a miracle Killua is even able to smile at all.
                </td>
              </tr>
              <tr>
                <td className="font-bold py-3 pl-2">
                  <img className="lg:w-[50rem] h-[20rem]" src={killua3} alt="" />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  However, his ruthlessness and aptitude in killing show the
                  other side of him—deadly, violent, and bloodthirsty. This side
                  fades as he spends more time with Gon, although he is still
                  unafraid to threaten or kill anyone who attacks him or Gon.
                  Conflicting with Killua's predisposal to kill is his
                  unyielding loyalty to his friends and natural kindness. He
                  claims Gon was his first friend, and he grows progressively
                  more attached to him as time passes. Killua often suffers
                  immensely in his attempts to help his friends without a single
                  complaint. He puts others before himself without being
                  concerned about his own health or even his life.
                </td>
              </tr>
              <tr>
                <td className="font-bold py-3 pl-2">
                  <img className="w-[50rem] h-[20rem]" src={killua4} alt="" />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Until recently, Killua's greatest flaw was his fear of those
                  seemingly more powerful than him (one of whom being his elder
                  brother, Illumi). Killua had been trained as an assassin by
                  his brother to be extremely cautious and to only engage in
                  combat provided that victory is absolutely certain. This
                  impeded him as a Hunter, as Biscuit stated more than once that
                  victory is never certain, and that depending on the
                  circumstances, a person has the potential to defeat a stronger
                  opponent.[5] <br /> <br /> Killua especially struggles with
                  these dueling ideologies during the latter half of the series,
                  as he begins to encounter stronger opponents. His brother's
                  teachings remained firmly entrenched in his mind, to a point
                  at which Biscuit prophesied that he would one day abandon Gon
                  because of this. Finally, he had to face Biscuit's prophecy
                  when he encountered a Chimera Ant while Gon (who could not use
                  Nen at the time) was not far off and had no way to defend
                  himself. At the last moment, Killua realized that Illumi had
                  implanted a needle in his brain. This needle was responsible
                  for forcing Killua to retreat and jailing himself in his
                  comfort zone whenever any situation would potentially endanger
                  his life. Upon extracting the needle, Killua was freed from
                  this restraint and gained full control of his subconscious to
                  make his own decision whether or not to flee whenever there is
                  a need to fight stronger opponents.
                </td>
              </tr>
              <tr>
                <td className="font-bold py-3 pl-2">
                  <img className="w-[50rem] h-[20rem]" src={killua5} alt="" />
                </td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  During the events of Greed Island, Killua has shown to be
                  highly susceptible to gambling. Going as far as to be willing
                  to gamble with his life to get a big reward in the slot
                  machine and seem to show heavy gambling rush in his eyes
                  causing Biscuit to neck chop him to make him stop. <br /> <br /> A stark
                  contrast to his best friend Gon, Killua is highly mature in
                  both thinking and emotion in which he can keep his anger in
                  check and maintain rationality better than Gon even when
                  facing a terrifying experience like the death of Kite, while
                  Gon gives in to his rage and loses his logical thinking.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Killua_info;
