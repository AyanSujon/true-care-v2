"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ayesha Rahman",
    location: "Dhaka",
    service: "Baby Care",
    quote: "Through True Care, I found an amazing caregiver for my 2-year-old son. She arrives on time, is extremely caring, and my child is always happy with her. I was a bit worried the first time handing over responsibility to someone new, but now I’m completely at ease!",
    rating: 5,
  },
  {
    name: "Md. Kamal Hossain",
    location: "Chittagong",
    service: "Elderly Care",
    quote: "The caregiver we got from True Care for my elderly mother feels like a member of the family. Mom talks to her a lot, laughs, and gets help with everything. The booking process is very easy and the cost is reasonable. Thank you so much!",
    rating: 5,
  },
  {
    name: "Fatema Begum",
    location: "Sylhet",
    service: "Baby Sitting",
    quote: "I use True Care whenever I need to go out for work. The caregivers are highly professional—they play with the kids, read stories, and send regular updates. I no longer have to worry. It’s truly a reliable platform!",
    rating: 5,
  },
  {
    name: "Rahim Uddin",
    location: "Rajshahi",
    service: "Elderly Care",
    quote: "I was looking for a long-term caregiver for my father. Through True Care, we found a responsible and affectionate person who manages everything perfectly—medication, doctor visits, you name it. The whole family is very satisfied.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of families have found reliable care for their loved ones with True Care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-shadow duration-300 border-pink-100">
              <CardHeader>
                <Quote className="absolute top-4 right-4 h-12 w-12 text-pink-200 opacity-50" />
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#ff0099] text-[#ff0099]" />
                  ))}
                </div>
                <CardDescription className="text-sm text-[#6632ae] font-medium">
                  {testimonial.service} • {testimonial.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <CardTitle className="text-lg text-gray-900">— {testimonial.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Looking for safe and trusted care for your family too?{' '}
            <a href="/book" className="text-[#ff0099] font-semibold hover:underline">
              Book Now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}