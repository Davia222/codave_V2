"use client"

import { motion, useMotionValueEvent, useScroll } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import Marquee from "react-fast-marquee"



function Section12() {

    const everyYear = new Date().getFullYear()

    const [colorBlack, setColorBlack] = useState("#0f0d0f")

    const [colorWhite, setColorWhite] = useState("#ececec")

    const [logoColor, setLogoColor] = useState("/logo/logoWhite.png")

    const section6Ref = useRef<any>(null)

    const {scrollYProgress:sec6Progress} = useScroll({
        target:section6Ref,
        offset:["start end", "end"]

    })

    useMotionValueEvent(sec6Progress, "change", (value)=>{

        if(value > 0.95){
            setColorBlack("#ececec")
            setColorWhite("#0f0d0f")
            setLogoColor("/logo/logoBlack.png")
        }


        if(value < 0.95){
            setColorBlack("#0f0d0f")
            setColorWhite("#ececec")
            setLogoColor("/logo/logoWhite.png")
        }

    })

  return (
   <>

   <motion.footer ref={section6Ref} style={{backgroundColor:colorBlack}}>

    <section className='footerNavs'>

        <motion.nav className='footerNav1' style={{color:colorWhite}} >

            <Link href="#section1">
                HOME
            </Link>

            <Link href="#section4">
                ABOUT
            </Link>

            <Link href="#section6">
                SERVICES
            </Link>

            <Link href="#section11">
                CONTACT
            </Link>

        </motion.nav>

    </section>

    <Marquee className="footerMarquee"  direction="right" speed={100}>

           STRATEGY · OPIMIZATION · AESTHETIC · CREATIVE

           </Marquee>

           <motion.section className="footerTxtSec" initial={{y:"-10vh", opacity:0}} whileInView={{y:"0", opacity:1,transition:{delay:0.5, duration:1, ease:"easeInOut"}}} >

           <motion.div className="footerLogoDiv"  >

           <Image src={logoColor} fill  alt="heroLogo" className="heroLogo" priority sizes="100vw"  />

           </motion.div>

           <motion.h1  style={{color:colorWhite}} >ODAVE </motion.h1>

           </motion.section>



           <section className="copyright" style={{color:colorWhite}} >

            <p>CODAVE.SPACE © {everyYear} </p>

            <span> </span>

            <p>DESIGNED BY CODAVE</p>

           </section>

   </motion.footer>

   </>
  )
}

export default Section12
