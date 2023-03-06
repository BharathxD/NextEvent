import EventList from "@/components/Events/EventList";
import EventSearch from "@/components/Events/EventSearch";
import { getAllEvents } from "@/helpers/APIUtils";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";
import TEvents from "@/types/Events.types";

type Props = {
  events: TEvents[];
}

const EventsPage: FC<Props> = ({ events }) => {
  const router = useRouter();
  const onSearch = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
      </Head>
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
