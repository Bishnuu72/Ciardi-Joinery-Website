import React from 'react'
import Services from './Services'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Hero from './Hero'
import Quote from './Quote'
import Features from './Features'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div>
      <Hero />
      <Quote />
      <Features />
      <AboutUs />
      <Services />
      <Testimonials />
      <Projects />
    </div>
  )
}

export default Home
