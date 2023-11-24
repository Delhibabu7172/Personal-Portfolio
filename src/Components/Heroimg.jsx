import "./Heroimg.css"
import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import Typed from "typed.js"

function Heroimg() {

  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ['Front-End Developer', 'Web Developer', 'React Developer'],
      typeSpeed: 60,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy(); // Destroy the Typed instance to avoid memory leaks
    };
  }, []);


  return (
    <div className="hero">
        <div className="content">
            <p>HI, I'M Delhi Babu</p>
            {/* <h1>React Developer</h1> */}
            <div className="text-style">
              <h2>Iam A</h2>
              <span ref={typedTextRef}></span>
            </div>
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