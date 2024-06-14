import { useTranslations } from "next-intl"

const HeroActions = () => {
    const t = useTranslations('heroActions');

    return(
        <div className="absolute bottom-0 w-full flex text-white bg-pt-green-transparent text-base/8 flex-wrap py-1">
            <p className="w-1/2 flex pt-3 pb-3 md:w-1/4 justify-center"> &#8226; {t('action1')}</p>
            <p className="w-1/2 flex pt-3 pb-3 md:w-1/4 md:justify-center"> &#8226; {t('action2')}</p>
            <p className="w-1/2 flex pt-3 pb-3 md:w-1/4 relative left-[-16px] justify-center"> &#8226; {t('action3')}</p>
            <p className="w-1/2 flex pt-3 pb-3 md:w-1/4 md:justify-center"> &#8226; {t('action4')}</p>
        </div>
    )
}

export default HeroActions