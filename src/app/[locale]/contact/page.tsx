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
        <div className="p-4 bg-pt-light-gray pt-[100px] md:pt-4">
            <ContactUs />
        </div>
    </>
  );
};

export default contact
