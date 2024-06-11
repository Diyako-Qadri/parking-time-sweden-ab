import { useTranslations } from 'next-intl';
import HowItWorks from '@/components/HowItWorksSection';
import WhyParkingTime from '@/components/WhyParkingTime';
export default function index() {
  
  return (
    <main>
      <HowItWorks/>
      <WhyParkingTime/>
    </main>
  );
}
