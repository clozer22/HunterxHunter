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
import exam6 from "../../Assets/hxhExam4.png";
import exam7 from "../../Assets/hxhExam5.png";
import exam8 from "../../Assets/hxhExam6.png";
import exam9 from "../../Assets/hxhExam7.png";
import third from "../../Assets/thirdphase.png";
import third1 from "../../Assets/thirdphase1.png";
import fourth from "../../Assets/fourth.png";
import final from "../../Assets/final.png";

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
      className="lg:w-full  h-[500px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black bg-fixed"
      style={{ backgroundImage: `url(${require(`../../Assets/hxhback.jpg`)})` }}
    >
      {/* Container */}
      <Fade top>
        <div
          className="lg:w-full rdm:w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b from-black"
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
        className="lg:w-full rdm:w-full lg:px-10 bg-fixed py-10 bg-center bg-cover"
        style={{
          backgroundImage: `url(${require(`../../Assets/hxhback.jpg`)})`,
        }}
      >
        
        <div className="bg-gray-800 lg:w-full rdm:w-full rounded-2xl lg:px-8 grid lg:grid-rows-1 lg:py-8">
        <Fade bottom>
          <p
            className="text-white font-bold mt-3 bg-black lg:w-[15rem] rdm:w-[15rem] p-2 text-center rounded-bl-xl rounded-tr-xl text-[1rem]"
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
          </Fade>
          <div className="flex gap-3 justify-center items-center mt-5">
            <Fade bottom>
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
            </Fade>
          </div>
        <Fade bottom>
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
          </Fade>
          <div className="flex gap-3 justify-center items-center mt-5">
          <Fade bottom>
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
            </Fade>
          </div>
          <div className="flex gap-3 justify-center items-center mt-5">
          <Fade bottom>
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
            </Fade>
          </div>
          <div className="flex gap-3 justify-center items-center mt-5">
          <Fade bottom>
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
            </Fade>
          </div>
          <Fade bottom>
          <p
            className="text-white font-bold mt-3 bg-black w-[15rem] p-2 text-center rounded-bl-xl rounded-tr-xl text-[1rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            First Phase
          </p>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={exam6}
              alt=""
            />
            <p className="text-white text-[1rem]">
              Satotz, the first examiner, begins the 287th Hunter Exam with an
              extremely long run down a tunnel. A kid on a skateboard ends up
              next to Gon, and he asks how old Gon is. Discovering that he and
              Gon are the same age, he decides to run too and jumps off his
              board. The kid introduces himself as Killua. Gon looks behind to
              see Leorio heavily fatigued and on the verge of dropping out of
              the exam. Gon and Killua pause to wait for Leorio, who then gets
              his second wind and runs past. After running for 80km, they come
              to a set of stairs and start climbing, while Satotz starts to pick
              up the pace.
              <br /> <br />
              At this point, many applicants have failed the exam, due to sheer
              exhaustion or succumbing to extreme mental strain. Kurapika
              notices that Leorio was able to continue the stair-master
              challenge by going topless. He decides he should follow Leorio's
              example and removes some of his outer garments, possibly storing
              them in his shoulder bag.[7] As the two-run, Kurapika brings up an
              earlier remark that Leorio made about wanting to become a Hunter
              to get rich, stating that he doesn't believe Leorio's motives to
              be so worldly. Leorio reaffirms that he is doing it for money, but
              then reveals that he lost a dear friend because of his inability
              to pay for the medical bills. Now, he wants to become a doctor to
              heal the sick for free, but he lacks the funds needed to pay for
              medical school. Therefore, he sees a Hunter License as a
              sponsorship opportunity for his cause.
              <br /> <br />
              Leorio, in turn, asks Kurapika why he desires to become a Hunter.
              Kurapika recounts how his entire clan (the Kurta) were massacred
              by an organization of thieves known as the Phantom Troupe.
              Kurapika wishes to track down the Troupe and confront them to
              avenge his brethren, but he lacks ties to the criminal network
              known as the underworld in order to pursue them. He seeks to
              obtain a Hunter License in order to gain clearance into Mafia
              operations to become an inside man. Leorio remarks to take such a
              path may force Kurapika to become the very darkness that he
              detests, but Kurapika agrees that while that may be the case, he
              will do what it takes to carry out his mission, and he only
              worries that his resolve may falter when the time comes.[7]
              <br /> <br />
              Meanwhile, the top of the stairs is in sight! Gon and Killua race
              to see who will be the first to meet Satotz outside. When they
              reach the finish line, Satotz states that they both crossed over
              simultaneously. Most of the other applicants make it to the crest
              of the hill, at which point Satotz addresses all those who have
              come so far. Satotz announces that he will continue to lead the
              group through the rest of the phase, but warns that the next part
              is extra dangerous, as they will be passing through the Milsy
              Wetlands (a.k.a. Swindler's Swamp), a zone renown for endemic
              magical beasts who prey on humans. The entire party consents to go
              on.
            </p>
          </div>
          </Fade>
          <div className="flex gap-3 justify-center items-center mt-5">
          <Fade bottom>
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={exam7}
              alt=""
            />
            <p className="text-white text-[1rem]">
              As they attempt to follow Satotz, a thick fog envelops the
              participants. The various species of magical beasts consume a
              number of examinees. Additionally, some of the applicants who
              appear to resent Hisoka band together and endeavor to murder him.
              Hisoka kills every member of the belligerent faction gracefully
              and instantly. This brief battle triggers Hisoka's bloodlust,
              causing him to declare that he will serve as an examiner to see
              who is worthy to carry on in the exam. Leorio and Gon, though
              afraid, confront Hisoka, and while Hisoka's superior combat skills
              easily defeat them, the latter proclaims that they have passed his
              judgment (and would be a waste to kill, as they have potential).
              Leorio is unconscious, so Hisoka carries him to the next phase,
              while Gon meets up with Kurapika.
            </p>
            </Fade>
          </div>
          <Fade bottom>
          <p
            className="text-white font-bold mt-3 bg-black w-[15rem] p-2 text-center rounded-bl-xl rounded-tr-xl text-[1rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            Second Phase
          </p>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={exam8}
              alt=""
            />
            <p className="text-white text-[1rem]">
              The Second Phase of the exam takes place in the Visca Forest
              Preserve, where the examinees meet Gourmet Hunters (and proctors)
              Menchi and Buhara.[9] Buhara's test is to find the world's most
              dangerous pig and bring it back to him so he can eat it. Gon and
              his friends complete the task easily, along with 70 other
              applicants. However, Menchi, the second examiner, baffles the
              examinees when she tells them to make sushi, a traditional dish
              from Jappon, as none of them knows what sushi is. Menchi
              overreacts because of an examinee making them all fail as a
              result, no one passes,[10] which requires the Chairman Netero to
              intervene. The test is taken to Split Mountain where examinees
              hunt for Spider Eagle eggs. At the end of this stage, there are 42
              applicants left.
            </p>
            
          </div>
          </Fade>
          <Fade bottom>
          <p
            className="text-white font-bold mt-3 bg-black w-[15rem] p-2 text-center rounded-bl-xl rounded-tr-xl text-[1rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            A game at midnight
          </p>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={exam9}
              alt=""
            />
            <p className="text-white text-[1rem]">
              The 42 remaining applicants board the Selection Committee's
              airship, where it is revealed that their next phase of the exam
              will begin at 8:00 a.m. the next day. As everyone rests up for
              tomorrow, Gon and Killua encounter Netero, who challenges them to
              a game; if they win, he'd issue their licenses on the spot. All
              they have to do is take away a ball from Netero. Killua eagerly
              goes first but fails. Gon then takes his turn to take the ball,
              but he also fails.[12] Time passes, and when it seems Gon and
              Killua have tried every possible tactic, Netero suggests they
              attack together. Though they are seemingly close to it at one
              point, Netero rockets between them at lightning speed and takes
              the ball. Killua calls it quits and ends up killing two applicants
              in his frustration; Gon, however, decides to play until he forces
              Netero to use his right hand. When he succeeds in doing so, Gon
              collapses in exhaustion where he is.
            </p>
          </div>
          </Fade>
          <Fade bottom>
          <p
            className="text-white font-bold mt-3 bg-black w-[15rem] p-2 text-center rounded-bl-xl rounded-tr-xl text-[1rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            Third phase
          </p>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={third}
              alt=""
            />
            <p className="text-white text-[1rem]">
              In the morning, the airship arrives at the top of Trick Tower. The
              40 applicants are informed that the objective of stage 3 is to get
              down from the tower alive within 72 hours. The group is forced to
              team up with Tonpa.[14] The first serious test is to win 3 out of
              5 matches against tower prisoners. Tonpa takes the first match
              with a hardened-looking criminal and promptly gives up.
              <br /> <br />
              Gon faces the next prisoner, a serial bomber by the name of
              Sedokan, in a match to see whose candle can burn the longest.[16]
              Kurapika engages in a death match with the next opponent, Majtani,
              but refuses to kill him after seeing red (literally) and knocking
              the criminal unconscious. Majtani feigns unconsciousness in an
              attempt to run out of the clock.[17] Leorio and the leader of the
              prisoners bet on whether he's faking. Leorio holds the man above a
              long drop, and Majtani wakes up. He concedes the match to
              Kurapika, but the group loses a large chunk of their time because
              of the bet. Leorio goes next. His opponent is Leroute, an
              attractive woman. He loses ten hours in a bet. He then loses the
              rest of their betting hours to her.
            </p>
          </div>
          </Fade>
          <div className="flex gap-3 justify-center items-center mt-5">
          <Fade bottom>
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={third1}
              alt=""
            />
            <p className="text-white text-[1rem]">
              Killua then faces Johness the Dissector, a man responsible for the
              murder of at least 146 people with his bare hands. Killua rips out
              his heart, explaining afterward that Johness is an amateur and he
              is a pro.[18] The last test to get out of the tower has two paths:
              one is too long, and the other will only allow three of the five
              to enter. Leorio and Tonpa start fighting to see who will stay
              when Gon thinks outside the box. They choose the longer path,
              destroy the wall between the paths with axes provided so they can
              fight, and all five make it out.
            </p>
            </Fade>
          </div>
          <Fade bottom>
          <p
            className="text-white font-bold mt-3 bg-black w-[15rem] p-2 text-center rounded-bl-xl rounded-tr-xl text-[1rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            fourt phase
          </p>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={fourth}
              alt=""
            />
            <p className="text-white text-[1rem]">
              The Fourth Phase is a manhunt on Zevil Island, wherein the 25
              remaining competitors are required to target and acquire their
              prey's plate.[20] Gon draws Hisoka and spends much of his time
              strategizing.[21] He manages to get Hisoka's plate, but is
              attacked in the process by Geretta and paralyzed with a
              neurotoxin. Hisoka then kills Geretta, but gives Gon back his
              plate and then his own.[22] Gon recovers in three days and comes
              across Leorio and Kurapika; he eventually helps Leorio to acquire
              his target's badge.
            </p>
          </div>
          </Fade>
          <Fade bottom>
          <p
            className="text-white font-bold mt-3 bg-black w-[15rem] p-2 text-center rounded-bl-xl rounded-tr-xl text-[1rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            final phase
          </p>
          <div className="flex gap-3 justify-center items-center mt-5">
            <img
              className="h-25 rounded-xl hover:scale-105 duration-300"
              src={final}
              alt=""
            />
            <p className="text-white text-[1rem]">
              The Final Phase was a tournament with each of the participants.
              After being selected by the judges as being the most exceptional
              applicants, Hanzo and Gon face off first.[24] Gon is outmatched
              when it comes to combat, but his unwillingness to submit causes
              Hanzo to forfeit the battle—making Gon the first applicant to pass
              the 287th Hunter Exam.[25] Hanzo knocks Gon out and he doesn't
              awake until the exam has ended. Satotz fills in the details and
              explains to Gon that only two people didn't pass the exam—Bodoro
              and Killua. It is revealed that Gittarackur is actually an alias
              for Killua's older brother, Illumi.[26] Killua was manipulated
              into murdering another contestant and subsequently failed the
              exam.[27] Gon, enraged, confronts Illumi and gets Killua's
              address. Gon, Kurapika, and Leorio all then depart to Killua's
              home on Kukuroo Mountain.
            </p>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HunterExamStory;
