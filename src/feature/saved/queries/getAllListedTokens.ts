import { queryClient } from "../../../config/queryClient";
import { CryptoCurrencyDetail } from "../machine/types";

export const getAllListedTokens = async () =>
  fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cripple%2Cusd-coin%2Cstaked-ether%2Cdogecoin%2Ccardano%2Csolana&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  ).then((res) => res.json() as Promise<CryptoCurrencyDetail[]>);

export const getAllTokenQuery = queryClient.fetchQuery(
  [`allListedTokens`],
  getAllListedTokens,
  {
    cacheTime: 1000 * 60 * 5,
  }
);
