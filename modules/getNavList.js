import { categories } from "../assets/constants/categories.js";
import { store } from "../store.js";
import { setElementProperties } from "../utils/dom.js";
import { getNewsItems } from "./getNewsItems.js";
const engCategories = ['all','business', 'entertainment',
    'health', 'science', 'sports', 'technology'];
export const getNavList = () => {
    const ul = document.createElement('ul');
    categories.forEach((category,idx) => {
        const li = document.createElement('li');
        setElementProperties(li, category);
        li.addEventListener('click', () => { 
            document.querySelector('.active').classList.remove('active');
            li.classList.add('active');
            store.category = engCategories[idx];
            document.querySelector('.news-list').innerHTML = "";
            getNewsItems();
        })
        ul.appendChild(li);
    })
    return ul;
}