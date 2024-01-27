import { store } from "./store.js";

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      store.page = store.page + 1;
    }
  });
};

export const newsScrollObserver = () => {
  const newsScrollObserver = new IntersectionObserver(callback, {
    threshold: 1,
  });
  newsScrollObserver.observe(document.querySelector("#scrollTarget"));
};


