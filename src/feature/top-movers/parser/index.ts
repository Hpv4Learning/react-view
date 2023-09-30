import { CryptoCurrencyDetail } from "../../saved/machine/types";

export const parseTopMovers = (data: CryptoCurrencyDetail[]) =>
  data.slice(0, 5);
