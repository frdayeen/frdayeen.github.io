import React from "react"
import "./HomeComponents.css"
import Link from "next/link"
// import "./AnimateText.css"
import AnimateText from "./AnimateText"


export const HomeBanner = () => {
  return (
   
<section className="container pt-20 pb-40 px-4 mx-auto md:px-8 grid gap-8 bg-zinc-50 md:bg-transparent bg-origin-content rounded-3xl md:grid-cols-10 md:text-left">

<div className="col-span-10 md:col-span-5 mt-10 mx-auto ">
  {/* <img src="./images/dayeen.jpeg" alt="Fazle Rabbi Dayeen" className="w-full rounded-xl"/> */}
  <img alt="dayeen" src="./images/dayeen.jpeg" className="h-72 w-72 shadow-2xl rounded-full object-cover object-[100%_-4 -4rem]" />
<div className="pt-8 font-Montserrat mx-auto flex justify-center">
<p><strong>CONTACT:</strong><br/>
 Fazle Rabbi Dayeen<br/>
Chicago, IL<br/><br/>

</p>

</div>
</div>

<div className="col-span-10 md:col-span-5">
 <div className="mx-auto px-4 py-2 overflow-hidden">
  {/* <h1 className="font-Montserrat font-bold text-3xl md:text-5xl">Doctoral researcher in Material Science. </h1> */}
<AnimateText text="Doctoral Researcher in Physics"/>
<div className="flex overflow-hidden pt-10 font-Montserrat font-bold text-xl md:text-2xl">
  <span className="base-text">Expert in </span>
  <div className="ml-1 grid text-indigo-500">
    <span className="word"> Material Science</span>
    <span className="word"> Mathematical Analysis</span>
    <span className="word">MATLAB, Python &amp; C++</span>
  </div>
</div>
                
  </div>
  
  <p lang="en" className="pt-4 pb-10 mx-4 text-slate-400 text-base leading-9 font-bodyText">
  Hey there! I&apos;m currently diving deep into the fascinating world of thin film, soft condensed matter, and biophysics, pursuing my Ph.D. at the Illinois Institute of Technology. My journey started with a Master&apos;s in theoretical physics, where I explored the mind-bending realm of quantum field theory. I&apos;ve also had valuable experience using cutting-edge technology like Grazing Incident X-ray diffraction at Argonne National Lab.
  <br/><br/>
When it comes to data, I&apos;m your friend! I can analyze it, visualize it, and make it sing with tools like Mathematica, Tableau, Python, and C++. Whether it&apos;s physics, condensed matter, or biophysics, I&apos;m comfortable working with complex concepts and unraveling their secrets. So, if you have any big data challenges or just want to geek out about science, hit me up! I&apos;m always excited to connect and learn more.
    </p>
    <Link href={"/Dayeen_CV.pdf"} target="_blank" download={true} className="bg-teal-600 text-white mx-4 p-2.5 px-6 rounded-lg text-lg font-bold font-Montserrat hover:bg-white hover:text-teal-600 border-2 border-solid border-transparent hover:border-teal-600">Curriculum Vita <svg xmlns="http://www.w3.org/2000/svg" className=" inline-block icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg></Link>
    <Link href={"mailto:fdayeen@hawk.iit.edu"} target="_blank" className={`font-Montserrat font-bold ml-6 relative after:bg-teal-600 after:absolute after:h-1 after:w-0  after:top-6 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}>Email</Link>
</div>

    


</section>
  )
}

