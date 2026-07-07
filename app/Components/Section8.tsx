"use client"

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { CldImage, CldVideoPlayer } from "next-cloudinary"
import 'next-cloudinary/dist/cld-video-player.css';
import Link from "next/link";

import { useEffect, useRef, useState } from "react"


function Section8() {

   

    const [innerXWidth1, setInnerXWidth1] = useState("-600vw")
    const [innerXWidth2, setInnerXWidth2] = useState("0vw")

    useEffect(()=>{

    const ourWidth = window.innerWidth

      if(ourWidth < 700){
        setInnerXWidth1("-4200px")
        setInnerXWidth2("0px")
      }

      if(ourWidth > 700){
        setInnerXWidth1("-600vw")
        setInnerXWidth2("0vw")
      }

    },[])
    


    const sec8Ref = useRef<any>(null)

    const {scrollYProgress:sec8Progress} = useScroll({
        target:sec8Ref
    })

    const innerX = useTransform(sec8Progress, [0,1], [innerXWidth1, innerXWidth2])

    const [innerBgCol, setInnerBgCol] = useState("#0f0d0f")

    useMotionValueEvent(sec8Progress, "change", (value)=>{
        if(value > 0.05){
            setInnerBgCol("#ececec")
        }

        if(value < 0.05){
            setInnerBgCol("#0f0d0f")
        }
    })

  return (
   <>
   <motion.section className="section8" ref={sec8Ref} style={{backgroundColor:innerBgCol}}>

    <motion.section className="sec8Sticker" style={{backgroundColor:innerBgCol}}>

    <motion.div className="designH1Div" style={{backgroundColor:innerBgCol}}></motion.div>

        <motion.section className="sec8Inner" style={{x:innerX, backgroundColor:innerBgCol}}>

           




            <motion.div className="logos">

            <motion.h1>LOGOS</motion.h1>
            <div className="logoImgDiv">

                <div className="logoImgDiv1">

                    <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780936739/Codave-v2/DesignImgs/715493764_940364679047289_4582354427798229450_n_ui2cxx.png"
                    height="300"
                    width="500"
                    alt="posterImg1"
                    className="logoImg"

                     />

                </div>
                

                <div className="logoImgDiv2">
                    <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780936724/Codave-v2/DesignImgs/710516705_977383685183609_8359678561716237825_n_agebvp.png"
                    height="300"
                    width="500"
                    alt="posterImg2"
                    className="logoImg"
                     />
                </div>

                

             </div>
            </motion.div>

            
            <motion.div className="websites">

            <motion.h1>WEBSITES</motion.h1>

             <div className="websiteVidDiv">

                <Link href="https://evanhale.vercel.app/" className="websiteVidDiv1" target="_blank">

                    <CldVideoPlayer src="https://res.cloudinary.com/dyrzp2wi6/video/upload/v1780911595/Codave-v2/DesignImgs/Evanhale_eeuhjw.mp4"
                autoplay="always"
                loop
                muted
                controls={false}
                width="1920"
                height="1080"
                               
               />

                </Link>

                

               <Link href="kaels-website.vercel.app" className="websiteVidDiv2" target="_blank">

                <CldVideoPlayer src="https://res.cloudinary.com/dyrzp2wi6/video/upload/v1780911594/Codave-v2/DesignImgs/Keal_swebsite_lhfbku.mp4"
                 autoplay="always"
                 loop
                 muted
                 controls={false}
                 width="1920"
                 height="1080"
                 
                />

               </Link>

                

                

             </div>
           
            </motion.div>

            
            <motion.div className="posters">

                <motion.h1>POSTERS</motion.h1>

            <div className="posterImgDiv">

                <div className="posterImgDiv1">

                    <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780911646/Codave-v2/DesignImgs/POSTER1_bgshbz.png"
                    height="400"
                    width="400"
                    alt="posterImg1"
                    className="posterImg"

                     />

                </div>
                

                <div className="posterImgDiv2">
                    <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780911669/Codave-v2/DesignImgs/Vespa_ocwb2r.png"
                    height="400"
                    width="400"
                    alt="posterImg2"
                    className="posterImg"
                     />
                </div>

                

             </div>



            </motion.div>


          
        </motion.section>

    </motion.section>

   </motion.section>
   </>
  )
}

export default Section8
