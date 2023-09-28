import { assign, createMachine } from "xstate";
import { CryptoCurrencyDetail } from "./types";
import { getAllTokenQuery } from "../queries/getAllListedTokens";

export const savedTokenMachine = createMachine(
  {
    predictableActionArguments: true,
    preserveActionOrder: true,
    context: {
      tokens: [] as CryptoCurrencyDetail[],
      error: null,
    },
    id: `topMovers`,
    initial: `loading`,
    states: {
      loading: {
        invoke: {
          id: `fetchTopMovers`,
          src: () => getAllTokenQuery,
          onDone: [
            {
              target: `success`,
              actions: assign((context, event) => ({
                ...context,
                "tokens": event.data,
              })),
            },
          ],
          onError: [
            {
              target: `failure`,
              actions: assign((context, event) => ({
                ...context,
                "error": event.data,
              })),
            },
          ],
        },
      },
      success: {
        "type": `final`,
      },
      failure: {
        "type": `final`,
      },
    },
  }
  // {
  //   services: {
  //     fetchTopMovers: () => (respond) =>
  //       fetch(
  //         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cripple%2Cusd-coin%2Cstaked-ether%2Cdogecoin%2Ccardano%2Csolana&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  //       ).then((res) =>
  //         respond({
  //           type: `success`,
  //           data: res.json() as Promise<CryptoCurrencyDetail[]>,
  //         })
  //       ),
  //   },
  //   actions: {
  //     assignTokens: assign((context, event) => ({
  //       ...context,
  //       "tokens": event.data,
  //     })),
  //     assignError: assign((context, event) => ({
  //       ...context,
  //       "error": event.data,
  //     })),
  //   },
  // }
);
