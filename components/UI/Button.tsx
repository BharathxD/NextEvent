import Link from "next/link";
import React, { FormEvent } from "react";
import classes from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  link?: string;
  onClick?: (arg1: FormEvent) => void;
}

const Button: React.FC<Props> = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
