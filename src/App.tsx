import React from "react";
import "./App.css";
import { FriendList, Profile, Statistics } from "./components";
import { dataStats, dataUser, friendsData } from "./dataJSON";
function App() {
  const { username, tag, avatar, location, stats } = dataUser;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        scrollBehavior: "auto",
        overflow: "scroll",
        height: "100vh",
        padding: 30,
      }}
    >
      <Profile
        userName={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={dataStats} />
      <FriendList friends={friendsData} />
    </div>
  );
}

export default App;
