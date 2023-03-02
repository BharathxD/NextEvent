import EventList from "@/components/Events/EventList";
import EventSearch from "@/components/Events/EventSearch";
import { getFeaturedEvents } from "@/dummyData";
import { Fragment } from "react";

const EventsPage = () => {
  const feturedEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventSearch />
      <EventList featured={feturedEvents} />
      );
    </Fragment>
  );
};

export default EventsPage;
