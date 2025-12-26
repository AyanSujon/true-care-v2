"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Trusted Baby Care When You Need It Most",
    subtitle: "Professional babysitters for your little ones – safe, fun, and reliable.",
    highlight: "Baby Sitting",
    imageUrl: "https://www.brighthorizons.com/-/media/bh-new/resource-images/nanny_740x556.ashx?as=1&h=556&w=740&la=en&hash=A17BBEC0873C7EC4854121CB69F3FAB8",
  },
  {
    title: "Compassionate Elderly Care at Home",
    subtitle: "Dedicated caregivers to support your loved ones with dignity and warmth.",
    highlight: "Elderly Care",
    imageUrl: "https://media.istockphoto.com/id/2184430235/photo/caring-nurse-assisting-elderly-man-at-home-with-warm-smile.jpg?s=612x612&w=0&k=20&c=jsDLXqdm57S6REF8vTMA3q7VzT74tNOuBM4n4gD33Yc=",
  },
  {
    title: "Reliable Care for Your Family",
    subtitle: "Easy booking for baby, elderly, or special care – secure and accessible for everyone.",
    highlight: "True Care Platform",
    imageUrl: "https://www.parents.com/thmb/eb1aSITbOOQfylpXfrskSxz1QYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/secure-attachment-GettyImages-2155082504-64a4a96af3e54c8abeb2fd64fca24b65.jpg",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full max-h-[60%] overflow-hidden py-5">
      {/* Slider Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-2xl md:text-4xl font-semibold text-[#ff0099] mb-10">
              {slides[currentSlide].highlight}
            </p>

            {/* Motivational Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center gap-4">
                <Shield className="w-12 h-12 text-[#ff0099]" />
                <div>
                  <p className="font-semibold">Trusted & Verified</p>
                  <p className="text-sm opacity-80">Background-checked caregivers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Heart className="w-12 h-12 text-[#ff0099]" />
                <div>
                  <p className="font-semibold">Care with Love</p>
                  <p className="text-sm opacity-80">Compassionate professionals</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-12 h-12 text-[#ff0099]" />
                <div>
                  <p className="font-semibold">Flexible Booking</p>
                  <p className="text-sm opacity-80">Anytime, anywhere in Bangladesh</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#ff0099] hover:bg-[#ff0064] text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105">
                Book a Service Now
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-lg border border-white/50 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-0 md:bottom-8  left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-[#ff0099] w-10' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;













