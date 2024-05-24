import React, { useState, useRef, useEffect, useMemo } from "react";
import SecondComponent from "./SecondComponent";

const UseRefHook = () => {
  const count = useRef(0);
  const [inputCount, setInputCount] = useState(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleChange = (event) => {
    setInputCount(event.target.value);
  };

  const updateRef = () => {
    
  };
  return (
    <div>
      <input
        type="number"
        value={inputCount}
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <button onClick={updateRef} value={"Radhika"}>
        Update Count
      </button>
      <br />
    </div>
  );
};

export default UseRefHook;
