import React, {useEffect, useState} from 'react'
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';


export default function Navbar() {
    const [MenuIsOpen, setMenuIsOpen] = useState(false)

    const getThemeValue = localStorage.getItem('themeValue')
    const getValueJs = JSON.parse(getThemeValue)

    const [isThemeDark, setIsThemeDark] = useState(getValueJs)
    //localStorage.removeItem("themeValue")


    useEffect(()=>{
        const htmlElement= document.documentElement
        if(isThemeDark){
            htmlElement.classList.add("dark")
        } else {
            htmlElement.classList.remove("dark")
        }

        localStorage.setItem("themeValue", JSON.stringify(isThemeDark))
        console.log(isThemeDark)
    },[isThemeDark])


  return (
    <>
        <div className="relative inset-0 md:max-w-[1000px] md:mx-auto px-4 md:px-6 lg:px-0">
            <div className="flex items-center py-6 justify-between text-2xl">
                <h1 className='font-bold'><a href="#acceuil">Glodi<span className='text-blue-700'>Code.</span></a></h1>
                <div className='flex gap-8 dark:text-[#CBD5E1] text-[#1A1A1A] '>
                    <nav className="md:flex hidden">
                        <ul className='flex gap-4'>
                            <li><a href="#acceuil" className=' dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700'>Home</a></li>
                            <li><a href="#about" className=' dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700'>About</a></li>
                            <li><a href="#skills" className='dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700'>Skills</a></li>
                            <li><a href="#project" className=' dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700 ' >Projects</a></li>
                            <li><a href="#contact" className='dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700 '>Contact</a></li>
                        </ul>
                    </nav>
                    <div className="flex gap-4 items-center">
                        <div onClick={()=>{setIsThemeDark(!isThemeDark)}} className='hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]'>
                            {isThemeDark ? <Sun /> : <Moon />}
                        </div>
                        <div className="md:hidden hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]"
                            onClick={()=>{setMenuIsOpen( !MenuIsOpen)}}
                        >
                            {MenuIsOpen ? <X/> : <Menu />}
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {MenuIsOpen && 
                    <motion.ul 
                        className="w-full shadow-md backdrop-blur-lg dark:bg-gray-900/80 dark:text-[#CBD5E1] absolute top-full left-0 p-4 flex flex-col gap-2"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={ {duration:0.5}}
                    >
                        <li><a href="#acceuil" className=' dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700'>Home</a></li>
                        <li><a href="#about" className=' dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700'>About</a></li>
                        <li><a href="#skills" className='dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700'>Skills</a></li>
                        <li><a href="#project" className=' dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700 ' >Projects</a></li>
                        <li><a href="#contact" className='dark:hover:text-[var(--link-hover)] dark:active:text-[var(--link-active)] transition-[var(--link-transition)] hover:text-blue-700 active:text-blue-700 '>Contact</a></li>   
                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    </>
  )
}
