// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    LoadTodos: "done.invoke.Todo App Machine.Loading Todos:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: "LoadTodos";
  };
  eventsCausingActions: {};
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    LoadTodos: "xstate.init";
  };
  matchesStates: "Loading Todo Errored" | "Loading Todos" | "Todos Loaded";
  tags: never;
}
