import React from "react";
import classes from "./EventContent.module.css";

interface Props {
  children: React.ReactNode;
}

const EventContent: React.FC<Props> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default EventContent;
