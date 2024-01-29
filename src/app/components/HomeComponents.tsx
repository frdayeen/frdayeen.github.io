import React from "react"
import "./HomeComponents.css"
import Link from "next/link"


const HomeComponents = () => {
  return (
   
<section className="container pt-20 pb-40 px-4 mx-auto md:px-8 grid gap-8 bg-zinc-50 md:bg-transparent bg-origin-content rounded-3xl md:grid-cols-10 md:text-left">

<div className="col-span-10 md:col-span-5 mt-10 mx-auto h-72 w-72 rounded-full shadow-2xl">
  {/* <img src="./images/dayeen.jpeg" alt="Fazle Rabbi Dayeen" className="w-full rounded-xl"/> */}
  <img alt="dayeen" src="./images/dayeen.jpeg" className="h-72 w-72 rounded-full object-cover object-[100%_-4 -4rem]" />
<div className="pt-8 font-Montserrat mx-auto flex justify-center">
<p>Fazle Rabbi Dayeen<br/>
Chicago, IL<br/><br/>

</p>

</div>
</div>

<div className="col-span-10 md:col-span-5">
 <div className="mx-auto px-4 py-2 overflow-hidden">
  <h1 className="font-Montserrat font-bold text-3xl md:text-5xl text-teal-500">Doctoral researcher in Material Science. </h1>

<div className="flex overflow-hidden pt-10 font-Montserrat font-bold text-xl md:text-2xl">
  <span className="base-text">Expert in </span>
  <div className="ml-1 grid text-indigo-500">
    <span className="word"> Data Analysis</span>
    <span className="word"> Python</span>
    <span className="word"> C++</span>
  </div>
</div>
                
  </div>
  
  <p lang="bn" className="pt-4 pb-10 mx-4 text-slate-400 text-xl leading-9 font-bodyText">
  Working to pursue PhD degree in Soft condensed matter & Biophysics at Illinois Institue of technology. Has experience working with Grazing Incident X-ray diffraction at Argonne National Laboratory. Completed Master of Science (MSc) in Theoretical Physics with a thesis on Quantum Field Theory. Experienced in Data analysis and Data visualization. Expertise includes Computational Physics, Condensed matter physics and Biophysics. Proficient in working with large data sets using Mathematica, Tableau and have good command over Python, C++.
    </p>
    <Link href={"/Dayeen_CV.pdf"} target="_blank" download={true} className="bg-teal-600 text-white mx-4 p-2.5 px-6 rounded-lg text-lg font-bold font-Montserrat hover:bg-white hover:text-teal-600 border-2 border-solid border-transparent hover:border-teal-600">Resume &nbsp; <svg xmlns="http://www.w3.org/2000/svg" className=" inline-block icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg></Link>
    <Link href={"mailto:fdayeen@hawk.iit.edu"} target="_blank" className={`font-Montserrat font-bold ml-6 relative after:bg-teal-600 after:absolute after:h-1 after:w-0  after:top-6 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}>Contact</Link>
</div>

    


</section>
  )
}

export default HomeComponents
