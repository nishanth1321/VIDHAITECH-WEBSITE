
"use client";

export default function Consulting() {
  return (
    <div className="w-full" id="work">
      {/* Main Content - 50/50 Split */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Image Section - Left 50% */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="/getintouch.webp"
            alt="IT Solutions Illustration"
            className="w-full h-full object-cover min-h-[600px] lg:min-h-screen"
          />
        </div>

        {/* Text Section - Right 50% */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-black px-6 lg:px-16 py-16">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-medium text-white mb-8 leading-tight">
              Tailored Odoo Solutions to{" "}
              <span className="italic text-gray-500">Streamline  </span>
              Your Business Operations
            </h1>

            <p className="text-white font-medium text-lg mb-12 leading-relaxed">
             Vidhai Technologies specializes in Odoo implementation and consulting, offering customized solutions that streamline your business operations. Our team works closely with you to ensure that Odoo meets your unique operational needs, enhancing efficiency and productivity.
            </p>

<ul className="list-disc text-white text-lg space-y-4 pl-5">
  <li>
    <span className="text-gray-300">Customized Odoo Solutions:</span> Tailored to your specific business needs.
  </li>
  <li>
    <span className="text-gray-300">Streamlined Operations:</span> Enhance efficiency and productivity.
  </li>
  <li>
    <span className="text-gray-300">Expert Implementation:</span> Seamless integration and support.
  </li>
</ul>

            
          </div>
        </div>
      </div>
    </div>
  );
}