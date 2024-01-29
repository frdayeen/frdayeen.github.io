
import Link from "next/link"
// import { useRouter } from "next/router"
import React from 'react'
import "./GradientTextAnimation.css"


const CustomizedLinks = ({href, title}:{href:string, title:string}) =>{
    
    return(
        <Link href={href} className={`font-Montserrat mr-4 relative after:bg-teal-600 after:absolute after:h-1 after:w-0  after:top-6 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}> 
        {title} 
        </Link> 
    )
}

const TopNav = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <h1 className="font-Montserrat text-2xl font-bold grad-textanimate">Fazle Rabbi Dayeen</h1>
        <nav>
            <CustomizedLinks href="/" title="Home"/>
            <CustomizedLinks href="/" title="Biography"/>
            <CustomizedLinks href="/" title="Research"/>
            <CustomizedLinks href="/" title="Publications"/>
            <CustomizedLinks href="/" title="Blogs"/>
        </nav>
        
        <nav>
            <Link href={"/"} className="mr-2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-brand-linkedin hover:text-teal-600 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg></Link>
            <Link href={"/"} className="mr-2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-brand-youtube-filled hover:text-teal-600 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" strokeWidth="0" fill="currentColor" /></svg></Link>
            <Link href={"/"} className="mr-2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-brand-github hover:text-teal-600 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></Link>
        </nav>

    </header>
  )
}

export default TopNav
