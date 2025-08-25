import React, { useState } from 'react'
import './resume.css';

import Education from './Education';
import {Skills} from './Skills'
import Experience from './Experience';
import Achievements from './Achievements';
const Resume = () => {
  const [resumeData,setresumeData]=useState(0);
  const handleClick=(index)=>{
    setresumeData(index);
  }
  return (
    <section id='resume' className="resume-section">
      <div className="box">
        <div className="resume-part">
          <h1>My Resume</h1>
        </div>
        <div className="resume-list">
          <ul>
            <li onClick={()=>handleClick(0)} className={resumeData===0?"active":""}>Education</li>
            <li onClick={()=>handleClick(1)} className={resumeData===1?"active":""}>Professional Skills</li>
            {/* <li onClick={()=>handleClick(2)}className={resumeData===2?"active":""}>Experience</li> */}
            <li onClick={()=>handleClick(2)}className={resumeData===2?"active":""}>Achievements</li>
          </ul>
        </div>
        {/* education details */}
        {
          resumeData===0 && (<Education />)
        }
        {/* <Education/> */}
        {/* Skills section */}
        {
          resumeData===1 && (<Skills />)
        }
        {/* {
          resumeData===2 && (<Experience />)
        } */}
        {
          resumeData===2 && (<Achievements/>)
        }
      </div>
    </section>
  )
}

export default Resume
