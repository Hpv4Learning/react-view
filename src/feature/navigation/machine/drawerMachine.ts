import { createMachine, interpret } from "xstate";

export const drawerMachine = createMachine({
  predictableActionArguments: true,
  id: `drawer`,
  initial: `closed`,
  states: {
    closed: {
      on: {
        OPEN: {
          target: `opened`,
        },
      },
    },
    opened: {
      on: {
        CLOSE: {
          target: `closed`,
        },
      },
    },
  },
});

export const drawerService = interpret(drawerMachine).start();
