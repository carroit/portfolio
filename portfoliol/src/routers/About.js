import React from 'react'
import Navbar from "../Components/Navbar";
import  Footer from "../Components/Footer";
import Himg2 from '../Components/Himg2';
const About = () => {
  return (
    <div>
      <Navbar />
      <Himg2 heading='ABOUT.' text="A fullstack developer"/>
      <Footer />
    </div>
  )
}

export default About