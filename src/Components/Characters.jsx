import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";

import Gon from "./Gon";
import Kurapika from "./Kurapika";
import Leorio from "./Leorio";
import Killua from "./Killua";
import "../fonts/fonts.css";
import Skills from "./Skills";
import Netero from "./Netero";
import Ging from "./Ging";
import Chrollo from "./Chrollo";
import Uvo from "./Uvo";
import Feitan from "./Feitan";
import Nobunaga from "./Nobunaga";
import Machi from "./Machi";
import Phinks from "./Phinks";
import Fade from "react-reveal/Fade";
import Shalnark from "./Shalnark";
import Footer from "./Footer";

const Characters = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true); 

   
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <div
      name="home"
      className="w-full h-[500px]  bg-black bg-no-repeat  sm:grid-cols-1 bg-cover bg-center bg-gradient-to-br from-black bg-fixed"
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
            <span className="text-white">Hunter</span>{" "}
            <span className="text-[#3cb62b]">x</span>{" "}
            <span className="text-[#F24B28]">Characters</span>{" "}
          </h1>
          <h2 className="lg:text-4xl sm:text-[2.3rem] xsm:text-[1.3rem] font-bold text-[#8892b0]">
            Nen Type:{" "}
            <Typed
              className=""
              strings={[
                "ENHANCER",
                "TRANSMUTER",
                "EMITTER",
                "CONJURER",
                "SPECIALIST",
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
              placeholder="Search name"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
          <div>
            <button className="text-white bg-[#F24B28] group lg:text-[1rem] xsm:flex xsm:text-[.6rem] rdm:text-[.7rem] border-2 px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-pink-600">
              Read More
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </Fade>
      <div className="text-center mt-11 mb-10 xsm:mt-5 xsm:mb-5 rdm:mt-3 rdm:mb-3 bg-black text-white">
        <h1
          className="lg:text-[4rem] xsm:text-[2rem] rdm:text-[2rem] font-extrabold"
          style={{ fontFamily: "Fonstars" }}
        >
          CHARACTERS
        </h1>
      </div>
      {searchInput === "" || searchInput === null ? (
        <>
          <Fade>
            <Netero />
            <Killua />
            <Gon />
            <Kurapika />
            <Leorio />
            <Skills />
            <Ging />
            <Chrollo />
            <Uvo />
            <Feitan />
            <Nobunaga />
            <Machi />
            <Phinks />
            <Shalnark />
          </Fade>
        </>
      ) : (
        <>
          {searchInput.toLowerCase() === "netero" && <Netero />}
          {searchInput.toLowerCase() === "killua" && <Killua />}
          {searchInput.toLowerCase() === "gon" && <Gon />}
          {searchInput.toLowerCase() === "kurapika" && <Kurapika />}
          {searchInput.toLowerCase() === "leorio" && <Leorio />}
          {searchInput.toLowerCase() === "hisoka" && <Skills />}
          {searchInput.toLowerCase() === "ging" && <Ging />}
          {searchInput.toLowerCase() === "chrollo" && <Chrollo />}
          {searchInput.toLowerCase() === "uvo" && <Uvo />}
          {searchInput.toLowerCase() === "feitan" && <Feitan />}
          {searchInput.toLowerCase() === "nobunaga" && <Nobunaga />}
          {searchInput.toLowerCase() === "machi" && <Machi />}
          {searchInput.toLowerCase() === "phinks" && <Phinks />}
          {searchInput.toLowerCase() === "shalnark" && <Shalnark />}
          {searchInput.toLowerCase() !== "netero" &&
            searchInput.toLowerCase() !== "killua" &&
            searchInput.toLowerCase() !== "gon" &&
            searchInput.toLowerCase() !== "kurapika" &&
            searchInput.toLowerCase() !== "leorio" &&
            searchInput.toLowerCase() !== "hisoka" &&
            searchInput.toLowerCase() !== "ging" &&
            searchInput.toLowerCase() !== "chrollo" &&
            searchInput.toLowerCase() !== "uvo" &&
            searchInput.toLowerCase() !== "feitan" &&
            searchInput.toLowerCase() !== "nobunaga" &&
            searchInput.toLowerCase() !== "machi" &&
            searchInput.toLowerCase() !== "phinks" &&
            searchInput.toLowerCase() !== "shalnark" && (
              <p
                className="lg:text-[2rem] lg:text-black text-center"
                style={{ fontFamily: "Fonstars" }}
              >
                That character does not exist
              </p>
            )}
        </>
      )}
    </div>
  );
};

export default Characters;
