import { API_KEY, PAGE_SIZE } from "../config/news.js";
import { store } from "../store.js";

export const getArticles = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${store.category === "all" ? "" : store.category}&page=${store.page}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY[2]}`;
  // eslint-disable-next-line no-undef
  const response = await axios.get(url);
  return response.data.articles;
};
