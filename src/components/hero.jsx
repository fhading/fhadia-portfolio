import React from 'react';
import '../styles/hero.css';
import newImage from '../assets/MOANA.png';

const Hero = () => {
  return (
    <div className="main">
    

     
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img
              src={newImage} 
              alt="Fhadia Lagoyo"
              className="hero-image"
              width="560"
              height="560"
            />
          </div>

          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              <span>Hi! I am</span> <span>Fhadia Lagoyo</span>
            </h1>
           
            <p className="hero-subtitle">A Cat Lover</p>
            <h6> <p className="hero-subtitle">   When I’m not coding, you can find me cuddling with my cats or exploring new books!</p>
            </h6>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Hero;