"use client"
import React, { useRef } from 'react'
import { useScroll, motion } from "framer-motion"
import ScrollIcons from "./ScrollIcons"
import Link from "next/link"


const PaperDetails =({authors, journal, publisher, journalLink, date }:{authors:any, journal:any, publisher:any, journalLink:any, date:any }) =>{
  const ref = useRef(null)

  return(
    <li ref={ref} className="pl-8 my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between">
      <ScrollIcons reference={ref}/>
      <motion.div className="ml-6"
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
      
     <p className="pt-4 float-left font-medium text-lg md:text-xl">{authors}, <em>{journal}</em>, {publisher}.<Link href={journalLink}>{journalLink}</Link>, ({date})</p>
     
      
      </motion.div>
    </li>
  )
}

const Publications = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
      {
        target: ref,
        offset: ["start end", "center start"]
      }
    )
    return (
      <div ref={ref} className="mx-4 mt-8 relative">
  
  
  <motion.div 
  style={{scaleY:scrollYProgress}}
  className="absolute left-4 top-0 w-[4px] h-[140%] bg-teal-600 origin-top" />
        <ul>


<PaperDetails authors={"Dayeen, Fazle; Brandner, Bret; Bu, Wei; Hall, Stephen; Gidalevitz, David" } 
journal={"Bond-Orientational Order in a Mimic of Pulmonary Surfactant"} 
publisher={"Manuscript ID: am-2023-172475 submitted in ACS Applied Materials & Interfaces"} 
journalLink={"#"} 
date={"November 2023"}/>


<PaperDetails authors={"Fazle R Dayeen, Bret A Brandner, Michael W Martynowycz, Kamil Kucuk, Michael J Foody, Wei Bu, Stephen B Hall, David Gidalevitz" } 
journal={"Effects of cholesterol on the structure and collapse of DPPC monolayers"} 
publisher={"Biophysical Journal, Volume 121, Issue 18, Pages 3533-3541, Publisher: Elsevier"} 
journalLink={"#"} 
date={"September 2022"}/>  


<PaperDetails authors={"F.R. Dayeen, A.S. Sharma, Sybil Derrible" } 
journal={"A Text Mining Analysis of the Climate Change Literature in Industrial Ecology"} 
publisher={"Journal of Industrial Ecology, Volume24, Issue2, Special Issue: Industrial Ecology of Climate Change Adaptation and Resilience, Pages 276-284"} 
journalLink={"#"} 
date={"April 2020"}/> 


<PaperDetails authors={"F.R. Dayeen, M.K. Hassan" } 
journal={"Multi-multifractality, dynamic scaling and neighbuorhood statistics in weighted planar stochastic lattice"} 
publisher={"Chaos, Solitons & Fractals, Volume 91, Pages 228-234, ISSN 0960-0779"} 
journalLink={"#"} 
date={"October 2016"}/> 


<PaperDetails authors={"F.R. Dayeen, M.K. Hassan" } 
journal={"Self-similarity, Aboav-Weaire’s and Lewis’ laws in weighted planar stochastic lattice"} 
publisher={"Preprint arXiv:1409.7928v1"} 
journalLink={"#"} 
date={"September 2014"}/> 
          
        </ul>
      </div>
    )
}

export default Publications
