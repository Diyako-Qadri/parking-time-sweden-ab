"use client";
import { useTranslations, useLocale } from "next-intl";
import NewsCard from "@/components/NewsCard";

import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const newsItems = [
  {
    image: "/images/article-image-1.jpg",
    title: "Positivt inflytande i Nässjö",
    description:
      "Efter ett år av användning av Parking Time-appen för alla centrala parkeringsområden rapporterar Nässjö kommun positiva resultat från digitaliseringen av parkeringsskivan.",
    date: "19 April 2024",
    readMoreLink: "#",
  },
  {
    image: "/images/article-image-2.jpg",
    title: "Parking time & Changemaker",
    description:
      "Den här våren samarbetade Parking Time med studenter vid Changemaker Educations, vilket resulterade i innovativa och kreativa lösningar.",
    date: "11 Mars 2024",
    readMoreLink: "#",
  },
  {
    image: "/images/article-image-3.jpg",
    title: "SKAPA Talent Award Winner",
    description:
      "Parking Time vann SKAPA Talent i Norrbotten för deras innovativa digitala parkeringslösning, som erkändes för att förstå marknadens behov.",
    date: "3 Februari 2024",
    readMoreLink: "#",
  },
];

const LatestNews = () => {
  const locale = useLocale();
  return (
    <section className="bg-pt-background text-center py-40">
      <h2 className={`${lato.className} text-lg font-bold leading-[21.6px]`}>
        Nyheter
      </h2>
      <h3
        className={`${lato.className} text-4xl font-bold leading-[57.6px] text-center text-[#0B051D] pt-4 pb-9`}>
        Senaste nytt från Parking Time
      </h3>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <NewsCard
              key={index}
              image={news.image}
              title={news.title}
              description={news.description}
              date={news.date}
              readMoreLink={news.readMoreLink}
            />
          ))}
        </div>
      </div>

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

export default LatestNews;
