import { assign, createMachine } from "xstate";
import { getTopMoversQuery } from "../queries/getTopMovers";
import { CryptoCurrencyDetail } from "../../saved/machine/types";
import { parseTopMovers } from "../parser";

type Context = {
  topMovers: CryptoCurrencyDetail[];
  error: boolean | null;
};

export const topMoversMachine = createMachine({
  predictableActionArguments: true,
  preserveActionOrder: true,
  id: `top-movers`,
  initial: `loading`,
  context: {
    topMovers: [],
    error: null,
  } as Context,
  states: {
    loading: {
      invoke: {
        id: `fetchTopMovers`,
        src: () => getTopMoversQuery,
        onDone: [
          {
            target: `loaded`,
            actions: assign((ctx, event) => ({
              ...ctx,
              topMovers: parseTopMovers(event.data),
            })),
          },
        ],
        onError: [
          {
            target: `failed`,
            actions: assign((ctx, event) => ({
              ...ctx,
              error: true,
            })),
          },
        ],
      },
    },
    loaded: {
      type: `final`,
    },
    failed: {
      type: `final`,
    },
  },
});
