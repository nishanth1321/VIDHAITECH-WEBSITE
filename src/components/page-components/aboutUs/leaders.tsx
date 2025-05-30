import React from 'react';

const Leaders: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO',
      description:
        'With over 15 years of experience in IT consulting, Rajesh leads Vidhai Technologies with a vision to deliver exceptional value to clients.',
      image: '/ceo.webp', // Replace with actual image path
    },
    {
      name: 'Anita Sharma',
      role: 'CTO',
      description:
        'Anita is a technology expert specializing in ERP systems, driving the technical strategy and innovation at Vidhai Technologies.',
      image: '/ceo.webp', // Replace with actual image path
    },
    {
      name: 'Suresh Iyer',
      role: 'Senior Consultant',
      description:
        'Suresh has extensive experience in SAP and Oracle consulting, helping clients optimize their business processes.',
      image: '/ceo.webp', // Replace with actual image path
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section: Heading, Subheading, Button */}
        <div className="lg:w-1/2">
          <p className="text-sm uppercase text-gray-500 tracking-wide font-medium">
            Our Experts
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Get to Know Us
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover the talented individuals behind our innovative solutions.
          </p>
          <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>

        {/* Right Section: Team Members (Vertical) */}
        <div className="lg:w-1/2 flex flex-col gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 uppercase">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaders;