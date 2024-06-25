import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import KnowMore from "@/components/KnowMore";
import Statistics from "@/components/Statistics";
import Faq from "@/components/Faq";
import LatestNews from "@/components/LatestNews";
import HowItWorks from "@/components/HowItWorksSection";
import SolutionSection from "@/components/SolutionSection";
import DownloadNow from "@/components/DownloadNow";
import CustomerTestimonials from '@/components/CustomerTestimonials';
export default function index() {
  return (
    <main>
      <HomeHero />
      <SolutionSection />
      <HowItWorks/>
      <WhyParkingTime />
      <CustomerTestimonials />
      <ThrustedBy />
      <Statistics />
      <DownloadNow />
      <LatestNews />
      <KnowMore />
      <Faq />
    </main>
  );
}
