import { useTranslations } from 'next-intl';

export default function index() {
  const t = useTranslations('AboutUs');
  return (
    <main>
      <h1 className="text-xl">{t('aboutUs')}</h1>
    </main>
  );
}
