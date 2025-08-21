import React from 'react'
import './style.css';
import Card from './Card';
import {FaMobile,FaGlobe} from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";
import { SiAntdesign } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { LuPalette } from "react-icons/lu";
import { LiaRocketSolid } from "react-icons/lia";
const Features = () => {
  return (
    <div id='service' className='feature box'>
      <div className="banner-container1">
        <h3>Services</h3>
        <h1>What I Do</h1>
      </div>
      <div className="cards">
        <Card title='Frontend Development' des='A frontend developer’s role in my projects is to create responsive, user-friendly, and visually appealing interfaces that work seamlessly across all devices and browsers. I focus on building pixel-perfect designs with clean and maintainable code, using React.js to develop reusable components that enhance efficiency.' icon={<LuPalette/>}  />
        <Card title='Data Structure & Algorithm' des='I am building a strong foundation in Data Structures and Algorithms to improve my problem-solving skills and logical thinking.Regular practice on platforms like LeetCode and GeeksforGeeks has helped me build logical thinking, improve coding speed, and apply DSA concepts to real-world application development.' icon={<FaCode/>}/>
        <Card title='Hosting Website' des='I have basic knowledge of website hosting and can deploy web applications on different platforms. I am familiar with hosting static and dynamic websites using services like GitHub Pages and Netlify. My focus is on making the deployment process smooth and ensuring that the hosted website works efficiently for users.' icon={<TbWorld/>}/>
        <Card title='SEO Optimization' des='I have created a basic search engine website that allows users to search and retrieve relevant results based on their queries. The project focuses on implementing search functionality with features like keyword matching, result filtering, and pagination. I have worked on designing a clean and user-friendly interface so that users can easily input queries and view results.' icon={<LiaRocketSolid/>}/>
        <Card title='UX Design' des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil magni nobis esse dolorum repellat, maxime quaerat pariatur itaque officiis iusto veniam repellendus atque tempora laudantium error consectetur quam! Pariatur?' icon={<SiAntdesign/>}/>
        <Card title='Backend Development' des='I am learning and building skills in backend development using the MERN stack, focusing on creating secure, efficient, and scalable APIs. I work with Node.js and Express.js to handle server-side logic, manage routes, and process requests. For database management, I use MongoDB to store and retrieve data effectively. I also understand the basics of authentication, CRUD operations, and API integration.' icon={<FaMobile/>}/>
      </div>
    </div>
  )
}

export default Features
