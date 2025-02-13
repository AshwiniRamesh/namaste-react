import "../styles/User.css";
import { useState } from "react";

const User = (props) => {
  const [user] = useState({
    name: "Ashwini",
    location: "Bangalore",
    contact: "7892094643",
    instagram: "https://www.instagram.com/ashwini_hr04/",
    github: "https://github.com/AshwiniRamesh",
    photoUrl:
      "https://i.pinimg.com/originals/e3/63/16/e36316cfd05ca21e44d8fabcf1a192be.jpg",
  });
  return (
    <div>
      <h1>{props.type}</h1>
      <div className="user-card">
        <img
          className="user-photo"
          alt={`${user.name}'s photo`}
          src={user.photoUrl}
        />
        <div className="user-details">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-location">
            <strong>Location:</strong>
            {user.location}
          </p>
          <div className="user-contact">
            <p>
              <strong>Contact:</strong> {user.contact}
            </p>
          </div>
          <div className="user-links">
            <a href={user.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={user.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
