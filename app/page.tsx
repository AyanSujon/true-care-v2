import About from "@/components/(public)/home/About";
import Hero from "@/components/(public)/home/Hero";
import SuccessMetricss from "@/components/(public)/home/SuccessMetricss";
import Testimonials from "@/components/(public)/home/Testimonials";
import Image from "next/image";


export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <SuccessMetricss/>
        <Testimonials/>

    </div>
  );
}
