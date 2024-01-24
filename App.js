// do something!
const root = document.querySelector('#root');
import { Nav } from "./components/Nav.js";
import { NewsList } from "./components/NewsList.js";

root.appendChild(Nav());
root.appendChild(NewsList());