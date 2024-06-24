import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import OurTeam from "@/components/OurTeam";
import CEOquote from "@/components/CEOquote";

const about = () => {
    const t = useTranslations('aboutHero');

    return (
        <div>
            <PageHero bgImage={'bg-aboutHero-image'} categoryText={t('categoryText')} headline={t('headline')} heroText={t('heroText')}/>
            <CEOquote/>
            <OurTeam/>
        </div>
    )
};

export default about