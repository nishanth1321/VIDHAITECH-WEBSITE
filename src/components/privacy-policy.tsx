import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vidhai Technologies Private Limited Privacy Policy</h2>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vidhai Technologies Private Limited respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and protect the personal information you provide to us through our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4 space-y-2 ml-4">
              <li><strong>Personal Information:</strong> This includes information such as your name, email address, phone number, and company details that you provide when contacting us, registering for services, or using our website.</li>
              <li><strong>Usage Information:</strong> We may collect information about how you use our website, such as the pages you visit, the features you use, and the duration of your visits.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. How We Use Your Information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Provide you with the services you request.</li>
              <li>Respond to your inquiries and questions.</li>
              <li>Improve our website and services.</li>
              <li>Send you important communications, such as updates about our services or promotional offers (with your consent).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Data Security</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, use, or disclosure.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Data Retention</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We retain your information only as long as necessary for the purposes for which it was collected or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Your Rights</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Contact Us</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
              <a 
                href="mailto:info@vidhaitechnologies.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                info@vidhaitechnologies.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy