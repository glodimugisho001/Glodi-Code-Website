/* eslint-disable no-unused-vars */
import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import glodi from "../assets/profile.webp";

export default function Hero() {
  return (
    <>
      <div
        id="acceuil"
        className="flex flex-col-reverse items-center md:items-start px-4 md:px-6 lg:px-0 py-8 md:py-35 gap-4 md:flex-row md:max-w-[1000px] md:mx-auto"
      >
        <motion.div
          className=" flex-1 flex flex-col items-center text-center md:items-start md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="flex flex-col ">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-medium mb-2 text-blue-500 text-[18px]"
            >
              Hello, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 "
            >
              Glodi Mugisho
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 dark:text-[#CBD5E1] text-[#4b4848] "
            >
              Full Stack Developer
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl max-w-xl  dark:text-[#CBD5E1] text-[#1A1A1A] "
          >
            I build modern, performant web applications from end to end. React,
            Next.js on the frontend — API Routes, Server Actions, Prisma &
            PostgreSQL on the backend.
          </motion.p>
          <div className="flex gap-2 my-8">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              href="#contact"
            >
              <Button className="dark:text-white dark:hover:text-black">
                Contact Me
              </Button>
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              href="#project"
            >
              <Button className="dark:text-white dark:hover:text-black">
                View My Work
              </Button>
            </motion.a>
          </div>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <a href="https://github.com/glodimugisho001">
              <Github
                size={24}
                className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]"
              />
            </a>
            <a href="https://www.linkedin.com/in/glodi-code?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Linkedin
                size={24}
                className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]"
              />
            </a>
            <a href="https://x.com/GlodiMugisho">
              <Twitter
                size={24}
                className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]"
              />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            src={glodi} // Adjust the path as necessary
            alt="Glodi's profile"
            className="w-[250px] h-[280px] object-cover rounded-2xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </>
  );
}
