import React from "react";
import { useTranslations } from "next-intl";
import Accordion from '../Accordion'

type FaqProps = {
  question: string;
  answer: string;
};


const Faq = ({question, answer}: FaqProps) => {
    const t = useTranslations("FAQ");

  return (
    <div className="flex justify-center w-full h-screen bg-gradient-to-b from-pt-primary via-black to-pt-primary text-white ">
      <div className="p-6">
      <p className=" p-3 text-lg text-center font-bold">{t('title')}</p>
      <p className="text-center text-4xl px-8 py-5 font-bold in-range:md:text-5xl">{t('headline')}</p>
      <p className="text-center text-lg py-5 font-bold">{t('subheadline')}</p>

        {/* FAQ COMPONENT HERE*/}



            <div className="py-4">
                <Accordion
                    title="What is Parking Time"
                    answer="Parking Time is a free to download app that works as a digital parking disc, you just start parking through the app and parking attendants can view how long your session has lasted."
                />
                <Accordion
                    title="Do you prefer writing CSS or Tailwind?"
                    answer="I like to use Tailwind"
                />
                <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
            </div>
        {/* FAQ */}
        <p className="text-center text-4xl px-8 py-5 font-bold md:text-5xl">{t('headline2')}</p>
        <p className="text-center text-lg py-2 px-20 font-bold">{t('subheadline2')}</p>
      </div>
    </div>
  );

}

export default Faq;