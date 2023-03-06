import { useEffect, useState } from "react";
import EventList from "@/components/Events/EventList";
import { getFilteredEvents } from "@/helpers/APIUtils";
import { FC } from "react";
import useSWR, { SWRResponse } from "swr";
import Head from "next/head";
import TEvents from "@/types/Events.types";
import TransformEvent from "@/helpers/TransformEvents";

interface Props {
  hasError: boolean;
  events: TEvents[];
}

const FilteredEvents: FC<Props> = ({ hasError, events }) => {
  const [getLoadedEvents, setLoadedEvents] = useState<TEvents[]>();
  const { data, error }: SWRResponse<TEvents[], string, any> = useSWR(
    "https://star-wars-f4c01-default-rtdb.firebaseio.com/Events.json"
  );
  useEffect(() => {
    if (data) {
      const events: TEvents[] = TransformEvent(data);
      setLoadedEvents(events);
    }
  }, [data]);
  if (hasError) {
    return <p>Error fetching events</p>;
  }
  if (getLoadedEvents) {
    return <p>Loading...</p>;
  }
  if (!events || events.length === 0) {
    return <p>No events found</p>;
  }
  return (
    <div>
      <Head>
        <title>Found {events.length} events</title>
      </Head>
      <EventList featured={events} />
    </div>
  );
};

export const getServerSideProps = async (context: { params: any }) => {
  const { params } = context;
  const events = params.slug;
  const { year, month } = {
    year: +events[0],
    month: +events[1],
  };
  if (isNaN(year) || isNaN(month) || year > 2023 || year < 2021) {
    return { props: { hasError: true } };
    // return { notFound: true };
  }
  const filteredEvents = await getFilteredEvents({
    year: year,
    month: month,
  });
  return {
    props: { events: filteredEvents },
  };
};

export default FilteredEvents;
