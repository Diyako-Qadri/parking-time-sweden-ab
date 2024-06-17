import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import Faq from "@/components/Faq"
import Statistics from '@/components/Statistics';
import HowItWorks from "@/components/HowItWorksSection";

export default function index() {
  return (
    <main>
      <HomeHero />   
      <HowItWorks/>
      <WhyParkingTime/>
      <ThrustedBy/>
      <Statistics />
      <Faq />
    </main>
  );
}
