import Image from 'next/image'
import React from 'react'

const AboutUsImage = () => {
  return (
     <div className="bg-white py-16 px-6 lg:px-28 sm:-mt-12 mt-0" id="service">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full h-[640px]">
              <Image 
                src={'/aboutusimage.webp'} 
                alt={'Service Image'} 
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
  )
}

export default AboutUsImage
