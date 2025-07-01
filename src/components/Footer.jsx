import React from 'react'
import { ContactInfoFollow } from './Contact'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
export default function Footer () {
  return (
    <footer className=" md:max-w-[1000px] md:mx-auto pb-24">
        <div className='md:w-full'>
            <div className='flex gap-6 md:gap-0 flex-col md:flex-row mb-16'>
                <div className="flex-1 pr-8">
                    <h1 className='text-2xl font-bold'>Glodi Code</h1>
                    <p className='text-[#CBD5E1] text-[16px] py-4'>
                        A passionate Frontend Developer specializing in building exceptional digital experiences with modern web technologies.
                    </p>
                    <div className="flex gap-4">
                        <Github size={24} className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]"/>
                        <Linkedin size={24} className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]" />
                        <Twitter size={24} className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]" />
                        <Instagram size={24} className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]" />
                    </div>
                </div>
                <div className="flex-1 flex gap-6 flex-col md:flex-row">
                    <div className=" flex-1  ">
                        <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
                        <ul className=''>
                            <li><a href="#acceuil" className=' hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]'>Home</a></li>
                            <li><a href="#about" className=' hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]'>About</a></li>
                            <li><a href="#skills" className=' hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]'>Skills</a></li>
                            <li><a href="#project" className=' hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]' >Projects</a></li>
                            <li><a href="#contact" className=' hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex-1 ">
                        <ContactInfoFollow  />
                    </div>
                </div>
            </div>
            <div className='h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-md mb-2'></div>
            <div className="md:p-4  text-center flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Glodi Code. All rights reserved.
                </p>
                <p className="text-sm mt-3">
                    Built with ❤️ using React and Tailwind CSS.
                </p>
            </div>
        </div>
    </footer>
  )
}
