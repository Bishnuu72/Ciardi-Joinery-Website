import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import './App.css'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import Projects from './components/pages/Projects';
import Testimonials from './components/pages/Testimonials';
import ContactUs from './components/pages/ContactUs';
import TopHeader from './components/layout/TopHeader';

function App() {

  return (
    <>
      <Router>
        <TopHeader />
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
