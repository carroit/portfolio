import "./Himg.css";
import React from 'react'
import h1 from "../assets/h1.avif"
import { Link } from "react-router-dom";




const Himg = () => {
  return (
    <div className="Him"> 
    <div className="mask">
       <img className="intro-img" src= {h1} alt="img" />
    </div>
    <div className="content">
        <p>Hello I am Lidya Tadesse</p>
        <h1>Software Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>

        </div>
    </div>
    </div>
  )
}

export default Himg