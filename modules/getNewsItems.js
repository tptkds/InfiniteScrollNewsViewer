import { appendChildren } from "../utils/dom.js";
import { getArticles } from "./getArticles.js";
import { getNewsItem } from "./getNewsItem.js";

export const getNewsItems = async (category, page) => {
  const newsItems = [];
  const articles = await getArticles(category, page);
  articles.forEach((article) => {
    const newsItem = getNewsItem(article);
    newsItems.push(newsItem);
  });

  appendChildren(document.querySelector(".news-list"), newsItems);
};
