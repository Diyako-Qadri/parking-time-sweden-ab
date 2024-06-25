'useClient';
 
import Image from 'next/image';
import ParkingSolution from '../../../public/images/parkingSolution.svg';
import { IoIosArrowForward } from 'react-icons/io';
import { useTranslations, useLocale } from 'next-intl';
import Button from '../Buttons';
 
const SolutionSection = () => {
  const t = useTranslations('SmartParkingSolution');
  const b = useTranslations("NavItem")
  const locale = useLocale();
 
  return (
    <div className="flex w-full md:py-28 px-8 md:px-12">
      <div className="flex md:flex-row w-full flex-col gap-4">
        <div
          className="relative h-[404px] mb-5 flex justify-center px-1 w-full md:w-1/2"
        >
          <Image
            src={ParkingSolution}
            layout="fill"
            objectFit="contain"
            alt="How to use parkingTime"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-y-5 p-4">
          <div className="max-w-xl">
            <h2 className="font-extrabold text-3xl mb-5">{t('title')}</h2>
            <p>{t('parkingText')}</p>
          </div>
          <div className="font-bold text-lg mb-2 flex items-center">
            <p className="text-3xl text-pt-red">
              <IoIosArrowForward />
            </p>
            <p className="font-bold">{t('firstArrow')}</p>
          </div>
          <div className="font-bold text-lg mb-2 flex items-center">
            <p className="text-3xl text-pt-red">
              <IoIosArrowForward />
            </p>
            <p className="font-bold">{t('secondArrow')}</p>
          </div>
          <div className="font-bold text-lg mb-2 flex items-center">
            <p className="text-3xl text-pt-red">
              <IoIosArrowForward />
            </p>
            <p className="font-bold">{t('thirdArrow')}</p>
          </div>
          <div className="mt-4">{t('secondParkingText')}</div>
          <div className=" flex justify-center md:justify-start mb-7 md:mb-0">
            <a href={`/${locale}/contact`} className="hidden md:block ">
              <Button variant="desktopBlack" size="desktopPrimary">
              {b("Contact")}
              </Button>
            </a>
            <a href={`/${locale}/contact`} className="block md:hidden">
              <Button variant="mobileBlack" size="mobileSecondary">
                {b("Contact")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default SolutionSection