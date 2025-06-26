import React from 'react';
import bgImg from "../../assets/servicesImages/services-bg.jpg";
import img1 from "../../assets/servicesImages/service1.jpg";

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
      "desc": "We specialize in creating custom cabinetry that combines functionality with timeless beauty.",
      "img": img1,
    },
    {
      "_id" : "3",
      "title": "Vanities",
      "desc": "We specialize in creating custom cabinetry that combines functionality with timeless beauty.",
      "img": img1,
    },
    {
      "_id" : "4",
      "title": "TV Units",
      "desc": "We specialize in creating custom cabinetry that combines functionality with timeless beauty.",
      "img": img1,
    },
    {
      "_id" : "5",
      "title": "Hair Salons/Barber Shops",
      "desc": "We specialize in creating custom cabinetry that combines functionality with timeless beauty.",
      "img": img1,
    },
    {
      "_id" : "6",
      "title": "Shop Fits Outs",
      "desc": "We specialize in creating custom cabinetry that combines functionality with timeless beauty.",
      "img": img1,
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
