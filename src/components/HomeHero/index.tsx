'use client'

import HeroActions from "../HeroActions"
import { useTranslations } from "next-intl"

const HomeHero = () => {
    const t = useTranslations('homeHero');

    return(
        <>
        <section className='relative flex flex-col bg-top h-custom-home bg-homeHero-image justify-center bg-no-repeat top-[80px] bg-cover text-white  -z-10'>
            <div className="p-7 md:px-16">
                <h1 className="text-5xl font-bold md:text-6xl">{t('headline1')}<br/>{t('headline2')}</h1>
                <p className="text-base pt-6 md:text-xl">{t('heroText1')}<br/>{t('heroText2')}</p>
            </div>
            <HeroActions/>
        </section>
        </>
    )
}

export default HomeHero