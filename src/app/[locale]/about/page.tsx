import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import KnowMoreAbout from "@/components/KnowMoreAbout";
import OurTeam from "@/components/OurTeam";

const about = () => {
    const t = useTranslations('aboutHero');

    return (
        <div>
            <PageHero bgImage={'bg-aboutHero-image'} categoryText={t('categoryText')} headline={t('headline')} heroText={t('heroText')}/>
            <OurTeam/>
            <KnowMoreAbout/>
        </div>
    )
};

export default about
