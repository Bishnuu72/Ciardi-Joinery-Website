import React from 'react';
import proImg1 from "../../assets/projectImages/pro1.jpg";
import proImg2 from "../../assets/projectImages/pro2.jpg";
import proImg3 from "../../assets/projectImages/pro3.jpg";
import proImg4 from "../../assets/projectImages/pro4.jpg";

const Projects = () => {
  const projects = [
    {
      "_id" : "1",
      "img": proImg1,
    },
    {
      "_id" : "2",
      "img": proImg2,
    },
    {
      "_id" : "3",
      "img": proImg3,
    },
    {
      "_id" : "4",
      "img": proImg4,
    }
  ]
  return (
    <div>
      <div className="projects-section">
        <h3>RECENT <span>PROJECTS</span></h3>
        <div className="row">
          {projects.map((item, index) => {
            return (
              <div className="col-md-6 img-fix" key={index}>
                <img src={item.img} alt="projects images" />
              </div>
            )
          })}
        </div>
        <div className="project-button">
          <button className="project-btn">View All Works</button>
        </div>
      </div>
    </div>
  )
}

export default Projects
