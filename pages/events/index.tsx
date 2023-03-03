import EventList from "@/components/Events/EventList";
import EventSearch from "@/components/Events/EventSearch";
import { getAllFeaturedEvents } from "@/helpers/APIUtils";
import { useRouter } from "next/router";
import { Fragment } from "react";



const EventsPage = async () => {
  const router = useRouter();
  const featuredEvents = await getAllFeaturedEvents();
  const onSearch = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventSearch onSearch={onSearch} />
      <EventList featured={featuredEvents} />
      );
    </Fragment>
  );
};



export default EventsPage;
