import React from 'react';

const OdooServices = () => {
  const services = [
    {
      id: 1,
      title: "Streamlined Inventory Management with Odoo",
      description: "Odoo's inventory module helped a manufacturing client reduce stockouts by 30% and improve order fulfillment times significantly, enhancing overall efficiency.",
      image: "/odooservice1.webp"
    },
    {
      id: 2,
      title: "Enhanced Customer Relationships with Odoo CRM",
      description: "Our Odoo CRM implementation enabled a service-based business to improve customer retention rates by 25% through personalized communication and efficient issue resolution.",
      image: "/odooservice2.webp"
    },
    {
      id: 3,
      title: "Automated Accounting Processes with Odoo",
      description: "Vidhai Technologies implemented Odoo's accounting module for a retail client, resulting in a 40% reduction in manual data entry and faster financial reporting cycles.",
      image: "/odooservice3.webp"
    },
    {
      id: 4,
      title: "Optimized Manufacturing Operations with Odoo",
      description: "We helped a manufacturing company streamline their production processes with Odoo, leading to a 20% increase in production output and reduced operational costs.",
      image: "/odooservice4.webp"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg  overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="h-[50vh] bg-gray-200 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OdooServices;