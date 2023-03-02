import AddressIcon from "../UI/AddressIcon";
import DateIcon from "../UI/DateIcon";
import Image from "next/image";
import classes from "./EventLogistics.module.css";

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
  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={'/'+image} alt={imageAlt}/>
      </div>
    </section>
  );
};
