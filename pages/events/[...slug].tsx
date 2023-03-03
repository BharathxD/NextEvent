import { useRouter } from "next/router";
import EventList from "@/components/Events/EventList";
import {
  IEvents,
  getAllEvents,
  getEventById,
  getFilteredEvents,
} from "@/helpers/APIUtils";
import { FC } from "react";

interface Props {
  hasError: boolean;
  events: IEvents[];
}

const FilteredEvents: FC<Props> = ({ hasError, events }) => {
  const router = useRouter();
  if (!events || events.length === 0) {
    return <p>No events found</p>;
  }
  return (
    <div>
      <EventList featured={events} />
    </div>
  );
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const event = await getEventById(context.params.id);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 1800,
  };
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
    props: { evetns: filteredEvents },
  };
};

export default FilteredEvents;
