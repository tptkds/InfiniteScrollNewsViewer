import { getNewsItems } from "../modules/getNewsItems.js";

// do something!
export const NewsList = async () => {
    const newsList = document.createElement('article');
    newsList.className = "news-list";
    document.querySelector('.news-list-container').appendChild(newsList);
    getNewsItems();
}



