import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  link: string;
}

const Button: React.FC<Props> = ({ children, link }) => {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
};

export default Button;
