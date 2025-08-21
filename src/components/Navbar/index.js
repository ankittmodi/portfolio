import React, { useState } from 'react'
import './style.css';
import { logo } from '../../assests/index';
import { navLinkdata } from '../../constants';
import {Link} from 'react-scroll';
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
const[showMenu,setShowMenu]=useState(false);
  return (
    <div className='container'>
      <div className="left">
        <div>
          <h2>Ankit Kumar</h2>
        </div>
      </div>
      <div className="right">
        <ul className='main-box'>
          {
            navLinkdata.map((navlink)=>(
              <li key={navlink._id}>
                <Link activeClass='active' 
                to={navlink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>{navlink.title}</Link>
              </li>
            ))
          }
        </ul>
        <span onClick={()=>setShowMenu(!showMenu)}><IoMenuSharp className='menu-bar'/></span>
        {
          showMenu && (
            <div className='menu-back'>
              <div className='menu-item'>
                <div>
                  <h2>Ankit Kumar</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a facere assumenda veniam sequi voluptas expedita maiores repellat magni modi.</p>
                </div>
                <ul className='menu-list'>
                  {
                    navLinkdata.map((item)=>(
                      <li key={item._id} >
                        <Link activeClass='active'
                        onClick={()=>setShowMenu(false)} 
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>{item.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <span onClick={()=>setShowMenu(false)}><IoCloseOutline className='menu-close' /></span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
