import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header-details">
        <ul className='abc'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
