import React from 'react'
import {Banner, Service, Testimonial, Information} from '../../components'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className='pt-16'>
        <Banner/>
        <Service/>
        <Project/>
        <Testimonial/>
        <Information/>
        <Contact />
    </div>
  )
}

export default Home