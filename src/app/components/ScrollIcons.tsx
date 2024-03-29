import { motion, useScroll } from "framer-motion"
import React, { useRef } from 'react'


const ScrollIcons = ({reference}:{reference:any}) => {
   
    const {scrollYProgress} = useScroll(
      {
        target: reference,
        offset: ["center end", "center center"]
      }
    )
  return (
    <figure className="absolute left-0 stroke-teal-500">
        <svg className="rotate-180" width={"75"} height={"75"} viewBox="0 0 100 100">
          <circle cx={"75"} cy={"50"} r={"20"} className="stroke-teal-500 stroke-1 fill-none"/>
          <motion.circle cx={"75"} cy={"50"} r={"20"} className=" stroke-[5px] fill-white"
          style={{
            pathLength: scrollYProgress
          }}
          />
          <circle cx={"75"} cy={"50"} r={"10"} className="animate-pulse stroke-1 fill-teal-500"/>
        </svg>
      </figure>
  )
}

export default ScrollIcons
