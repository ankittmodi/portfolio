import React from 'react'
import './footer.css';
import { logo } from '../../assests/index';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='footer'>
    <div className="box">
      <div className="footer-section">
        <div>
          <img src={logo} alt="logo" />
          <div id="contact-icon">
            <span className="btn-icon shadow"><FaWhatsapp/></span>
            <span className="btn-icon shadow"><FaInstagram/></span>
            <span className="btn-icon shadow"><FaLinkedinIn/></span>
            <span className="btn-icon shadow"><FaFacebookF/></span>
          </div>
        </div>
        <div>
          <h3>Quick Link</h3>
          <ul>
            <li><span>About</span></li>
            <li><span>Portfolio</span></li>
            <li><span>Services</span></li>
            <li><span>Blog</span></li>
            <li><span>Contact</span></li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li><span>Authentication</span></li>
            <li><span>System Status</span></li>
            <li><span>Terms of Service</span></li>
            <li><span>Pricing</span></li>
            <li><span>Over Right</span></li>
          </ul>
        </div>
        <div>
          <h3>Developers</h3>
          <ul>
            <li><span>Documentation</span></li>
            <li><span>Authentication</span></li>
            <li><span>Api Refrence</span></li>
            <li><span>Support</span></li>
            <li><span>Open Source</span></li>
          </ul>
        </div>
      </div>
      <hr style={{opacity:"0.2"}}/>
      <div className="footer-bottom">
        <p>© 2025. All rights reserved by Ankit Kumar</p>
      </div>
    </div>
    </footer>
  )
}

export default Footer
