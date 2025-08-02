import { Award, CheckCircle, Clock, Star, Users } from "lucide-react";
import React from "react";

const AboutUs = ({ isVisible }) => {
  return (
    <section id="about" className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
          Leading the Digital Revolution
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible["about"]
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Established in 2025, KritIQ IT Solutions is a dynamic
              software development company dedicated to delivering innovative,
              high-quality solutions. Our expertise is built on a foundation of
              robust technical skills and a passion for technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed lg:mb-8">
              We combine technical excellence with business acumen to create
              solutions that not only meet today's requirements but are also
              scalable for tomorrow's growth.
            </p>
          </div>
          <div className="space-y-4 lg:pl-6">
            {[
              "Strong emphasis on Security & Data Privacy",
              "Agile Development Methodology",
              "Industry-Leading Quality Assurance",
              "Personalized Technical Support & Maintenance",
              "Flexible Remote Collaboration",
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* <div
            className={`grid grid-cols-2 gap-6 transform transition-all duration-1000 delay-300 ${
              isVisible["about"]
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {[
              {
                number: "200+",
                label: "Projects Completed",
                icon: <Award className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                number: "50+",
                label: "Enterprise Clients",
                icon: <Users className="w-8 h-8" />,
                color: "from-green-500 to-teal-500",
              },
              {
                number: "5+",
                label: "Years of Excellence",
                icon: <Clock className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                number: "99%",
                label: "Client Satisfaction",
                icon: <Star className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
