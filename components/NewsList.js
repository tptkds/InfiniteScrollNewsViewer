import { getNewsItems } from "../modules/getNewsItems.js";
import { appendChildren } from "../utils/dom.js";

// do something!
export const NewsList = () => {
    const newsListContainer = document.createElement('div');
    newsListContainer.classList = 'news-list-container';
    const newsList = document.createElement('article');
    newsList.className = "news-list";
    appendChildren(newsList,getNewsItems());
    newsListContainer.appendChild(newsList);
    return newsListContainer;
}