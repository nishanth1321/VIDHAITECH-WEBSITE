import React from 'react'

const SapServices = () => {
  const services = [
    {
      id: 1,
      title: "SAP Implementation",
      description: "We offer end-to-end SAP implementation services, from initial planning and design to deployment and go-live support. Our experts ensure a seamless transition and minimal disruption to your business operations.",
      image: "/sapservice1.webp", // Replace with your actual image path
      alt: "SAP Implementation - Business analyst reviewing SAP dashboard"
    },
    {
      id: 2,
      title: "SAP Support Services",
      description: "Our dedicated support team provides ongoing maintenance, troubleshooting, and optimization services to keep your SAP systems running at peak performance. We offer proactive monitoring and rapid response to any issues.",
      image: "/sapservice2.webp", // Replace with your actual image path
      alt: "SAP Support Services - Technical team working on multiple monitors"
    },
    {
      id: 3,
      title: "SAP Training & Enablement",
      description: "We provide comprehensive training programs to empower your team with the knowledge and skills needed to effectively use and manage your SAP systems. Maximize your ROI with our expert-led training.",
      image: "/sapservice3.webp", // Replace with your actual image path
      alt: "SAP Training & Enablement - Training session in progress"
    }
  ]

  return (
    <div className="py-16 px-6 lg:px-28 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Service Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <button className="border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded transition-colors duration-300 text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SapServices