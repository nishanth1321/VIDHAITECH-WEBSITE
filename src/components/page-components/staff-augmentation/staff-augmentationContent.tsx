// "use client"
// import React from "react";

// const StaffAugmentationContent = () => {
//   return (
//     <div className="flex items-center justify-center sm:-mt-10 mt-4 h-screen px-4 bg-black">
//       <div className="text-center max-w-4xl">
//         <h1 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-8">
//           <span className="text-white">Scale Your Team with</span>
//           <br />
//           <span className="text-white">Expert IT StaffExpert IT Staff</span>
//         </h1>

//         <p className="text-gray-400 font-normal lg:text-lg mb-8 lg:mb-10 leading-relaxed">
//           Vidhai Technologies staff augmentation services provide skilled IT
//           professionals to help businesses scale their teams. Access top-notch
//           talent on demand, filling critical skill gaps and accelerating project
//           delivery. Focus on your core business while we handle your staffing
//           needs. We offer flexible and scalable solutions tailored to your
//           specific requirements. Contact us today to learn more about how we can
//           help you achieve your business goals.
//         </p>

//         {/* Email Signup Form */}
//         <div className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-md mx-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
//           />
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300 w-full sm:w-auto">
//             Sign up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaffAugmentationContent;


"use client";
import React, { useState } from "react";

const StaffAugmentationContent = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center sm:-mt-10 mt-4 h-screen px-4 bg-black">
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-8">
          <span className="text-white">Scale Your Team with</span>
          <br />
          <span className="text-white">Expert IT Staff</span>
        </h1>

        <p className="text-gray-400 font-normal lg:text-lg mb-8 lg:mb-10 leading-relaxed">
          Vidhai Technologies staff augmentation services provide skilled IT
          professionals to help businesses scale their teams. Access top-notch
          talent on demand, filling critical skill gaps and accelerating project
          delivery. Focus on your core business while we handle your staffing
          needs. We offer flexible and scalable solutions tailored to your
          specific requirements. Contact us today to learn more about how we can
          help you achieve your business goals.
        </p>

        {/* Email Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300 w-full sm:w-auto"
          >
            Sign up
          </button>
        </form>

        {/* Message feedback */}
        {status && (
          <p
            className={`mt-4 text-sm ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default StaffAugmentationContent;
