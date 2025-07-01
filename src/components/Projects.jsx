import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Globe } from 'lucide-react'
import convertisseur from '../assets/unit-converter.png'
import calculator from "../assets/calculatorApp.png"
import todo from "../assets/todolistApp.png"
import portfolio from "../assets/portfolio-glodi.png"


const dataProjects = [
    {
        title: "Portfolio",
        description: "My own web portfolio site, designed to showcase my projects, skills, and experience.",
        url: "",
        image: portfolio,
        stack: ["React", "tailwind css", "Emailjs", "framer-motion"]
    },
    {
        title: "Todo List",
        description: "A simple todo list, with a clean and intuitive interface for managing your tasks.",
        url:"",
        image: todo,
        stack: ["React", "tailwind css"]
    },
    {
        title: "Unit Converter",
        description: "A versatile unit converter application that allows users to convert units of continuous quantities.",
        url:"",
        image: convertisseur,
        stack: ["React", "tailwind css"]
    },
    {
        title: "Calculator",
        description: "A simple calculator app, with an intuitive interface for basic arithmetic operations. It allows users to perform addition, subtraction, multiplication, and division operations.",
        url:"",
        image: calculator,
        stack: ["React", "Css"]
    }
]

export default function Projects() {
    return (
        <div className='md:max-w-[1000px] md:mx-auto py-16'>
            <div className='text-center'>
                <h1 className="text-3xl font-bold  mb-4">Projects</h1>
                <p className=" max-w-2xl mx-auto dark:text-[#CBD5E1] text-[#1A1A1A]">
                    Here are some of my recent projects that showcase my skills and creativity.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center md:p-4 lg:p-0 mt-10'>
                {dataProjects.map((project, index) => (
                    <Card key={index} className="  dark:bg-gray-900 dark:text-whitebg-[#F5F5F5] text-[#1A1A1A] py-0 pb-6 hover:translate-y-1.5 transition-transform  cursor-pointer">
                        <CardContent className="px-0 overflow-hidden relative rounded-t-lg">
                            <a href={project.url} target="_blank"><img src={project.image} alt={project.title} className="w-full h-48 mb-4 object-cover  object-center transition-transform duration-500 hover:scale-110" /></a>
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div> */}
                        </CardContent>
                        <CardHeader className='px-3'>
                            <CardTitle><a href={project.url} target="_blank" className='text-blue-500 dark:text-blue-400 text-[18px] font-bold hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]'>{project.title}</a></CardTitle>
                            <CardDescription className="dark:text-[#CBD5E1] text-[#1A1A1A] cursor-text text-[14px] line-clamp-2 hover:line-clamp-none transition-all duration-300">{project.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className=" block px-3">
                            <div className=' flex flex-wrap gap-2 mb-3 cursor-text '>
                                {project.stack.map((stack, index)=>(
                                    <span key={index} className='px-2 py-1 text-[12px] dark:bg-gray-800 dark:text-gray-300 bg-gray-200 text-black rounded-full text-xs'>{stack}</span>
                                ))}
                            </div>          
                            <a href={project.url} target='_blank' className='flex justify-center items-center gap-2 px-3 py-1 dark:bg-blue-700 dark:hover:bg-blue-800 dark:active:bg-blue-600 w-24 bg-blue-500 text-[#F5F5F5] hover:bg-blue-800 active:to-blue-600 rounded-2xl transition-all duration-200  text-[14px]'>
                                <Globe size={14}/>
                                Website
                            </a>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}