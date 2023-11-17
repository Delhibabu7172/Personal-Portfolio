import "./Projectcard.css"
import React from 'react'
import { FaGithub,  } from "react-icons/fa"
import { NavLink } from "react-router-dom"
// import {bi} from "bootstrap-icons"


function Projectcard(props) {
  return (
      <div className="main-card">
    <div className="project-card">
    <img src={props.imgsrc} alt="image" />
    <div className="details">
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="byusing">
          <ul>
            <li>Reactjs</li>
            <li>javascript</li>
            <li>css</li>
          </ul>
        </div>
        <div className="pro-btns">
            <NavLink to={props.view}><i className="bi bi-eye-fill"></i></NavLink>
            <NavLink to={props.source} className="second"><FaGithub/></NavLink>
        </div>
    </div>
    </div>
</div>
</div>
  )
}

export default Projectcard