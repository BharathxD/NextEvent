import Image from "next/image";
import Link from "next/link";
import { IDummyEvents } from "@/dummyData";
import classes from "./EventItem.module.css";

interface Props {
  event: IDummyEvents;
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
          <div className={classes.data}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}>Explore</Link>
      </div>
      {/* For NextJS 13 <Link href={exploreLink}>
        <a className="">Explore</a>
      </Link> */}
    </li>
  );
};

export default EventItem;
