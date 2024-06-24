import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import KnowMore from "@/components/KnowMore";
import Faq from "@/components/Faq";
import Statistics from "@/components/Statistics";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorksSection";
import LatestNews from "@/components/LatestNews";
import CustomerTestimonials from '@/components/CustomerTestimonials';

export default function index() {
  return (
    <main>
      <HomeHero />
      <SolutionSection />
      <HowItWorks />
      <WhyParkingTime />
      <CustomerTestimonials />
      <ThrustedBy />
      <Statistics />
      <LatestNews />
      <KnowMore />
      <Faq />
    </main>
  );
}
