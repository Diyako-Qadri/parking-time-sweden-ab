import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import Statistics from "@/components/Statistics";
import Faq from "@/components/Faq";
import LatestNews from "@/components/LatestNews";
import { useTranslations } from "next-intl";

export default function index() {
  return (
    <main>
      <HomeHero />
      <WhyParkingTime />
      <ThrustedBy />
      <Statistics />
      <LatestNews />
      <Faq />
    </main>
  );
}
