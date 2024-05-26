import React from "react";
import UserCard from "./UserCard";

const Users = ({ data }) => {
  return (
    <div>
      {data.map((element, key) => {
        return <UserCard data={element} key={key} />;
      })}
    </div>
  );
};

export default Users;
