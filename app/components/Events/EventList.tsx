import { IDummyEvents } from "@/dummyData";
import React, { Fragment } from "react";
import EventItem from "./Event-Item";

interface Props {
  featured: IDummyEvents[];
}

const EventList: React.FC<Props> = ({ featured }) => {
  return (
    <Fragment>
      {featured.map((event) => {
        return (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        );
      })}
    </Fragment>
  );
};

export default EventList;
