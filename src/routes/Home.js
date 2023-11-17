import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg from '../Components/Heroimg'
import Footer from '../Components/Footer'
import Aboutcontent from '../Components/Aboutcontent'
import ProjectExample from '../Components/ProjectExample'
import { ContactUs } from '../Components/ContactForm'

function Home() {
  return ( <React.Fragment>
    <Navbar/>
    <Heroimg/>
    <div style={{textAlign:"center",marginTop:"50px"}}><h1 style={{borderBottom:"3px solid green",display:"inline-block",paddingBottom:".5rem"}}>ABOUT</h1></div>
    <Aboutcontent/>
    <div style={{textAlign:"center",marginTop:"50px",background: "#1a1919",paddingTop:"25px"}}><h1 style={{borderBottom:"3px solid green",display:"inline-block",paddingBottom:".5rem"}}>PROJECTS</h1></div>
    <ProjectExample/>
    <div style={{textAlign:"center",marginTop:"50px"}}><h1 style={{borderBottom:"3px solid green",display:"inline-block",paddingBottom:".5rem"}}>CONTACT</h1></div>
    <ContactUs/>
    <Footer/>
    </React.Fragment>
  
  )
}

export default Home