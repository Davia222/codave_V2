"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser";
import { CldImage } from "next-cloudinary";



function Section11() {

    const [form, setForm] = useState({
        name:"",
        email:"",
        phone:"",
        message:""

    })

    const handleChange =(e:any)=>{
        setForm({...form, [e.target.name]: e.target.value })
    }

    

    const  handleSubmit = async (e:any)=>{
        
        e.preventDefault()

        emailjs.send(
          "service_jgh6ez7",
          "template_lh40q8y",
          form,{publicKey: 'HgOZnBmiJ0zy9KCXz'

          }).then(
          (res) => {
            alert("Message sent!");
            setForm({ name: "", email: "", phone: "", message: "" });
          },
          (err) => {
            console.error(err);
            alert("Failed to send message");
          }
        );
    }

    
    


  return (
   <>
   <section id='section11'>

   <h1 className='contactH1'>CONTACT</h1>

 


    <form className='Sec11Form' onSubmit={handleSubmit}>

   

    <input type="text" name='name' className='nameContact' placeholder='Name' onChange={handleChange} value={form.name} />

    <input type="email" name='email' className='nameContact' placeholder='Email' onChange={handleChange} value={form.email} />

    <input type="text" name="phone" className='nameContact' placeholder='Phone' onChange={handleChange} value={form.phone} />

    <textarea name="message" placeholder='Message' id="messageId" onChange={handleChange} value={form.message}></textarea>

    <button className='contactBtn'>Submit</button>

   </form>


   <div className="contImgDiv">

<CldImage src="https://res.cloudinary.com/dyrzp2wi6/image/upload/v1780501909/Codave-v2/contactImgs/contactImg_r7vcby.png"
fill
alt="contactImg"
className="contactImg"

 />

</div>

   </section>
   </>
  )
}

export default Section11
