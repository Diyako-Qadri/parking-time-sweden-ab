import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";

const contact = () => {
    const t = useTranslations('contactHero');

    return (
        <PageHero bgImage={'bg-contactHero-image'} categoryText={t('categoryText')} headline={t('headline')} heroText={t('heroText')} />
    )
};

export default contact
