import { createMachine } from "xstate";

export const todoAppMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICCAHXmAsgIYDGAFgJYB2YAdADKrEQ1SZoawDEyA8gBE+AfQBi2AJIMA2gAYAuolC5UsSgBdKqakpAAPRAFoATMYCMdAKwAOACy2zZ2dctmAbO4A0IAJ6JLtnSOxpaysh6WbrIAnGbWAL7x3pxYeAQkFDT0TCxsHOiqvIIiDHzYAgCiAnKKSCAqapraugYIZpaWdADMUdbRXdHRxrFmtl3efggBQWYhYRFRsdGJyQU4+ERkVLSMzKzU7Ck8-ELCpeVV0ma1yqoaWjp1re2dPc79g8OOYxOIcdZWNyRYwAdmspmMsksYMSSRA1HQcF0KXW6S2WV0DXuzSeRmM1gsfS6YNssh6INsdl+CBMskClmJrgGPQ8ILMKxAKLSm0yOxy+0OBXgdSxTUeoFahi6ANkbOistJIOibns0WphkcILoZJBrmGdI6LgScK5Gwy23oR0w-MgmLuYpaf1CdH6NmiY2irjcKup7jcdGsbmsIOMbml0TB0q6HNNaN52T2eRRFQATinUCnbSL7Q9HTTjF0ugH+iSyW4KVTfH8Q3RbPjRrZIrr7ODYfEgA */
  createMachine(
    {
      id: "Todo App Machine",
      initial: "Loading Todos",
      schema: {
        // events: {} as
        //   | { type: "TODO_LOADED"; todos: string[] }
        //   | { type: "TODO_FAIL"; errorMessage: string },
        services: {} as {
          loadTodos: {
            data: string[];
          };
        },
      },
      tsTypes: {} as import("./todoAppMachine.typegen").Typegen0,
      states: {
        "Loading Todos": {
          invoke: {
            src: "LoadTodos",
            onDone: [
              {
                target: "Todos Loaded",
              },
            ],
            onError: [
              {
                target: "Loading Todo Errored",
              },
            ],
          },
          // on: {
          // TODO_FAIL: {
          //   target: "Loading Todo Errored",
          // },
          // TODO_LOADED: [
          //   {
          //     target: "Todos Loaded",
          //     actions: "consoleLogTodos",
          //     cond: "New guard",
          //   },
          //   "Todos Loaded",
          // ],
          // },
        },
        "Todos Loaded": {},
        "Loading Todo Errored": {},
      },
    }
    // {
    //   actions: {
    //     consoleLogTodos: (context, event) => {
    //       alert(JSON.stringify(event.todos));
    //     },
    //   },
    // }
  );
