import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg from '../Components/Heroimg'
import Footer from '../Components/Footer'
import Aboutcontent from '../Components/Aboutcontent'
import ProjectExample from '../Components/ProjectExample'
import ContactForm from '../Components/ContactForm'

function Home() {
  return ( <React.Fragment>
    <Navbar/>
    <Heroimg/>
    <div style={{textAlign:"center",marginTop:"50px"}}><h1 style={{borderBottom:"3px solid green",display:"inline-block",paddingBottom:".5rem"}}>ABOUT</h1></div>
    <Aboutcontent/>
    <ProjectExample/>
    <ContactForm/>
    <Footer/>
    </React.Fragment>
  
  )
}

export default Home