"use client";

import { useEffect, useState } from "react";
import { fetchNews } from "@/api";
import NewsCard from "@/components/NewsCard";
import PageHero from "@/components/PageHero";
import { useLocale, useTranslations } from "next-intl";

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
    Description: { type: string; children: { text: string }[] }[];
    Date: string;
    Slug: string;
  };
}

const News = () => {
  const t = useTranslations("newsHero");
  const locale = useLocale();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await fetchNews(locale);
      setNewsItems(items);
    };

    fetchData();
  }, [locale]);

  const baseUrl = "http://localhost:1337";

  return (
    <>
      <PageHero
        bgImage={"bg-newsHero-image"}
        categoryText={t("categoryText")}
        headline={t("headline")}
        heroText={t("heroText")}
      />
      <section className="bg-pt-background text-center py-16">
        <h2 className="text-lg font-bold leading-[21.6px]"> {t("news")}</h2>
        <h3 className="text-4xl font-bold leading-[57.6px] text-center text-[#0B051D] pt-4 pb-9">
          {t("Latest News")}
        </h3>
        <div className="relative container mx-auto max-w-screen-xl pl-4">
          <div className="-ml-4 pl-4 flex space-x-6 overflow-x-auto hide-scroll-bar snap-x snap-mandatory pb-8">
            {newsItems.map((news) => {
              const imageUrl = news.attributes.Image?.data?.attributes.url
                ? baseUrl + news.attributes.Image.data.attributes.url
                : "/path/to/default/image.jpg";
              const description = news.attributes.Description.map((desc) =>
                desc.children.map((child) => child.text).join(" ")
              ).join(" ");

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
      </section>
    </>
  );
};

export default News;
