'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Party Deal Catering made our wedding absolutely perfect! The food was so good that our guests are still talking about it three months later. Their team was professional, punctual, and the presentation was beautiful. Our families from both Lagos and Abuja were impressed. Thank you for making our special day unforgettable!",
      name: "Anne Maria",
      title: "Happy Customer",
      image: "/assets/selection1.png"
    },
    {
      text: "Outstanding service from start to finish! The team handled our corporate event flawlessly. The variety of dishes was impressive and everything was prepared to perfection. Our clients were thoroughly impressed with the quality and presentation. Will definitely use their services again!",
      name: "David Okafor",
      title: "Event Coordinator",
      image: "/assets/selection1.png"
    },
    {
      text: "The best catering experience we've had! From the initial consultation to the final cleanup, everything was handled professionally. The food quality exceeded our expectations and the presentation was absolutely stunning. Our anniversary celebration was made perfect by their exceptional service.",
      name: "Funmi Adebayo",
      title: "Satisfied Client",
      image: "/assets/selection1.png"
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
    <section className="bg-yellow-400 py-20 w-full flex items-center justify-center">
      <div className="w-full max-w-7xl px-5 text-center">
        <h5 className="text-sm font-semibold tracking-widest uppercase text-gray-800 mb-4 opacity-80">
          TESTIMONIALS
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Client Reviews
        </h2>

        {/* Carousel */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 w-full">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white hover:bg-white/80 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Testimonial Content */}
          <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl w-full max-w-5xl min-h-[24rem]">
            {/* Text Section - 70% */}
            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center relative">
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

            {/* Image Section - 30% */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
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
            className="w-12 h-12 bg-white hover:bg-white/80 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
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