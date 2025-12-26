

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Baby, HeartHandshake, Users } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
          <div className="p-10 md:p-16">
            {/* Large 404 Text with Brand Accent */}
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] to-[#6632ae] mb-6">
              404
            </h1>

            {/* Main Message */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              The page you're looking for seems to have wandered off. Don't worry — we're here to help you find the care you need.
            </p>

            {/* Caring Icons Illustration */}
            <div className="flex justify-center gap-8 mb-12 flex-wrap">
              <div className="p-6 rounded-full bg-pink-100 text-[#ff0099]">
                <Baby className="w-12 h-12" />
              </div>
              <div className="p-6 rounded-full bg-purple-100 text-[#6632ae]">
                <Users className="w-12 h-12" />
              </div>
              <div className="p-6 rounded-full bg-pink-100 text-[#ff0099]">
                <HeartHandshake className="w-12 h-12" />
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-[#ff0099] hover:bg-[#e0008a] text-white px-8">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-[#6632ae] text-[#6632ae] hover:bg-[#6632ae] hover:text-white px-8">
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>

            {/* Footer Note */}
            <p className="mt-12 text-sm text-gray-500">
              True Care — Making caregiving easy, safe, and accessible for every family ❤️
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;