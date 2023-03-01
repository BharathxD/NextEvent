import { IDummyEvents } from "@/dummyData";
import React from "react";
import Image from "next/image";

interface Props {
  featured: IDummyEvents[];
}

const EventList: React.FC<Props> = ({ featured }) => {
  return (
    <ul>
      {featured.map((event) => {
        return (
          <li key={event.id}>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <address>{event.location}</address>
            <p>{event.date}</p>
            <Image
              src={event.image}
              alt={event.title}
              width={800}
              height={500}
            />
          </li>
        );
      })}
      <li></li>
    </ul>
  );
};

export default EventList;
