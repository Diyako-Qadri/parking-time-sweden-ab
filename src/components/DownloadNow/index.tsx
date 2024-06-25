import Image from 'next/image';
import { useTranslations } from 'next-intl';
import DownloadImage from '../../../public/images/downloadNowLarge.png';
import { FaApple } from 'react-icons/fa';
import GooglePlay from "../../../public/images/google-play.png"
import DownloadQR from '../../../public/images/downloadQR.png';

const DownloadNow = () => {
  const t = useTranslations('downloadNow');
  return (
    <div className="h-full md:h-[724px] pb-16 md:py-11 flex justify-center items-center">
      <div className="w-full md:w-[90%] flex flex-col md:flex-row-reverse justify-center gap-16">
        <div className=" w-full md:w-1/2">
          <Image
            src={DownloadImage}
            objectFit="contain"
            className="w-full h-full md:max-w-[600px] md:boxShadow md:rounded-[15px]"
            alt="DownloadImage"
          ></Image>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:items-start md:w-1/2 px-9 ">
          <h3 className="font-bold text-4xl">{t('title')}</h3>
          <p className="pt-8">{t('description')}</p>
          <div className="flex flex-row gap-5 py-7">
            <a
              href="https://apps.apple.com/se/app/parking-time/id1611019108"
              target="_blank"
            >
              <div className="w-[136px] h-[43px] border-[1px] flex flex-row items-center border-pt-secondary transform transition-all ease-in-out rounded-[5px] hover:scale-[1.02]">
                <div className="w-1/3 px-[3px] text-[34px]">
                  <FaApple />
                </div>
                <div>
                  <p className="text-[10px]">Download on the</p>
                  <p>App Store</p>
                </div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1"
              target="_blank"
            >
              <div className="w-[136px] h-[43px] border-[1px] flex flex-row items-center border-pt-secondary transform transition-all ease-in-out rounded-[5px] hover:scale-[1.02]">
                <div className="w-1/3 px-[6px] text-[25px]">
                <Image
            src={GooglePlay}
            objectFit="contain"
            className="w-full h-full md:max-w-[600px] "
            alt="DownloadImage"
          ></Image>
                </div>
                <div>
                  <p className="text-[12px]">GET IT ON</p>
                  <p>Google Play</p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <Image
              src={DownloadQR}
              objectFit="contain"
              className="w-[100px] h-full hidden md:block"
              alt="DownloadImage"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadNow;
