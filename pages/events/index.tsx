import EventList from "@/components/Events/EventList";
import EventSearch from "@/components/Events/EventSearch";
import {
  IEvents,
  getAllEvents,
  getAllFeaturedEvents,
} from "@/helpers/APIUtils";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";

interface Props {
  events: IEvents[];
}

const EventsPage: FC<Props> = ({ events }) => {
  const router = useRouter();
  const onSearch = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventSearch onSearch={onSearch} />
      <EventList featured={events} />
      );
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const event = await getAllEvents();
  return {
    props: {
      events: event,
    },
    revalidate: 60,
  };
};

export default EventsPage;
