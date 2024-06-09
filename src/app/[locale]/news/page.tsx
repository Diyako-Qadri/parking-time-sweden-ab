import NewsCard from "@/components/NewsCard";
import { useTranslations } from "next-intl";

const newsItems = [
  {
    image: "/Users/davidboll/parkingtime/public/images/article-image-1.jpg",
    title: "Nyhet 1",
    description: "Detta är en beskrivning av nyhet 1.",
    date: "2023-06-09",
    readMoreLink: "https://example.com/nyhet1",
  },
  {
    image: "/Users/davidboll/parkingtime/public/images/article-image-2.jpg",
    title: "Nyhet 2",
    description: "Detta är en beskrivning av nyhet 2.",
    date: "2023-06-10",
    readMoreLink: "https://example.com/nyhet2",
  },
  {
    image: "/Users/davidboll/parkingtime/public/images/article-image-3.jpg",
    title: "Nyhet 3",
    description: "Detta är en beskrivning av nyhet 3.",
    date: "2023-06-11",
    readMoreLink: "https://example.com/nyhet3",
  },
];

const news = () => {
  return (
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
  );
};

export default news;
