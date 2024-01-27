import { categories, engCategories } from "../assets/constants/categories.js";
import { store } from "../store.js";
import { setElementProperties } from "../utils/dom.js";

export const getNavList = () => {
  const ul = document.createElement("ul");
  categories.forEach((category, idx) => {
    const li = document.createElement("li");
    setElementProperties(li, category);
    li.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      li.classList.add("active");
      document.querySelector(".news-list").innerHTML = "";
      store.category = engCategories[idx];
    });
    ul.appendChild(li);
  });
  return ul;
};
