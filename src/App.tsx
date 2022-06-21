import React from "react";
import "./App.css";
import {
  FriendList,
  Profile,
  Statistics,
  TransactionHistory,
} from "./components";
import { dataStats, dataUser, friendsData, transactionsData } from "./dataJSON";
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
      <TransactionHistory transactions={transactionsData} />
    </div>
  );
}

export default App;
