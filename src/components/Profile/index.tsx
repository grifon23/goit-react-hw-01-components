import React, { FC } from "react";
import "./style.css";

interface IProfile {
  userName: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

export const Profile: FC<IProfile> = ({
  userName,
  tag,
  location,
  avatar,
  stats,
}) => {
  return (
    <div className="container">
      <div className="avatar-container">
        <img src={avatar} alt="user avatar" className="avatar" />
      </div>
      <p className="name">{userName}</p>
      <p style={{ color: "#000000", opacity: 0.6 }}>@{tag}</p>
      <p
        style={{
          color: "#000000",
          opacity: 0.6,
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        {location}
      </p>
      <ul className="stats-container">
        <li className="stats-item">
          <p>Followers</p>
          <p>{stats.followers}</p>
        </li>
        <li className="stats-item">
          <p>Views</p>
          <p>{stats.views}</p>
        </li>
        <li className="stats-item">
          <p>Likes</p>
          <p>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};
