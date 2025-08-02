import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = ({ isVisible }) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible["contact"]
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with our innovative software
            solutions? Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible["contact"]
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              We're here to help you achieve your technology goals. Whether you
              need a custom software solution, mobile app, or digital
              transformation strategy, our team is ready to deliver exceptional
              results.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  content: "support@kritiqitsolutions.com",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone",
                  content: "+91 98602 04367\n+91 80106 75422",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Address",
                  content: "Sainath Nagar, Virar East, Palghar - 401305",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Business Hours",
                  content:
                    "Mon-Fri: 9:00 AM - 7:00 PM\nSat: 10:00 AM - 4:00 PM",
                },
              ].map((contact, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {contact.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 transform transition-all duration-1000 ${
              isVisible["contact"]
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service Required
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                  <option value="">Select a service</option>
                  <option value="custom-software">
                    Custom Software Development
                  </option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Details *
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Please describe your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
