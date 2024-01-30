"use client"
import React, { useRef } from 'react'
import { useScroll, motion } from "framer-motion"
import ScrollIcons from "./ScrollIcons"


const Details =({projectName, time, workDetails}:{projectName:any, time:any, workDetails:any}) =>{
  const ref = useRef(null)

  return(
    <li ref={ref} className="pl-8 my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between">
      <ScrollIcons reference={ref}/>
      <motion.div className="ml-6"
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
      <h3 className=" font-bold text-lg md:text-xl font-Montserrat text-teal-600">{projectName}</h3>
      <h3 className=" font-semibold font-Montserrat  text-lg md:text-xl text-indigo-500">{time}</h3>
     
      <p className="pt-4 float-left font-medium text-base md:text-lg">
        {workDetails}
      </p>
      </motion.div>
    </li>
  )
}
const Research = () => {
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
className="absolute left-4 top-0 w-[4px] h-full bg-teal-600 origin-top" />
      <ul>
       
<Details projectName={"Analyzing the property of insoluble monolayers at physiological temperature "} 
  time={"2020-Present"}
  workDetails={"The primary goals of this research will be elucidating the role of individual molecules in pulmonary surfactant, their cooperation at the molecular scale required for proper lung function, and the design of synthetic surfactant mimics."}
  />

<Details projectName={"Building a computational model to identify the emerging topics from scientific literature. "} 
  time={"2019-2020"}
  workDetails={"We used latent Dirichlet allocation (LDA)—a probabilistic approach to retrieve topics from the abstract of over 35,000 publications on industrial ecology to uncover the main topics (consisting of new terms) that naturally emerge from them. The evolution in time of the importance of some emerging topics is then analyzed on the basis of their relative frequency. Overall, a rapid growth in climate change publications is observed."}
  />


<Details projectName={"DFT+U Simulation of LaNiO3 using python and the Vienna Ab initio Simulation Package (VASP)."} 
  time={"2018-2019"}
  workDetails={"We computed the structural property, the correlated electronic structure, and the vacancy energetics of LaNiO3 thin films using computer simulation. In this project Vienna Ab-initio simulation package (VASP) was used to perform the Density Funtional Theory (DFT) plus U calculations on the thin films of LaNiO3."}
  />


<Details projectName={"Cause-Effect Pair Detection: A classification based approach."} 
  time={"2016"}
  workDetails={"We attempted to build a classification based approach to solve the cause-effect pair detection problem and thus addresses the importance of attributing causes to effects which is pervasive in almost every aspects of our daily life involving human reasoning and decision making."}
  />


<Details projectName={"Application of Aboav-Weaire's and Lewis' laws and calculation of Self-similarity in weighted planar stochastic lattice."} 
  time={"2013-2014"}
  workDetails={"In this study, we show that the block size distribution function in the weighted planar stochastic lattice (WPSL) exhibits dynamic scaling. We also checked if the WPSL obeys the Lewis and the Aboav-Weaire laws by running simulation written in C++ programming language."}
  />


<Details projectName={"Analysis of constraint structure of coupling of vector gauge field to a massive tensor field in presence of pseudoscalar and a scalar mass term"} 
  time={"2012-2013"}
  workDetails={"A thesis project on toward the degree of Master of Science in Theoretical Physics by Fazle Rabbi Dayeen. We consider a model in which vector gauge field is coupled directly to an antisymmetric tensor field in presence of a pseudoscalar and a pure scalar mass term and hence calculate the degrees of freedom."}
  />


<Details projectName={"Generating and visualizing the fractal property of Julia-Mandelbrot set using C++ and Gnuplot."} 
  time={"2009"}
  workDetails={"The Julia-Mandelbrot set is the one of the famous object in computational physics and modern mathematics. We developed a C++ code that generates and plot the set by iterating a simple function on the points of the complex plane."}
  />
        
      </ul>
    </div>
  )
}

export default Research
