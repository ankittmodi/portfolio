import React from 'react'
import ResumeCard from './ResumeCard'
const Experience = () => {
  return (
    <div>
      <div className="edu-exp">
          <div className="education">
            <div className="exp">
              <p>2025 -2026</p>
              <h2>Education</h2>
            </div>
            <div className="education-card education-part">
              <ResumeCard 
              title='B.Tech in Computer Science & Engineering'
              subTitle='I.K Gujral Punjab Technical University Main Campus Kapurthala'
              result='7.72/10'
              desc='The trraining provided by universities in order to prepare people to work in various sectors of the economy or areas of Culture.'
              />
              <ResumeCard
                title='B.Tech in Computer Science & Engineering'
                subTitle='I.K Gujral Punjab Technical University Main Campus Kapurthala'
                result='7.72'
                desc='The trraining provided by universities in order to prepare people to work in various sectors of the economy or areas of Culture.'
              />
              <ResumeCard
                title='B.Tech in Computer Science & Engineering'
                subTitle='I.K Gujral Punjab Technical University Main Campus Kapurthala'
                result='7.72'
                desc='The trraining provided by universities in order to prepare people to work in various sectors of the economy or areas of Culture.'
              /> 
            </div>
          </div>
          <div className="experience">
            <div className="exp">
              <p>2025 -2026</p>
              <h2>Education</h2>
            </div>
            <div className="education-card education-part">
              <ResumeCard 
              title='B.Tech in Computer Science & Engineering'
              subTitle='I.K Gujral Punjab Technical University Main Campus Kapurthala'
              result='7.72/10'
              desc='The trraining provided by universities in order to prepare people to work in various sectors of the economy or areas of Culture.'
              />
              <ResumeCard
                title='B.Tech in Computer Science & Engineering'
                subTitle='I.K Gujral Punjab Technical University Main Campus Kapurthala'
                result='7.72'
                desc='The trraining provided by universities in order to prepare people to work in various sectors of the economy or areas of Culture.'
              />
              <ResumeCard
                title='B.Tech in Computer Science & Engineering'
                subTitle='I.K Gujral Punjab Technical University Main Campus Kapurthala'
                result='7.72'
                desc='The trraining provided by universities in order to prepare people to work in various sectors of the economy or areas of Culture.'
              /> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience
