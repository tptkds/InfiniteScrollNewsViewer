import { getNewsItems } from "../modules/getNewsItems.js";

// do something!
export const NewsList = () => {
    const newsListContainer = document.createElement('news-list-container');
    const newsList = document.createElement('news-list');
    newsList.appendChildren(getNewsItems());
    newsListContainer.appendChild(newsList);
    return newsListContainer;
}