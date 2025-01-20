import React from 'react'
import Header from '../page-components/header'
import Working from '../page-components/working'
import Faq from '../page-components/faq'
import Contact from '../page-components/contact'
import Service from '../page-components/service'
import Testimonials from '../page-components/testmonials'
import Consulting from '../page-components/consulting'

const Final = () => {
  return (
    <div><Header />
    <Service />
    <Working />
    <Consulting />
    <Faq />
    <Testimonials />
    <Contact /></div>
  )
}

export default Final