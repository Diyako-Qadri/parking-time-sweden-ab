'use client'
import { Roboto }  from "next/font/google"
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import Button from "../Buttons";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '400', '700'], 
});

const KnowMore = () => {
    const t = useTranslations('knowMore');
    const b = useTranslations('button');
    const locale = useLocale();
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('Matilda@parkingtime.se');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return(
        <div className="flex flex-col justify-center items-center text-center bg-pt-primary pt-[94px] pb-[15px] text-white mb-[-1px] md:flex-row md:place-content-evenly xl:px-1/5">
            <div className={`flex relative flex-col items-center ${roboto.className} md:mx-6`}>
                <img
                    src="/images/ceo.png"
                    className="max-h-[187px] max-w-[187px] rounded-full my-6"
                    alt="image of CEO">
                </img>
                <p className="text-2xl pb-2">{t('name-title')}</p>
                <p className="underline cursor-pointer text-lg md:text-[16px] font-thin"
                    onClick={handleCopyEmail}
                >
                    <a href="mailto:Matilda@parkingtime.se"></a>
                        {t('mail')}
                </p>
                {copied && (<p className="absolute bottom-[-20px] text-sm text-white mt-2">{t('copyMail')}</p>
                )}
                {error && (<p className="absolute bottom-[-20px] text-sm text-white mt-2">{t('copyError')}</p>

                )}
            </div>
            <div className="text-center md:text-left max-w-[440px] px-6 md:ml-8">
                <p className="text-4xl py-6">{t('question')}</p>
                <p className={`text-lg pb-6 ${roboto.className} font-thin md:font-bold`}>{t('description')}</p>
                    <a className="flex relative justify-center md:hidden" href={`/${locale}/contact`}>
                        <Button variant="mobileWhite" size="mobileSecondary">{b('contact')}</Button>
                    </a>
                    <a className="hidden md:flex md:relative" href={`/${locale}/contact`}>
                        <Button variant="desktopWhite" size="desktopPrimary">{b('contact')}</Button>
                    </a>
            </div>
        </div>
    )
}

export default KnowMore