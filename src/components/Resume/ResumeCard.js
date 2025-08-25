import React from 'react'

const ResumeCard = ({title,subTitle,result,desc}) => {
  return (
    <div className='resume-details '>
      {/* <div className="res-part bg-opacity">
        <span>
          <span className='bullet-point'></span>
        </span>
      </div> */}
      <div className="card-details shadow">
        <div className="card-pro">
          <div className="property">
            <h3>{title}</h3>
            <p>{subTitle}</p>
          </div>
          <div className="result">
            <p className='shadow'>{result}</p>
          </div>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ResumeCard
