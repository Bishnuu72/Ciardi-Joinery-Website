import React from 'react';
import img from "../../assets/contact-img.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContactUs = () => {
  return (
    <div>
      <div className="contact-section">
        <div className="row">
          <div className="col-md-6 fix-border">
            <img src={img} alt="contact image" />
          </div>
          <div className="col-md-6 fix-border">
            <div className="contact-details">
              <div className="contact-title">
                <h2>Get A Quote Here</h2><span class='bi bi-arrow-90deg-right' style={{ transform: "rotate(90deg)" }}></span>
              </div>
              <div className="contact-name">
                <label htmlFor="name">Full Name</label>
                <input type="text" />
              </div>
              <div className="contact-phone">
                <label htmlFor="name">Phone*</label>
                <input type="number" />
              </div>
              <div className="contact-email">
                <label htmlFor="name">Email Address*</label>
                <input type="text" />
              </div>
              <div className="contact-message">
                <label htmlFor="text">Message</label>
                <textarea name="text" id="message"></textarea>
              </div>
              <div className="contact-btn">
                <button className="cont-btn">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
