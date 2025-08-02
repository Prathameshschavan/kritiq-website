import { ArrowRight, Rocket } from "lucide-react";
import HeroImage from "../assets/images/hero-image.png";
// const stats = [
//   { number: "200+", label: "Projects Completed" },
//   { number: "50+", label: "Happy Clients" },
//   { number: "99%", label: "Success Rate" },
//   { number: "5+", label: "Years Experience" },
// ];

const Hero = ({ isVisible, scrollToSection }) => {
  return (
    <section id="home" className="pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible["home"]
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Cutting-Edge Software
              </span>{" "}
              Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a leading software development company specializing in
              custom applications, enterprise solutions, and digital
              transformation services that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Our Services
              </button>
            </div>
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible["home"]
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-contain relative  rounded-3xl flex items-center justify-center text-white text-8xl  transform rotate-3 hover:rotate-6 transition-transform duration-500">
              <img
                src={HeroImage}
                className="w-[100%] object-contain rounded-2xl"
                alt="hero image"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-3xl animate-bounce">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl animate-bounce ">
                <Rocket />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
