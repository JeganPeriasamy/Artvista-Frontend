import React from 'react';
import "./Hero.css";
import hand_icon from "/hand_icon.png"
import arrow_icon from "/arrow.png"
import hero_image from "/hero_image.png"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='hero'>
       <div className="hero-left">
            
            <div>
                <div className="hero-hand-icon">
                    <p>Life is all about Art, Make it more special </p>
                    <img src={hand_icon} alt=""></img>
                    
                </div>
                
                
       </div>
       <div onClick={handleClick}className="hero-latest-btn">
        <div>Latest Collections</div>
        <img src={arrow_icon}></img>
       </div>
       </div>

       <div className="hero-right">
       <img src={hero_image} alt=""></img>
       </div>
       

    </div>
  );
}

export default Hero;
