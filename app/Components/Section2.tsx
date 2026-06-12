"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"



function Section2() {

    //////////////////// scroll with enlarge enter /////////////////////

    //////////////////// scrollText 1 ///////////////////////


   const scrollTarget1 = useRef<any>(null)

  


   const {scrollYProgress:progress1 } = useScroll({
      target:scrollTarget1,
      offset:["start end", "end 80%"]
      
   })

   const width1 =  useTransform(progress1, [0,1], ["0%", "100%"])



   //////////////////// scrollText 2 ///////////////////////

   
   const scrollTarget2 = useRef(null)

   const {scrollYProgress:progress2 } = useScroll({
      target:scrollTarget2,
      offset:["start end", "end 80%"]
      
   })

   const width2 =  useTransform(progress2, [0,1], ["0%", "100%"])


   //////////////////// scrollText 3 ///////////////////////

   const scrollTarget3 = useRef(null)

   const {scrollYProgress:progress3 } = useScroll({
      target:scrollTarget3,
      offset:["start end", "end 80%"]
      
   })

   const width3 =  useTransform(progress3, [0,1], ["0%", "100%"])


   //////////////////// scrollText 4 ///////////////////////

   const scrollTarget4 = useRef(null)

   const {scrollYProgress:progress4 } = useScroll({
      target:scrollTarget4,
      offset:["start end", "end 80%"]
      
   })

   const width4 =  useTransform(progress4, [0,1], ["0%", "100%"])


    //////////////////// scrollText 5 ///////////////////////

    const scrollTarget5 = useRef(null)

    const {scrollYProgress:progress5 } = useScroll({
       target:scrollTarget5,
       offset:["start end", "end 80%"]
       
    })
 
    const width5 =  useTransform(progress5, [0,1], ["0%", "100%"])


  return (
    <>
    <section className="section2">
        {/* //////////////////////// scroll Text width scale ///////////////////////// */}

  

         <h1 className='aboutHeader'>

            <motion.span
            animate={{opacity:[0,1], transition:{duration:0.3, ease:"easeInOut", repeatType:"mirror", repeat: Infinity, }}}
         >_</motion.span>
         
         </h1>

         <motion.p ref={scrollTarget1} className='scrollTarget1'
         style={{width:width1}}
         > We help businesses build online presence  </motion.p>


          <motion.p ref={scrollTarget2} className='scrollTarget1'
         style={{width:width2}}
         > Through bold websites, graphic design, </motion.p>


         <motion.p ref={scrollTarget3} className='scrollTarget1'
         style={{width:width3}}
         >and strategies that actually work. </motion.p>


          <motion.p ref={scrollTarget4} className='scrollTarget1'
         style={{width:width4}}
         >Your story deserves to be told beautifully </motion.p>


         <motion.p ref={scrollTarget5} className='scrollTarget1'
         style={{width:width5}}
         >We make sure the right people find it. <motion.span
            animate={{opacity:[1,0], transition:{duration:0.3, ease:"easeInOut", repeatType:"mirror", repeat: Infinity, }}}
         >_</motion.span></motion.p>





      {/* //////////////////////// scroll Text width scale ends ///////////////////////// */}
    </section>
    </>
  )
}

export default Section2
