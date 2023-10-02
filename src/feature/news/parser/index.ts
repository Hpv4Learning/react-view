import { Article } from "../types";

export const parseNewsWithImages = (data: Article[]) =>
  data.filter((article) => article.urlToImage !== null);
