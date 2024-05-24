import React, { useEffect, useMemo, useState } from "react";

const UseMemoHook = () => {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(0);
  const style = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("style change");
  }, [style]);

  const changeTheme = () => {
    setDark(dark ? false : true);
  };

  const doubleNumber = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  };

  const newnumber = useMemo(() => {
    return doubleNumber();
  }, [number]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <div style={style}>UseMemoHook</div>
      <button onClick={changeTheme}>Change Theme</button>
      <h1>{newnumber}</h1>
    </div>
  );
};

export default UseMemoHook;
