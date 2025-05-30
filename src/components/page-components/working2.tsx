"use client";



export default function Working2() {
  return (
    <div className="w-full" id="work">
      {/* Main Content - 50/50 Split */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Text Section - Left 50% */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 lg:px-16 py-16">
          <div className="max-w-xl ">
            <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-8 leading-tight  ">
             Seamless Oracle Solutions for{" "}
              <span className="italic text-gray-700">Enhanced </span>
              Business Performance

            </h1>

            <p className="text-gray-700 font-medium text-lg mb-12 leading-relaxed">
             Vidhai Technologies offers comprehensive Oracle support and consulting services, ensuring seamless integration and optimal performance of your business applications. Our expert team provides strategic insights and tailored solutions to meet your unique needs.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Stat 1 */}
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  95%
                </div>
                <p className="text-black font-medium text-base">
                 Client satisfaction rate with our Oracle solutions.
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  24/7
                </div>
                <p className="text-black font-medium text-base">
                 Around-the-clock Oracle support for your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Right 50% */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="/4.webp"
            alt="IT Solutions Illustration"
            className="w-full h-full object-cover min-h-[600px] lg:min-h-screen"
          />
        </div>

      </div>
    </div>
  );
}