

// import { getSingleProduct } from "@/actions/server/services";

// const ServiceDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = await params;
//   const service = await getSingleProduct(id);
//   console.log(service);



  

//   if (!service || Object.keys(service).length === 0) {
//     return <div>Service not found</div>;
//   }

//   return (
//     <div>
//       <h1>Service Details</h1>
//       <p>ID: {id}</p>
//       {/* Display service data */}
//     </div>
//   );
// };

// export default ServiceDetails;















import { getSingleProduct } from "@/actions/server/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, DollarSign, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const service = await getSingleProduct(id);

  if (!service || Object.keys(service).length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold text-neutral-700">Service not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-8">
        <ul className="flex space-x-2 text-gray-600">
          <li><Link href="/" className="hover:text-pink-600">Home /</Link></li>
          <li><Link href="/services" className="hover:text-pink-600">Services /</Link></li>
          <li className="text-gray-400">{service.title}</li>
        </ul>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Image Gallery Section */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-xl bg-gray-100">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="object-cover"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-8">
          {/* Category Badge */}
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
          </Badge>

          {/* Title & Description */}
          <div>
            <h1 className="text-4xl font-bold text-neutral-800 mb-4">{service.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
          </div>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-600" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="border-pink-200 bg-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-pink-600" />
                Pricing
              </CardTitle>
              <CardDescription>{service.price_original}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-5xl font-bold text-pink-600">${service.price}</span>
                <span className="text-xl text-gray-600">/{service.unit}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>Billed per hour • Flexible duration</span>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white shadow-lg"
            >
              <Link href={`/booking?serviceId=${service._id}`}>
                Book This Service
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
              Contact Support
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-16" />

    </div>
  );
};

export default ServiceDetails;