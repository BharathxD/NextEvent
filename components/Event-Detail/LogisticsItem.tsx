import React from "react";
import classes from "./LogisticsItem.module.css";

interface Props {
  children: React.ReactNode;
  icon: () => JSX.Element;
}

const LogisticsItem: React.FC<Props> = ({ children, icon }) => {
  const Icon = icon;
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
