// do something!

import { getNavList } from "../modules/getNavList.js";

export const Nav = () => {
    const nav = document.createElement('nav');
    nav.className = "category-list";
    nav.appendChild(getNavList());

    return nav;
}