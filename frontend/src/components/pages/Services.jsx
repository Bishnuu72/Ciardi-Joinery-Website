import React from 'react';
import bgImg from "../../assets/servicesImages/services-bg.jpg";
import img1 from "../../assets/servicesImages/service1.jpg";
import img2 from "../../assets/servicesImages/service2.jpg";
import img3 from "../../assets/servicesImages/service3.jpg";
import img4 from "../../assets/servicesImages/service4.jpg";
import img5 from "../../assets/servicesImages/service5.jpg";
import img6 from "../../assets/servicesImages/service6.jpg";

const Services = () => {
  const serviceDetails = [
    {
      "_id" : "1",
      "title": "Cabinet Making",
      "desc": "We specialize in creating custom cabinetry that combines functionality with timeless beauty.",
      "img": img1,
    },
    {
      "_id" : "2",
      "title": "Custom Joinery",
      "desc": "Our team of expert artisans is dedicated to delivering the highest quality in every piece we create.",
      "img": img2,
    },
    {
      "_id" : "3",
      "title": "Vanities",
      "desc": "We specialize in designing and crafting bespoke vanities that combine modern aesthetics with timeless functionality.",
      "img": img3,
    },
    {
      "_id" : "4",
      "title": "TV Units",
      "desc": "We use responsibly sourced materials and sustainable practices to ensure our tv units are as eco-friendly as they are stunning.",
      "img": img4,
    },
    {
      "_id" : "5",
      "title": "Hair Salons/Barber Shops",
      "desc": "Our team of professional stylists and barbers are dedicated to deliver precision and creativity in every cut and style.",
      "img": img5,
    },
    {
      "_id" : "6",
      "title": "Shop Fits Outs",
      "desc": "Our Team of expert designers craftsmen work meticulously to ensure that every detail is perfect.",
      "img": img6,
    },

  ]
  return (
    <div>
      <div className="services-section"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0px",
        width: "100%",
      }}
      >
        <div className="container">
          <h4>Our <span>Services</span></h4>
          <div className="row">
            {serviceDetails.map((item, index) => {
              return(
                <div className="col-md-4" key={index}>
                  <div className="card services-details">
                    <div className="service-img"><img src={item.img} alt={item.title} /></div>
                    <div className="service-title">{item.title}</div>
                    <div className="service-desc">{item.desc}</div>
                    <div className="service-btn">
                      <button className='serv-btn'>READ MORE</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="services-button">
            <button className="serv-btn">View All Services</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
