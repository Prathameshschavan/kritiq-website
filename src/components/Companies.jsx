import React from "react";

const Companies = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-600 text-lg font-semibold mb-12">
          Trusted by Leading Companies Worldwide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {[
            "TechCorp",
            "GlobalTech",
            "InnovateLab",
            "DataFlow",
            "CloudSync",
            "NextGen",
          ].map((company, index) => (
            <div
              key={index}
              className="h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center font-bold text-gray-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
