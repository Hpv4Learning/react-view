import { createMachine } from "xstate";

export const bannerMachine = createMachine({
  id: `banner`,
  initial: `open`,
  predictableActionArguments: true,
  states: {
    closed: {
      on: {
        OPEN: `open`,
      },
    },
    open: {
      on: {
        CLOSE: `closed`,
      },
    },
  },
});
