import React from 'react'
import './style.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { BsBootstrap } from "react-icons/bs";
import { bannerImg } from '../../assests/index';
import { logo } from '../../assests/index';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Banner = () => {
  const[text]=useTypewriter({
    words:["Frontend Developer.","Problem Solver.","UI Designer."],
    loop: true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000,
  })
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + "/files/resume.pdf";
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <section id='home' className="banner ">
      <div className="banner-container">
        <div className="left">
          <h4>Welcome to my world</h4>
          <h1>Hi, I'm <span>Ankit kumar</span> </h1>
          <h2>a <span>{text}</span>
          <Cursor cursorColor="#a5123f" /></h2>

          <p>I craft responsive, user-friendly web experiences using React, JavaScript, and modern UI frameworks.
          Let's bring designs to life with clean code and smooth interactions.</p>
          <div className="btn-group">
            <Button onClick={handleDownload}><Link>Download CV</Link></Button>
            <Button><Link to='https://www.linkedin.com/in/ankit-kumar-22210a268/'>Hire Me Now!</Link></Button>
          </div>
          <div className="icon1">
            <div className="left1">
              <h2>Find me in</h2>
              <div className="banner-icon">
                <span className="btn-icon shadow"><Link to='https://www.linkedin.com/in/ankit-kumar-22210a268/'><FaLinkedinIn/></Link></span>
                <span className="btn-icon shadow"><Link to='https://wa.me/6203199449'><FaWhatsapp/></Link></span>
                <span className="btn-icon shadow"><Link to='https://www.instagram.com/kumar3_798ankit?utm_source=qr&igsh=emMzdnVkZTdtM2w0'><FaInstagram/></Link></span>
                <span className="btn-icon shadow"><Link to='https://share.google/VOZdnR4lQljSkf1so'><FaFacebookF/></Link></span>
              </div>
            </div>
            <div className="right1">
              <h2>Best Skill in</h2>
              <div className="banner-icon">
                <span className="btn-icon shadow"><Link to='https://github.com/ankittmodi'><FaReact/></Link></span>
                <span className="btn-icon shadow"><Link to='https://github.com/ankittmodi'><IoLogoHtml5/></Link></span>
                <span className="btn-icon shadow"><Link to='https://github.com/ankittmodi'><FaCss3/></Link></span>
                <span className="btn-icon shadow"><Link to='https://github.com/ankittmodi'><BsBootstrap/></Link></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="right">
            <img src={logo} alt="" />
            <div className='banner-shadow shadow'
            ></div>
        </div>
      </div>
    </section>
  )
}

export default Banner
