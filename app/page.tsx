import About from "@/components/(public)/home/About";
import CallToAction from "@/components/(public)/home/CallToAction";
import Hero from "@/components/(public)/home/Hero";
import Mission from "@/components/(public)/home/Mission";
import Services from "@/components/(public)/home/Services";
import SuccessMetricss from "@/components/(public)/home/SuccessMetricss";
import Testimonials from "@/components/(public)/home/Testimonials";
import WhyChooseTrueCare from "@/components/(public)/home/WhyChooseTrueCare";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";



// ===== Metadata =====
export const metadata = {
  title: "True Care – Baby Sitting & Elderly Care Service Platform",
  description:
    "Trusted babysitting and elderly care services across Bangladesh. Reliable, verified caregivers with flexible booking.",
  keywords: [
    "babysitting",
    "elderly care",
    "caregiver service",
    "home care Bangladesh",
    "nanny service",
    "True Care",
  ],
  openGraph: {
    title: "True Care – Baby & Elderly Care Service",
    description:
      "Safe, reliable, and professional caregivers for your family — anytime, anywhere in Bangladesh.",
    url: "https://your-domain.com",
    siteName: "True Care",
    images: [
      {
        url: "https://www.parents.com/thmb/eb1aSITbOOQfylpXfrskSxz1QYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/secure-attachment-GettyImages-2155082504-64a4a96af3e54c8abeb2fd64fca24b65.jpg",
        width: 1200,
        height: 630,
        alt: "True Care Baby & Elderly Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Care – Baby Sitting & Elderly Care Service",
    description:
      "Reliable, trusted caregivers for babies and elderly people across Bangladesh.",
    images: [
      "https://www.parents.com/thmb/eb1aSITbOOQfylpXfrskSxz1QYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/secure-attachment-GettyImages-2155082504-64a4a96af3e54c8abeb2fd64fca24b65.jpg",
    ],
  },
};




export default function Home() {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Mission/>
        <SuccessMetricss/>
        <Testimonials/>
        <WhyChooseTrueCare/>
        <CallToAction/>
        <Footer/>
    </div>
  );
}
