import { Fragment } from "react";
import Image from "next/image";

interface Props {
  event: {
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
  };
}

const EventItem: React.FC<Props> = ({ event }) => {
  const { title, description, location, date, image } = event;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  return (
    <Fragment>
      <h4>{title}</h4>
      <p>{description}</p>
      <address>{formattedAddress}</address>
      <p>{humanReadableDate}</p>
      <Image
        src={`http://localhost:3000/${image}`}
        alt={title}
        width={800}
        height={500}
      />
    </Fragment>
  );
};

export default EventItem;
