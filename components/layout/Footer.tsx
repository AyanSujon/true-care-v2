// import React from 'react';
// import Link from 'next/link';
// import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
// import Logo from '../common/Logo';

// const Footer: React.FC = () => {
//     return (
//         <footer className="bg-gray-900 text-gray-300">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {/* Brand & Description */}
//                     <div className="space-y-4">
//                         <div>
//                             <Logo/>
//                         </div>
//                         <p className="text-sm leading-relaxed">
//                             True Care is a reliable platform that provides trusted caregiving services
//                             for children, the elderly, and sick individuals. We work with the goal of
//                             making caregiving easy, safe, and accessible for everyone.
//                         </p>
//                         <div className="flex space-x-4">
//                             <a href="#" className="hover:text-[#ff0099] transition-colors">
//                                 <Facebook size={20} />
//                             </a>
//                             <a href="#" className="hover:text-[#ff0099] transition-colors">
//                                 <Twitter size={20} />
//                             </a>
//                             <a href="#" className="hover:text-[#ff0099] transition-colors">
//                                 <Instagram size={20} />
//                             </a>
//                             <a href="#" className="hover:text-[#ff0099] transition-colors">
//                                 <Youtube size={20} />
//                             </a>
//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
//                         <ul className="space-y-3">
//                             <li>
//                                 <Link href="/" className="hover:text-[#ff0099] transition-colors">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/about" className="hover:text-[#ff0099] transition-colors">
//                                     About Us
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/services" className="hover:text-[#ff0099] transition-colors">
//                                     Services
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/booking" className="hover:text-[#ff0099] transition-colors">
//                                     Book a Service
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/my-bookings" className="hover:text-[#ff0099] transition-colors">
//                                     My Bookings
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Services */}
//                     <div>
//                         <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
//                         <ul className="space-y-3">
//                             <li>
//                                 <Link href="/services/baby-care" className="hover:text-[#ff0099] transition-colors">
//                                     Baby Care
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/services/elderly-care" className="hover:text-[#ff0099] transition-colors">
//                                     Elderly Care
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/services/sick-care" className="hover:text-[#ff0099] transition-colors">
//                                     Patient Care
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="hover:text-[#ff0099] transition-colors">
//                                     Contact Us
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div>
//                         <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
//                         <ul className="space-y-4">
//                             <li className="flex items-start gap-3">
//                                 <MapPin size={20} className="mt-0.5 flex-shrink-0" />
//                                 <span className="text-sm">Dhaka, Bangladesh</span>
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <Phone size={20} />
//                                 <a href="tel:+880123456789" className="text-sm hover:text-[#ff0099] transition-colors">
//                                     +880 123 456 789
//                                 </a>
//                             </li>
//                             <li className="flex items-center gap-3">
//                                 <Mail size={20} />
//                                 <a href="mailto:info@truecare.com" className="text-sm hover:text-[#ff0099] transition-colors">
//                                     info@truecare.com
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
//                     <p className="text-sm text-center md:text-left">
//                         © {new Date().getFullYear()} True Care. All rights reserved.
//                     </p>
//                     <div className="flex gap-6 text-sm">
//                         <Link href="/privacy" className="hover:text-[#ff0099] transition-colors">
//                             Privacy Policy
//                         </Link>
//                         <Link href="/terms" className="hover:text-[#ff0099] transition-colors">
//                             Terms of Service
//                         </Link>
//                     </div>
//                     <p className="text-sm flex items-center gap-1">
//                         Made with <Heart size={16} className="text-[#ff0099] fill-[#ff0099]" /> in Bangladesh
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;












import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 font-body">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <div>
                            <Logo />
                        </div>
                        <p className="text-sm leading-relaxed font-body">
                            True Care is a reliable platform that provides trusted caregiving services
                            for children, the elderly, and sick individuals. We work with the goal of
                            making caregiving easy, safe, and accessible for everyone.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-[#ff0099] transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-[#ff0099] transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:text-[#ff0099] transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-[#ff0099] transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-bold text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 font-body">
                            <li>
                                <Link href="/" className="hover:text-[#ff0099] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-[#ff0099] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-[#ff0099] transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/booking" className="hover:text-[#ff0099] transition-colors">
                                    Book a Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-bookings" className="hover:text-[#ff0099] transition-colors">
                                    My Bookings
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-heading font-bold text-white mb-4">
                            Our Services
                        </h4>
                        <ul className="space-y-3 font-body">
                            <li>
                                <Link href="/services/baby-care" className="hover:text-[#ff0099] transition-colors">
                                    Baby Care
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/elderly-care" className="hover:text-[#ff0099] transition-colors">
                                    Elderly Care
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/sick-care" className="hover:text-[#ff0099] transition-colors">
                                    Patient Care
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#ff0099] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading font-bold text-white mb-4">
                            Contact Us
                        </h4>
                        <ul className="space-y-4 font-body text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} />
                                <a href="tel:+880123456789" className="hover:text-[#ff0099] transition-colors">
                                    +880 123 456 789
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} />
                                <a href="mailto:info@truecare.com" className="hover:text-[#ff0099] transition-colors">
                                    info@truecare.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-body">
                    <p className="text-center md:text-left">
                        © {new Date().getFullYear()} True Care. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-[#ff0099] transition-colors ">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-[#ff0099] transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={16} className="text-[#ff0099] fill-[#ff0099]" /> in Bangladesh
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;