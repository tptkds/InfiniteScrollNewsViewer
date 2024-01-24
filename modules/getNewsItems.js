import { API_KEY } from '../config/news.js';
const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);

export const getNewsItems = () => {
    const newsItems = [];
    console.log(response)
    
    return newsItems;
}