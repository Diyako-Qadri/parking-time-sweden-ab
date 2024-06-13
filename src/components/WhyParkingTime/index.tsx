import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Diagram from '../../../public/images/whyone.svg';
import Phone from '../../../public/images/why2.svg';
import Integration from '../../../public/images/why3.svg';
import Data from '../../../public/images/why4.svg';

const WhyParkingTime = () => {
  const t = useTranslations('WhyParkingTime');
  const sections = [
    {
      imgSrc: Diagram,
      titleKey: 'avoidFinesTitle',
      descKey: 'avoidFinesDes'
    },
    {
      imgSrc: Phone,
      titleKey: 'simplifiedTitle',
      descKey: 'simplifiedDes'
    },
    {
      imgSrc: Integration,
      titleKey: 'integrationTitle',
      descKey: 'integrationDes'
    },
    {
      imgSrc: Data,
      titleKey: 'dataTitle',
      descKey: 'dataDes'
    }
  ];

  return (
    <div id='why-parking-time' className="flex flex-col text-center relative bg-pt-primary pt-[5rem] h-full text-white">
      <h1 className="text-4xl font-bold mb-10">{t('sectionTitle')} Parking Time?</h1>
      <div className="flex flex-wrap w-full mt-10 gap-4 text-start justify-center">
        {sections.map(({ imgSrc, titleKey, descKey }) => (
          <div key={titleKey} className="p-6 w-full gap-4 md:w-5/12">
            <Image
              src={imgSrc}
              style={{ width: '48px', height: '48px' }}
              alt="icon"
              className="mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">{t(titleKey)}</h2>
            <p>{t(descKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyParkingTime;