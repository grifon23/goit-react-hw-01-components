import React, { FC } from "react";
import { FriendListItem } from "../FriendsListItem";
interface IFriend {
  avatar: string;
  name: string;
  isOnline: boolean;
}
interface IProps {
  friends: Array<IFriend>;
}
export const FriendList: FC<IProps> = ({ friends }) => {
  return (
    <ul>
      {friends.map((el) => (
        <FriendListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};
