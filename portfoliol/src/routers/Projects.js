import React from 'react';
import Navbar from "../Components/Navbar";
import  Footer from "../Components/Footer";
import Himg2 from '../Components/Himg2';
import Work from '../Components/Work';
const Projects = () => {
  return (
    <div>
      <Navbar />
      <Himg2 heading='PROJECTS.' text="SOME OF MY WORKS" />
      <Work />
      <Footer />
    </div>
  )
}

export default Projects