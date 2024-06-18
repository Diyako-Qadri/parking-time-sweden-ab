import { useTranslations } from "next-intl"

const HeroActions = () => {
    const t = useTranslations('heroActions');

    return(
      <div className="absolute bottom-0 w-full flex text-white bg-pt-green-transparent text-sm flex-wrap pl-10 py-1 md:text-[16px] md:pl-0">
        <p className="w-1/2 flex pt-3 pb-3 md:w-1/4 md:justify-center"> &#8226; {t('action1')}</p>
        <p className="w-1/2 flex pt-3 pb-3 md:w-1/4 md:justify-center"> &#8226; {t('action2')}</p>
        <p className="w-1/2 flex pt-3 pb-3 md:w-1/4 md:justify-center"> &#8226; {t('action3')}</p>
        <p className="w-1/2 flex pt-3 pb-3 md:w-1/4 md:justify-center"> &#8226; {t('action4')}</p>
      </div>
    )
}

export default HeroActions