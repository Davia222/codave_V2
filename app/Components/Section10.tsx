"use client"



import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"








function Section10() {

    const boxRef = useRef<any>(null)

    const boxRef2 = useRef<any>(null)

    useEffect(()=>{
      
      const handleMouseMove = (e:any) => {
    
        const x = e.clientX
    
        const y = e.clientY
    
        const percentX = x / window.innerWidth * 100
    
        const percentY = y / window.innerHeight * 100

        const checkNum = window.innerWidth
    
        console.log(`horizontal: ${percentX}% vertical: ${percentY}%`," innerWidth:", checkNum  )
    
        const theBox = boxRef.current
        const theBox2 = boxRef2.current
    
        theBox.style.transform = `translate3d(${percentX}px, ${percentY}px, 0)` ;
        theBox2.style.transform = `translate3d(${percentX}px, ${percentY}px, 0)` ;
        
       
      }
    
    
      window.addEventListener("mousemove", handleMouseMove)
    
      return ()=> window.removeEventListener("mousemove", handleMouseMove)
    
    },[])


    ///////// State for Hover

    const [community, setComunity] = useState<boolean>(false)

    const [comLogo, setComLogo] = useState<string>("/cmtyIcons/Ellipse 2.svg")


  return (

    <>

    <section className="section10">

      

        <h1 className="sec10H1_1">CODAVE ALSO CREATES </h1>

        <h1 className="sec10H1_2">CONTENT ON SOCIAL MEDIA </h1>


        <div className='leftSide'>


<motion.div className='leftEye'
 animate={{rotate:-15}} 
>

  <motion.div className="box1" ref={boxRef} >

    <Image src={comLogo} height={50} width={50} alt='comLogo' />

   

    </motion.div> 

  {/* <motion.div className="box1_2"
  animate={{
    x:[ 0, 20, 0],
      transition:{repeat:Infinity, duration:3, delay:3 ,ease:"easeInOut", repeatDelay:3} }} 
  
   /> */}

</motion.div>



</div>


<div className='rightSide'>


<motion.div className='rightEye'
animate={{rotate:15}} 
> 

  <motion.div className="box2" ref={boxRef2} >

  <Image src={comLogo} height={50} width={50} alt='comLogo' />

  </motion.div>

  </motion.div>

  </div>

  <AnimatePresence mode='wait'>

     
{community &&<motion.nav className='communOpt'

initial={{scale:0}}
animate={{scale:1 ,transition:{duration:0.5, ease:"easeInOut"}}}
exit={{scale:0, transition:{duration:0.5, ease:"easeInOut"}}}

>

 <Link href="https://www.instagram.com/codave.space" target='_blank' className='IGIcon'
 onMouseOver={()=>{
   setComLogo("/cmtyIcons/ig.svg")
 }}

 onMouseLeave={()=>{
   setComLogo("/cmtyIcons/Ellipse 2.svg")
 }}
 
  >

 <Image src="/cmtyIcons/ig.svg" height={50} width={50} alt='IGIcon' />

 </Link>


 <Link href="https://www.facebook.com" target='_blank' className='fbIcon'

  onMouseOver={()=>{
   setComLogo("/cmtyIcons/fb.svg")
 }}

 onMouseLeave={()=>{
   setComLogo("/cmtyIcons/Ellipse 2.svg")
 }}
 
 >

 <Image src="/cmtyIcons/fb.svg" height={50} width={50} alt='facebookIcon' />

 </Link>


 <Link href="https://www.tiktok.com" target='_blank' className='tkIcon'

  onMouseOver={()=>{
   setComLogo("/cmtyIcons/tk.svg")
 }}

 onMouseLeave={()=>{
   setComLogo("/cmtyIcons/Ellipse 2.svg")
 }}
 
 >

 <Image src="/cmtyIcons/tk.svg" height={50} width={50} alt='tkkIcon' />

 </Link>



 <Link href="https://www.x.com" target='_blank' className='xIcon'

  onMouseOver={()=>{
   setComLogo("/cmtyIcons/x.svg")
 }}

 onMouseLeave={()=>{
   setComLogo("/cmtyIcons/Ellipse 2.svg")
 }}
 
 >

 <Image src="/cmtyIcons/x.svg" height={50} width={50} alt='XIcon' />

 </Link>



 <Link href="https://www.youtube.com" target='_blank' className='ytIcon'

  onMouseOver={()=>{
   setComLogo("/cmtyIcons/yt.svg")
 }}

 onMouseLeave={()=>{
   setComLogo("/cmtyIcons/Ellipse 2.svg")
 }}
 
 >

 <Image src="/cmtyIcons/yt.svg" height={50} width={50} alt='ytIcon' />

 </Link>

 

</motion.nav>}

</AnimatePresence>


<section className='joinCommun'>

 <motion.button className='joinCommunBtn'
 onClick={()=>{
   if(!community){
     setComunity(true)
   }else{
     setComunity(false)
   }
 }}

 

 
 >

   JOIN THE SPACE

 </motion.button>

</section>

    </section>

    </>
  )
}

export default Section10
