import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import "../fonts/fonts.css";
import Fade from "react-reveal/Fade";
import HunterExam from "./HunterExam";
import ZoldyckFam from "./ZoldyckFam";
import HeavensArena from "./HeavensArena";
import YorkNew from "./YorkNew";
import GreedIsland from "./GreedIsland";
import ChimeraAnt from "./ChimeraAnt";
import Footer from "./Footer";
import Election from "./Election";


const Arc = () => {
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
      className="lg:w-full rdm:w-full h-[500px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black bg-fixed"
      style={{ backgroundImage: `url(${require(`../Assets/phantom.jpg`)})` }}
    >
      {/* Container */}
      <Fade top>
        <div
          className="w-full  flex flex-col justify-center items-center h-full bg-gradient-to-b from-black"
          style={{ fontFamily: "Fonstars" }}
        >
          <p className="text-white text-[1.5rem]"></p>
          <h1 className="lg:text-5xl sm:text-[2.5rem] xsm:text-[1.5rem] rdm:text-[1.5rem] xsm:text-center font-extrabold text-[#f8faff] mb-5">
            <span className="text-white">Story</span>{" "}
            <span className="text-[#3cb62b]">x</span>{" "}
            <span className="text-[#F24B28]">Arcs</span>{" "}
          </h1>
          <h2 className="lg:text-4xl sm:text-[2.3rem] xsm:text-[1.3rem] font-bold text-[#8892b0]">
            Arcs:{" "}
            <Typed
              className=""
              strings={[
                "Hunter Exam",
                "Family Zoldyck",
                "Whale Island",
                "York New City",
                "Phantom Gang",
                "Greed Island",
                "Chimera Ant",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />{" "}
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] lg:text-[1rem] xsm:px-6  xsm:text-[.7rem] text-center"></p>
          <div>
            <input
              className="lg:w-full lg:px-[7rem] xsm:px-[4rem] rdm:px-[3rem] lg:py-3 rdm:py-2 rounded text-center"
              type="text"
              placeholder="Search arc"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
          <div>
            <button className="text-white bg-[#F24B28] group lg:text-[1rem] xsm:text-[.6rem] rdm:text-[.7rem] border-2 px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-pink-600">
              Read More
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </Fade>
      <div className=" text-center mt-11 mb-10 xsm:mt-5 xsm:mb-5 rdm:mt-3 rdm:mb-3 bg-black text-white">
        <h1
          className="lg:text-[4rem] xsm:text-[2rem] rdm:text-[2rem] font-extrabold"
          style={{ fontFamily: "Fonstars" }}
        >
          STORY
        </h1>
      </div>
      {searchInput === "" || searchInput === null ? (
        <div className="grid lg:grid-rows-auto bg-gray-800">
          <Fade bottom>
            <div>
              <HunterExam />
            </div>
            <div>
              <ZoldyckFam />
            </div>
            <div>
              <HeavensArena />
            </div>
            <div>
              <YorkNew />
            </div>
            <div>
              <GreedIsland />
            </div>
            <div>
              <ChimeraAnt />
            </div>
            <div>
              <Election />
            </div>
         
          </Fade>
        </div>
      ) : (
        <>
          {searchInput.toLowerCase() === "hunter exam" && <HunterExam />}
          {searchInput.toLowerCase() === "zoldyck family" && <ZoldyckFam />}
          {searchInput.toLowerCase() === "heavens arena" && <HeavensArena />}
          {searchInput.toLowerCase() !== "hunter exam" &&
            searchInput.toLowerCase() !== "heavens arena" &&
            searchInput.toLowerCase() !== "zoldyck family" && (
              <p
                className="lg:text-[2rem] lg:text-black text-center"
                style={{ fontFamily: "Fonstars" }}
              >
                That Arc does not exist
              </p>
            )}
        </>
      )}
    </div>
  );
};

export default Arc;
