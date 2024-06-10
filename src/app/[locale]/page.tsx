
import WhyParkingTime from "@/components/WhyParkingTime";


import HomeHero from "@/components/HomeHero";

export default function index() {
  return (
    <main>
        <HomeHero 
          headline1="What time is it?" 
          headline2="Parking time!" 
          heroText1="Digital parking disc, directly on your mobile."
          heroText2="A winning concept in a new, digitalized format."
        />  
      <WhyParkingTime/>
    </main>
  );
}
