"use client"

import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"



function Loading() {
  return (
   <>

   <AnimatePresence mode="wait">

     <motion.section  className="loadingSec" animate={{y:"-100%", transition:{delay:3 , duration:0.5,ease:"linear"}}}  >

        <motion.div className="loadingLogo" animate={{opacity:[0.5,0.9,0.5], transition:{ duration:1,ease:"easeInOut" ,repeat:Infinity, } }}>

            <Image src="/logo/logoWhite.png" height={100} width={100} alt="logoWhite" priority />

           
        </motion.div>

        <motion.h1 className="loadingH1" animate={{opacity:[0.5,1,0.5], transition:{ duration:1, ease:"easeInOut" ,repeat:Infinity, } }}>ODAVE</motion.h1>
          
    </motion.section>

   </AnimatePresence>
 
   </>
  )
}

export default Loading
