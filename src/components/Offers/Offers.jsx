import React from 'react'
import "./Offers.css"
import exclusive_image from "/exclusive_image.png"
import { useNavigate } from 'react-router-dom';

const Offers = () => {
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
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <h3>ONLY ON BEST SELLERS PRODUCTS</h3>
        <button  onClick={handleClick}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image}></img>
      </div>
    </div>
  )
}

export default Offers
