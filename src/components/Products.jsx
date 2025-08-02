import React from "react";

const products = [
  {
    title: "KritIQ Analytics Pro",
    description:
      "Advanced business intelligence platform with real-time analytics and predictive insights.",
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Enterprise Resource Suite",
    description:
      "Comprehensive ERP solution integrating HR, finance, inventory, and project management.",
    icon: "🏢",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "SecurePay Gateway",
    description:
      "Secure payment processing solution with multi-currency support and fraud detection.",
    icon: "💳",
    color: "from-green-500 to-teal-500",
  },
];

const Products = ({ isVisible }) => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible["products"]
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Flagship Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative software products designed to streamline operations and
            boost productivity across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group ${
                isVisible["products"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`h-48 bg-gradient-to-r ${product.color} flex items-center justify-center text-6xl text-white group-hover:scale-105 transition-transform duration-300`}
              >
                {product.icon}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
