import React from "react";
import PrathameshProfile from "../assets/images/Prathamesh-Profile.jpg";
import AljithProfile from "../assets/images/Aljith-Profile.jpg";
import ManojProfile from "../assets/images/Manoj-Profile.jpg";
import AkshataProfile from "../assets/images/Akshata-Profile.jpg";
import SiddheshProfile from "../assets/images/Siddhesh-Profile.jpg";
import ShubhamProfile from "../assets/images/Shubham-Profile.jpg";
import SuryaProfile from "../assets/images/Surya-Profile.jpg";

const teamMembers = [
  {
    name: "Prathamesh Chavan",
    title: "Lead Software Architect",
    image: PrathameshProfile,
    description:
      "3+ years of hands-on experience in software development and delivering impactful digital solutions.",
  },
  {
    name: "Aljith KJ",
    title: "Lead Full-Stack Developer",
    image: AljithProfile,
    description:
      "Specializes in modern web technologies, microservices, and API development with 3+ years experience.",
  },
  {
    name: "Manoj Singh",
    title: "Lead Backend Developer",
    image: ManojProfile,
    description:
      "Backend developer specialized in Magento and scalable API systems with 3+ years of experience.",
  },
  {
    name: "Akshata Jadhav",
    title: "Marketing Head",
    image: AkshataProfile,
    description:
      "Creative marketer with 2+ years of experience in user-focused design and digital strategy, driving brand growth and engagement.",
  },
  {
    name: "Siddhesh Chavan",
    title: "Creative Design Head",
    image: SiddheshProfile,
    description:
      "Creative designer with 4+ years experience in user-centered design and digital product strategy.",
  },
  {
    name: "Shubham Tribhuvan",
    title: "Lead Full-Stack & AI Engineer",
    image: ShubhamProfile,
    description:
      "Skilled full-stack and AI engineer with 3+ years of experience delivering robust and intelligent digital solutions.",
  },
  {
    name: "Surya Singh",
    title: "Lead Web & Mobile App Developer",
    image: SuryaProfile,
    description:
      "Expert in crafting responsive web and mobile apps with 3+ years of hands-on experience in full-stack development.",
  },
];
const Teams = ({ isVisible }) => {
  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible["team"]
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented professionals bring years of experience and expertise
            to deliver exceptional results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...teamMembers.slice(0, 4)].map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 ${
                isVisible["team"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={member?.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
