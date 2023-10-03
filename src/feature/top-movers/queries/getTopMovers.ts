import { queryClient } from "../../../config/queryClient";
import { defaultURL, joinedTokensAsUrl } from "../../../constants/tokens";
import { CryptoCurrencyDetail } from "../../saved/machine/types";

const getTopMovers = async () => {
  try {
    const res = await fetch(
      `${defaultURL}/coins/markets?vs_currency=usd&ids=${joinedTokensAsUrl}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    const result = await res.json();
    if (result?.status?.error_code)
      throw new Error(result.status.error_message);
    return result as CryptoCurrencyDetail[];
  } catch (error) {
    throw new Error(`Something went wrong`);
  }
};

export const getTopMoversQuery = queryClient.fetchQuery(
  [`topMovers`],
  getTopMovers,
  {
    cacheTime: 1000 * 60 * 5,
  }
);
