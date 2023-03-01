import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { IDummyEvents } from "@/dummyData";

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
    <Fragment>
      <h4>{title}</h4>
      <p>{description}</p>
      <address>{formattedAddress}</address>
      <p>{humanReadableDate}</p>
      <Image src={"/" + image} alt={title} width={800} height={500} />
      <Link href={exploreLink}>Explore</Link>
      {/* For NextJS 13 <Link href={exploreLink}>
        <a className="">Explore</a>
      </Link> */}
    </Fragment>
  );
};

export default EventItem;
