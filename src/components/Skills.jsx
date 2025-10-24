/* eslint-disable no-unused-vars */
import React,{ useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const dataSkills = [
    {
        title: "React",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        title: "Next.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        title: "TypeScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        title: "JavaScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        title: "Tailwind CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
        title: "HTML5",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    }
]




export default function Skills() {
    const [isPhone, setIsPhone]=useState(false)

    useEffect(()=>{
        function handleResize(){
            setIsPhone( window.innerWidth < 500 )
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return ()=>window.removeEventListener("resize", handleResize)
    },[])

    const aimatePhoneInitial = { opacity: 0, x: 50}
    const aimatePhonefinal = { opacity: 1, x: 0 }
    const aimateDesktopInitial = { opacity: 0, y: 50}
    const aimateDesktopfinal = { opacity: 1, y: 0 }
  return (
    <div className='md:max-w-[1000px] md:mx-auto mt-14 mb-10 '>
        <motion.div 
            className='text-center'
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:false,amount:0.5}}
            transition={{duration:0.6}}

        >
            <h1 className="text-3xl font-bold mb-4">Technical Skills</h1>
            <p className=" max-w-2xl mx-auto dark:text-[#CBD5E1] text-[#1A1A1A]">
                I specialize in creating modern, responsive applications with cutting-edge technologies.
            </p>
        </motion.div>
        <motion.div 
            className="mt-8 flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center "
        >
            {dataSkills.map((item, index) => (
                <motion.div 
                    key={index} 
                    className="w-[220px] p-4 rounded-lg shadow-md flex flex-col items-center dark:bg-gray-800 bg-gray-200 dark:text-[#CBD5E1] text-[#1A1A1A]"
                    initial={isPhone ? aimatePhoneInitial: aimateDesktopInitial }
                    whileInView={isPhone ? aimatePhonefinal : aimateDesktopfinal}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: false, amount:0.5 }}
                >
                    <img src={item.image} alt={item.title} className="w-16 h-16 mb-2" />
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                </motion.div>
            ))}
        </motion.div>
        <motion.div 
          className="mt-16 dark:bg-gray-800 bg-gray-200 dark:text-[#CBD5E1] text-[#1A1A1A] p-8 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 } }
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Prisma", "PostgreSQL", "Api Route", "zod", 'UI/UX Design', " Git and Github ", 'Responsive Design', 'Testing (Jest)'].map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
    </div>
  )
}
