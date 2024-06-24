import Button from '../Buttons';
import { useTranslations, useLocale } from 'next-intl';

const KnowMoreAbout = () => {
  const b = useTranslations('button');
  const c = useTranslations("knowMore")
  const locale = useLocale();

  return (
    <div className="h-full py-14 bg-white flex justify-center items-center flex-col">
      <div className=" py-6 w-4/6 md:w-2/6 flex flex-col justify-center text-center">
        <h3 className="font-bold text-4xl">{c("question")}</h3>
        <p className="pt-3 ">
          {c("description")}
        </p>
      </div>
      <div>
        <a className="hidden md:block md:pt-8" href={`/${locale}/contact`}>
          <Button variant="desktopBlack" size="desktopPrimary">
            {b('contact')}
          </Button>
        </a>
        <a className="block md:hidden pt-8" href={`/${locale}/contact`}>
          <Button variant="mobileBlack" size="mobileSecondary">
            {b('contact')}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default KnowMoreAbout;
