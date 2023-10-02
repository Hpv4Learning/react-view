import { assign, createMachine } from "xstate";
import { NewsResponse } from "../types";
import { fetchNewsQuery } from "../queries/getAllNews";

type Context = {
  error: null | boolean;
  news: NewsResponse["articles"];
};

export const newsMachine = createMachine({
  id: `news`,
  initial: `loading`,
  predictableActionArguments: true,
  preserveActionOrder: true,
  context: {
    error: null,
    news: [],
  } as Context,
  states: {
    loading: {
      invoke: {
        id: `fetchNews`,
        src: () => fetchNewsQuery({ q: `bitcoin` }),
        onDone: [
          {
            target: `loaded`,
            actions: assign((ctx, event) => ({
              ...ctx,
              news: event.data,
            })),
          },
        ],
        onError: [
          {
            target: `failed`,
            actions: assign((ctx) => ({
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
