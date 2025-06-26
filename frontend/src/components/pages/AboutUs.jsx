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
                <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed laboriosam distinctio temporibus, similique et error soluta autem corporis explicabo dignissimos ut. Corrupti culpa sapiente, pariatur magnam cum tenetur. Eius?</b></p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores temporibus possimus. Nam tempore, nobis fugiat ipsam asperiores iste numquam sit facere nemo aliquam doloribus libero eveniet excepturi voluptatibus sapiente.</p>
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
