import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import KnowMore from "@/components/KnowMore";
import Faq from "@/components/Faq";
import Statistics from "@/components/Statistics";
import LatestNews from "@/components/LatestNews";
import DownloadNow from "@/components/DownloadNow";

export default function index() {
  return (
    <main>
      <HomeHero />
      <WhyParkingTime />
      <ThrustedBy />
      <LatestNews />
      <Statistics />
      <DownloadNow />
      <KnowMore />
      <Faq />
    </main>
  );
}
