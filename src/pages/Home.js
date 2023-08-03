import React from 'react'
import { Contact, FeaturedProduct, Hero, Service } from '../component'

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Service />
      <Contact />
    </main>
  )
}

export default Home