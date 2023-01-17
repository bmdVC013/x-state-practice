import { useMachine } from "@xstate/react";
import { todoAppMachine } from "../machines/todoAppMachine";


export default function Home() {
  const [state, send] = useMachine(todoAppMachine);

  return (
    <>
      {JSON.stringify(state.value)}

      <button
        onClick={() => send({type: "TODO_FAIL", errorMessage: "Take bins out"})}
      >
        TODO_FAIL
      </button>

      <button
        onClick={() => send({type: "TODO_LOADED", todos: ["Take bins out"]})}
      >
        TODO_LOADED
      </button>
      
    </>
  )
}
