"use client"

import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { CldImage } from "next-cloudinary"
import { useRef, useState } from "react"
import Marquee from "react-fast-marquee"





function Section9() {

  const sec9Ref = useRef<any>(null)

  const [bgCol, setBgCol] = useState("#ececec")
  const [txtCol, settxtCol] = useState("#0f0d0f")

  const {scrollYProgress} = useScroll({
    target:sec9Ref
  })

  useMotionValueEvent(scrollYProgress, "change", (value)=>{

    if(value > 0.5){
      setBgCol("#0f0d0f")
      settxtCol("#ececec")
    }

    if(value < 0.5){
      setBgCol("#ececec")
      settxtCol("#0f0d0f")
    }


  })


  return (
   <>

   <section className="section9" ref={sec9Ref}>

   <motion.section className="sec9Sticker" style={{backgroundColor:bgCol, color:txtCol}}>

    <h1 className="sec9H1"> <motion.span
            animate={{opacity:[0,1], transition:{duration:0.5, ease:"easeInOut", repeat: Infinity, }}}
         >_</motion.span>WHAT CLIENTS HAVE TO SAY</h1>
    
    <motion.div className="sec9MarqDiv" animate={{rotate:-10, opacity:0.2}}>

       <motion.div className="marqLinerDiv" >

        </motion.div>


      <Marquee className="sec9Marquee" speed={100}>

      <div className="marqItem1">

        <div className="marq1ImgDiv">
          <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781200675/Codave-v2/testimonialsImg/imgi_46_headshot-portrait-of-smiling-male-employee-in-office_lfdtry.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
        </div>

        <p>James Whitfield</p>

        <p>London, UK</p>

        <p>Independent Clothing Brand</p>

        <p>Before CODAVE, my brand existed only in my head. 
           Now it exists on Google — and people are actually 
           finding it.
        </p>

      </div>

      <div className="marqItem2">

      <div className="marq1ImgDiv">
          <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781201328/Codave-v2/testimonialsImg/pexels-gustavo-fring-4872080_fybxus.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
        </div>

        <p>Sofia Papadimitriou</p>

        <p>Athens, Greece</p>

        <p>Interior Design Studio</p>

        <p>I had a beautiful portfolio with zero online 
            presence. CODAVE changed that completely. Within 
            two months of launching my new site I was getting 
            inquiry emails from people I'd never met.
        </p>
      </div>

      <div className="marqItem3">

      <div className="marq1ImgDiv">
          <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781200692/Codave-v2/testimonialsImg/imgi_256_free-photo-of-dramatic-male-portrait-in-studio-lighting_zrdv9v.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
        </div>

        <p>Marcus Delacroix</p>

        <p>Lyon, France</p>

        <p>Private Chef & Catering</p>

        <p>Every euro I spent with CODAVE came back tenfold. 
           My bookings doubled in the first quarter after 
           the website went live. Worth every cent.
        </p>

      </div>

      <div className="marqItem4">

      <div className="marq1ImgDiv">
          <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781201674/Codave-v2/testimonialsImg/pexels-cedric-fauntleroy-8154419_ff9ftd.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
        </div>

        <p>Priya Nambiar</p>

        <p>Dubai, UAE</p>

        <p>Wellness & Yoga Studio</p>

        <p>The design is stunning. My clients constantly 
           compliment how professional the website looks. 
           But the best part? New clients find me on Google 
           every single week now.
        </p>

      </div>

      <div className="marqItem5">

      <div className="marq1ImgDiv">
          <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781200663/Codave-v2/testimonialsImg/imgi_302_free-photo-of-confident-african-male-in-red-shirt-portrait_t9a6tl.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
        </div>

        <p>Daniel Osei</p>

        <p>Accra, Ghana</p>

        <p>Tech Recruitment Startup</p>

        <p>I was skeptical at first. But CODAVE delivered 
            something I didn't expect — a website that actually 
            works as a sales tool. It speaks to my clients 
            before I even pick up the phone.
        </p>
      </div>
      

    </Marquee>


    </motion.div>

    

    <motion.div className="sec9MarqDiv" animate={{rotate:10}}>

       <motion.div className="marqLinerDiv">

        </motion.div>

      <Marquee className="sec9Marquee" speed={100} direction="right">

  

      <div className="marqItem1">

      <div className="marq1ImgDiv">
          <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781202119/Codave-v2/testimonialsImg/pexels-tima-miroshnichenko-5717549_y8ecjf.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
        </div>

        <p>Lena Bergström</p>

        <p>Stockholm, Sweden</p>

        <p>Sustainable Fashion Label
        </p>

        <p>Clean, fast, optimized — and genuinely beautiful. 
           CODAVE understood our brand's values immediately 
           and translated them into a digital experience 
           our customers love.
        </p>

      </div>

      <div className="marqItem2">

      <div className="marq1ImgDiv">
          <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781200674/Codave-v2/testimonialsImg/imgi_44_business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring_b6urje.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
        </div>

        <p>Amara Diallo</p>

        <p>Dakar, Senegal</p>

        <p>Export & Trade Business</p>

        <p>CODAVE made us look like a global company — 
           because now we are. The website opened doors 
           with international partners who found us 
           through search. That was never possible before.
        </p>
      </div>

      <div className="marqItem3">

      <div className="marq1ImgDiv">
          <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781200715/Codave-v2/testimonialsImg/imgi_11_portrait-employee-and-asian-woman-with-happiness-selfie-and-confident-entrepreneur-with_ivlo8m.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
        </div>

        <p>Rachel Kim</p>

        <p>Toronto, Canada</p>

        <p>Digital Photography Studio</p>

        <p> As a creative myself I was picky. CODAVE 
            matched my energy perfectly. The site feels 
            like me — and it ranks. That combination is 
            almost impossible to find.
        </p>

      </div>

      <div className="marqItem4">

      <div className="marq1ImgDiv">

          <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781200668/Codave-v2/testimonialsImg/imgi_22_positive-successful-millennial-business-professional-man-head-shot-portrait_vfawgy.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
        </div>

        <p>Carlos Mendez</p>

        <p>Mexico City, Mexico</p>

        <p>Architecture Firm</p>

        <p>We've worked with agencies before. Nobody came 
           close to what CODAVE delivered — the attention 
           to detail, the SEO results, the communication. 
           A different level entirely.
        </p>

      </div>

      <div className="marqItem5">

      <div className="marq1ImgDiv">
        
        <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1781200669/Codave-v2/testimonialsImg/imgi_266_pexels-photo-2182970_o290e5.jpg" alt="sec9Img" fill sizes="100vw" className="marq1Img" />
      </div>

        <p>Tobias Müller</p>

        <p>Berlin, Germany</p>

        <p>SaaS Product Startup</p>

        <p>Speed, design, SEO — CODAVE nailed all three. 
           Our bounce rate dropped by 40% after the 
           redesign. The data speaks for itself.
        </p>
      </div>

     
      

    
    </Marquee>

    </motion.div>


   </motion.section>

   </section>
  

   </>
  )
}

export default Section9
