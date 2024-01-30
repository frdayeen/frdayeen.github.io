"use client"
import React from 'react'
import {motion} from "framer-motion"


const SkillList = ({skillname, x,y}:{skillname:any, x:any,y:any}) => {
  return(
<motion.div className="absolute flex items-center justify-center rounded-full font-semibold cursor-pointer bg-teal-600 text-white px-3 py-4 shadow-black"
      whileHover={{scale:1.05}}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y}}
      transition={{duration:1.5}}
      viewport={{once:true}}
      >
{skillname}
      </motion.div>
  )

}


const Skills = () => {
  return (
    <>
    <h2 className="font-bold text-2xl md:text-3xl w-full text-center">skills</h2>
    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularskill">
      <motion.div className="flex items-center justify-center rounded-full font-semibold cursor-pointer bg-teal-600 text-white p-8 shadow-black"
      whileHover={{scale:1.05}}
      >
Physics
      </motion.div>
      <SkillList skillname={"Material Science"} x="-20" y="6vw"/>
      <SkillList skillname={"Thin Film"} x="-5vw" y="-10vw"/>
      <SkillList skillname={"Crystal Structure"} x="20vw" y="6vw"/>
      <SkillList skillname={"X-ray reflectivity"} x="0vw" y="12vw"/>
      <SkillList skillname={"X-ray Diffraction"} x="-20vw" y="-15vw"/>
      <SkillList skillname={"Data Analysis"} x="15vw" y="-12vw"/>
      <SkillList skillname={"Python"} x="32vw" y="-5vw"/>
      <SkillList skillname={"C++"} x="0vw" y="-20vw"/>
    </div>
    </>
  )
}

export default Skills
