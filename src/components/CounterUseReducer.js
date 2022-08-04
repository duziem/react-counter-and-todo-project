import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h2>Using Reducer</h2>
      <div>{state.count}</div>
      <button onClick={() => dispatch("increment")}> + </button>
      <button onClick={() => dispatch("decrement")}> - </button>
      <button onClick={() => dispatch("reset")}> reset </button>
    </div>
  );
};

export default CounterUseReducer;
