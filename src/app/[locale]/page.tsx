import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import Faq from "@/components/Faq"
import Statistics from '@/components/Statistics';
import HowItWorks from "@/components/HowItWorksSection";
import LatestNews from "@/components/LatestNews";
import { useTranslations } from "next-intl";

export default function index() {
  return (
    <main>
      <HomeHero />   
      <HowItWorks/>
      <WhyParkingTime/>
      <ThrustedBy/>
      <Statistics />
      <LatestNews />
      <Faq />
    </main>
  );
}
