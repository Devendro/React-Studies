import React, { useDebugValue, useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    
  }, [count])
  const handleClick = () => {
    setCount((radhika)=>{return radhika + 1});
    setCount((radhika)=>{return radhika + 1});
    setCount((radhika)=>{return  radhika + 1});
    setCount((radhika)=>{return radhika + 1});

    console.log(count)
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default UseEffectHook;
