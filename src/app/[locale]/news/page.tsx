import NewsCard from "@/components/NewsCard";
import { useTranslations } from "next-intl";

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
