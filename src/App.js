import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Characters from './Components/Characters'
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "./Assets/logo.png";
import {HiArrowNarrowRight} from 'react-icons/hi'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Killua_info from "./Components/Pages/Killua_info";
import Netero_info from "./Components/Pages/Netero_info";
import Gon_info from "./Components/Pages/Gon_info";
import Kurapika_info from "./Components/Pages/Kurapika_info";
import Leorio_info from "./Components/Pages/Leorio_info";
import { Hisoka_info } from "./Components/Pages/Hisoka_info";

 


function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/killua_info" element={<Killua_info />} />
          <Route path="/netero_info" element={<Netero_info />} />
          <Route path="/gon_info" element={<Gon_info />} />
          <Route path="/kurapika_info" element={<Kurapika_info />} />
          <Route path="/leorio_info" element={<Leorio_info />} />
          <Route path="/hisoka_info" element={<Hisoka_info />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
