import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import OurValues from "@/components/OurValues";
const about = () => {
    const t = useTranslations('aboutHero');

    return (
        <>
         <div>
            <PageHero bgImage={'bg-aboutHero-image'} categoryText={t('categoryText')} headline={t('headline')} heroText={t('heroText')}/>
        </div>
        <div>
            <OurValues />
        </div>
        </>
       
    )
};

export default about
