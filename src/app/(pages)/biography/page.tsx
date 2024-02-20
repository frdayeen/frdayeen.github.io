import AnimateText from "@/app/components/AnimateText"
import { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Biography",
  description: "Biography of Fazle R. Dayeen",
};

const Biographypage = () => {
  return (
    
<section className="container pt-20 pb-40 px-4 mx-auto bg-zinc-50 md:bg-transparent bg-origin-content rounded-3xl">
<AnimateText text={"BIOGRAPHY"}/>
{/* <h2 className="font-Montserrat font-bold text-xl md:text-3xl">BIOGRAPHY</h2> */}
<hr/>
<p className="pt-8 text-base md:text-xl">
Fazle Rabbi Dayeen is a doctoral researcher, at Illinois Institute of Technology, U.S.A. 
Dayeen explores the crystal structure of liquid thin film. He received his Masters degree from University of Dhaka, Bangladesh from Department of Theoretical Physics.
</p>
    </section>
  )
}

export default Biographypage
