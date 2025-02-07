import React from 'react'
import Hero from './hero/Hero'
import Services from './services/Services'
import Portfolio from './portfolio/portfolio'
import About from './about/about'
const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Portfolio/>
    </>
  )
}

export default Home