import React from 'react'
import {HiArrowRight} from 'react-icons/hi';
const Card = ({title,des,icon}) => {
  return (
    <div className='group'>
      <div className="description  shadow group1">
        <div className="card">
          <div className="card-details">
            <div>
            <span>{icon}</span>
          </div>
          <div>
            <h2>{title}</h2>
            <p>{des}</p>
            <HiArrowRight className='arrow'/>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Card
