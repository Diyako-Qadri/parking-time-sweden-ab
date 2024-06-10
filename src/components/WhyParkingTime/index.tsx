import { useTranslations } from 'next-intl';

import Diagram from '../../../public/images/whyone.svg';
import Phone from '../../../public/images/why2.svg';
import Integration from '../../../public/images/why3.svg';
import Data from '../../../public/images/why4.svg';
import Image from 'next/image';

const WhyParkingTime = () => {
  const t = useTranslations('WhyParkingTime');
  return (
    <div className="flex flex-col text-center relative bg-pt-primary h-full  text-white ">
      <h1 className='text-4xl font-bold mt-12'>{t("sectionTitle")} Parking Time?</h1>
      
      <div className="flex flex-wrap w-full mt-10 gap-4 text-start justify-center ">
        <div className='p-6 w-full gap-4 md:w-5/12'>
          <Image
            src={Diagram}
            style={{ width: '48px', height: '48px' }}
            alt="icon"
            className='mb-6'
          />
          <h2 className='text-2xl font-semibold mb-4'>{t('avoidFinesTitle')}</h2>
          <p>{t('avoidFinesDes')}</p>
        </div>
        <div className='p-6 w-full gap-4 md:w-5/12'>
          <Image
            src={Phone}
            style={{ width: '48px', height: '48px' }}
            alt="icon"
            className='mb-6'
          />
          <h2 className='text-2xl font-semibold mb-4'>{t('simplifiedTitle')}</h2>
          <p>{t('simplifiedDes')}</p>
        </div>
        <div className='p-6 w-full gap-4 md:w-5/12'>
          <Image
            src={Integration}
            style={{ width: '48px', height: '48px' }}
            alt="icon"
            className='mb-6'
          />
          <h2 className='text-2xl font-semibold mb-4'>{t('integrationTitle')}</h2>
          <p>{t('integrationDes')}</p>
        </div>
        <div className='p-6 w-full gap-4 md:w-5/12'>
          <Image
            src={Data}
            style={{ width: '48px', height: '48px' }}
            alt="icon"
            className='mb-6'
          />
          <h2 className='text-2xl font-semibold mb-4'>{t('dataTitle')}</h2>
          <p>{t('dataDes')}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyParkingTime;
