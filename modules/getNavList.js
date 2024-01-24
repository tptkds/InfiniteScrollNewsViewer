import { categories } from "../assets/constants/categories.js";
import { setElementProperties } from "../utils/dom.js";

export const getNavList = () => {
    const ul = document.createElement('ul');
    categories.forEach(category => {
        const li = document.createElement('li');
        setElementProperties(li, category)
        ul.appendChild(li);
    })
    return ul;
}