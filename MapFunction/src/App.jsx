import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./Component/Users";

function App() {
  const [data, setData] = useState([
    {
      name: "Radhika Gangan",
      profession: "developer",
      joinDate: "22-11-2024",
    },
    {
      name: "Janvi",
      profession: "sde",
      joinDate: "23-11-2024",
    },
    {
      name: "Dev",
      profession: "manager",
      joinDate: "21-11-2024",
    },
    {
      name: "Nishant",
      profession: "developer",
      joinDate: "25-11-2024",
    },
    {
      name: "Sweety",
      profession: "Lead",
      joinDate: "21-11-2024",
    },
  ]);

  return (
    <>
      <Users data={data}/>
    </>
  );
}

export default App;
