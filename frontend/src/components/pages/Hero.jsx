import React from 'react';
import hero from "../../assets/hero-section.jpg";

const Hero = () => {
    let title = "Quality over Quantity";
  return (
    <div className='hero-section'>
      <img src={hero} alt="hero-section image" />
      <div className="hero-title">{title}</div>
    </div>
  )
}

export default Hero
