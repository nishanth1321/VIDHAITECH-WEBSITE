"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What services does Vidhai Technologies provide?",
      answer:
        "Vidhai Technologies offers comprehensive IT solutions, including software development, cloud computing, IT infrastructure management, and digital transformation tailored to your business needs.",
    },
    {
      question: "How do your IT solutions help businesses succeed?",
      answer:
        "Our solutions enhance efficiency, optimize processes, and provide cutting-edge technology to empower businesses to scale, innovate, and achieve sustainable growth.",
    },
    {
      question: "Can your solutions be customized for my business?",
      answer:
        "Absolutely! Our solutions are fully customizable to meet your unique business requirements, ensuring you get the most value from our services.",
    },
    {
      question: "How experienced is the Vidhai Technologies team?",
      answer:
        "Our team consists of seasoned IT professionals with years of expertise in various domains, ensuring we deliver top-quality solutions to our clients.",
    },
  ];

  return (
    <div className="py-16 bg-white" id="faq">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <div className="text-left">
            <h2 className="text-5xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Discover more about Vidhai Technologies and how our end-to-end IT
              solutions can empower your business. Below are answers to common
              questions to help you understand what we offer and how we can
              assist your organization.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full px-4 sm:px-8 py-4 text-left flex justify-between items-center text-gray-900 font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <div className="ml-4 bg-blue-800 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">
                    {activeIndex === index ? "-" : "↓"}
                  </span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-4 sm:px-8 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
