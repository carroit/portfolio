import { FaGit, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer" >
        <div className="footer-container">
            <div className="left">
                <div  className="location">
                    <FaHome size={20} style={{ color: "fff" , marginRight: "2rem"}}/>
                    <div>
                        <p>Addis Ababa </p>
                        <p>Torhayloch , bethel</p>
                    </div>
                </div>
                <div  className="phone">
                   <h4> <FaPhone size={20} style={{ color: "fff" , marginRight: "2rem"}}/> 
                   +251933709148 </h4>
                </div>
                
                <div className="email"> 
                <h4> <FaMailBulk size={20} style={{ color: "fff" , marginRight: "2rem"}}/> 
                   selidu361@gmail.com </h4>
                </div>
           </div>
        <div className="right">
            <h4>About</h4>
            <p>A developer specializing in building attractive and functional websites for small 
                and medium-size business whether you need to showcase your service , 
                create an online store or manage afull scale i am here to help you  </p>
                <div className="social">
                <FaGit size={20} style={{ color: "fff" , marginRight: "2rem"}}/> 
                <FaLinkedin size={20} style={{ color: "fff" , marginRight: "2rem"}}/> 
                <FaInstagram size={20} style={{ color: "fff" , marginRight: "2rem"}}/> 
                </div>

        </div>
        </div>
    </div>
  )
}

export default Footer