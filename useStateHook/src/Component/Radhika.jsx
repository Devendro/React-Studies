import React, { useState } from "react";

const Radhika = () => {
  const [number, setNumber] = useState([0]);

  const increment = () => {
    setNumber((prevState) => {
      if (prevState.length == 0) {
        return [0];
      }
      return [...prevState, prevState[prevState.length - 1] + 1];
    });
  };

  const decrement = () => {
    setNumber((prevState) => {
      let arr = [...prevState];
      arr.pop();
      return arr;
    });
  };
  return (
    <div>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>

      <ol>
        {number.map((value, index) => {
          return <li>{value}</li>;
        })}
      </ol>
    </div>
  );
};

export default Radhika;
