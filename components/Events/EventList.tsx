import { IDummyEvents } from "@/dummyData";
import React, { Fragment } from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

interface Props {
  featured: IDummyEvents[];
}

const EventList: React.FC<Props> = ({ featured }) => {
  return (
    <ul className={classes.list}>
      {featured.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
};

export default EventList;
