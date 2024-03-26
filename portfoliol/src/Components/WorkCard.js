import "./WorkCard.css";
import React from 'react';
import { NavLink } from "react-router-dom";


const WorkCard = (props) => {
  return (
    <div className="work-container">
      <h2 className="project-heading">Projects</h2>
      <div className="project-container">
      <div className="project-card">
      <img src={props.imgsrc}  alt="project" />
      <h2 className="project-title">{props.title} </h2>
      <div className="project-details">
        <p>{props.text} </p>
        <div className="pro-btn">
          <NavLink to={props.view} className="btn" >Views</NavLink>
          <NavLink to="url.com" className="btn" >Source</NavLink>

          </div>
        </div>
      </div>
      </div>
      </div>


  )
}

export default WorkCard