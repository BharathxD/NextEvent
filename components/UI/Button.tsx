import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
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
