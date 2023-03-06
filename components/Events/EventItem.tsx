import Image from "next/image";
import ArrowIcon from "../UI/ArrowIcon";
import DateIcon from "../UI/DateIcon";
import AddressIcon from "../UI/AddressIcon";
import classes from "./EventItem.module.css";
import Button from "../UI/Button";
import TEvents from "@/types/Events.types";

interface Props {
  event: TEvents;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const { id, title, description, location, date, image } = event;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <Image
        src={"/" + image}
        alt={title}
        width={800}
        height={500}
        className={classes.img}
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <span className={classes.icon}>
              <DateIcon />
            </span>
            <time>
              <span>{humanReadableDate}</span>
            </time>
          </div>
          <div className={classes.address}>
            <span className={classes.icon}>
              <AddressIcon />
            </span>
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
          <span>Explore More</span>
          <span className={classes.icon}>
            <ArrowIcon />
          </span>
        </Button>
      </div>
      {/* For NextJS 13 <Link href={exploreLink}>
        <a className="">Explore</a>
      </Link> */}
    </li>
  );
};

export default EventItem;
