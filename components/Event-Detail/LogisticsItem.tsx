import React from "react";
import classes from "./LogisticsItem.module.css";

interface Props {
  children: React.ReactNode;
  Icon: any;
}

const LogisticsItem: React.FC<Props> = ({ children, Icon }) => {
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
