import React, { FC } from "react";
import "./style.css";
interface IStat {
  id: string;
  label: string;
  percentage: number;
}
interface IProps {
  title?: string;
  stats: Array<IStat>;
}

export const Statistics: FC<IProps> = ({ title, stats }) => {
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((el: IStat) => (
          <li
            className="item"
            style={{ backgroundColor: getRandomColor() }}
            key={el.id}
          >
            <span className="label">{el.label}</span>
            <span className="percentage">{`${el.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
