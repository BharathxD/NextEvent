import EventList from "@/components/Events/EventList";
import EventSearch from "@/components/Events/EventSearch";
import { getFeaturedEvents } from "@/dummyData";
import { Fragment } from "react";

const EventsPage = () => {
  const feturedEvents = getFeaturedEvents();
  const onSearch = (year: string, month: string) => {
    console.log(year, month);
  };
  return (
    <Fragment>
      <EventSearch onSearch={onSearch} />
      <EventList featured={feturedEvents} />
      );
    </Fragment>
  );
};

export default EventsPage;
