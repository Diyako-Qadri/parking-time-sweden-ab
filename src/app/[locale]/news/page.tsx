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
    Ingress: string;
    Date: string;
    Slug: string;
  };
}

const News = () => {
  const t = useTranslations("newsHero");
  const locale = useLocale();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false); // Lägg till state för att hantera laddningsstatus

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Börjar ladda data
      const items = await fetchNews(locale);
      items.sort(
        (
          a: { attributes: { Date: string | number | Date } },
          b: { attributes: { Date: string | number | Date } }
        ) =>
          new Date(b.attributes.Date).getTime() -
          new Date(a.attributes.Date).getTime()
      );
      setNewsItems(items);
      setIsLoading(false); // Avslutar laddning
    };

    fetchData();
  }, [locale]);

  const loadMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 3);
  };

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
        <div className="relative container mx-auto max-w-screen-xl">
          {isLoading ? ( // Visa en laddningsindikator när innehåll laddas
            <div className="text-center py-8">Loading news...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
              {newsItems.slice(0, visibleNewsCount).map((news) => {
                const imageUrl = news.attributes.Image?.data?.attributes.url
                  ? baseUrl + news.attributes.Image.data.attributes.url
                  : "/path/to/default/image.jpg";
                const description = news.attributes.Ingress;

                return (
                  <div key={news.id} className="flex-shrink-0 snap-start">
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
          )}
          {!isLoading &&
            visibleNewsCount < newsItems.length && ( // Kontrollera också om laddningen är klar innan "Load More"-knappen visas
              <div className="mt-8 flex justify-center">
                <button
                  onClick={loadMoreNews}
                  className="w-[160px] h-[48px] py-[15px] px-[32px] gap-[8px] rounded-[50px] bg-[#0B051D] text-white shadow-[1px_1px_30px_0px_rgba(0,0,0,0.1)] flex items-center justify-center text-base font-medium leading-[19.2px] text-center">
                  {t("Load More")}
                </button>
              </div>
            )}
        </div>
      </section>
    </>
  );
};

export default News;
