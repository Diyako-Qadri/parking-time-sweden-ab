'use client'

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from "next-intl"
import UAParser from 'ua-parser-js'
import Button from "@/components/Buttons"
import HeroActions from "@/components/HeroActions"

const HomeHero = () => {
    const t = useTranslations('homeHero');
    const tButton = useTranslations('button');
    const locale = useLocale(); 

    const [isAppleDevice, setIsAppleDevice] = useState(false);
    const [uaChecked, setUaChecked] = useState(false);

    useEffect(() => {
        const parser = new UAParser();
        const ua = parser.getResult();
        setIsAppleDevice(ua.os.name === 'Mac OS' || ua.os.name === 'iOS');
        setUaChecked(true);
    }, []);

    if (!uaChecked) {
        return null; 
    }

    return (
        <section className='relative flex flex-col bg-top h-custom-home bg-homeHero-image justify-center bg-no-repeat top-[80px] bg-cover text-white mb-[80px]'>
            <div className="p-7 md:px-16">
                <h1 className="text-5xl font-bold md:text-6xl">{t('headline1')}<br/>{t('headline2')}</h1>
                <p className="text-base pt-6 md:text-xl">{t('heroText1')}<br/>{t('heroText2')}</p>
                <div className="pt-8">
                    <a href={`/${locale}/contact`} className="py-4 pr-4">
                        <Button variant="desktopWhite" size="desktopPrimary">{tButton("contact")}</Button>
                    </a>
                    {isAppleDevice ? (
                        <a
                            href='https://apps.apple.com/se/app/parking-time/id1611019108'
                            target="_blank"
                            className="py-4 pr-4"
                        >
                            <Button variant="desktopBlack" size="desktopPrimary">{tButton("download")}</Button>
                        </a>
                    ) : (
                        <a
                            href="https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1"
                            target="_blank"
                            className="py-4 pr-4"
                        >
                            <Button variant="desktopBlack" size="desktopPrimary">{tButton("download")}</Button>
                        </a>
                    )}
                </div>
            </div>
            <HeroActions />
        </section>
    );
}

export default HomeHero;