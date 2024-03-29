import AnimateText from "@/app/components/AnimateText"
import Publications from "@/app/components/Publications"
import { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications by Fazle R. Dayeen",
};

const Publicationpage = () => {
  return (
        
<section className="container pt-20 pb-40 px-4 mx-auto bg-zinc-50 md:bg-transparent bg-origin-content rounded-3xl">
<AnimateText text={"PUBLICATIONS"}/>
{/* <h2 className="font-Montserrat font-bold text-xl md:text-3xl">PUBLICATIONS</h2> */}
<hr/>
<Publications/>

   </section>
  )
}

export default Publicationpage
