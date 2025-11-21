import React, { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { motion as Motion } from "framer-motion";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center w-full h-40">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

export default function App() {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-[#F5F5F5] text-[#1A1A1A] ">
        <Motion.div
          className="sticky top-0 shadow-md backdrop-blur-sm z-40"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Navbar />
        </Motion.div>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <div
            id="about"
            className="dark:bg-gray-800 bg-gray-200 px-4 md:px-6 lg:px-0"
          >
            <About />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div
            id="skills"
            className="dark:bg-gray-900 bg-[#F5F5F5] dark:text-white text-[#1A1A1A] px-4 md:px-6 lg:px-0"
          >
            <Skills />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div
            id="project"
            className="dark:bg-gray-800 bg-gray-200 px-4 md:px-6 lg:px-0"
          >
            <Projects />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div
            id="contact"
            className="dark:bg-gray-900 bg-[#F5F5F5] dark:text-white text-[#1A1A1A] px-4 md:px-6 lg:px-0"
          >
            <Contact />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div
            id=""
            className="bg-gray-900 text-white px-4 mt-20 pt-4 md:px-6 lg:px-0"
          >
            <Footer />
          </div>
        </Suspense>
      </div>
      <Analytics />
    </>
  );
}
