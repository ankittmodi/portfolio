// import React from 'react'
// import './style.css';
// import ProjectCard from './ProjectCard';
// import { projectOne,projectTwo,projectThree,projectFour } from '../../assests/index';
// const Project = () => {
//   return (
//     <section className='project'>
//       <div className='box'>
//         <div className="title">
//           <h5>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
//           <h1>My Projects</h1>
//         </div>
//         <div className="project-cards">
//           <ProjectCard title='Age Calculator' desc="As a frontend developer, I specialize in creating fully responsive, visually appealing, and user-friendly websites and web applications. I leverage modern frontend technologies such as HTML, CSS, JavaScript, and React.js to deliver seamless user experiences with clean and efficient code." src={projectTwo} link1={'https://app.netlify.com/teams/ankitkkumar449/projects'} link2={'https://tic-tactoe-game1.netlify.app/'}/>
//           <ProjectCard title='Fit Club' desc="As a frontend developer, I specialize in creating fully responsive, visually appealing, and user-friendly websites and web applications. I leverage modern frontend technologies such as HTML, CSS, JavaScript, and React.js to deliver seamless user experiences with clean and efficient code." src={projectOne} link1={'https://app.netlify.com/teams/ankitkkumar449/projects'} link2={'https://fitclubankit.netlify.app/'}/>
//           <ProjectCard title='Social Media' desc="As a frontend developer, I specialize in creating fully responsive, visually appealing, and user-friendly websites and web applications. I leverage modern frontend technologies such as HTML, CSS, JavaScript, and React.js to deliver seamless user experiences with clean and efficient code." src={projectThree}/>
//           <ProjectCard title='Social Media' desc="As a frontend developer, I specialize in creating fully responsive, visually appealing, and user-friendly websites and web applications. I leverage modern frontend technologies such as HTML, CSS, JavaScript, and React.js to deliver seamless user experiences with clean and efficient code." src={projectFour}/>
//           <ProjectCard title='Social Media' desc="As a frontend developer, I specialize in creating fully responsive, visually appealing, and user-friendly websites and web applications. I leverage modern frontend technologies such as HTML, CSS, JavaScript, and React.js to deliver seamless user experiences with clean and efficient code." src={projectOne}/>
//           <ProjectCard title='Social Media' desc="As a frontend developer, I specialize in creating fully responsive, visually appealing, and user-friendly websites and web applications. I leverage modern frontend technologies such as HTML, CSS, JavaScript, and React.js to deliver seamless user experiences with clean and efficient code." src={projectTwo}/>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Project

import React from 'react';
import './style.css';
import ProjectCard from './ProjectCard';
import { projectOne, projectTwo, projectThree, projectFour } from '../../assests/index';

const Project = () => {
  const projects = [
    { title: 'Age Calculator', src: projectTwo, link1: 'https://app.netlify.com/teams/ankitkkumar449/projects', link2: 'https://tic-tactoe-game1.netlify.app/' },
    { title: 'Fit Club', src: projectOne, link1: 'https://app.netlify.com/teams/ankitkkumar449/projects', link2: 'https://fitclubankit.netlify.app/' },
    { title:'World Atlas', src: projectThree },
    { title: 'Tic Tac Toe', src: projectFour },
    { title: 'Social Media', src: projectOne },
    { title: 'Social Media', src: projectTwo },
  ];

  return (
    <section className='project'>
      <div className='box'>
        <div className='title'>
          <h5>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
          <h1>My Projects</h1>
        </div>
        <div className='project-cards'>
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              desc="As a frontend developer, I specialize in creating fully responsive, visually appealing, and user-friendly websites and web applications. I leverage modern frontend technologies such as HTML, CSS, JavaScript, and React.js to deliver seamless user experiences with clean and efficient code."
              src={p.src}
              link1={p.link1}
              link2={p.link2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

