"use client"

import { motion } from "motion/react"
import { CldImage } from "next-cloudinary"





function Section4() {
  return (
    <>
    <section id='section4'>

      <section className='sec4Layout'>

        <motion.h1 className='aboutSecH1'
        initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1, transition:{duration:1, ease:"easeInOut"}}}
        >
        <motion.span
            animate={{opacity:[0,1], transition:{duration:0.3, ease:"easeInOut", repeat: Infinity, }}}
         >_</motion.span>
          ABOUT CODAVE
          </motion.h1>

          <motion.div className="globeDiv"
           initial={{x:-100, opacity:0}}
           whileInView={{x:0, opacity:1, transition:{duration:1, ease:"easeInOut"}}}
          >

            <CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780521809/Codave-v2/aboutImgs/rotating-earth_hfqnvd.gif" unoptimized height="220" width="220" alt="globeRotate" className="aboutGlobe" />

          </motion.div>


          <motion.article className="aboutCodaveTxt"
          initial={{x:100, opacity:0}}
          whileInView={{x:0, opacity:1, transition:{duration:1, ease:"easeInOut"}}}
          >

            <p>
            CODAVE was born from a simple frustration — too many 
            small businesses were invisible online. Not because 
            they lacked quality. But because nobody gave them 
            the right digital tools to be seen.
            </p>


            <p>
            We change that.
            </p>


            <p>
              From your first website to your hundredth customer 
                from Google — we build, design, and strategize 
                everything digital. Sharp websites. Bold visuals. 
              SEO that actually moves the needle.
            </p>

            <p>
              We work with everyone. But we live for the ones 
              just starting out — the bold, the scrappy, the ones 
              ready to compete.
            </p>

          </motion.article>

      </section>
        
    </section>
    </>
  )
}

export default Section4
