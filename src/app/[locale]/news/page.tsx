import { useTranslations } from 'next-intl';

const news = () => {
    const t = useTranslations('AboutUs');
    return (
        <div>
              <div className="text-xl">
          {t("aboutUs")}
        </div>
        </div>
    )
};

export default news
