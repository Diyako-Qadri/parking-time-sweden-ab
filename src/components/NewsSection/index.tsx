"use client";
import { useTranslations, useLocale } from "next-intl";

import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const NewsSection = () => {
  const locale = useLocale();
  return (
    <section className="bg-pt-background text-center py-8">
      <h2 className={`${lato.className} text-lg font-bold leading-[21.6px]`}>
        Nyheter
      </h2>
      {/* Här kommer nyheterna att visas */}

      <div className="mt-8 flex justify-center">
        <a
          href={`/${locale}/news`}
          className={`${lato.className} w-[160px] h-[48px] py-[15px] px-[32px] gap-[8px] rounded-[50px] bg-[#0B051D] text-white shadow-[1px_1px_30px_0px_rgba(0,0,0,0.1)] flex items-center justify-center text-base font-medium leading-[19.2px] text-center`}>
          Visa alla
        </a>
      </div>
    </section>
  );
};

export default NewsSection;
