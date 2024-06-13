import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';

const news = () => {
    const t = useTranslations('newsHero');
   
    return (
        <div>
            <PageHero bgImage={'bg-newsHero-image'} categoryText={t('categoryText')} headline={t('headline')} heroText={t('heroText')}/>
        </div>
    )
};

export default news
