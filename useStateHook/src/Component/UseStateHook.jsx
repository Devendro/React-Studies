import React, { useState } from "react";
import Radhika from "./Radhika";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me to perform something</button>
      <h1>{count}</h1>
      <Radhika />
    </div>
  );
};

export default UseStateHook;
