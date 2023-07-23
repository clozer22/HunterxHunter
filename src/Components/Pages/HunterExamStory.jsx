import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import "../../fonts/fonts.css";
import Fade from "react-reveal/Fade";
import fishing from "../../Assets/fishing.png";
import exam from "../../Assets/hunterExam.png";
import exam2 from "../../Assets/hunterExam2.png";

const HunterExamStory = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true); // Set loading state to true before loading the components

    // Simulate an asynchronous operation, e.g., fetching data
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after the components are loaded
    }, 2000); // Adjust the timeout duration as needed
  }, []);
  return (
    <div
      name="home"
      className="w-full h-[500px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black"
      style={{ backgroundImage: `url(${require(`../../Assets/hxhback.jpg`)})` }}
    >
      {/* Container */}
      <Fade top>
        <div
          className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b from-black"
          style={{ fontFamily: "Fonstars" }}
        >
          <p className="text-white text-[1.5rem]"></p>
          <h1 className="lg:text-[4.5rem] sm:text-[2.5rem] xsm:text-[1.5rem] rdm:text-[1.5rem] xsm:text-center font-extrabold text-[#f8faff] mb-5">
            <span className="text-white">Hunter</span>{" "}
            <span className="text-[#3cb62b]">x</span>{" "}
            <span className="text-[#F24B28]">Exam</span>{" "}
            <span className="text-[#3cb62b]">x</span>{" "}
            <span className="text-white">Arc</span>{" "}
          </h1>
          <p className="text-white py-4 max-w-[700px] lg:text-[1rem] xsm:px-6  xsm:text-[.7rem] text-center">
            The Hunter Exam arc (ハンター試し験けん編へん, Hantā Shiken-hen) is
            the first story arc of the series and follows Gon on his journey to
            become a Hunter and find his father. After becoming friends with
            Kurapika, Leorio, and Killua, Gon must endure the Hunter Exam's
            deadly phases to obtain an all-important Hunter License.
          </p>
        </div>
      </Fade>
      <div className=" text-center mt-11 mb-10 xsm:mt-5 xsm:mb-5 rdm:mt-3 rdm:mb-3 bg-black text-white">
        <h1
          className="lg:text-[4rem] xsm:text-[2rem] rdm:text-[2rem] font-extrabold"
          style={{ fontFamily: "Fonstars" }}
        >
          SUMMARY
        </h1>
      </div>
      <div className="w-full h-full px-10">
        <div className="bg-gray-800 w-full rounded-2xl px-8 grid lg:grid-rows-1">
          <p className="text-white font-bold mt-3">Pre-Hunter Exam</p>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img className="h-25" src={fishing} alt="" />
            <p className="text-white text-[1rem]">
              Gon is first seen at his home of Whale Island, fishing for the
              Master of the Swamp—a fish that five grown fishermen pulling
              together couldn't land. Gon made a wager with his aunt Mito that
              if he could catch the fish, she would allow him to take part in
              the Hunter Exam. After a week of work, Gon finally succeeds, and
              his aunt signs his application. Gon proceeds to go visit his
              friend, a grown-up Foxbear named Kon, who Gon had raised since he
              was a cub. Gon then remembers meeting Kite and learning that his
              father is still alive, giving him the inspiration to become a
              Hunter as well. He tells this to Kon and adds that since he may do
              things that animals of the forest won't like, Kon can't continue
              to be friends with a Hunter and also be king of the forest. Kon
              walks away from Gon to a gathering of other animals, and they all
              wave goodbye to him, with Gon happily running back home.[1]
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img className="h-25" src={exam} alt="" />
            <p className="text-white text-[1rem]">
              Gon returns home and speaks to his aunt. She asks if Gon always
              knew his father's trade, and also tells him his father left Gon
              with her when he was still a baby; Gon replies being a Hunter must
              be an important job that family comes only second and that it's
              time for him to meet his father. He is then seen preparing to
              board a ship heading for the Hunter Exam. Everyone in the town
              comes to say bye and wish him luck. Aunt Mito comes and tells him
              his father didn't abandon him; she made him give up Gon through
              the courts. Gon says he knew because she never looks at him when
              she's lying. He gets on the boat and yells back to her that he
              will return as a great Hunter.[1]
            </p>
          </div>
          <p className="text-white font-bold mt-3">Preliminary Phase</p>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img className="h-25" src={exam2} alt="" />
            <p className="text-white text-[1rem]">
              The first night on the boat, a huge storm tosses about most of the
              would-be Hunters. After the storm, the ship's drunkard of a
              Captain walks around to see only three candidates still able to
              move (one of them, Gon, is running back and forth trying to take
              care of the sea-sick). Later on, Gon is standing at the front of
              the boat, predicting another storm will hit them, this time three
              times the size as the previous night. The captain knows he is
              correct and not guessing, as he sees Ging in Gon and suspects Ging
              is Gon’s father. He asks and finds that he is correct. The captain
              shows Gon how to steer the boat, and also announces that the next
              storm was coming and anyone who wants to get off should right now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HunterExamStory;
