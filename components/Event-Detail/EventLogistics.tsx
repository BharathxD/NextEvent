import AddressIcon from "../UI/AddressIcon";
import DateIcon from "../UI/DateIcon";
import Image from "next/image";
import classes from "./EventLogistics.module.css";
import LogisticsItem from "./LogisticsItem";

interface Props {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: React.FC<Props> = ({
  date,
  address,
  image,
  imageAlt,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");
  console.log(humanReadableDate, addressText);
  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={"/" + image} alt={imageAlt} width={800} height={500} />
        <ul className={classes.list}></ul>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </div>
    </section>
  );
};

export default EventLogistics;
