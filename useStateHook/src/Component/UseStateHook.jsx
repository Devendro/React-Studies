import React, { useState } from "react";
import Radhika from "./Radhika";

const UseStateHook = () => {
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    
  };
  return (
    <div>
      <input
        type="text"
        name="email"
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <input
        type="text"
        name="passsword"
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
  );
};

export default UseStateHook;
