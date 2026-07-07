"use client"

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { CldImage } from "next-cloudinary"
import Image from "next/image"
import { useRef, useState } from "react"




function Section1() {

  const heroSec = useRef<any>(null)

  const { scrollYProgress:heroProgress} = useScroll({
    target:heroSec
  })

  const {scrollYProgress} = useScroll()

 const heroTxtY = useTransform(heroProgress, [0,0.5], ["0vh", "-50vh"])
 const imageScaler = useTransform(heroProgress, [0, 0.8], [1.5, 1])
 const imageY = useTransform(heroProgress, [0,0.8], ["40%", "0%"])

 const imageScaler2 = useTransform(heroProgress, [0.3, 0.8], [3.7, 1])
 const imageRotater = useTransform (scrollYProgress, [0,0.2], [0, 360])

 
 const [backgroundCol, setBackgroundCol] = useState("#ececec")
 const [rotateImg, setRotateImg] = useState("/section1Imgs/rotateBlack.svg")

 useMotionValueEvent(heroProgress, "change", (value)=>{
   if(value > 0.7){
   
    setBackgroundCol("#0f0d0f")
    setRotateImg("/section1Imgs/rotateWhite.svg")
   }

   if(value < 0.7){
    setBackgroundCol("#ececec")
    setRotateImg("/section1Imgs/rotateBlack.svg")
   }
 })


 

  return (
   <>

  <section id='section1' ref={heroSec}>

   <motion.section className="section1Sticker" style={{backgroundColor:backgroundCol}}  >

      <motion.section className="heroTxtSec" initial={{y:"-50vh"}} animate={{y:"0", transition:{delay:0.5, duration:1, ease:"easeInOut"}}}  style={{y:heroTxtY}}>

     <motion.div className="heroLogoDiv"  >

     <Image src="/logo/logoBlack.png" fill  alt="heroLogo" className="heroLogo" priority sizes="100vw"  />

     </motion.div>

     <motion.h1  >ODAVE </motion.h1>

    </motion.section>



<section className="heroImgSec">

<motion.div className="heroImageDiv" style={{scale:imageScaler, y:imageY}} initial={{opacity:0}} animate={{opacity:1, transition:{duration:1, ease:"easeInOut"}}}  >

 <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780502014/Codave-v2/section1Imgs/heroImage_heztbe.png" height="600" width="600"  alt="heroLogo" className="heroImage" loading="eager" />

 </motion.div>

 <motion.div className="heroImageDiv" style={{scale:imageScaler2, rotate:imageRotater}}  >

 <Image src={rotateImg} height={700} width={700}  alt="roundTxt" className="heroImage" style={{height:"auto"}} />

 </motion.div>

</section>
      
     </motion.section>

   </section>
   </>
  )
}

export default Section1
