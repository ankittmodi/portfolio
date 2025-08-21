import React from 'react'
import ResumeCard from './ResumeCard';
const Education = () => {
  return (
    <div>
      <div className="education-section">
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
              desc='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of Culture.'
              />
              <ResumeCard
                title='Higher Secondary Education (Science Stream)'
                subTitle='BSK College Maithon, Dhanbad'
                result='84.4%'
                desc='Completed Class XII with Science stream (Physics, Chemistry, Mathematics, Computer Science). Achieved distinction in Mathematics and developed a keen interest in programming and technology.'
              />
              <ResumeCard
                title='Matriculation Jharkhand Academic Council (JAC)'
                subTitle='Saraswati V N Resi High School Bagodar'
                result='88.2%'
                desc='Successfully completed 10th grade under JAC Board with good academic standing and involvement in extracurricular activities.'
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
    </div>
  )
}

export default Education
