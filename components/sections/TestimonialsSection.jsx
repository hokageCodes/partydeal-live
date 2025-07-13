'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Outstanding service from start to finish! Their team handles all our events flawlessly. Their variety of dishes is impressive and everything is prepared to perfection. Our guests are usually impressed with the quality and presentation. Will definitely recommend their services",
      name: "David Okafor",
      title: "Head Planning Committee, Yaba Baptist Church",
      image: "/assets/ybc.png"
    },
    {
      text: "At the Opening/Launch of our company, we hired Party Deal's Custom Order service and they were detailed! From their timely delivery, to ensuring that request was met before leaving the premises (even though it was a drop-off, reveals a lot about their quality of service and customer satisfaction policies.)",
      name: "Busayo Ogunde",
      title: "Founder, Hokage Creative Labs",
      image: "/assets/hcl-logo.png"
    },
    {
      text: "The best catering experience we've had! From the initial consultation to the final cleanup, everything was handled professionally. The food quality exceeded our expectations and the presentation was absolutely stunning. Our anniversary celebration was made perfect by their exceptional service.",
      name: "Funmi Adebayo",
      title: "Satisfied Client",
      image: "/assets/img/logo-icon.png"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="bg-partyYellow py-20 w-full flex items-center justify-center">
      <div className="w-full max-w-7xl px-2 sm:px-4 text-center">
        <h5 className="text-sm font-medium tracking-widest uppercase text-black mb-4">
          TESTIMONIALS
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-12">
          Client Reviews
        </h2>

        {/* Carousel */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 w-full">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-black hover:bg-white/80 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial Card */}
          <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl w-full max-w-5xl min-h-[24rem] px-2 sm:px-4">
            {/* Text Section */}
            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center relative">
              {/* Mobile Avatar */}
              <div className="flex justify-center mb-4 md:hidden">
                <img
                  src={currentData.image}
                  alt={currentData.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400"
                />
              </div>

              <div className="text-base md:text-lg text-gray-800 italic mb-6 relative leading-relaxed">
                <span className="absolute -top-5 -left-5 text-5xl text-yellow-400/30 font-serif">"</span>
                {currentData.text}
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="text-left">
                <div className="text-base font-semibold text-gray-900">{currentData.name}</div>
                <div className="text-sm text-gray-600">{currentData.title}</div>
              </div>
            </div>

            {/* Desktop Image Section */}
            <div className="hidden md:block md:w-2/5 h-auto relative">
              <img
                src={currentData.image}
                alt={currentData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-black hover:bg-white/80 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
