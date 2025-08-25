import React from 'react'
import { react} from '../../assests/index';
import { css } from '../../assests/index';
import { java } from '../../assests/index';
const Achievements = () => {
  return (
    <div>
      <h1>My Achievements</h1>
      <div className="certifications">
        <div className="certificate shadow">
          <img src={css} alt="" />
          <div className="cert-details">
            <h3>React (Basic) –HackerRank</h3>
            <p>Issued on 18 Aug, 2025</p>
            <p>Successfully completed React (Basic) course on HackerRank, learning core concepts such as components, JSX, props, state management, and basic application development.</p>
          </div>
        </div>
        <div className="certificate shadow">
          <img src={react} alt="" />
          <div className="cert-details">
            <h3>CSS (Basic) – HackerRank</h3>
            <p>Issued on 03 Aug, 2025</p>
            <p>Certified in core CSS concepts including selectors, styling rules, and responsive design fundamentals.</p>
          </div>
        </div>
        <div className="certificate shadow">
          <img src={java} alt="" />
          <div className="cert-details">
            <h3>JAVA (Basic) – HackerRank</h3>
            <p>Issued on 21 Aug, 2025</p>
            <p>Certified in core Java concepts including OOP, classes, objects, inheritance, and exception handling.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
