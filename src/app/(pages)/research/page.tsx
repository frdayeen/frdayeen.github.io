import AnimateText from "@/app/components/AnimateText"
import Research from "@/app/components/Research"
import { Metadata } from "next";
import React from 'react'


export const metadata: Metadata = {
  title: "Research",
  description: "Research Projects by Fazle R. Dayeen",
};

const Researchpage = () => {
  return (
      
<section className="container pt-20 pb-40 px-4 mx-auto bg-zinc-50 md:bg-transparent bg-origin-content rounded-3xl">
<AnimateText text={"RESEARCH PROJECTS"}/>

<hr/>


<Research/>
  
    </section>
  )
}

export default Researchpage
