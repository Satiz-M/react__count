import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const incrementClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decrementClick = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Increment & Decrement</h1>
      <h2>{count}</h2>
      {count <= 0 ? (
        <button onClick={incrementClick}>+</button>
      ) : count < 10 ? (
        <div>
          <button onClick={decrementClick}>-</button>
          <button onClick={incrementClick}>+</button>
        </div>
      ) : (
        <button onClick={decrementClick}>-</button>
      )}
    </div>
  );
}
