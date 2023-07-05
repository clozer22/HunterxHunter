import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import killua from "../../Assets/killua.png";
import { BsGenderMale } from "react-icons/bs";
import gon from '../../Assets/gonInfo3.png'

const Killua_info = () => {
  const handleScroll = () => {
    const element = document.getElementById("section2");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      name="home"
      className="w-full h-[550px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black"
      style={{
        backgroundImage: `url(${require(`../../Assets/gonInfo.jpg`)})`,
      }}
    >
      {/* Container */}
      <div
        className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b  from-black"
        style={{ fontFamily: "Fonstars" }}
      >
        <p className="text-white text-[1.5rem]"></p>
        <h1 className="text-4xl sm:text-7xl font-extrabold text-[#f8faff]">
          Gon freecss
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]"></h2>
        <p className="text-[#b7c0db] py-4 max-w-[700px] text-center">
          "I can't stand being on the losing end forever!!
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
          className="text-[4rem] font-extrabold"
          style={{ fontFamily: "Fonstars" }}
        >
          Info
        </h1>
      </div>
      <div
        className="grid lg:grid-cols-2 h-[1240px] w-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${require(`../../Assets/gonInfo2.jpg`)})`,
        }}
      >
        <div id="section2" className="col-span-1 items-center ml-7">
          <h1
            className="font-bold text-[5rem] text-white text-center"
            style={{ fontFamily: "Fonstars" }}
          >
            gon freecss
          </h1>
          <div className="bg-black rounded text-white mb-5">
            <p className="font-bold text-center text-[1.5rem]">
              "I can't stand being on the losing end forever!!
            </p>
            <p className="text-center" style={{ fontFamily: "Fonstars" }}>
              — Gon freecss
            </p>
          </div>
          <div>
            <p className="text-white mb-7">
              <span className="font-bold">Gon Freecss</span>
              (ゴン゠フリークス, Gon Furīkusu) is a Rookie Hunter and the son of
              Ging Freecss. Finding his father is Gon's motivation in becoming a
              Hunter.[4] He has been the main protagonist for most of the
              series, having said role in the Hunter Exam, Zoldyck Family,
              Heavens Arena, Greed Island, and Chimera Ant arcs. He was also the
              deuteragonist of the Yorknew City arc.
            </p>
          </div>
          <div className=" text-white flex">
            <table class="table-auto m-7 w-full">
              <thead className="bg-black">
                <tr className="py-5 ">
                  <th
                    className="py-2 text-center justify-center items-center text-[2rem]"
                    style={{ fontFamily: "Fonstars" }}
                  >
                    gon freecss
                  </th>
                  <th className="py-2 text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-[#5f5f5f]">
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Kana</td>
                  <td className="py-3 pl-2">ゴン゠フリークス</td>
                </tr>
                <tr>
                  <td className="font-bold py-3 pl-2">Rōmaji</td>
                  <td className="py-3 pl-2">Gon Furīkusu</td>
                </tr>
              </tbody>
              <thead className="bg-black">
                <tr className="py-7 ">
                  <th
                    className="py-3 text-center justify-center items-center text-[2rem]"
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
                    11 (Debut) 12+[note 1][1][2] (Current, contradicts the
                    Timeline) 13-14*[3] (by the Timeline)
                  </td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Height</td>
                  <td className="py-3 pl-2">154 cm</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Weight</td>
                  <td className="py-3 pl-2">49 kg</td>
                </tr>
              </tbody>
              <thead className="bg-black">
                <tr className="">
                  <th
                    className="py-3 text-[2rem]"
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
                  <td className="py-3 pl-2 flex">Enhancement</td>
                </tr>
                <tr className="border-black border-b-2">
                  <td className="font-bold py-3 pl-2">Abilities</td>
                  <td className="py-3 pl-2">
                    <span className="font-bold">Jajanken:</span> Rock, Paper,
                    Scissors
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 text-center items-center"></div>
      </div>
      <div
        className=" w-full h-screen bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${require(`../../Assets/gonInfo2.jpg`)})`,
        }}
      >
        <div className="py-5 flex justify-center items-center text-white">
          <table class="table-auto w-[100rem]">
            <thead className="bg-black text-white">
              <tr className=" ">
                <th
                  className="py-2 text-center justify-center items-center text-[2rem]"
                  style={{ fontFamily: "Fonstars" }}
                >
                  Personality
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-[#5f5f5f]">
              <tr className="border-black border-b-2">
                <td className="font-bold py-3 pl-2"><img className="w-[50rem] h-[20rem]" src={gon} alt="" /></td>
                <td className="py-3 pl-2 text-[1.2rem] font-bold">
                  Gon is an athletic, rustic, and friendly boy who is searching
                  for adventure. Also, he is not very good at math. However,
                  having spent a lot of time in the woods as a child, he is very
                  good with animals. Gon is an Enhancer, who are known for being
                  simple-minded and determined. This determination and talent
                  lead to both potential allies and potential enemies trusting
                  in him and taking his side. He has inhuman senses; Gon has a
                  heightened sense of smell almost like a dog's, he also has
                  very good vision, as well as having a very keen taste. Gon
                  wants to become a Hunter because he wishes to find out the
                  depths of an occupation that would cause a father to choose
                  the profession over being with his own son. <br /> <br /> Simultaneously,
                  his flaws lie in his temper and impulsive nature. Gon
                  sometimes fails to think things through and such actions lead
                  to him suffering. Though possessing talent far beyond the norm
                  for his age, anytime his abilities are challenged, he feels as
                  if he has to prove his antagonist wrong.  <br /> <br />  He continually
                  strives to obtain greater power, often becoming exceptionally
                  stronger in his anger. But Gon's anger also leads to some
                  extremely reckless tendencies. When his emotions are ignited,
                  Gon becomes irrational and completely oblivious to anything
                  else. While his will is stronger than most and he can be very
                  level-headed, this clear mind can also make him very cold at
                  times. When Gon is cool-headed, it is shown that he can think
                  very creatively and thoughtfully to solve a problem. The prime
                  example is in the third stage of the Hunter Exam in which he
                  can think clearly enough under heavy stress to find the way to
                  get through the locked door to the finish line with all his
                  companions by breaking the wall to lead to the finish line in
                  time, which is the feat not even level-headed people like
                  Kurapika or Killua can think of.  <br /> <br />  Often it is difficult for
                  others to understand or relate Gon's actions or thoughts to
                  what people would consider "normal" thinking, with some
                  believing him to be a little insane. Zepile remarked on how
                  Gon "doesn't care about the good or the bad" when he is
                  curious or amazed.[5] His morality is complex, almost
                  juridical: Gon values life and ethics, but he can dissociate
                  his personal feelings from them. He thanked Binolt, a serial
                  killer, after he helped him get stronger,[6] and, in spite of
                  being aware of how dangerous he is, Gon admires Hisoka for his
                  might. Despite wanting to put a stop to the actions of the
                  Phantom Troupe, Gon never hated them until he discovered they
                  were capable of feeling emotion and empathy.[7] He never
                  judged Killua for his past as an assassin, but he snapped at
                  Illumi when he started to suspect that, rather than Killua
                  killing because he was not taught to value life, his family
                  was forcing him to do so regardless of how he felt about
                  it.[8] Notably, however, he did not even think about warning
                  Agon when the latter was about to cross paths with Hisoka,
                  despite knowing fully well that the encounter would inevitably
                  result in the man's death, all for the sake of obtaining the
                  magician's tag.
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
