import { Link } from "react-router-dom"
import "./Aboutcontent.css"
import React from 'react'
import about2 from "../assets/aboutpagetop.avif"
import about1 from "../assets/bgtop2.avif"
import profileph from "../assets/Passport2.jpg"

function Aboutcontent() {
  return (
    <div>
    <div className="about">
        
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a React Front-end Developer. I create responsive secure websites for my clients.</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="myphoto-container">
        <div className="myphoto">
            <img src={profileph} alt="" />
            <div className="overlay"></div>
            </div>
     </div>
        
    </div>
    <div className="education">
    <div className="right">
            <div className="image-container">
                <div className="image-stack top">
                    <img src={about1} alt="true" className="image"/>
                </div>
                <div className="image-stack bottom">
                    <img src={about2} alt="true" className="image"/>
                </div>
            </div>
        </div>
        <div className="edu-list">
          <h1>EDUCATION :</h1>
          
          <div className="education-item">
            <h3>Bachelor of Computer Application</h3>
            <ul>
              <li>Voorhees College, Vellore, TamilNadu.</li>
              <li>Year : 2020 - 2023</li>
            </ul>
          </div>
       

          <div className="education-item">
            <h3>HSC </h3>
            <ul>
              <li>Seventh Day Adventist, Vellore, TamilNadu.</li>
              <li>Year : 2019 - 2020</li>
              {/* Add more courses or details */}
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent