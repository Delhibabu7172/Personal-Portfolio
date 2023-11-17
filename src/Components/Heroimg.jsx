import "./Heroimg.css"
import IntroImg from "../assets/final.jpg"
import React from 'react'
import { Link } from "react-router-dom"
import hmpg from "../assets/homepageimg.png"

function Heroimg() {
  return (
    <div className="hero">
        <div className="mask">
            {/* <img className="intro-img" src={IntroImg} alt="" /> */}
        </div>
       
        <div className="hp-content">
        <div className="content">
            <p>HI, I'M Delhi Babu</p>
            <h1>React Developer</h1>
            <div>
                <Link to="https://drive.google.com/file/d/1MDpxB07qHW5cJTahmg-OMMKfR29NWgsL/view?usp=sharing" className="btn">Resume</Link>
                <Link to="/Project" className="btn btn-light">Projects</Link>
            </div>
        </div>
        <div className="right-side">
          <img src={hmpg} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Heroimg