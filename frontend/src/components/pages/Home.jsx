import React from 'react'
import Services from './Services'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Hero from './Hero'
import Quote from './Quote'
import Features from './Features'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

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
      <ContactUs />
    </div>
  )
}

export default Home
