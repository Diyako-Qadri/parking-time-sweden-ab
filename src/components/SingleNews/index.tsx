export const getNewsItems = async (locale: string) => {
  const res = await fetch(
    `http://localhost:1337/api/nyheter?locale=${locale}&populate=*`
  );
  const data = await res.json();
  return data.data.map(
    (item: {
      id: any;
      attributes: {
        Image: { data: { attributes: { url: any } } } | null;
        Title: any;
        Description: any;
        Content: any;
        Author: any;
        AuthorImage: { data: { attributes: { url: any } } } | null;
        Date: string | number | Date;
        Slug: any;
      };
    }) => ({
      id: item.id,
      image:
        item.attributes.Image?.data?.attributes.url ||
        "/path/to/default/image.jpg",
      title: item.attributes.Title,
      description: item.attributes.Description,
      content: Array.isArray(item.attributes.Content)
        ? item.attributes.Content.join(" ")
        : item.attributes.Content,
      author: item.attributes.Author,
      authorImage:
        item.attributes.AuthorImage?.data?.attributes.url ||
        "/path/to/default/author-image.jpg",
      date: new Date(item.attributes.Date).toLocaleDateString(),
      slug: item.attributes.Slug,
    })
  );
};

export const getSingleNewsItem = async (slug: string, locale: string) => {
  const res = await fetch(
    `http://localhost:1337/api/nyheter?filters[Slug][$eq]=${slug}&locale=${locale}&populate=*`
  );
  const data = await res.json();
  const item = data.data[0];
  return {
    id: item.id,
    image:
      item.attributes.Image?.data?.attributes.url ||
      "/path/to/default/image.jpg",
    title: item.attributes.Title,
    description: item.attributes.Description,
    content: Array.isArray(item.attributes.Content)
      ? item.attributes.Content.join(" ")
      : item.attributes.Content,
    author: item.attributes.Author,
    authorImage:
      item.attributes.AuthorImage?.data?.attributes.url ||
      "/path/to/default/author-image.jpg",
    date: new Date(item.attributes.Date).toLocaleDateString(),
    slug: item.attributes.Slug,
  };
};
