// src/components/LatestNews/index.tsx

"use client";

import { useLocale, useTranslations } from "next-intl";
import NewsCard from "../NewsCard";
import { useEffect, useState } from "react";
import { fetchNews } from "@/api";
import { Lato } from "next/font/google";
import parse from "html-react-parser";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface NewsItem {
  id: number;
  attributes: {
    Image: {
      data: {
        attributes: {
          url: string;
        };
      };
    } | null;
    Title: string;
    Ingress: string;
    Date: string;
    Slug: string;
  };
}

const LatestNews = () => {
  const locale = useLocale();
  const t = useTranslations("LatestNews");
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await fetchNews(locale);
      // Sortera nyheterna efter datum i fallande ordning
      const sortedItems = items.sort(
        (a: NewsItem, b: NewsItem) =>
          new Date(b.attributes.Date).getTime() -
          new Date(a.attributes.Date).getTime()
      );
      // Hämta de tre senaste nyheterna
      const latestThreeItems = sortedItems.slice(0, 3);
      setNewsItems(latestThreeItems);
    };

    fetchData();
  }, [locale]);

  const baseUrl = "http://localhost:1337";

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
          {newsItems.map((news) => {
            const imageUrl = news.attributes.Image?.data?.attributes.url
              ? baseUrl + news.attributes.Image.data.attributes.url
              : "/path/to/default/image.jpg";
            const description = news.attributes.Ingress
              ? parse(news.attributes.Ingress)
              : "";

            return (
              <div
                key={news.id}
                className="flex-shrink-0 w-[80%] sm:w-auto snap-start first:pl-4 last:pr-4">
                <NewsCard
                  image={imageUrl}
                  title={news.attributes.Title}
                  description={description}
                  date={new Date(news.attributes.Date).toLocaleDateString()}
                  slug={news.attributes.Slug}
                />
              </div>
            );
          })}
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
