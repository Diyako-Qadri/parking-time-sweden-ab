'use client'

import HeroActions from "../HeroActions"
import { useLocale, useTranslations } from "next-intl";

const HomeHero = () => {
    const t = useTranslations('homeHero');
    const locale = useLocale();

    return(
        <section className='relative flex flex-col bg-top h-custom-home bg-homeHero-image justify-center bg-no-repeat top-[80px] bg-cover text-white mb-[80px]'>
            <div className="p-7 md:px-16">

                {locale === 'en' ? (
                    <>
                        <h2 className="text-5xl md:text-6xl">{t('headline1')}</h2>
                        <h1 className="text-5xl font-bold md:text-6xl">{t('headline2')}</h1>
                    </>
                ) : (
                    <>
                        <h1 className="text-5xl font-bold md:text-6xl">{t('headline1')}</h1>
                        <h2 className="text-4xl font-bold md:text-6xl">{t('headline2')}</h2>
                    </>
                )}
                <p className="text-base pt-6 md:text-xl">{t('heroText1')}<br/>{t('heroText2')}</p>
            </div>
            <HeroActions/>
        </section>
    )
}

export default HomeHero