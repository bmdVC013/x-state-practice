import { createMachine } from "xstate";

export const myMachine = createMachine({
  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        MOUSE_OVER: {
          target: "hovered",
        },
      },
    },
    hovered: {
      on: {
        MOUSE_OUT: {
          target: "notHovered",
        },
      },
    },
  },
});
