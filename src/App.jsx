import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import DIImpact from "./pages/DIImpact";
import HireginieS from "./pages/HireginieS";
import Jobopen from "./pages/Jobopen";
import Contact from "./pages/Contact";
import Footers from "./Component/Footers";
import MissionVision from "./Aboutcomponent/MissionVision";
import HireginiePromise from "./Aboutcomponent/HireginiePromise";
import IndustriesWeServe from "./Aboutcomponent/IndustriesWeServe";
import OurStories from "./Aboutcomponent/OurStories";
import Scroll from "./scroll";


function App() {
  return (
    <>
      <Header /> 
      <Scroll/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/missionvission" element={<MissionVision/>} />
        <Route path="/hireginiepromise" element={<HireginiePromise />} />
        <Route path="/industrieswebserve" element={<IndustriesWeServe />} />
        <Route path="/ourstory" element={<OurStories />} />
        <Route path="/D&Iimpact" element={<DIImpact />} />
        <Route path="/hireginieservices" element={<HireginieS />} />
        <Route path="/job" element={<Jobopen />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footers/> 
    </>
  );
}

export default App;

