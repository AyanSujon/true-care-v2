"use client";

import React from 'react';
import { Users, Heart, Clock, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SuccessMetrics = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            True Care is trusted by families across the country to provide safe, reliable, and compassionate care services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="p-8 text-center hover:shadow-xl transition-shadow border-pink-100">
            <Users className="w-12 h-12 mx-auto mb-4 text-[#ff0099]" />
            <h3 className="text-5xl font-bold text-[#ff0064] mb-2">10,000+</h3>
            <p className="text-lg text-gray-700">Happy Families Served</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-shadow border-purple-100">
            <Heart className="w-12 h-12 mx-auto mb-4 text-[#6632ae]" />
            <h3 className="text-5xl font-bold text-[#ff0064] mb-2">50,000+</h3>
            <p className="text-lg text-gray-700">Hours of Care Delivered</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-shadow border-pink-100">
            <Clock className="w-12 h-12 mx-auto mb-4 text-[#ff0099]" />
            <h3 className="text-5xl font-bold text-[#ff0064] mb-2">98%</h3>
            <p className="text-lg text-gray-700">On-Time Service Rate</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-shadow border-purple-100">
            <Star className="w-12 h-12 mx-auto mb-4 text-[#6632ae]" />
            <h3 className="text-5xl font-bold text-[#ff0064] mb-2">4.9/5</h3>
            <p className="text-lg text-gray-700">Average Customer Rating</p>
          </Card>
        </div>

        {/* Visual Trust Builders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://img.freepik.com/premium-photo/happy-young-mum-babysitter-helping-playing-game-with-little-kids-daughters-floor-female-nanny-mother-cute-small-children-sisters-building-castle-wooden-blocks-having-fun-with-toys-home_774935-2057.jpg"
              alt="Happy babysitter playing with children – True Care baby sitting service"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-white">
              <p className="font-semibold text-gray-900">Trusted Baby Care</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://www.shutterstock.com/image-photo/smiling-caregiver-supporting-elderly-man-260nw-2665283109.jpg"
              alt="Caregiver assisting elderly person with a smile – True Care elderly service"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-white">
              <p className="font-semibold text-gray-900">Compassionate Elderly Support</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://meetcaregivers.com/wp-content/uploads/2021/08/happy-loving-family-sitting-on-the-couch.png"
              alt="Happy family enjoying quality time thanks to True Care services"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-white">
              <p className="font-semibold text-gray-900">Families Brought Closer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;