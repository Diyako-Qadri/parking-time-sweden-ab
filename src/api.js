import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const fetchNews = async () => {
  const response = await api.get("/news?populate=*");
  return response.data.data;
};

export const fetchSingleNews = async (slug) => {
  const response = await api.get(`/news?filters[slug][$eq]=${slug}&populate=*`);
  return response.data.data[0];
};
