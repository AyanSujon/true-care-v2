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
