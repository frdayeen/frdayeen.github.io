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
Fazle Rabbi Dayeen, currently working as a doctoral researcher at Illinois Institute of Technology. The ability of physics to explain the complex real world with elegant model and verifying those with simulation always enthralled him. He completed his undergraduate degree from the Department of Physics, University of Dhaka, the highest ranked university in Bangladesh and the university where the birth of Bose-Einstein statistics took place by S.N. Bose.
<br/><br/>
Building on this foundation, he started learning modern computational physics while at the university. He learned the required Mathematics and later worked on research projects related to computational physics. After completing his Masters he got admitted at University of Illinois Chicago where he briefly worked in Computational Material Science. Where he formulated a fully charge self-consistent DFT+DMFT theory methodology. For this project he used VASP for calculating the density functional theory and developing a Python code for the dynamical mean-field theory.
<br/><br/>
He transferred to Illinois Institute of Technology few years after that and started working under supervision of Dr. David Gidalevitz. He got the opportunity to work at Argonne National Laboratory as a part of his project.
</p>
    </section>
  )
}

export default Biographypage
