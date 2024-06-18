"use client";
import { useParams } from "next/navigation";
import { getSingleNewsItem } from "@/data/newsData";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Roboto } from "next/font/google";
import { useTranslations } from "next-intl";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

const SingleNews = () => {
  const { slug } = useParams();
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const t = useTranslations("SingleNews");
  const [newsItem, setNewsItem] = useState<null | {
    id: any;
    title: any;
    slug: any;
    description: any;
    content: any;
    author: any;
    authorImage: any;
    date: any;
    image: any;
  }>(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      const item = await getSingleNewsItem(slugString);
      setNewsItem(item);
    };

    fetchNewsItem();
  }, [slug]);

  if (!newsItem) {
    return <div> {t("Not found")}</div>;
  }

  return (
    <div className="max-w-[1000px] mx-auto px-4 pt-32">
      <div className="flex items-center mb-4 pb-6">
        <Image
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
      <Image
        src={newsItem.image}
        alt={newsItem.title}
        width={1000}
        height={650}
        className="w-full h-[240px] md:h-[650px] object-cover mb-4 py-6"
      />
      <div
        className={`${roboto.className} text-base leading-6 text-[#2A394E]`}
        dangerouslySetInnerHTML={{ __html: newsItem.content }}
      />
    </div>
  );
};

export default SingleNews;
