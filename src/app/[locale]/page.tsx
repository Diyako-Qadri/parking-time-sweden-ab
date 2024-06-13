import HomeHero from '@/components/HomeHero';
import WhyParkingTime from '@/components/WhyParkingTime';
import ThrustedBy from '@/components/ThrustedBy';
import Statistics from '@/components/Statistics';


export default function index() {

  return (
    <main>
      <HomeHero />
      <WhyParkingTime />
      <ThrustedBy />
      <Statistics />
    </main>
  );
}
