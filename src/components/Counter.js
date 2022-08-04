import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <div>{count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {" "}
        +{" "}
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Counter;
