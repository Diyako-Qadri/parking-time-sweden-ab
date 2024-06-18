import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import KnowMore from "@/components/KnowMore";
import Statistics from '@/components/Statistics';
import Faq from "@/components/Faq"

export default function index() {

  return (
    <main>
      <HomeHero />
      <WhyParkingTime />
      <ThrustedBy />
      <Statistics />
      <KnowMore />
      <Faq />
    </main>
  );
}
