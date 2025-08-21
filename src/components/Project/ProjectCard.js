import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { TbShare3 } from "react-icons/tb";
import { Link } from 'react-router-dom';
const ProjectCard = ({title,desc,src,link1,link2}) => {
  return (
    <div className='website-container shadow'>
      <div className='project-img'>
        <img src={src} alt="" />
      </div>
      <div className="project-title">
        <div className="title1">
        <h2>{title}</h2>
        <div className='pro-link'>
          <span><a href={link1}><IoLogoGithub/></a></span>
          <span><a href={link2}><TbWorld/></a></span>
        </div>
        </div>
        <p>{desc}</p>
        <div className="share">
          <Link to='https://app.netlify.com/teams/ankitkkumar449/projects'><TbShare3/></Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
