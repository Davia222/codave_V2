"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'




function Header() {


    ///////////////////////////////////// Up and down header effect onScroll ///////////////////////

 const [goingUp, setGoingUp] = useState(0)

 const {scrollY} = useScroll()

/////////////

 useMotionValueEvent(scrollY, "change", (value)=>{
 
  const prevValue:any = scrollY.getPrevious()

  if(value > prevValue && value > 150){
    setGoingUp(-100)
    
  }
  else{
    setGoingUp(0)
   
  }
 })

 ///////////////////////////////////// Up and down header effect onScroll Ends ///////////////////////

 const [rotater, setRotater] = useState(false)


 ////////////////////// Menu Functions //////////////////////////////

 const [openMenu, setOpenMenu] = useState(false)

 const [menuOpener, setMenuOpener] = useState(true) 
 const [menuCloser, setMenuCloser] = useState(false) 



 ////////////////////// Menu StaggerChildren ///////////////////

 const parentVarient:any = {

    hidden:{
      x:0
    },
    visible:{
      x:0,
      transition:{staggerChildren:0.3,  ease:"linear"}
    },

    exit:{
      x:0,
      transition:{staggerChildren:0.3,  ease:"linear"}
    }
 }

 const childvarient:any = {
  hidden:{
    x:"-100%"
  },
  visible:{
    x:"0%",
    transition:{duration:1,  ease:"easeInOut"}

    
  },

  exit:{
    x:"-100%",
    transition:{duration:1,  ease:"easeInOut"}
  }

 }


 /////////////////// menu Image Effects ////////////////////////


 const [homeImage, setHomeImage] = useState(false) 

 const [aboutImage, setAboutImage] = useState(false) 

 const [servicesImage, setServicesImage] = useState(false) 

 const [contactImage, setContactImage] = useState(false) 



 /////////////////// scrollProgress ///////////////////

  const {scrollYProgress} = useScroll()

  const scrollProX = useTransform(scrollYProgress, [0,1], ["-100%","0%" ]) 

  return (

  <>

  <motion.header initial={{y:-100}} animate={{y:goingUp,  transition:{ease:"easeInOut", duration:0.5}}}> 

    
  <motion.div 

   animate={{rotate: rotater ? 360: 0}}

   whileHover={{backgroundColor:"#0f0d0f", transition:{duration:0.3, ease:"easeInOut"}}}

  onClick={()=>{
    setRotater(true)
    setOpenMenu(true)
    setMenuCloser(true)
    setMenuOpener(false)
  }}

  onAnimationComplete={()=>{
    setRotater(false)
  }}
  
  className='menuOpenDiv' >

  <Image src="/headerImgs/menuOpen.svg" height="20" width="20" alt='menuOpenImg' style={{height:"auto"}} />

</motion.div>


    <motion.div className='headerLogo'>

        <Image src="/logo/logoWhite.png" height={40} width={40} alt='headerLogo' />

    </motion.div>



  </motion.header>



  {/* ///////////// Menu ////////////////// */}

 {menuCloser && <motion.div 

       animate={{rotate: rotater ? 360: 0}}

       whileHover={{backgroundColor:"#9D9EA3", rotate:360}}

          onClick={()=>{
            setOpenMenu(false)
            setMenuCloser(false)
            setMenuOpener(true)
          }}
  
          className='menuCloseDiv' >

          <Image src="/headerImgs/menuClose.svg" height={15} width={15} alt='menuOpenImg' />

     </motion.div>}



<AnimatePresence mode='wait'>



  {openMenu && <motion.nav variants={parentVarient} initial="hidden" animate="visible" exit="exit" className='headerMenu'>

    



   <Link href="#section1" className='menuHome' 
    onClick={()=>{
      setOpenMenu(false)
      setMenuCloser(false)
      setMenuOpener(true)
    }}
   >

    <motion.div variants={childvarient}
     onHoverStart={()=>{
      setHomeImage(true)
     }}

     onHoverEnd={()=>{
      setHomeImage(false)
     }}
    >

       <motion.p
      initial={{rotate:90}} 

     onHoverStart={()=>{
      setHomeImage(true)
     }}

     onHoverEnd={()=>{
      setHomeImage(false)
     }}

     >HOME</motion.p> 

     <AnimatePresence mode='wait'>

      {homeImage && <motion.div className='homeImgDiv'
        initial={{scale:1.2, opacity:0}}
        animate={{scale:1, opacity:0.9, transition:{duration:1, ease:"easeInOut"}}}
        exit={{scale:1.2, opacity:0, transition:{duration:1, ease:"easeInOut"}}}
      >

         <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780502014/Codave-v2/section1Imgs/heroImage_heztbe.png" fill alt='menuHomeImg' className='menuHomeImg' />

      </motion.div>}

      </AnimatePresence>


    </motion.div>



    

     </Link>

  




   <Link href="#section4" className='menuAbout' 
    onClick={()=>{
      setOpenMenu(false)
      setMenuCloser(false)
      setMenuOpener(true)
    }}
    >

    <motion.div variants={childvarient}
     onHoverStart={()=>{
      setAboutImage(true)
     }}

     onHoverEnd={()=>{
      setAboutImage(false)
     }}
    >
      
     <motion.p initial={{rotate:90}}
       onHoverStart={()=>{
        setAboutImage(true)
       }}
  
       onHoverEnd={()=>{
        setAboutImage(false)
       }}
     >ABOUT</motion.p>  

      <AnimatePresence mode='wait'>

      {aboutImage && <motion.div className='homeImgDiv'
        initial={{scale:1.2, opacity:0}}
        animate={{scale:1, opacity:1, transition:{duration:1, ease:"easeInOut"}}}
        exit={{scale:1.2, opacity:0, transition:{duration:1, ease:"easeInOut"}}}
      >

         <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780501888/Codave-v2/aboutImgs/editedPhoto_dbkf4b.png" fill alt='menuAboutImg' className='menuAboutImg' />

      </motion.div>}

      </AnimatePresence>

    </motion.div>


     </Link>

   <Link href="#section6" className='menuServices'
   
    onClick={()=>{
     setOpenMenu(false)
     setMenuCloser(false)
     setMenuOpener(true)
    }}

   >

    <motion.div variants={childvarient}
     onHoverStart={()=>{
      setServicesImage(true)
     }}

     onHoverEnd={()=>{
      setServicesImage(false)
     }}
    >
       <motion.p
      initial={{rotate:90}}

      onHoverStart={()=>{
        setServicesImage(true)
       }}
  
       onHoverEnd={()=>{
        setServicesImage(false)
       }}
      
     >SERVICES</motion.p>  

      <AnimatePresence mode='wait'>

      {servicesImage && <motion.div className='homeImgDiv'
        initial={{scale:1.2, opacity:0}}
        animate={{scale:1, opacity:0.7, transition:{duration:1, ease:"easeInOut"}}}
        exit={{scale:1.2, opacity:0, transition:{duration:1, ease:"easeInOut"}}}
      >

         <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780509640/Codave-v2/servicesImgs/servicesImg5_imtimi.jpg" fill alt='menuServicesImg' className='menuServicesImg' />

      </motion.div>}

      </AnimatePresence>

    </motion.div>

    

     </Link>





   <Link href="#section11" className='menuContact'
     onClick={()=>{
      setOpenMenu(false)
      setMenuCloser(false)
      setMenuOpener(true)
     }}
   >

     <motion.div variants={childvarient}
     onHoverStart={()=>{
      setContactImage(true)
     }}

     onHoverEnd={()=>{
      setContactImage(false)
     }}
     >

      <motion.p
      initial={{rotate:90}}
      onHoverStart={()=>{
        setContactImage(true)
       }}
  
       onHoverEnd={()=>{
        setContactImage(false)
       }}

     >CONTACT</motion.p>

      <AnimatePresence mode='wait'>

      {contactImage && <motion.div className='homeImgDiv'
        initial={{scale:1.2, opacity:0}}
        animate={{scale:1, opacity:0.7, transition:{duration:1, ease:"easeInOut"}}}
        exit={{scale:1.2, opacity:0, transition:{duration:1, ease:"easeInOut"}}}
      >

         <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780501909/Codave-v2/contactImgs/contactImg_r7vcby.png" fill alt='menuContactImg' className='menuContactImg' />

      </motion.div>}

      </AnimatePresence>

    </motion.div>

      

     </Link>


     
  </motion.nav>}

  </AnimatePresence>

  {/* //////////////////////// scrollProgress //////////////////////// */}

  <motion.section className='progressBar'>

    <motion.div className='progressInnerBar'style={{x:scrollProX}} >

    </motion.div>

  </motion.section>

  </>
  )
}

export default Header
