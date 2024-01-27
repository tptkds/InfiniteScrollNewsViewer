import { setElementProperties, appendChildren } from "../utils/dom.js";

export const getNewsItem = (article) => {
  const newsItem = document.createElement("section");
  newsItem.className = "news-item";

  const thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";

  const thumbnailA = document.createElement("a");
  setElementProperties(thumbnailA, {
    href: article.url,
    target: "_blank",
    rel: "noopener noreferrer",
  });

  const thumbnailImg = document.createElement("img");
  setElementProperties(thumbnailImg, {
    src:
      article.urlToImage ||
      "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    alt: "thumbnail",
  });
  thumbnailA.appendChild(thumbnailImg);
  thumbnail.appendChild(thumbnailA);

  const contents = document.createElement("div");
  contents.className = "contents";

  const h2 = document.createElement("h2");
  const contentsA = document.createElement("a");
  setElementProperties(contentsA, {
    href: article.url,
    target: "_blank",
    rel: "noopener noreferrer",
    innerHTML: article.title,
  });
  h2.appendChild(contentsA);

  const contentsP = document.createElement("p");
  contentsP.innerHTML = article.description || "";

  appendChildren(contents, [h2, contentsP]);
  appendChildren(newsItem, [thumbnail, contents]);

  return newsItem;
};
