import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-28 sm:-mt-12 mt-0" id="service">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[640px]">
          <Image 
            src={'/2.webp'} 
            alt={'Service Image'} 
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;