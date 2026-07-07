"use client"

import Lenis from "lenis";
import { useEffect, useState } from "react";
import "./globals.css"
import "./CSS/Loading.css"

import "./CSS/Section1.css"
import "./CSS/Section2.css"
import "./CSS/Section3.css"
import "./CSS/Section4.css"
import "./CSS/Section5.css"
import "./CSS/Section6.css"
import "./CSS/Section7.css"
import "./CSS/Section8.css"
import "./CSS/Section9.css"
import "./CSS/Section10.css"
import "./CSS/Section11.css"
import "./CSS/Section12.css"
import Loading from "./Components/Loading";
import Sections from "./Components/Sections";


import "./CSS/Header.css"
import { html } from "motion/react-client";



export default function Home() {

   ////////////// Lenis ///////////////////

   useEffect(()=>{
    const lenis = new Lenis();
  
  // Use requestAnimationFrame to continuously update the scroll
  function raf(time:any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
     requestAnimationFrame(raf);
  },[])


   ////////////// Lenis ///////////////////


   ///////////// Loading ////////////////////

   const [loadingIn,setLoadingIn] = useState<boolean>(true)
   const [visibility, setVisibility] = useState<string>("none")

   
   //////////////// Rather than Off and On ////////////////////


   useEffect(()=>{
    

    const visiTimout = setTimeout(() => {
      setVisibility("block")
      
    }, 3500);

    return ()=> clearTimeout(visiTimout)

   },[visibility])

   
//////////////// Rather than Off and On ////////////////////

   useEffect(()=>{

    
    const loadingTimout = setTimeout(() => {
      setLoadingIn(false)

    }, 4000);


    return ()=> clearTimeout(loadingTimout)



   },[loadingIn])


  return (
    <>

   {loadingIn && <Loading /> }
   <Sections visibility={visibility}/>


    </>
  );
}
