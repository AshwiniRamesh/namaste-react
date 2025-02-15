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
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">{props.type}</h1>
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center w-80">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
          alt={`${user.name}'s photo`}
          src={user.photoUrl}
        />
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 mt-1">
            <strong>Location:</strong> {user.location}
          </p>
          <p className="text-gray-600 mt-1">
            <strong>Contact:</strong> {user.contact}
          </p>
          <div className="mt-4 space-x-4">
            <a
              href={user.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
