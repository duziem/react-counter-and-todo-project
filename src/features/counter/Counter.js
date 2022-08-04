import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import Display from "./Display";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  return (
    <div
      style={{
        backgroundColor: "rgb(168, 18, 93)",
        padding: "20px 50px",
      }}
    >
      <h2 style={{ color: "#fff", marginBottom: "30px" }}>Counter</h2>
      <section className="container">
        <div className="controls">
          {/* <p>{count}</p> */}
          <button onClick={() => dispatch(increment())}>+</button>&nbsp;
          <button onClick={() => dispatch(decrement())}>-</button>&nbsp;
          <button onClick={() => dispatch(reset())}>reset</button>
          <br />
          <br />
          {/* <hr /> */}
          <label style={{ color: "#f4f4f4" }}>
            Enter value:{" "}
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button
            onClick={() => {
              dispatch(incrementByAmount(Number(amount)));
            }}
          >
            Add amount
          </button>
          &nbsp;
          <button onClick={() => dispatch(decrementByAmount(Number(amount)))}>
            Subtract amount
          </button>
        </div>
        <Display />
      </section>
    </div>
  );
};

export default Counter;
