import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';
import { ContactUs } from '@/components/ContactForm';
const contact = () => {
  const t = useTranslations('contactHero');

  return (
    <>
      
        <div className="hidden md:block">
          <PageHero
            bgImage={'bg-contactHero-image'}
            categoryText={t('categoryText')}
            headline={t('headline')}
            heroText={t('heroText')}
          />
        </div>
        <div className="p-4">
          <div>
            <ContactUs />
          </div>
          <div></div>
        </div>
    </>
  );
};

export default contact;
