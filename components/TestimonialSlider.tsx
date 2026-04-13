"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Plant Head",
    quote: "NICS Automation delivered exactly what our facility needed. Their automation solutions improved our operational efficiency significantly and reduced downtime. The team was highly professional and responsive throughout the project.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 2,
    name: "Ankit Verma",
    role: "Production Manager",
    quote: "We saw immediate improvements after implementing their systems. Their expertise in industrial automation and attention to detail helped streamline our entire production process.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Priya Mehta",
    role: "Operations Head",
    quote: "The team at NICS Automation truly understands industry requirements. Their customized solutions and smooth integration made a huge difference in our daily operations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "Sandeep Gupta",
    role: "Maintenance Manager",
    quote: "Their support and after-installation service are exceptional. The automation systems are reliable, efficient, and easy to manage. Highly recommended for any industrial setup.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 5,
    name: "Neha Kapoor",
    role: "Project Engineer",
    quote: "From planning to execution, everything was handled smoothly. Their technical expertise and commitment to quality make them a trusted automation partner.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleProfileClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="md:min-h-screen h-[700px] flex justify-center items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-96 sm:h-96 bg-red-500/10 transform -rotate-45 -translate-x-20 -translate-y-20 sm:-translate-x-48 sm:-translate-y-48"></div>
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-96 sm:h-96 bg-blue-500/10 transform rotate-45 translate-x-20 -translate-y-20 sm:translate-x-48 sm:-translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-96 sm:h-96 bg-purple-500/10 transform rotate-45 -translate-x-20 translate-y-20 sm:-translate-x-48 sm:translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-96 sm:h-96 bg-red-500/10 transform -rotate-45 translate-x-20 translate-y-20 sm:translate-x-48 sm:translate-y-48"></div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        type="button"
        onClick={handlePrevious}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 group"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 group"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
      </button> */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-2 py-8 sm:px-4 sm:py-16">
        {/* Profile Images Row */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-16  w-full max-w-full scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => handleProfileClick(index)}
              className={`relative transform transition-all duration-300 ${
                index === activeIndex
                  ? 'scale-105 sm:scale-110'
                  : 'scale-90 hover:scale-100 opacity-70 hover:opacity-90'
              }`}
            >
              <div
                className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  index === activeIndex
                    ? ' border-[#05ce9b] shadow-lg shadow-[#05ce9b]'
                    : 'border-transparent hover:border-white/30'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Testimonial Content */}
        <div className="text-center max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
          {/* Name and Role */}
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2 tracking-wide">
            {activeTestimonial.name.toUpperCase()}
          </h2>
          <p className="text-base sm:text-xl text-blue-300 mb-6 sm:mb-12 font-medium">
            {activeTestimonial.role}
          </p>

          {/* Quote */}
          <blockquote className="text-sm sm:text-lg text-gray-300 italic leading-relaxed mb-6 sm:mb-12 px-2 sm:px-8">
            "{activeTestimonial.quote}"
          </blockquote>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 sm:w-6 sm:h-6 ${
                  i < activeTestimonial.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}