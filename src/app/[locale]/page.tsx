import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import KnowMore from "@/components/KnowMore";
import Statistics from "@/components/Statistics";
import Faq from "@/components/Faq";
import LatestNews from "@/components/LatestNews";
import HowItWorks from "@/components/HowItWorksSection";
import SolutionSection from "@/components/SolutionSection";

export default function index() {
  return (
    <main>
      <HomeHero />
      <SolutionSection />
      <HowItWorks/>
      <WhyParkingTime />
      <ThrustedBy />
      <Statistics />
      <LatestNews />
      <KnowMore />
      <Faq />
    </main>
  );
}
