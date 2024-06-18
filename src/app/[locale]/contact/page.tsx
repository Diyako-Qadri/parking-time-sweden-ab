import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";

const contact = () => {
    const t = useTranslations('contactHero');

    return (
        <div className="hidden md:block">
            <PageHero bgImage={'bg-contactHero-image'} categoryText={t('categoryText')} headline={t('headline')} heroText={t('heroText')} />
        </div>
    )
};

export default contact
