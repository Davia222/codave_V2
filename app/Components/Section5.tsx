"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { CldImage } from "next-cloudinary"
import { useRef } from "react"





function Section5() {

    const sec5Ref = useRef<any>(null)

    const {scrollYProgress} = useScroll({
        target:sec5Ref,
        offset:["start end", "end start"]
    })

    const sec5ImgY  = useTransform(scrollYProgress, [0, 1], [-200,200])

  return (
    <>
     <section className='section5' ref={sec5Ref}>

        <section className="sec5ImgSec">

        <motion.div
         className='sec5BgImgDiv'
          initial={{scale:1.2}} 
          animate={{scale:1 ,transition:{duration:1, ease:"easeInOut"}}}
          style={{y:sec5ImgY}}
           >

            <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780571895/Codave-v2/aboutImgs/ryoji-iwata-X53e51WfjlE-unsplash_yamy4m.jpg" alt="preServiceBgImage" fill className="sec5Img" />

        </motion.div>

        <h1 className="sec5H1_1">EVERYONE IS MOVING! </h1>

        <h1 className="sec5H1_2">ARE THEY FINDING YOU?</h1>

        </section>

     </section>
    </>
  )
}

export default Section5
