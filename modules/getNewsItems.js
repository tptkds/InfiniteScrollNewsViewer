import { API_KEY, PAGE_SIZE } from '../config/news.js';
import { getNewsItem } from './getNewsItem.js';
const CATEGORY = 'all';
const PAGE = 0;
const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${CATEGORY === 'all' ? '' : CATEGORY}&page=${PAGE}pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`;
const response = await axios.get(url);
const articles = response.data.articles;
export const getNewsItems = () => {
    const newsItems = [];
    console.log(response,articles);
    articles.forEach(article => {
        newsItems.push(getNewsItem(article));
    })
    
    return newsItems;
}