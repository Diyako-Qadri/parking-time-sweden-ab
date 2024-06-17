import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/data/newsData";

const News = () => {
  return (
    <section className="bg-pt-background text-center py-40">
      <h2 className="text-lg font-bold leading-[21.6px]">Nyheter</h2>
      <h3 className="text-4xl font-bold leading-[57.6px] text-center text-[#0B051D] pt-4 pb-9">
        Senaste Nytt
      </h3>
      <div className="relative container mx-auto max-w-screen-xl px-4">
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
                slug={news.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
