import { fetchNews, fetchSingleNews } from "@/api";

export const getNewsItems = async () => {
  const newsItems = await fetchNews();
  return newsItems.map((news: any) => ({
    id: news.id,
    title: news.attributes.title,
    slug: news.attributes.slug,
    description: news.attributes.description,
    content: news.attributes.content,
    author: news.attributes.author,
    authorImage: news.attributes.authorImage.data.attributes.url,
    date: news.attributes.date,
    image: news.attributes.image.data.attributes.url,
  }));
};

export const getSingleNewsItem = async (slug: string) => {
  const newsItem = await fetchSingleNews(slug);
  return {
    id: newsItem.id,
    title: newsItem.attributes.title,
    slug: newsItem.attributes.slug,
    description: newsItem.attributes.description,
    content: newsItem.attributes.content,
    author: newsItem.attributes.author,
    authorImage: newsItem.attributes.authorImage.data.attributes.url,
    date: newsItem.attributes.date,
    image: newsItem.attributes.image.data.attributes.url,
  };
};
