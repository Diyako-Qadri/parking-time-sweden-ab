"use client";

import { useParams } from "next/navigation";
import { newsItems } from "@/data/newsData";

const SingleNews = () => {
  const { slug } = useParams();

  const newsItem = newsItems.find((item) => item.slug === slug);

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
        <p className="text-gray-600">{newsItem.date}</p>
      </div>
      <div className="mb-8">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="prose max-w-none">
        <p>{newsItem.content}</p>
      </div>
    </div>
  );
};

export default SingleNews;
