import React from 'react';
import {motion} from 'framer-motion'

export const Skills = () => {
  return (
    <div>
      <div className="skill-section">
        <div className="language">
          <div className="lan-title">
            <p>Features</p>
            <h2>Development Skill</h2>
          </div>
          <div className="des-content">
            <div>
              <p>REACT</p>
              <span className='indicator'> <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className='indicator-small'><span>100%</span></motion.span></span>
            </div>
            <div>
              <p>HTML5</p>
              <span className='indicator'> <motion.span
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className='indicator-small' style={{width:"95%"}}><span>95%</span></motion.span></span>
            </div>
            <div>
              <p>CSS3</p>
              <span className='indicator'> <motion.span
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className='indicator-small'style={{width:"80%"}}><span>80%</span></motion.span></span>
            </div>
             <div>
              <p>BOOTSTRAP</p>
              <span className='indicator'> <motion.span
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className='indicator-small'style={{width:"75%"}}><span>75%</span></motion.span></span>
            </div>
            <div>
              <p>JAVASCRIPT</p>
              <span className='indicator'> <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className='indicator-small'style={{width:"70%"}}><span>70%</span></motion.span></span>
            </div>
          </div>
        </div>
        <div className="design">
          <div className="design-details">
            <div className="lan-title">
            <p>Features</p>
            <h2>Design Skill</h2>
          </div>
          <div className="des-content">
            <div>
              <p>Photoshot</p>
              <span className='indicator'> <motion.span
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}className='indicator-small'><span>100%</span></motion.span></span>
            </div>
            <div>
              <p>Photoshot</p>
              <span className='indicator'> <motion.span
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
              className='indicator-small' style={{width:"90%"}}><span>90%</span></motion.span></span>
            </div>
            <div>
              <p>Figma</p>
              <span className='indicator'> <motion.span
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}} className='indicator-small'style={{width:"85%"}}><span>85%</span></motion.span></span>
            </div>
            <div>
              <p>Canva</p>
              <span className='indicator'> <motion.span
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}} className='indicator-small'style={{width:"70%"}}><span>70%</span></motion.span></span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}


