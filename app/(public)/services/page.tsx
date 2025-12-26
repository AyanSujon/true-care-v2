

"use client";

import React from "react";
import { Baby, HeartHandshake, UserRound, ShieldCheck, Clock, MapPin, Star, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Baby Care",
      icon: Baby,
      description: "Reliable and loving care for your baby. Playtime, feeding, sleeping, and daily routines.",
      features: ["Trained babysitters", "Play and educational activities", "Safe and fun environment"],
      link: "/services/baby-care",
    },
    {
      title: "Elderly Service",
      icon: HeartHandshake,
      description: "Companionship, assistance, and care for your beloved elders. Medication reminders and light household help.",
      features: ["Companionship and conversation", "Medication and health monitoring", "Assistance with daily tasks"],
      link: "/services/elderly-care",
    },
    {
      title: "Sick People Service",
      icon: UserRound,
      description: "Professional nursing care for sick or recovering patients. Medical support and comfortable care.",
      features: ["Trained nurses/caregivers", "Medication administration and monitoring", "Recovery support"],
      link: "/services/sick-care",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-100 to-purple-100 py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Reliable Care Services <br /> At Your Doorstep
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Book trusted and professional caregiving services for children, elders, and the sick with True Care.
          </p>
          <Button size="lg" className="bg-[#ff0099] hover:bg-[#ff0064] text-white text-lg px-8 py-6">
            Book Service Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        {/* Placeholder for hero background image - replace with your own */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Happy+Family')" }} />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose according to your needs and book easily
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#6632ae]/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-[#6632ae]" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6">{service.description}</CardDescription>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Star className="w-5 h-5 text-[#ff0099] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-[#ff0099] text-[#ff0099] hover:bg-[#ff0099] hover:text-white">
                    View Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose True Care?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Verified Caregivers", desc: "All caregivers are background-checked and trained" },
              { icon: Clock, title: "Real-Time Booking", desc: "Book and track anytime easily" },
              { icon: MapPin, title: "Service in Your Area", desc: "Fast service delivery anywhere in the country" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#ff0099]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10 text-[#ff0099]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#6632ae] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Safe Care for Your Loved Ones Today
          </h2>
          <Button size="lg" className="bg-[#ff0099] hover:bg-[#ff0064] text-white text-lg px-10 py-6">
            Book Service
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;









