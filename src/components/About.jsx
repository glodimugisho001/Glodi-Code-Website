import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'

const dataAbout = [
    {
        title: "Experience",
        description: "I have 1 year of experience in web development, mainly self-taught and through personal projects. I am passionate about continuous learning and creating innovative solutions."
    },
    {
        title: "Professional Background",
        description: "1 year of solo web development experience, with no professional assignments yet. I am focused on improving my skills and working on personal projects."
    },
    {
        title: "Education",
        description: "High school diploma in electronics. Currently a university student in Computer Engineering."
    },
    {
        title: "Location",
        description: "Goma, DRC. Available for remote collaborations and motivated to learn more."
    }

]
export default function About () {
    const [isPhone, setIsPhone]=useState(false)

    useEffect(()=>{
        function handleResize(){
            setIsPhone( window.innerWidth < 768 )
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
    <div className='md:max-w-[1000px] md:mx-auto pt-16 pb-14 mt-6'>
        <motion.div 
            className="container mx-auto text-center"
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6}}
            viewport={{once:false, amount:0.5}}
        >
            <h1 className=" text-2xl md:text-3xl font-bold mb-4">About Me</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl dark:text-[#CBD5E1] text-[#1A1A1A]">
                I'm a passionate React  Frontend Developer with a keen eye for design and a dedication to creating seamless user experiences.
            </p>
        </motion.div>
        <motion.div 
            className="mt-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:justify-center"
        >
            {dataAbout.map((item, index) => (
                <motion.div 
                    key={index} 
                    className="md:w-96 p-8 rounded-lg shadow-md dark:bg-gray-900 bg-[#F5F5F5] text-[#1A1A1A] dark:text-white "
                    initial={isPhone ? aimatePhoneInitial: aimateDesktopInitial }
                    whileInView={isPhone ? aimatePhonefinal : aimateDesktopfinal}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: false , amount:0.5}}
                >
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className='dark:text-[#CBD5E1] text-[#1A1A1A] '>{item.description}</p>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}
