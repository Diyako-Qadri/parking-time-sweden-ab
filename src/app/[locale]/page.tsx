import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import KnowMore from "@/components/KnowMore";
import Faq from "@/components/Faq";
import Statistics from "@/components/Statistics";
import LatestNews from "@/components/LatestNews";
import DownloadNow from "@/components/DownloadNow";
import CustomerTestimonials from '@/components/CustomerTestimonials';
import SolutionSection from "@/components/SolutionSection";

export default function index() {
  return (
    <main>
      <HomeHero />
      <SolutionSection />
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
