"use client";

import { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import { Roboto } from "next/font/google";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { getSingleNewsItem } from "@/data/newsData";
import parse from "html-react-parser";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

const SingleNews = ({ params }: { params: { slug: string | string[] } }) => {
  const { slug } = params;
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("SingleNews");
  const [newsItem, setNewsItem] = useState<{
    id: any;
    image: string;
    title: string;
    description: string;
    content: string;
    author: string;
    authorImage: string;
    date: string;
    slug: string;
    locale: string;
  } | null>(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      if (typeof slug === "string") {
        const item = await getSingleNewsItem(slug, locale);
        setNewsItem(item);
      } else if (Array.isArray(slug)) {
        const item = await getSingleNewsItem(slug[0], locale);
        setNewsItem(item);
      } else {
        console.error("Invalid slug:", slug);
      }
    };

    fetchNewsItem();
  }, [slug, locale]);

  useEffect(() => {
    if (newsItem && newsItem.locale !== locale) {
      const localizedSlug = newsItem.slug;
      router.replace(`/${locale}/news/${localizedSlug}`);
    }
  }, [locale, newsItem, router]);

  if (!newsItem) {
    return <div>{t("Not found")}</div>;
  }

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-32">
      <div className="flex items-center mb-4 pb-6">
        <img
          src={newsItem.authorImage}
          alt={newsItem.author}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-2">
          <p
            className={`${roboto.className} text-[#868686] text-base font-light leading-8`}>
            {newsItem.author}, {newsItem.date}
          </p>
        </div>
      </div>
      <h1
        className={`${lato.className} text-4xl font-bold leading-[43.2px] text-[#0B051D] mb-4`}>
        {newsItem.title}
      </h1>
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-[240px] md:h-[650px] object-cover mb-4 py-6"
      />
      <div className={`${roboto.className} text-base leading-6 text-[#2A394E]`}>
        {parse(newsItem.content)}
      </div>
    </div>
  );
};

export default SingleNews;
