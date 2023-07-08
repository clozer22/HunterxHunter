import React from "react";
import about from "../Assets/about.png";
import kill from "../Assets/killua2.mp4";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="w-full h-[500px] sm:grid-cols-1">
      <div className="grid lg:grid-cols-2 w-full lg:h-full">
        <div className="col-span-1 pl-3 flex flex-col justify-center text-center items-center bg-gray-800">
          <h1
            id="about1"
            className=" lg:text-[3rem] lg:mb-3 xsm:mb-4 xsm:mt-3 rdm:mb-4 rdm:mt-3 text-[#F24B28] sm:text-[2.5rem] xsm:text-[2rem] rdm:text-[2rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            <Fade left>Hunterpedia</Fade>
          </h1>
          <h2
            className="lg:text-[1rem]  text-white sm:text-[.9rem] lg:mx-0 xsm:text-[.6rem] rdm:text-[.7rem] xsm:mx-5"
            style={{ fontFamily: "Fonstars" }}
          >
            <Fade left>
              Welcome to our Hunter x Hunter character website! Dive into the
              fascinating world of this popular anime series and explore
              detailed information about your favorite characters. From the
              determined Gon Freecss to the loyal Killua Zoldyck, and the
              formidable Netero to the enigmatic Hisoka, our database is filled
              with insights and facts about each unique character. Whether
              you're a seasoned fan or new to the series, join us on this
              exciting journey as we unravel their stories, abilities, and
              relationships. Get ready to embark on an unforgettable adventure
              with the characters of Hunter x Hunter!
            </Fade>
          </h2>
        </div>
        <div className="col-span-1 bg-gray-800 justify-center text-center items-center flex">
          <Fade right>
            <img className="hover:scale-105 duration-300" src={about} alt="" />
          </Fade>
        </div>
      </div>
      <div className="w-full lg:h-screen xsm:h-[700px]">
        <div className="col-span-2  justify-center flex flex-col items-center bg-gray-800 text-center py-10">
          <h1
            className="text-[#F24B28] mb-5 text-center lg:text-[3rem] lg:mt-[8rem] xsm:mt-[2rem] sm:text-[2.5rem] xsm:text-[1.6rem] rdm:text-[1.3rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            Gon and killua moments
          </h1>
          <h1
            className="text-white mb-3 lg:text-[1.3rem] xsm:text-[.9rem]"
            style={{ fontFamily: "Fonstars" }}
          >
            -last part
          </h1>
          <video
            className=""
            src={kill}
            type="video/mp4"
            controls
            autoPlay
            loop
          ></video>
        </div>
      </div>
    </div>
  );
};

export default About;
