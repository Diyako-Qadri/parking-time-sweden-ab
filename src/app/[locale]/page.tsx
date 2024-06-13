import HomeHero from "@/components/HomeHero";
import WhyParkingTime from "@/components/WhyParkingTime";
import ThrustedBy from "@/components/ThrustedBy";
import Faq from "@/components/Faq"

export default function index() {
  
  return (
    <main>
      <HomeHero />   
      <WhyParkingTime/>
      <ThrustedBy/>
      <Faq />
    </main>
  );
}