import React from 'react'
import Bottom from '../../components/LandingComp/Bottom/Bottom'
import Hero from '../../components/LandingComp/Hero/Hero'
import Testimonial from '../../components/LandingComp/Testimonial/Testimonial'
import Tutorial from '../../components/LandingComp/Tutorial/Tutorial'

function Landing() {
  return (
    <div>
      <Hero />
      <Tutorial />
      <Testimonial />
      <Bottom/>
    </div>
  )
}

export default Landing
