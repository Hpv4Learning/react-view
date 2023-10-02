import { queryClient } from "../../../config/queryClient";
import { newsApiUrl } from "../../../constants/news";
import { NEWS_API_KEY } from "@env";
import { NewsResponse } from "../types";

type NewsRequest = {
  q?: string;
};

const fetchNews = async ({ q }: NewsRequest) => {
  try {
    const response = await fetch(
      `${newsApiUrl}&q=${q}&searchIn=title&language=it&pageSize=10`,
      {
        method: `GET`,
        headers: { Authorization: `Bearer ${NEWS_API_KEY}` },
      }
    );
    const res = (await response.json()) as NewsResponse;
    if (res.status === `ok`) {
      return res.articles;
    }
    throw new Error(`There was an error fetching the news`);
  } catch (error) {
    throw new Error(`There was an error fetching the news`);
  }
};

export const fetchNewsQuery = async ({ q }: NewsRequest) => {
  const news = await queryClient.fetchQuery(
    [`news`, q],
    () => fetchNews({ q }),
    { cacheTime: 1000 * 60 * 60 * 24 }
  );
  return news;
};
