import React from 'react';
import './Footer.css';
import footer_logo from '/logo_big.png';
import instagram_icon from '/instagram_icon.png';
import pinterest_icon from '/pintester_icon.png';
import whatsapp_icon from '/whatsapp_icon.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Helper function to handle external links
  const openExternalLink = (url) => {
    window.open(url, '_blank');
  }
  const handleClick = () => {
    navigate('/aboutus');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="Logo" />
        <p>Vista</p>
      </div>
      
      <ul className='footer-links'>
        <li onClick={handleClick}>Company</li>
        <li onClick={handleClick}>Offices</li>
        <li onClick={handleClick}>About</li>
        <li onClick={handleClick}>Contact</li>
      </ul>
      
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img onClick={() => openExternalLink('https://www.instagram.com/artvista_gallery_hk/')} src={instagram_icon} alt="Instagram" />
        </div>
        
        <div className="footer-icons-container">
          <img onClick={() => openExternalLink('https://www.pinterest.com/artvistagallery/')} src={pinterest_icon} alt="Pinterest" />
        </div>
    
        <div className="footer-icons-container">
          <img onClick={() => openExternalLink('https://web.whatsapp.com/send/?phone=8613480947630')} src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 - All Rights Reserved by Vista</p>
      </div>
    </div>
  );
}

export default Footer;
