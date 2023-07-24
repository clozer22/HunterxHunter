import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import "../../fonts/fonts.css";
import Fade from "react-reveal/Fade";
import fishing from "../../Assets/fishing.png";
import exam from "../../Assets/hunterExam.png";
import exam2 from "../../Assets/hunterExam2.png";
import exam3 from "../../Assets/hxhExam.png";
import exam4 from "../../Assets/hxhExam2.png";
import exam5 from "../../Assets/hxhExam3.png";

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
      className="w-full h-[500px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black bg-fixed"
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
      <div
        className="w-full px-10 bg-fixed py-10 bg-center bg-cover"
        style={{
          backgroundImage: `url(${require(`../../Assets/hxhback.jpg`)})`,
        }}
      >
        <div className="bg-gray-800 w-full rounded-2xl px-8 grid lg:grid-rows-1 py-8">
          <p
            className="text-white font-bold mt-3 bg-black w-[15rem] p-2 text-center rounded-bl-xl rounded-tr-xl text-[1rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            Pre-Hunter Exam
          </p>
          <div className="flex gap-3 justify-center items-center">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={fishing}
              alt=""
            />
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
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={exam}
              alt=""
            />
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
          <p
            className="text-white font-bold mt-3 bg-black w-[15rem] p-2 text-center rounded-bl-xl rounded-tr-xl text-[1rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            Preliminary Phase
          </p>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={exam2}
              alt=""
            />
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
              <br /> <br />
              All but Gon, Kurapika, and Leorio leave. The Captain asks why they
              all want to be hunters. Gon answers while the other two don't.
              Leorio asks why they should tell him when he just steers the ship.
              The Captain replies he screens applicants and it is up to him
              whether or not they pass. The remaining two tell him. While
              explaining, Kurapika annoys Leorio to the point they go out into
              the storm to fight. When a crew member jumps in to stop them, he
              falls overboard, and Gon jumps after him, narrowly missing falling
              into the ocean thanks to Kurapika and Leorio grabbing his ankles
              in time to pull them both back on board.[2] When they reach land,
              the captain gives them a hint to head to a lone cedar tree outside
              of the city to find their navigators. Gon decides to go, and
              Kurapika decides to tag along. Leorio stays until he finds that
              there is another trick to weed out the weak. And he runs off to
              join the other two.
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={exam3}
              alt=""
            />
            <p className="text-white text-[1rem]">
              Later they reach a village that seems to be deserted, but Gon says
              he can hear them, and so can Kurapika. Then the whole population
              of the village comes out to start The Mind-Boggling Two Choice
              Quiz. The leader of the village asks two questions, and all they
              can say is 1 or 2. The man who heard the clue walks in and says
              he'll go first. She asks him, "Men have taken captive your mother
              and true love. Who do you save?" He chooses 1 thinking that's what
              she wants him to say. She says he may go. Leorio starts yelling
              because of the preposterous question. Kurapika tells him to be
              quiet, seeing Gon has heard something. She asks another impossible
              question, and Leorio attacks her. Kurapika blocks it, stating they
              passed since silence is the answer. He adds he heard the other man
              scream, meaning he was killed, but no one knows how
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={exam4}
              alt=""
            />
            <p className="text-white text-[1rem]">
              After a short walk, the trio reach a house and find the two
              navigators posing as a couple being attacked by a magical beast
              called a Kiriko. The beast takes off with the lady, followed by
              Gon and Kurapika, with Leorio staying behind to take care of the
              man. While chasing after the creature, Gon pulls ahead of
              Kurapika, closes in on the Kiriko, and bashes him in the head. The
              Kiriko drops the woman, who Kurapika catches. The creature still
              manages to get away from Gon, who continues chasing it. Soon he
              comes to a clearing where the creature attacks him. Gon merely
              greets it and asks where the one he hit went to. It is revealed
              that both the Kiriko and the couple are a family and the ones who
              would take the three to the Hunter Exam.
              <br /> <br />
              The next day, they arrive at a small restaurant. The disguised
              magical beast orders a specific meal, then the cook sends them to
              a special room and delivers the meal. The room is actually an
              elevator that starts to drop. As they make their way down,
              Kurapika and Leorio try to find out whether Gon is taking the test
              for the wealth, or for the adventure. He doesn't answer.
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={exam5}
              alt=""
            />
            <p className="text-white text-[1rem]">
              Gon's Hunter Exam begins with him getting targeted by Tonpa, the
              Rookie Crusher. Tonpa first introduces himself as a friend trying
              to help Gon. Tonpa then introduces some of the other regulars,
              Such as Bourbon, the snake charmer, Todo, the wrestler, The Amori
              Brothers, Cherry, and Geretta, the huntsman. While doing the
              introductions, they hear a bloodcurdling scream, and they look to
              see a man missing his arms, courtesy of Hisoka, the magician, who
              maimed him simply because he bumped into him. Tonpa fills the
              others in on Hisoka, recalling that last year, most assessed
              Hisoka as a favorite to pass and become certified. however, Hisoka
              was determined to have failed the exam when he injured a proctor.
              <br /> <br />
              Realizing Hisoka was permitted to try again for his license, those
              listening question whether someone as wicked as Hisoka should be
              allowed to become a Hunter. Tonpa shrugs and suggests that the
              Hunter Association is morally unbiased. Since the examiners are
              newly drafted every year, Hisoka's slate would effectively be
              wiped clean, disregarding the fact that he had earned the
              prejudice of a previous administrator. Tonpa then offers Gon and
              the other two some juice. Gon, being the first to taste it, spits
              it back out saying it tastes funny, leading Kurapika and Leorio to
              dump theirs on the ground.[5] Afterwards Tonpa makes a hasty
              apology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HunterExamStory;
