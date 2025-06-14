import React, { useState, useEffect } from "react"
import Navbar from "./components/Header/Navbar"
import SideLinkSection from "./components/SideLinkSection/SideLinkSection"
import HeroSection from "./components/HeroSection/HeroSection"
import About  from "./components/About/About"
import ProjectSection from "./components/ProjectSection/ProjectSection"
import SkillSection from "./components/Skills/SkillSection"
import Footer from "./components/Footer/Footer"
import ContactUs from "./components/ContactUs/ContactUs"



function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <>
  
    <div className="w-full  h-auto  font-[jost-regular] overflow-x-hidden bg-white text-black dark:bg-darkbg dark:text-white transition duration-300">
            <SideLinkSection/>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div id="home"><HeroSection /></div>
            <div id="about"><About /></div>
            <div id="projects"><ProjectSection /></div>
            <div id="skills"><SkillSection /></div>
            <div id="contact"><ContactUs /></div>
            <Footer/>
    </div>
    </>
  )
}

export default App
