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
        Ingress: string;
        Innehall: string;
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
      description: item.attributes.Ingress,
      content: item.attributes.Innehall,
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
    description: item.attributes.Ingress,
    content: item.attributes.Innehall,
    author: item.attributes.Author,
    authorImage: item.attributes.AuthorImage?.data?.attributes.url
      ? baseUrl + item.attributes.AuthorImage.data.attributes.url
      : "/path/to/default/author-image.jpg",
    date: new Date(item.attributes.Date).toLocaleDateString(),
    slug: item.attributes.Slug,
    locale: item.attributes.locale,
  };
};
