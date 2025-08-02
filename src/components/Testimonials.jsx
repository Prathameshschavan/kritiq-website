import { Star } from "lucide-react";
import React from "react";

// const testimonials = [
//   {
//     name: "Raj Agarwal",
//     position: "CEO, TechCorp Solutions",
//     content:
//       "KritIQ delivered an exceptional custom software solution that completely transformed our operations. Their team's expertise exceeded our expectations.",
//     avatar: "RA",
//     rating: 5,
//   },
//   {
//     name: "Priya Sharma",
//     position: "Founder, RetailMax",
//     content:
//       "Outstanding mobile app development service. The app they built increased our customer engagement and revenue by 40%.",
//     avatar: "PS",
//     rating: 5,
//   },
//   {
//     name: "Manoj Kumar",
//     position: "CTO, GlobalTech Industries",
//     content:
//       "Their cloud migration service was seamless and efficient. We experienced zero downtime and significant cost savings.",
//     avatar: "MK",
//     rating: 5,
//   },
// ];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our services.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-blue-100 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="max-w-[520px] m-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transform hover:-translate-y-2 transition-all duration-500">
          <p className="text-blue-100 leading-relaxed  italic">
            Be one of our success stories — client testimonials coming soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
