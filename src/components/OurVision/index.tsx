import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import PageImage from '../../../public/images/AboutUsImage.jpg';
import Button from '../Buttons';

const OurVision = () => {
  const t = useTranslations('ourVision');
  const b = useTranslations('button');
  const locale = useLocale();

  return (
    <div className="h-full md:h-[724px] pb-16 md:py-11 flex justify-center items-center">
      <div className="w-full h-5/6 flex flex-col md:flex-row-reverse justify-center gap-12">
        <div className=" w-full md:w-1/2">
          <Image
            src={PageImage}
            style={{objectFit:"contain"}}
            className="w-full h-full md:max-w-[800px] hidden md:block"
            alt="DownloadImage"
          ></Image>
        </div>
        <div className="w-full md:max-w-[500px] flex flex-col justify-center md:pt-28 items-start md:w-1/2 p-9 ">
          <h3 className="font-bold text-2xl">{t("title1")}</h3>
          <p className="pt-8 text-[16px]">
          {t("description1")}
          </p>
          <p className="pt-4 text-[16px]">
          {t("description2")}
          </p>
          <h3 className="font-bold pt-4 text-2xl">{t("title2")}</h3>
          <p className="pt-8 text-[16px]">
          {t("description3")}
          </p>
          <div className="flex flex-row justify-center self-center md:self-start gap-5 py-12">
            <a
              href={`/${locale}/contact`}
              className='hidden md:block'
            >
             <Button variant='desktopBlack' size='desktopPrimary'>{b("contact")}</Button>
            </a>
            <a
              href={`/${locale}/contact`}
              className='block  md:hidden'
            >
             <Button variant='mobileBlack' size='mobileSecondary'>{b("contact")}</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
