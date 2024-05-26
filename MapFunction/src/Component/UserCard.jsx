import React from "react";
import "./UserCard.css";

const UserCard = ({data}) => {
  return (
    <div>
      <div className="user-card">
        <img
          src="https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035157.jpg"
          alt="this image"
          width={50}
        />
        <div className="user-details">
          <div className="user-name">Name: {data.name}</div>
          <div className="user-profession">Profession: {data.profession}</div>
          <div className="user-join-date">Join Date: {data.joinDate}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
