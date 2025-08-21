import React, { useState } from 'react'
import './contact.css';
import { contactImg } from '../../assests/index';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Contact = () => {
  const[username,setUsername]=useState("");
  const[phonenum,setphonenum]=useState("");
  const[userEmail,setUserEmail]=useState("");
  const[subject,setSubject]=useState("");
  const[message,setmessage]=useState("");
  const[errmessage,setErrmessage]=useState("");
  const[successmessage,setSuccessMessage]=useState("");

  // Email validation satrt here
  const emailValidation=()=>{
    return String(userEmail).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // Email validation end here
  const handleClick=(e)=>{
    e.preventDefault();
    if(username===""){
      setErrmessage("Username is required !");
    }
    else if(phonenum===""){
      setErrmessage("Phone number is required !");
    }
    else if(userEmail===""){
      setErrmessage("Please give your Email !");
    }
    else if(!emailValidation(userEmail)){
      setErrmessage("Invalid Email Address !");
    }
    else if(subject===""){
      setErrmessage("Please give yor Subject !");
    }
    else if(message===""){
      setErrmessage("Message is required !");
    }
    else{
      setUsername("");
      setphonenum("");
      setUserEmail("");
      setmessage("");
      setSubject("");
      setErrmessage("");
      setSuccessMessage(`Thank you ${username}, Your Messages has been sent Successfully !`);
    }

  }
  return (
    <section id='contact' className='contact-section'>
      <div className="box">
        <div className="contact-title">
          <h1>Contact</h1>
          <p>Get in touch with me</p>
        </div>

        <div className="conatct">
          <div className="contact-details">
            <div className="left shadow">
                <img src={contactImg} alt="" />
                <div className='description1'>
                <h2>Ankit Kumar</h2>
                <p>Frontend Developer</p>
                <p>Hi, I’m Ankit Kumar, a final-year Computer Science student passionate about building interactive, high-performance web applications. Skilled in MERN Stack for modern, scalable front-end & back-end solutions, and proficient in Java for robust backend systems. I love turning ideas into real-world projects that solve problems and create great user experiences.</p>
                <span><strong>Phone: </strong>+91 6203199449</span>
                <span><strong>Email: </strong>ankitkkumar449@gmail.com</span>
                <span><strong>Find Me In</strong></span>
                </div>
                <div id="contact-icon">
                  <span className="btn-icon shadow"><Link to='https://www.linkedin.com/in/ankit-kumar-22210a268/'><FaLinkedinIn/></Link></span>
                  <span className="btn-icon shadow"><Link to='https://wa.me/6203199449'><FaWhatsapp/></Link></span>
                  <span className="btn-icon shadow"><Link to='https://www.instagram.com/kumar3_798ankit?utm_source=qr&igsh=emMzdnVkZTdtM2w0'><FaInstagram/></Link></span>
                  <span className="btn-icon shadow"><Link to='https://share.google/VOZdnR4lQljSkf1so'><FaFacebookF/></Link></span>
                </div>
            </div>
            <div className="right shadow">
              <form action="" className='form-section'>

                {
                  errmessage && (<p className='error-message shadow animate-bounce'>{errmessage}</p>)
                }
                {
                  successmessage && (<p className='success-message shadow animate-bounce'>{successmessage}</p>)
                }
                <div className="division">
                  <div className="left-part">
                    <p>Your Name</p>
                    <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} className={`${errmessage==="Username is Required !"}`}/>
                  </div>
                  <div className="right-part">
                    <p>Phone Number</p>
                    <input type="text" onChange={(e)=>setphonenum(e.target.value)} value={phonenum} className={`${errmessage==="Phone Number is Required !"}`}/>
                  </div>
                </div>
                <div className='input'>
                  <p>Email</p>
                  <input type="email" onChange={(e)=>setUserEmail(e.target.value)} value={userEmail} className={`${errmessage==="Email is Required !"}`}/>
                </div>
                <div className="input">
                  <p>Subject</p>
                  <input type="text" onChange={(e)=>setSubject(e.target.value)} value={subject} className={`${errmessage==="Subject is Required !" }`}/>
                </div>
                <div className="input">
                  <p>Your Message</p>
                  <textarea name="" id=""  rows={10} onChange={(e)=>setmessage(e.target.value)} value={message} className={`${errmessage==="message is Required !"}`}></textarea>
                </div>
                <Button onClick={(e)=>handleClick(e)}>Send Message</Button>
                {
                  errmessage && (<p className='error-message shadow animate-bounce'>{errmessage}</p>)
                }
                {
                  successmessage && (<p className='success-message shadow animate-bounce'>{successmessage}</p>)
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
