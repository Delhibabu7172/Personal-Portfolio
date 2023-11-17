import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const ContactForm = () => {
  const form = useRef();

 
//  let updateinput=({target:{value,name}})=>{
//     setgetinput({...getinput,[name]:value})
//   }

    const Notify = () => {
      toast.success("Message Sended Sucessfully", {
        position: toast.POSITION.TOP_CENTER
      })
    } 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dur2r4q', 'template_r3u19ip', form.current, 'oqvAc5obk3rKsrgP2')
      .then((result) => {
          Notify()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <div>
        <form  ref={form} onSubmit={sendEmail}>
            <label>Your Name :</label>
            <input type="text" name="un" />
            <label>Your Email :</label>
            <input type="email" name="em"  />
          
            <textarea placeholder="Type Your Text Here" name='mes'></textarea>
            <input type="submit" value="Send" className='btn'/>
            <ToastContainer theme="colored"/>
        </form>
    </div>
  )
}

export default ContactForm



