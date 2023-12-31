import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../Assets/logo.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import hxh from "../Assets/hxh.png";
import Home from "./Home";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleScroll = () => {
    const element = document.getElementById("about1");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setShow(false); // Scrolling down
    } else {
      setShow(true); // Scrolling up
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("remove", controlNavbar);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`nav fixed top-0 z-[100] lg:w-full lg:bg-[#0000006e]  xsm:w-full rdm:w-full sm:w-full md:w-full h-[80px] flex justify-between items-center lg:px-4 bg-transparent text-white ${
        show ? "fadeIn" : "fadeOut"
      }`}
    >
      <div className="">
        <img
          className="cursor-pointer lg:w-[200px] xsm:w-[150px] rdm:w-[150px] md:w-[200px]"
          src={logo}
          alt="Logo Image"
        />
      </div>

      <ul className="hidden  md:flex" style={{ fontFamily: "Fonstars" }}>
        <li className="hover:border-b-2 border-b-[#9A208C]">
          {" "}
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className="hover:border-b-2 border-b-[#9A208C]">
          <NavLink to="/characters" activeClassName="active-link">
            Characters
          </NavLink>
        </li>
        <li className="hover:border-b-2 border-b-[#9A208C]">
          <NavLink to="/arcs" activeClassName="active-link">
            Arc
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="xsm:mr-11 rdm:mr-11" />
        ) : (
          <FaTimes className="xsm:mr-11 rdm:mr-11" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute lg:top-0 xsm:top-0 rdm:top-0 rdm:w-full left-0 lg:w-full xsm:w-full md:w-full sm:w-full lg:h-screen xsm:h-[500px] bg-black flex flex-col xsm:justify-center xsm:items-center rdm:justify-center rdm:items-center"
        }
      >
        <img
          className="cursor-pointer xsm:w-[200px] rdm:w-[300px] "
          src={logo}
          alt="Logo Image"
        />

        <li className="py-6 text-4xl xsm:text-[2rem] hover:border-b-4 border-b-[#9A208C]">
          <NavLink to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl xsm:text-[2rem] hover:border-b-4 border-b-[#9A208C]">
          <NavLink to="/characters" activeClassName="active-link">
            Characters
          </NavLink>
        </li>
        <li className="py-6 text-4xl xsm:text-[2rem] hover:border-b-4 border-b-[#9A208C]">
          <NavLink to="/arcs" activeClassName="active-link">
            Arc
          </NavLink>
        </li>
      </ul>

      {/* Social icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              <span className="">Linkedin</span> <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              <span className="">Github</span> <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              <span className="">Email</span> <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              <span className="">Resume</span>{" "}
              <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
