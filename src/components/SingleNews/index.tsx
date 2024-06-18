import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getNewsItems } from "@/data/newsData";

const SingleNews = () => {
  const router = useRouter();
  const { id } = router.query;
  const [newsItem, setNewsItem] = useState<{
    id: string;
    authorImage: string;
    author: string;
    date: string;
    title: string;
    image: string;
    content: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const newsItems = await getNewsItems();
        const foundNewsItem = newsItems.find(
          (item: { id: string | string[] }) => item.id === id
        );
        setNewsItem(foundNewsItem || null);
      }
    };

    fetchData();
  }, [id]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-gray-600 mb-4">
        <img
          src={newsItem.authorImage}
          alt={newsItem.author}
          className="inline-block rounded-full w-8 h-8 mr-2"
        />
        {newsItem.author}, {newsItem.date}
      </div>
      <h1 className="text-4xl font-bold mb-6">{newsItem.title}</h1>
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-auto mb-6"
      />
      <div className="prose">{newsItem.content}</div>
    </div>
  );
};

export default SingleNews;
