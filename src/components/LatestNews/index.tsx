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
    title: "SKAPA TalentAward Winner",
    description:
      "Parking Time vann SKAPA Talent i Norrbotten för deras innovativa digitala parkeringslösning, som erkändes för att förstå marknadens behov.",
    date: "3 Februari 2024",
    readMoreLink: "#",
  },
];

const LatestNews = () => {
  const locale = useLocale();
  const t = useTranslations("LatestNews");

  return (
    <section className="bg-pt-background text-center py-40">
      <h2 className={`${lato.className} text-lg font-bold leading-[21.6px]`}>
        {t("news")}
      </h2>
      <h3
        className={`${lato.className} text-4xl font-bold leading-[57.6px] text-center text-[#0B051D] pt-4 pb-9`}>
        {t("Latest News")}
      </h3>
      <div className="relative container mx-auto max-w-screen-xl pl-4">
        <div className="-ml-4 pl-4 flex space-x-6 overflow-x-auto hide-scroll-bar snap-x snap-mandatory pb-8">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80%] sm:w-auto snap-start first:pl-4 last:pr-4">
              <NewsCard
                image={news.image}
                title={news.title}
                description={news.description}
                date={news.date}
                readMoreLink={news.readMoreLink}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href={`/${locale}/news`}
          className={`${lato.className} w-[160px] h-[48px] py-[15px] px-[32px] gap-[8px] rounded-[50px] bg-[#0B051D] text-white shadow-[1px_1px_30px_0px_rgba(0,0,0,0.1)] flex items-center justify-center text-base font-medium leading-[19.2px] text-center`}>
          {t("View all")}
        </a>
      </div>
    </section>
  );
};

export default LatestNews;
