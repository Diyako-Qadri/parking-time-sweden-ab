// frontend/src/data/newsData.js

const baseUrl = "http://localhost:1337";

export const getNewsItems = async (locale: any) => {
  const res = await fetch(`${baseUrl}/api/nyheter?locale=${locale}&populate=*`);
  const data = await res.json();
  return data.data.map(
    (item: {
      id: any;
      attributes: {
        Image: { data: { attributes: { url: string } } };
        Title: any;
        Description: any[];
        Content: any[];
        Author: any;
        AuthorImage: { data: { attributes: { url: string } } };
        Date: string | number | Date;
        Slug: any;
      };
    }) => ({
      id: item.id,
      image: item.attributes.Image?.data?.attributes.url
        ? baseUrl + item.attributes.Image.data.attributes.url
        : "/path/to/default/image.jpg",
      title: item.attributes.Title,
      description: Array.isArray(item.attributes.Description)
        ? item.attributes.Description.map((desc: { children: any[] }) =>
            desc.children.map((child: { text: any }) => child.text).join(" ")
          ).join(" ")
        : item.attributes.Description,
      content: Array.isArray(item.attributes.Content)
        ? item.attributes.Content.map((cont: { children: any[] }) =>
            cont.children.map((child: { text: any }) => child.text).join(" ")
          ).join(" ")
        : item.attributes.Content,
      author: item.attributes.Author,
      authorImage: item.attributes.AuthorImage?.data?.attributes.url
        ? baseUrl + item.attributes.AuthorImage.data.attributes.url
        : "/path/to/default/author-image.jpg",
      date: new Date(item.attributes.Date).toLocaleDateString(),
      slug: item.attributes.Slug,
    })
  );
};

export const getSingleNewsItem = async (
  slug: string,
  locale: string | undefined
) => {
  const res = await fetch(
    `${baseUrl}/api/nyheter?filters[Slug][$eq]=${slug}&locale=${locale}&populate=*`
  );
  const data = await res.json();
  const item = data.data[0];

  if (!item) return null;

  return {
    id: item.id,
    image: item.attributes.Image?.data?.attributes.url
      ? baseUrl + item.attributes.Image.data.attributes.url
      : "/path/to/default/image.jpg",
    title: item.attributes.Title,
    description: Array.isArray(item.attributes.Description)
      ? item.attributes.Description.map((desc: { children: any[] }) =>
          desc.children.map((child: { text: any }) => child.text).join(" ")
        ).join(" ")
      : item.attributes.Description,
    content: Array.isArray(item.attributes.Content)
      ? item.attributes.Content.map((cont: { children: any[] }) =>
          cont.children.map((child: { text: any }) => child.text).join(" ")
        ).join(" ")
      : item.attributes.Content,
    author: item.attributes.Author,
    authorImage: item.attributes.AuthorImage?.data?.attributes.url
      ? baseUrl + item.attributes.AuthorImage.data.attributes.url
      : "/path/to/default/author-image.jpg",
    date: new Date(item.attributes.Date).toLocaleDateString(),
    slug: item.attributes.Slug,
    locale: item.attributes.locale, // Lägg till denna rad
  };
};
