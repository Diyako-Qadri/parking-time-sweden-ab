import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
<<<<<<< HEAD
import KnowMoreAbout from "@/components/KnowMoreAbout";
=======
import OurTeam from "@/components/OurTeam";
>>>>>>> main

const about = () => {
    const t = useTranslations('aboutHero');

    return (
        <div>
            <PageHero bgImage={'bg-aboutHero-image'} categoryText={t('categoryText')} headline={t('headline')} heroText={t('heroText')}/>
<<<<<<< HEAD
            <KnowMoreAbout/>
=======
            <OurTeam/>
>>>>>>> main
        </div>
    )
};

export default about
