// "use client";

// import React from 'react';
// import { Heart, Shield, Users, Clock, MapPin, CheckCircle } from 'lucide-react';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
//       {/* Hero Section */}
//       <section className="relative py-20 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               About <span className="text-pink-500">True Care</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
//               Your trusted platform for reliable babysitting, elderly care, and special care services — making caregiving easy, secure, and accessible for every family.
//             </p>
//           </div>

//           {/* Image Carousel/Highlights */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img 
//                 src="https://media.istockphoto.com/id/1432208993/photo/portrait-of-father-and-daughter-embracing-at-a-community-center.jpg?s=612x612&w=0&k=20&c=gJlOzGDzHDvIQ1m3r3GcxULhxCclAxPgPQlFKHzmxTk=" 
//                 alt="Family embracing with caregiver support" 
//                 className="w-full h-96 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             </div>
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img 
//                 src="https://www.shutterstock.com/image-photo/portrait-professional-nanny-babysitter-learning-260nw-2109180242.jpg" 
//                 alt="Professional babysitter engaging with child" 
//                 className="w-full h-96 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             </div>
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img 
//                 src="https://lirp.cdn-website.com/bb5325e2/dms3rep/multi/opt/geriatric-nursing-assistant-helping-senior-get-out-of-wheelchair-640w.jpg" 
//                 alt="Nurse assisting elderly person at home" 
//                 className="w-full h-96 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <div className="flex justify-center mb-8">
//             <Heart className="w-16 h-16 text-pink-500" />
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
//           <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
//             True Care is dedicated to connecting families with reliable, verified, and compassionate caregivers. 
//             We believe that quality care for children, the elderly, and those in need should be simple to access, 
//             completely secure, and tailored to individual needs. Our goal is to make caregiving hassle-free, 
//             trustworthy, and available to everyone — bringing peace of mind to families across the country.
//           </p>
//         </div>
//       </section>

//       {/* Key Features Grid */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose True Care?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <Shield className="w-12 h-12 text-purple-600 mx-auto mb-6" />
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trusted & Verified Caregivers</h3>
//               <p className="text-gray-600">All caregivers undergo thorough background checks for your complete safety and peace of mind.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <Clock className="w-12 h-12 text-pink-500 mx-auto mb-6" />
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flexible & Dynamic Booking</h3>
//               <p className="text-gray-600">Book services for any duration, with automatic cost calculation and real-time availability.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-6" />
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Location-Based Services</h3>
//               <p className="text-gray-600">Find caregivers in your division, district, city, or specific area — care comes to you.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <Users className="w-12 h-12 text-pink-500 mx-auto mb-6" />
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Care Options</h3>
//               <p className="text-gray-600">Specialized services for babysitting, elderly care, and support for sick family members.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-6" />
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Track & Manage Bookings</h3>
//               <p className="text-gray-600">Monitor booking status (Pending, Confirmed, Completed) from your personal dashboard.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Responsive & User-Friendly</h3>
//               <p className="text-gray-600">Seamless experience on mobile, tablet, and desktop with secure authentication.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Closing Section */}
//       <section className="py-20 px-6 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-8">Join Us in Making Care Accessible</h2>
//           <p className="text-xl leading-relaxed">
//             At True Care, we're building a community where families can find the support they need, when they need it most. 
//             Because every family deserves true care.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;











import React from 'react';
import { Heart, Shield, Users, Clock, MapPin, CheckCircle, Baby, Users2, Activity } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-pink-500">True Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
              Your trusted platform for reliable babysitting, elderly care, and special care services — making caregiving easy, secure, and accessible for every family.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Heart className="w-16 h-16 text-pink-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            True Care is dedicated to connecting families with reliable, verified, and compassionate caregivers. 
            We believe that quality care for children, the elderly, and those in need should be simple to access, 
            completely secure, and tailored to individual needs. Our goal is to make caregiving hassle-free, 
            trustworthy, and available to everyone — bringing peace of mind to families across the country.
          </p>
        </div>
      </section>

      {/* Services Overview Section - Added */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Baby Care */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-80 relative">
                <img 
                  src="https://aaniie.com/wp-content/uploads/2025/05/woman-babysitter-happily-playing-with-a-young-boy-at-home.jpg" 
                  alt="Professional babysitter playing with happy child"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <Baby className="w-10 h-10 mr-3 text-pink-400" />
                  <h3 className="text-3xl font-bold">Baby Care</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-lg">
                  Trusted and fun babysitting services for your little ones. Our caregivers ensure safety, engagement, and nurturing care while you focus on your day.
                </p>
              </div>
            </div>

            {/* Elderly Service */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-80 relative">
                <img 
                  src="https://static.vecteezy.com/system/resources/previews/070/867/145/non_2x/compassionate-caregiver-assisting-elderly-woman-walking-in-a-nursing-home-hallway-photo.jpg" 
                  alt="Compassionate caregiver assisting elderly person"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <Users2 className="w-10 h-10 mr-3 text-purple-400" />
                  <h3 className="text-3xl font-bold">Elderly Service</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-lg">
                  Compassionate support for seniors, including companionship, mobility assistance, daily activities, and personalized care to maintain independence at home.
                </p>
              </div>
            </div>

            {/* Sick People Service */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-80 relative">
                <img 
                  src="https://www.nurseregistry.com/wp-content/uploads/2023/07/senior-in-home-nurse-care.jpg" 
                  alt="Caregiver providing home care to recovering patient"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <Activity className="w-10 h-10 mr-3 text-pink-400" />
                  <h3 className="text-3xl font-bold">Sick People Service</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-lg">
                  Specialized care for ill or recovering family members, including medication management, health monitoring, and comfortable in-home recovery support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose True Care?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trusted & Verified Caregivers</h3>
              <p className="text-gray-600">All caregivers undergo thorough background checks for your complete safety and peace of mind.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <Clock className="w-12 h-12 text-pink-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flexible & Dynamic Booking</h3>
              <p className="text-gray-600">Book services for any duration, with automatic cost calculation and real-time availability.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Location-Based Services</h3>
              <p className="text-gray-600">Find caregivers in your division, district, city, or specific area — care comes to you.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <Users className="w-12 h-12 text-pink-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Care Options</h3>
              <p className="text-gray-600">Specialized services for babysitting, elderly care, and support for sick family members.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Track & Manage Bookings</h3>
              <p className="text-gray-600">Monitor booking status (Pending, Confirmed, Completed) from your personal dashboard.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Responsive & User-Friendly</h3>
              <p className="text-gray-600">Seamless experience on mobile, tablet, and desktop with secure authentication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Join Us in Making Care Accessible</h2>
          <p className="text-xl leading-relaxed">
            At True Care, we're building a community where families can find the support they need, when they need it most. 
            Because every family deserves true care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;