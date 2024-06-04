import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/radhika">About</Link>
        </li>
      </ul>

      <button
        onClick={() => {
          navigate("/", { state: { name: "Radhika" } });
        }}
      >
        click me to go to somewhere
      </button>
    </div>
  );
};

export default Navbar;
