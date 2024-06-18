import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const fetchNews = async (locale) => {
  try {
    const response = await api.get(`/nyheter?locale=${locale}&populate=*`);
    console.log(response.data); // Logga svaret från API:et
    return response.data.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchSingleNews = async (slug) => {
  try {
    const response = await api.get(
      `/nyheter?filters[Slug][$eq]=${slug}&populate=*`
    );
    console.log(response.data); // Logga svaret från API:et
    return response.data.data[0];
  } catch (error) {
    console.error("Error fetching single news item:", error);
    return null;
  }
};
