import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Characters from './Components/Characters'
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Killua_info from "./Components/Pages/Killua_info";
import Netero_info from "./Components/Pages/Netero_info";
import Gon_info from "./Components/Pages/Gon_info";
import Kurapika_info from "./Components/Pages/Kurapika_info";
import Leorio_info from "./Components/Pages/Leorio_info";
import { Hisoka_info } from "./Components/Pages/Hisoka_info";
import Ging_info from "./Components/Pages/Ging_info";
import Chrollo_info from "./Components/Pages/Chrollo_info";

 


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
          <Route path="/ging_info" element={<Ging_info />} />
          <Route path="/chrollo_info" element={<Chrollo_info />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
