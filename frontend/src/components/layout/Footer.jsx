import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer1-details">
                <h3>Ciardi Joinery</h3>
                <p>We listen to your ideas, understand your needs, and work closely with you to deliver custom woodwork that exceeds your expectations.</p>
                <div className="footer-social-icons">
                  <p className='footer-fb-icon'><i class="fa-brands fa-facebook-f"></i></p>
                  <p className='footer-insta-icon'><i class="fa-brands fa-instagram"></i></p>
                  <p className='footer-twitter-icon'><i class="fa-brands fa-twitter"></i></p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer2-details">
                <h3>Quick Links</h3>
                <ul className='footer2-links'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/testimonials">Testimonials</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer3-details">
                <h3>Get In Touch</h3>
                <div className="touch-details">
                  <div className="touch-text1">
                    <i class="fa-solid fa-location-dot"></i><p>Hawkesbury location and Sydney wide, hills area, Queensland, Melbourne CBD</p>
                  </div>
                  <div className="touch-text2">
                    <i class="fa-solid fa-phone-volume"></i><p>0450 455 724</p>
                  </div>
                  <div className="touch-text3">
                    <i class="fa-solid fa-envelope"></i><p>jhnciardi@gmail.com</p>
                  </div>
                  <div className="touch-text4">
                    <p>ABN: 18 940 955 619</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer4-details">
                <h3>Business Hours</h3>
                <div className="business-hour">
                  <div className="bh1">
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                  </div>
                  <div className="bh2">
                    <p>9Am-6PM</p>
                    <p>9Am-6PM</p>
                    <p>9Am-6PM</p>
                    <p>9Am-6PM</p>
                    <p>9Am-6PM</p>
                    <p>10Am-1PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright-details">
          <p>Copyright &copy; 2024 <b>Ciardi Joinery. </b>All Rights Reserved. Designed By: Bishnu Kumar Yadav</p>
        </div>
      </section>
    </div>
  )
}

export default Footer
