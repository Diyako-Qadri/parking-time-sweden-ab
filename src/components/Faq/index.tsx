'use client'
import React, { useState, useRef,useEffect } from "react";
import { useTranslations } from "next-intl";
import Accordion from '../Accordion'
import Button from "../Buttons";

type FaqItem = {
  question: string;
  answer: string | JSX.Element;
};


const Faq = () => {
    const t = useTranslations("FAQ");
    const b = useTranslations("button");
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const accordionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
          setOpenIndex(null);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [accordionRef]);

    const faqItems: FaqItem[] = [
      {
        question: t('q1'),
        answer: t('answer1'),
      },
      {
        question: t('q2'),
        answer: 
          <>
            {t('answer2-1')}
            <a 
              href="https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1"
              target='_blank'
              className="underline cursor-pointer"
              >{t('answer2-google')}</a> 
            {t('answer2-separator')}
            <a 
              href="https://apps.apple.com/se/app/parking-time/id1611019108"
              target='_blank'
              className="underline cursor-pointer"
              >{t('answer2-appstore')}</a> 
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
    ]

    const handleToggle = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div id="faq" className="bg-pt-primary">
      <div className="flex relative justify-center top-[79px] w-full text-pt-dark-text bg-pt-light-gray">
        <div className="p-6 bg-pt-light-gray">
          <p className=" p-3 text-lg text-center font-bold text-pt-darkblue2">{t('title')}</p>
          <p className="text-center text-4xl px-8 py-5 font-bold md:text-5xl">{t('headline')}</p>
          <p className="text-center text-lg py-5 font-bold text-pt-darkblue2">{t('subheadline')}</p>
          <div className="py-4" ref={accordionRef}>
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
          <p className="text-center text-[32px] py-5 font-bold">{t('headline2')}</p>
          <p className="text-center text-pt-darkblue2 text-lg py-2 font-bold">{t('subheadline2')}</p>
        </div>
      </div>
      <div className="flex relative justify-center bg-pt-light-gray top-[-10px] pb-20 mt-20 md:hidden">
        <Button variant="mobileBlack" size="mobileSecondary">{b('contact')}</Button>
      </div>
      <div className="hidden md:flex md:relative justify-center bg-pt-light-gray top-[-10px] pb-20 mt-20">
        <Button variant="desktopBlack" size="desktopPrimary">{b('contact')}</Button>
      </div>
    </div>
  );

}

export default Faq;