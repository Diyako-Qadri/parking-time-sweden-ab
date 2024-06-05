import { useTranslations } from 'next-intl';

const about = () => {
  const t = useTranslations('AboutUs');
    return (
        <div className="text-xxl">
          {t("aboutUs")}
        </div>
    )
};

export default about
