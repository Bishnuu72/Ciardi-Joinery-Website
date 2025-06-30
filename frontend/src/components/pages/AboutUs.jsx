import React from 'react';
import img from "../../assets/about-img.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="about-section">
        <div className="container">
          <div className="about-img">
            <img src={img} alt="about image" />
            <div className="about-years">
              <div className="abt-8plus">
                <span className='abt-8'>8 </span>
                <span className='abt-plus'>+</span>
              </div>
                <p>Years of</p>
                <p>Experience</p>
            </div>
          </div>
          <div className="about-details">
            <div className="abt-title">
              <h5 className='abt-welcome'>WELCOME TO</h5>
              <p>CIARDI <span>JOINERY</span></p>
              </div>
              <div className="about-content">
                <p><b>Ciardi Joinery is a small company in the Hawkesbury recently opened and is quickly making Positive approach to quality over quantity.</b></p>
                <p>At <b>Ciardi Joinery,</b> we redefine craftsmanship for the modern age. With a blend of traditional techniques and cutting-edge technology, we create bespoke joinery solutions that are both innovative and timeless, with a mission to provide exceptional joinery services that combine quality, creativity, and functionality. Today, we're proud to be industry leaders, known for cut precision, attention to detail, and commitment to excellence.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt nesciunt sapiente unde cum aut ea consequuntur quae. Voluptates eum doloribus nisi officia recusandae quas unde mollitia ipsam. Enim, quas.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur fugit natus maiores, quod provident suscipit minus inventore deleniti dolorem commodi consectetur dolore error odit dignissimos, quibusdam exercitationem laborum consequuntur id!</p>
              </div>
              <div className="about-btn">
                <button className="abt-btn">ABOUT US</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
