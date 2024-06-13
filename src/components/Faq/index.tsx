'use client'
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Accordion from '../Accordion'

type FaqItem = {
  question: string;
  answer: string | JSX.Element;
};


const Faq = () => {
    const t = useTranslations("FAQ");
    const [openIndex, setOpenIndex] = useState<number | null>(null)
 
    const faqItems: FaqItem[] = [
      {
        question: t('q1'),
        answer: t('answer1'),
      },
      {
        question: t('q2'),
        answer: 
          <>
            <a 
              href="https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1"
              className="underline cursor-pointer"
              >{t('answer2-1')}</a> 
            {t('answer2-2')}
          </>, 
      },
      {
        question: t('q3'),
        answer: t('answer3'),
      },
      {
        question: t('q4'),
        answer: t('answer4'),
      },
      {
        question: t('q5'),
        answer: t('answer5'),
      },
    ]

    const handleToggle = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div id="faq" className="bg-pt-background">
      <div className="flex relative justify-center top-[79px] w-full bg-gradient-to-b from-pt-primary via-black to-pt-primary text-white">
        <div className="p-6">
          <p className=" p-3 text-lg text-center font-bold">{t('title')}</p>
          <p className="text-center text-4xl px-8 py-5 font-bold in-range:md:text-5xl">{t('headline')}</p>
          <p className="text-center text-lg py-5 font-bold">{t('subheadline')}</p>
          <div className="py-4">
            {faqItems.map((item, index) => (
            < Accordion
              key = {index}
              question = {item.question}
              answer={item.answer}
              accordionOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
            ))}
          </div>
          <p className="text-center text-4xl px-8 py-5 font-bold md:text-5xl">{t('headline2')}</p>
          <p className="text-center text-lg py-2 px-20 font-bold">{t('subheadline2')}</p>
        </div>
      </div>
    </div>
  );

}

export default Faq;