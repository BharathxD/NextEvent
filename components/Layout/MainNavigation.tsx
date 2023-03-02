import Link from "next/link";

import classes from "./MainNavigation.module.css";
import Logo from "./Logo";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
