import React from 'react'
import logo from "/src/assets/headerlogo.jpg";

const TopHeader = () => {
  return (
    <div className='top-details'>
      <div className="container top-header">
        <div className="top-header-left">
            <li><i className="fa-brands fa-facebook-f"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
        </div>
        <div className="top-header-center">
            <div className='logo-img'><img src={logo} alt="top-header logo" /></div>
            <div className="logo-title1">Ciardi</div>
            <div className="logo-title2">Joinery</div>
        </div>
        <div className="top-header-right">Call: 0450 455 724</div>
      </div>
    </div>
  )
}

export default TopHeader
