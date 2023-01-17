import { createMachine } from "xstate";

export const todoAppMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICCAHXmAsgIYDGAFgJYB2YAdADKrEQ1SZoawDEyA8gBE+AfQZ9sAgKICA2gAYAuolC5UsSgBdKqaspAAPRAEYArCboBmAGxyAHAE4L9+wCZ7RowBYLAGhABPRBNPOg8XEzk5K1Mbd3sAX3i-Tiw8AhIKGnomFjYOdDVeQREAMWwASQZ5JSQQVXUtHT1DBABaFxcjOhNbT08POxMjaKs-QIRg0KNwyOiTWKNbRKSQanQ4PRScfCIyKlo9es1tXVqW9tsuhwsAdl65axvPXrHEdofui2mrG-nbOxuFhciWSBW26T2WUYzFY1HYKXgtSOjVOoHOFlsdDkNyM9mxnmx9isfXsrzaHhuWNuQzcck8ZlsPRBIC2aV2mVodARmByEEghzUxyaZ2METojh69m89iGVmJZOGVjotisthuLisGPsdwxFmZrJ2GX22RheS2kgAThbUBb+UjBSjmm8XBYLMrHHcCY9np4Feq6J4XJc+vNfn1bMDlkA */
  createMachine(
    {
      id: "Todo App Machine",
      initial: "Loading Todos",
      schema: {
        events: {} as
          | { type: "TODO_LOADED"; todos: string[] }
          | { type: "TODO_FAIL"; errorMessage: string },
      },
      tsTypes: {} as import("./todoAppMachine.typegen").Typegen0,
      states: {
        "Loading Todos": {
          on: {
            TODO_LOADED: {
              target: "Todos Loaded",
              actions: "consoleLogTodos",
            },
            TODO_FAIL: {
              target: "Loading Todo Errored",
            },
          },
        },
        "Todos Loaded": {},
        "Loading Todo Errored": {},
      },
    },
    {
      actions: {
        consoleLogTodos: (context, event) => {
          alert(JSON.stringify(event.todos));
        },
      },
    }
  );
