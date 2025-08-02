import React from "react";
import Logo from "../assets/images/KQ-02.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={Logo} alt="Kritiq it solutions" className="w-10 h-10" />
              <span className="text-xl font-bold">KritIQ IT Solutions</span>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              We are a dynamic software development company specializing in
              custom applications, enterprise solutions, and digital
              transformation services designed to drive your business forward.
            </p>
            <div className="flex space-x-4">
              {["📧", "📱", "💼", "🌐"].map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 cursor-pointer transform hover:scale-110 transition-all duration-300"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Custom Software Development",
                "Mobile App Development",
                "Cloud Solutions",
                "AI & Machine Learning",
                "Graphic Designing",
                "Digital Marketing",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                "KritIQ Analytics Pro",
                "Enterprise Resource Suite",
                "SecurePay Gateway",
                "Custom Solutions",
                "Product Support",
                "Training & Documentation",
              ].map((product, index) => (
                <li key={index}>
                  <a
                    href="#products"
                    className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "Contact",
                "Support",
                "Privacy Policy",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#about"
                    className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-blue-100">
            &copy; 2025 KritIQ IT Solutions PVT LTD. All rights reserved. |
            Privacy Policy | Terms of Service | ISO 27001 Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
