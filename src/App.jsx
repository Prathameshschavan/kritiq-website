import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Services from "./components/Services";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const progress = useMemo(() => {
    return (
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100
    );
  }, [window.scrollY]);

  console.log(progress);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Hero isVisible={isVisible} scrollToSection={scrollToSection} />

      {/* <Companies /> */}

      <Services isVisible={isVisible} />

      {/* <Products isVisible={isVisible} /> */}

      <Testimonials />

      <AboutUs isVisible={isVisible} />

      <Teams isVisible={isVisible} />

      <Contact isVisible={isVisible} />

      <Footer />

      {/* Floating Action Button */}
      <button
        onClick={() => scrollToSection("contact")}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 animate-pulse"
      >
        <MessageCircle />
      </button>

      {/* Scroll Progress Indicator */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div> */}
    </div>
  );
}

export default App;
