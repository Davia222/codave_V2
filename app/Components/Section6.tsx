"use client"

import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { CldImage } from "next-cloudinary"
import { useRef, useState } from "react"
import Marquee from "react-fast-marquee"





function Section6() {
   const sec6Ref = useRef<any>(null)
   const [parentRotate,setParentRotate] = useState<number>(90)
   const [childRotate, setChildRotate] = useState<number>(-90)

   const parentRot = useMotionValue(90)
   const childRot  = useMotionValue(-90)

   const {scrollYProgress:sec6Progress} = useScroll({
    target:sec6Ref,
    offset:["start center", "end"]
   })

   const {scrollY} = useScroll()
   
   useMotionValueEvent(scrollY, "change", (value)=>{

    const preValue:any = scrollY.getPrevious()

    if(preValue > value){
      // setParentRotate(-90)
      // setChildRotate(90)

      parentRot.set(-90)
      childRot.set(90)
    }

    if(preValue < value){
      setParentRotate(90)
      setParentRotate(-90)

      parentRot.set(90)
      childRot.set(-90)
    }

  
})

   const colorChangerX = useTransform(sec6Progress, [0,1], ["-100%", "0%"])



   /////////////////////// Services SecTion ///////////////////////


   const servicesDetailsY = useTransform(sec6Progress, [0,1], ["0vh","-500vh"] )


  return (
    <>

    <motion.section id="section6" ref={sec6Ref}>

      <motion.section className="sec6Sticker">


     
        <motion.div className="sec6ColChanger" >
           <motion.div className="sec6ColChanger2" style={{x:colorChangerX}}> </motion.div>
        </motion.div>


         {/* ////////////////// marquee Sec ///////////// */}

            <motion.div className='marqueeParent' style={{rotate:parentRot}} >

              <Marquee className='sec6Marquee' speed={200} gradient gradientColor='#ececec' direction="right" >

            
            <motion.div style={{rotate:childRot, opacity:0.5}}  >

                <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780736736/Codave-v2/servicesImgs/mainGroup2_sphwnm.png" height="1500" width="1500" alt='image' />
                
            </motion.div>
          

            </Marquee>          

            
           </motion.div>


        {/* ////////////////// marquee Sec ///////////// */}



        {/* /////////////////////// services Items Enter ////////////////////// */}


        <motion.section className="servicesDetails" style={{y:servicesDetailsY}}>


          {/* ////// 01 ////// */}

          <motion.article className="webDev">

          {/* ///////// The Service Image ////// */}

          <motion.div className="webDevServImgDiv">

            <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780509640/Codave-v2/servicesImgs/servicesImg5_imtimi.jpg" fill alt="webDev" className="webDevServImg" />

          
          </motion.div>

          {/* ///////// The Service Detail ///////// */}


          <motion.div className="webDevDetails">

            <h1>01. WEB DEVELOPMENT & DESIGN</h1>

            <p>We design and build fast, responsive, SEO-optimized 
           websites that turn visitors into customers. 
           Every site we create is built to rank, load fast, 
           and look stunning on all screen.</p>

          </motion.div>



        </motion.article>


        {/* ////// 02 ////// */}


        <motion.article className="webDev">

          {/* ///////// The Service Image ////// */}

          <motion.div className="webDevServImgDiv">

            <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780509641/Codave-v2/servicesImgs/servicesImg3_cgrb0s.jpg" fill alt="webDev" className="webDevServImg" />

          
          </motion.div>

          {/* ///////// The Service Detail ///////// */}


          <motion.div className="webDevDetails">

            <h1>02. SEARCH ENGINE OPTIMIZATION</h1>

            <p>Getting found on Google isn't luck — it's strategy. 
           We optimize your website from the ground up so your 
           business appears when your customers are searching.</p>

          </motion.div>



        </motion.article>


        {/* ////// 03 ////// */}


        <motion.article className="webDev">

          {/* ///////// The Service Image ////// */}

          <motion.div className="webDevServImgDiv">

            <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780509639/Codave-v2/servicesImgs/servicesImg4_vpjgor.jpg" fill alt="webDev" className="webDevServImg" />

          
          </motion.div>

          {/* ///////// The Service Detail ///////// */}


          <motion.div className="webDevDetails">

            <h1>03. GRAPHICS DESIGN</h1>

            <p>First impressions happen visually. We create logos, 
           brand identities, social media graphics, and 
           marketing materials that make your business 
           impossible to ignore.</p>

          </motion.div>



        </motion.article>




        {/* ////// 04 ////// */}


        <motion.article className="webDev">

          {/* ///////// The Service Image ////// */}

          <motion.div className="webDevServImgDiv">

            <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780509638/Codave-v2/servicesImgs/servicesImg2_lmssjt.jpg" fill alt="webDev" className="webDevServImg" />

          
          </motion.div>

          {/* ///////// The Service Detail ///////// */}


          <motion.div className="webDevDetails">

            <h1>04. DIGITAL GROWTH STRATEGY</h1>

            <p>We don't just build and leave. We share actionable 
           tips, content strategies, and digital roadmaps that 
           help your business grow consistently over time.</p>

          </motion.div>



        </motion.article>



        </motion.section>

        {/* /////////////////////// services Items Enter ////////////////////// */}


      </motion.section>

    </motion.section>
    
    </>
  )
}

export default Section6
