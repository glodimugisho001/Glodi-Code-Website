import React from "react";
import { Analytics } from "@vercel/analytics/react"
import "./App.css"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from 'framer-motion'

import "./App.css";

export default function App() {
  return (
      <> 
      <div className="dark:bg-gray-900 dark:text-white bg-[#F5F5F5] text-[#1A1A1A] ">
        <motion.div 
          className="sticky top-0 shadow-md backdrop-blur-sm z-40"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Navbar/>
        </motion.div>
        <Hero/>
        <div id="about" className="dark:bg-gray-800 bg-gray-200 px-4 md:px-6 lg:px-0">
          <About/>
        </div>
        <div id="skills" className="dark:bg-gray-900 bg-[#F5F5F5] dark:text-white text-[#1A1A1A] px-4 md:px-6 lg:px-0">
          <Skills/>
        </div>
        <div id="project" className="dark:bg-gray-800 bg-gray-200 px-4 md:px-6 lg:px-0">
          <Projects/>
        </div>
        <div id="contact" className="dark:bg-gray-900 bg-[#F5F5F5] dark:text-white text-[#1A1A1A] px-4 md:px-6 lg:px-0">
          <Contact/>
        </div>
        <div id="" className="bg-gray-900 text-white px-4 mt-20 pt-4 md:px-6 lg:px-0">
          <Footer/>
        </div>
      </div>
      <Analytics />
      </>
  );
}