import { CryptoCurrencyDetail } from "../../saved/machine/types";

export const parseTopMovers = (data: CryptoCurrencyDetail[]) => {
  const sortedData = data.sort(
    (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
  );
  return sortedData.slice(0, 5);
};
