import { Brain, Cloud, Code, Megaphone, Palette, Shield, Smartphone, Users } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your specific business requirements and drive growth.",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to optimize your business operations.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description:
    "Intelligent automation and data-driven insights to revolutionize your business processes.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Graphic Designing",
    description:
    "Creative visual solutions including logos, branding, UI/UX, and promotional materials that elevate your brand identity and engage your audience.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies including SEO, social media, content, and email campaigns to maximize your brand's reach and ROI.",
    color: "from-purple-500 to-pink-600",
  },
];

const Services = ({ isVisible }) => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible["services"]
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services tailored to
            meet your business objectives and drive digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 group ${
                isVisible["services"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
