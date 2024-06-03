import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
            const addresses = [
          {
            id: 1,
            city: 'Springfield',
            country: 'USA'
          },
          {
            id: 2,
            city: 'Columbus',
            country: 'USA'
          },
          {
            id: 3,        
            city: 'Austin',
            country: 'GERMANY'
          },
          {
            id: 2,
            
  
            city: 'Columbus',
           
            country: 'AUSTRALIA'
          },
          {
            id: 3,
            
          
            city: 'Austin',
          
            country: 'North America'
          },
          {
            id: 2,
          
           
            city: 'Mumbai',
          
            country: 'India'
          },
          {
            id: 3,
            
           
             city: 'Chennai',
       
            country: 'India'
          },
          
        ];
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>
        Artvista is located in Shenzhen Dafen Oil Painting Village, a world-famous oil painting creation and sales base. We focus on the creation and sales of oil painting art, adhering to the principles of professionalism, refinement and innovation, and are committed to providing high-quality art works to customers around the world.

Shenzhen Dafen Oil Painting Village has a strong artistic atmosphere and a long history of oil painting. Our founder deeply felt the charm of oil painting art and hoped to spread this art form to a wider range of people. Therefore,We have gathered a group of professional painters who interpret life with their brushes and tell stories with their colors.
        </p>
      </section>
      <section className="about-us-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofvAwCR4LjhG9o6zCmISx8kfyWzY4qlRv8hG7dxVW3A&s" alt="Team Member 1" className="team-member-photo" />
            <h3>Jane Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwEumvC2Uz0JnBlyAC8bnonIIteMQoovjTJwZ-q-euA&s" alt="Team Member 2" className="team-member-photo" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt="Team Member 3" className="team-member-photo" />
            <h3>Emily Johnson</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
      <footer className="about-us-footer">
      <h3>Contact Us</h3> 
        <p>Email: info@artvistagallery.com</p>
        <p>WhatsApp: +86 134 8094 7630</p>
        <p>Tel: +86 134 8094 7630</p>



      
      </footer>
    </div>
  );
};

export default AboutUs;
