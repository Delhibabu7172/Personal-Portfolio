import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone, FaTwitter } from 'react-icons/fa'
import "../Components/Footerstyle.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                <p>299 Bajanai Kovil St, Kilarasampet,</p>
                <p>Vellore.</p>
                </div>
            </div>
           <div className="phone">
             <h4>
           <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
           9677497172
             </h4>
           </div>
           <div className="email">
             <h4>
           <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
           rldb143@gmail.com
             </h4>
           </div>
        </div>
        <div className="right">
            <h4>Follow me by...</h4>
        <div className="social">
            <a href="/"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
           <a href="/"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
           <a href="/"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
           <a href="https://github.com/Delhibabu7172" target='_blank'><FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Footer