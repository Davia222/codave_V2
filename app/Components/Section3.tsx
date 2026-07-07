"use client"

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { CldImage } from "next-cloudinary"
import { useRef, useState } from "react"







function Section3() {

  const sec3Ref = useRef<any>(null)

  const {scrollYProgress:sec3Progress} = useScroll({
    target:sec3Ref,
    offset:["start end", "end start"]
  })

  

  const {scrollYProgress} = useScroll()

  const firstY = useTransform(sec3Progress, [0,1], [300,0])

  const SecondY = useTransform(sec3Progress, [0,1], [100,-100])

  const txtX = useTransform(scrollYProgress, [0.1,0.5], ["15%","-25%"])



  const [bgCol, setBgCol] = useState("#0f0d0f")
  const [textCol, setTextCol] = useState("#ececec")
  const [mixBlend, setMixBlend] = useState<any>("difference")

  useMotionValueEvent(sec3Progress, "change" , (value)=>{
    if(value > 0.5){
      setBgCol("#ececec")
      setTextCol("#0f0d0f")
      setMixBlend("normal")
     
    }

    if(value < 0.5){
      setBgCol("#0f0d0f")
      setTextCol("#ececec")
      setMixBlend("difference")
    }
  })


  return (
  <>
  
  <section className='section3' ref={sec3Ref}>

    <motion.section className="sec3Sticker" style={{backgroundColor:bgCol}} >

      <motion.div className="sec3ImgDiv1" >

      </motion.div>
 
      <motion.div className="sec3ImgDiv2"  style={{y:SecondY, }} >

        <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780501888/Codave-v2/aboutImgs/editedPhoto_dbkf4b.png" height="600" width="600" alt="aboutImage"  />

       </motion.div>

       <motion.h1 className="sec3txt" style={{x:txtX, color:textCol, mixBlendMode:mixBlend }}>Big online presence Through Stunning Visuals.</motion.h1>

    </motion.section>




  </section>

  </>
  )
}

export default Section3
