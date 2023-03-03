import { useRouter } from "next/router";
import EventList from "@/components/Events/EventList";
import { IEvents, getFilteredEvents } from "@/helpers/APIUtils";
import { FC } from "react";

interface Props {
  hasError: boolean;
  events: IEvents[];
}

const FilteredEvents: FC<Props> = ({ hasError, events }) => {
  const router = useRouter();
  if (hasError) {
    return <p>Error fetching events</p>;
  }
  if (!events || events.length === 0) {
    return <p>No events found</p>;
  }
  return (
    <div>
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
    revalidate: 3600,
  };
};

export default FilteredEvents;
