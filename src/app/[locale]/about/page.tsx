import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import OurTeam from "@/components/OurTeam";
import CEOquote from "@/components/CEOquote";
import KnowMoreAbout from "@/components/KnowMoreAbout";
import OurVision from "@/components/OurVision";
import OurValues from "@/components/OurValues";
const about = () => {
    const t = useTranslations('aboutHero');

    return (
        <>
         <div>
            <PageHero bgImage={'bg-aboutHero-image'} categoryText={t('categoryText')} headline={t('headline')} heroText={t('heroText')}/>
            <OurVision/>
            <OurValues />
            <CEOquote/>
            <OurTeam/>
            <KnowMoreAbout/>
        </div>
        </>
    )
};

export default about