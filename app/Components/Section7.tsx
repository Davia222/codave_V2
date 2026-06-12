"use client"
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'

import CountUp from './CountUp'
import { CldImage } from 'next-cloudinary'

import { useRef, useState } from 'react'
import Image from 'next/image'




function Section7() {

  const sec7Ref = useRef<any>(null)
  const [sec7Mainh1Col, setSec7h1MainCol] = useState("#0f0d0f")
  const [sec7bgCol, setSec7bgCol] = useState("#ececec")

  const [sec7stats, setSec7Stats] = useState(false)

  const {scrollYProgress:sec7Progress} = useScroll({
    target:sec7Ref,
    offset:["start end", "end start"]
  })

  const whyX = useTransform(sec7Progress, [0, 0.5], ["-100%", "0%"])
  const codaveX = useTransform(sec7Progress, [0, 0.5], ["100%", "0%"])
  const handY = useTransform(sec7Progress, [0.2, 0.7 ], ["-120%", "0%"])
  const standoutOpa = useTransform(sec7Progress, [0.5, 0.6], [0, 1])
  const attractOpa = useTransform(sec7Progress, [0.6, 0.7], [0, 1])


  useMotionValueEvent(sec7Progress, "change", (value)=>{

    if(value > 0.4){
      setSec7h1MainCol("#ececec")
      setSec7bgCol("#0f0d0f")
    }

    if(value < 0.4){
      setSec7h1MainCol("#0f0d0f")
      setSec7bgCol("#ececec")
    }

    
    if(value > 0.7){
      setSec7Stats(true)
    }

    if(value < 0.7){
      setSec7Stats(false)
    }

  })



  const parentVarient:any = {
    hidden:{
      y:"0%",
    },

    visible:{
      y:"0%",
      transition:{duration:1, staggerChildren:0.5, repeat:Infinity,ease:"easeInOut"}
    }
  }

  const childVarient:any = {
    hidden:{
      y:"100%",
    },

    visible:{
      y:"0%",
    
    }
  }



  

  return (
   <>
   <section className="section7" ref={sec7Ref}>

    <motion.section className='sec7Sticker' style={{backgroundColor:sec7bgCol}} >

         <motion.div className="handImgDiv" animate={{}} style={{y:handY}} >

              <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780809736/Codave-v2/servicesImgs/hand_sjzq88.png" height="600" width="600" alt="sec1Hand" className="sec7HandDiv" />

         </motion.div>


         <motion.h1 className="sec7Mainh1" style={{color:sec7Mainh1Col}}  >

           <motion.span style={{x:whyX}}>WHY</motion.span>
           <motion.span style={{x:codaveX}}>CODAVE?</motion.span>

         </motion.h1>   


          <motion.div className="sec7chat1Div" style={{opacity:standoutOpa}} >

              <Image src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780814388/Codave-v2/servicesImgs/attract_iwzogu.svg" height="100" width="150" alt="sec1Hand" className="sec7chat1Img" />

         </motion.div>


         <motion.div className="sec7chat2Div" style={{opacity:attractOpa}} >

              <Image src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780814954/Codave-v2/servicesImgs/standout1_ogdcxr.svg" height="100" width="150" alt="sec1Hand" className="sec7chat2Img" />

         </motion.div>

         <AnimatePresence mode='wait'>

         { sec7stats && <motion.div className='sec7stats'

             initial={{y:"100%", opacity:0}}
             animate={{y:"0%", opacity:1}}
             exit={{y:"100%", opacity:0}}
          >

      {/* ///////////////// Stats 1 //////// */}      

            <motion.div className='stat1'>


              <motion.div animate={{rotate:[180,0], transition:{duration:1, ease:"backInOut", repeat:4}}}>

              
                <Image src='https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780832656/Codave-v2/servicesImgs/Vector_xitu1v.svg'
                     height="35"
                     width="35"
                     alt='timeImg'
                     className='statTime' />

               </motion.div>

            <p className='statsCount'>
                   <CountUp
                         from={0}
                         to={5}
                         separator=","
                         direction="up"
                         duration={0.1}
                         className="count-up-text"
                         delay={0} /> + 
                  </p>

                  <p className='yearsStats' >Years of Experience</p>


             
  
            </motion.div>

            
    {/* ///////////////// Stats 2 //////// */}

            <motion.div className='stat2'>

              <motion.div variants={parentVarient} initial="hidden" animate="visible" className='stats2Anim'>

              <motion.div variants={childVarient} className="stats2Candle1"></motion.div>
              <motion.div variants={childVarient} className="stats2Candle2"></motion.div>
              <motion.div variants={childVarient} className="stats2Candle3"></motion.div>
              <motion.div variants={childVarient} className="stats2Candle4"></motion.div>
               

               </motion.div>

            <p className='statsCount'>
                   <CountUp
                         from={0}
                         to={50}
                         separator=","
                         direction="up"
                         duration={0.1}
                         className="count-up-text"
                         delay={0} /> + 
                  </p>

                  <p className='yearsStats' >Projects Completed</p>

            </motion.div>


    {/* ///////////////// Stats 3 //////// */}        

           <motion.div className='stat2'>

              <motion.div variants={parentVarient} initial="hidden" animate="visible" className='stats3Anim'>

                <motion.div className='sec3AnimInner'>

                  <motion.div className='stat3Anim1' initial={{x:-50, y:100, rotate:-45}} animate={{x:0,rotate:180 ,y:0, transition:{duration:1}}}>

                </motion.div>


                <div className='stats3Anim2'>

                </div>

                </motion.div>

                


               </motion.div>

            <p className='statsCount'>
                   <CountUp
                         from={0}
                         to={100}
                         separator=","
                         direction="up"
                         duration={0.1}
                         className="count-up-text"
                         delay={0} />% 
                  </p>

                  <p className='yearsStats' >Commitment to Clients</p>

            </motion.div>

         </motion.div>}


         </AnimatePresence>



    </motion.section>

   </section>

   </>
  )
}

export default Section7
