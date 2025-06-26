import React from 'react'

const Features = () => {
    const features = [
        {
            "title": "Custom Designs",
            "desc": "We specialize in creating bespoke joinery pieces tailored to your unique vision and style.",
            "icon": "fa-solid fa-ruler-combined"
        },
        {
            "title": "High-Quality Materials",
            "desc": "We use only the finest timber and materials to create durable and long-lasting products.",
            "icon": "fa-solid fa-tree"
        },
        {
            "title": "Experience Professional",
            "desc": "Our skilled joiners give years of experience and joy to each project, resulting in unique quality.",
            "icon": "fa-solid fa-user-gear"
        },
    ]
  return (
    <div>
      <div className="features-section">
        <div className="container">
            <div className="row">
                {features.map((item, index) => {
                    return(
                        <div className="col-md-4" key={index} >
                            <div className="features-details">
                                <div className="features-icon"><i className={item.icon}></i></div>
                                <div className="features-title">{item.title}</div>
                                <div className="features-desc">{item.desc}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
