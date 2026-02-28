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
      <div className="bg-background text-foreground">
        <Motion.div
          className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
        </Motion.div>

        <Hero />

        <Suspense fallback={<LoadingFallback />}>
          <div id="about" className="bg-muted/30 px-4 md:px-6 lg:px-0">
            <About />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <div id="skills" className="px-4 md:px-6 lg:px-0">
            <Skills />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <div id="project" className="bg-muted/30 px-4 md:px-6 lg:px-0">
            <Projects />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <div id="contact" className="px-4 md:px-6 lg:px-0">
            <Contact />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 px-4 md:px-6 lg:px-0">
            <Footer />
          </div>
        </Suspense>
      </div>
      <Analytics />
    </>
  );
}
