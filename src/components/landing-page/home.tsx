import React from 'react'
import Header from '../page-components/header'
import Working from '../page-components/working'
import Service from '../page-components/service'
import Consulting from '../page-components/consulting'
import ServiceHeader from '../page-components/service-header'
import Working2 from '../page-components/working2'
import Scale from '../page-components/scale'
import GetInTouch from '../page-components/get-in-touch'

const Final = () => {
  return (
    <div><Header />
    <ServiceHeader />
    <Service />
    <Working />
    <Working2 />
    <Consulting />
    <Scale />
    <GetInTouch />
    </div>
  )
}

export default Final