import { useState } from "react";
import "./App.css";
import ComponentA from "./Component/ComponentA";
import ComponentB from "./Component/ComponentB";

function App() {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const addData = () => {
    setData((prevState) => {
      let arr = [...prevState, 1];
      return arr;
    });
  };

  return (
    <>
      {loading == true ? (
        <ComponentA />
      ) : data.length > 0 ? (
        <ComponentB />
      ) : (
        "No Data available"
      )}
      <button onClick={addData}>add data</button>
    </>
  );
}

export default App;
