import "./Heroimg.css"
import IntroImg from "../assets/final.jpg"
import React from 'react'
import { Link } from "react-router-dom"
import hmpg from "../assets/homepageimg.png"

function Heroimg() {
  return (
    <div className="hero">
        <div className="content">
            <p>HI, I'M Delhi Babu</p>
            <h1>React Developer</h1>
            <div>
                <Link to="https://drive.google.com/file/d/1MDpxB07qHW5cJTahmg-OMMKfR29NWgsL/view?usp=sharing" className="btn">Resume</Link>
                <Link to="/Project" className="btn btn-light">Projects</Link>
            </div>
        </div>
        <div className="right-side">
          <img src="https://github.com/RamSanjay08/Personal_Portfolio/blob/main/src/components/Assests/homeImage.jpg?raw=true" alt="" />
        </div>
    </div>
  )
}

export default Heroimg