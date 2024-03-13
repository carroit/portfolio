import './Himg2.css';
import React, { Component } from 'react'
import pic from"../assets/pc-2jpg.jpg"

class Himg2 extends Component  {
    render () {
  return (
   <div className='him'>
    <div className="Hero-img"> 
     <img className="intro-img" src= {pic} alt="img" />
     <div className="heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text} </p>
    </div>
    </div>
    </div>  
  )
    }
}

export default Himg2 