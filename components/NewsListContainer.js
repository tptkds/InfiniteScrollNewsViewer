import { NewsList } from './NewsList.js';
export const newsListContainer = () => {
    const newsListContainer = document.createElement('div');
    newsListContainer.classList = 'news-list-container';
    document.querySelector('#root').appendChild(newsListContainer);
    NewsList();
}