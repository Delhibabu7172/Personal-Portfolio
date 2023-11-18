import { LinearProgress } from '@mui/material'
import React from 'react'
import "./Skills.css"
import skillImage from "../assets/Skillphoto2.png"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

function Skills() {
  return (
    <div className='skill-section'>
      <div className="left-skill">
       <div className='heading-skill'>
      <h1>SKILLS</h1>
       </div>
        <div className='skills-list'>
            <ul>
                <li>
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>React Js</h3>
                    </div>
                    <LinearProgress variant="determinate" value={90}/>
                </li>
                <li>
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>JavaScript</h3>
                    </div>
                    <LinearProgress variant="determinate" value={80}/>
                </li>
                <li>
                    
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>MongoDB</h3>
                    </div>
                    <LinearProgress variant="determinate" value={60}/>
                </li>
                <li>
                    
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>Tailwind CSS</h3>
                    </div>
                    <LinearProgress variant="determinate" value={70}/>
                </li>
                <li>
                    
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>CSS3</h3>
                    </div>
                    <LinearProgress variant="determinate" value={94}/>
                </li>
                <li>
                    
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>HTML5</h3>
                    </div>
                    <LinearProgress variant="determinate" value={95}/>
                </li>
                <li>
                    
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>Node JS</h3>
                    </div>
                    <LinearProgress variant="determinate" value={50}/>
                </li>
                <li>
                   
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>Git</h3>
                    </div>
                    <LinearProgress variant="determinate" value={86}/>
                </li>
                <li>
                   
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>Bootstrap</h3>
                    </div>
                    <LinearProgress  variant="determinate" value={90}/>
                </li>
            </ul>
        </div>

      </div>
      <div className="right-skill">
        <img src={skillImage} alt="" />
      </div>
    </div>
  )
}

export default Skills