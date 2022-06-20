import { FC } from "react";
import "./style.css";
interface IProps {
  avatar: string;
  name: string;
  isOnline: boolean;
}
export const FriendListItem: FC<IProps> = ({ avatar, name, isOnline }) => {
  return (
    <li className="itemFriend">
      <span
        className="status"
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
