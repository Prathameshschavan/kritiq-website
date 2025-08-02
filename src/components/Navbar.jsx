import { Menu, X } from "lucide-react";
import React from "react";

const Navbar = ({
  activeSection,
  setIsMenuOpen,
  isMenuOpen,
  scrollToSection,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/src/assets/images/KQ-01.png"
              alt="Kritiq it solutions"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-gray-900">
              KritIQ IT Solutions
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {["home", "services", "products", "about", "team", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {section}
                </button>
              )
            )}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Quote
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {["home", "services", "products", "about", "team", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg capitalize transition-colors"
                >
                  {section}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
