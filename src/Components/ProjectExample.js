import "./Projectcard.css"
import React from 'react'
import Projectcard from "./Projectcard"
import { projectcarddata } from "./Projectcards"

function ProjectExample() {
  return (
    <div className="project-card">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
      {projectcarddata.map((val,index) => {
        return (
            <Projectcard key={index} imgsrc={val.imgsrc}
            title={val.title} text={val.text} view={val.view} source={val.source}/>
        )
      })}  
    </div>
    </div>
  )
}

export default ProjectExample