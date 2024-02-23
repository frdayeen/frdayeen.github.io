"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import { useRouter } from "next/router"
import React, { useState } from 'react'
import {motion} from "framer-motion"



const CustomizedLinks = ({ href, title }: { href: string, title: string }) => {

    return (
        <Link href={href} className={`font-Montserrat mr-4 relative after:bg-teal-600 after:absolute after:h-1 after:w-0  after:top-6 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}>
            {title}
        </Link>
    )
}

const CustomizedMobileLinks = ({ href, title, toggle }: { href: string, title: string, toggle:any }) => {
    const router = useRouter()
    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button onClick={handleClick} className={`font-Montserrat mr-4 py-3 relative after:bg-teal-600 after:absolute after:h-1 after:w-0  after:top-9 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}>
            {title}
        </button>
    )
}

const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="container px-4 mx-auto py-8 font-medium flex items-center justify-start lg:justify-between relative ">

            <button className="flex-col flex lg:hidden" onClick={handleClick}>
                <span className={`bg-black  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`}></span>
                <span className={`bg-black  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-black  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5' }`}></span>
            </button>

            <h1 className="px-4 font-Montserrat text-2xl font-bold text-transparent bg-gradient-to-r from-teal-500 via-green-500 to-indigo-500 bg-clip-text">Fazle Rabbi Dayeen</h1>


            <nav className="hidden lg:flex">
                <CustomizedLinks href="/" title="Home" />
                <CustomizedLinks href="/biography" title="Biography" />
                <CustomizedLinks href="/research" title="Research" />
                <CustomizedLinks href="/publications" title="Publications" />
                <CustomizedLinks href="https://www.frdayeen.com/search/label/Notes" title="Blogs" />
            </nav>

            <nav className="hidden lg:flex">
                <Link href={"/"} className="mr-2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-brand-linkedin hover:text-teal-600 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg></Link>
                <Link href={"/"} className="mr-2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-brand-youtube-filled hover:text-teal-600 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" strokeWidth="0" fill="currentColor" /></svg></Link>
                <Link href={"/"} className="mr-2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-brand-github hover:text-teal-600 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></Link>
            </nav>

             {/* mobile menu  */}
          
{
    isOpen ? <motion.div 
    initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
    animate={{scale:1, opacity:1}}
    className="min-w-[70vw] z-20 flex flex-col justify-between items-center fixed 
     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-100/90 rounded-lg backdrop-blur-md py-32">
      <nav className="flex items-center flex-col justify-center">     
           <CustomizedMobileLinks href="/" title="Home" toggle={handleClick}/>
           <CustomizedMobileLinks href="/biography" title="Biography" toggle={handleClick}/>
           <CustomizedMobileLinks href="/research" title="Research" toggle={handleClick}/>
           <CustomizedMobileLinks href="/publications" title="Publications" toggle={handleClick}/>
           <CustomizedMobileLinks href="/blogs" title="Blogs" toggle={handleClick}/>
       </nav>
{/* mobile menu  */}
       <nav className="pt-8">
           <Link href={"/"} className="mr-2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-brand-linkedin hover:text-teal-600 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg></Link>
           <Link href={"/"} className="mr-2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-brand-youtube-filled hover:text-teal-600 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" strokeWidth="0" fill="currentColor" /></svg></Link>
           <Link href={"/"} className="mr-2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-brand-github hover:text-teal-600 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></Link>
       </nav>
       </motion.div>

    : null
}

         
        </header>
    )
}

export default TopNav
