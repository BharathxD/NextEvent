
import { useRouter } from "next/router";
import EventList from "@/components/Events/EventList";

const FilteredEvents = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p>Found no events</p>;
  }
  const { year, month } = {
    year: +filteredData[0],
    month: +filteredData[1],
  };
  if (isNaN(year) || isNaN(month) || year > 2023 || year < 2021) {
    return <p>Invalid filter, enter the correct values</p>;
  }
  const filteredEvents = getFilteredEvents({
    year: year,
    month: month,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>;
  }
  return (
    <div>
      <EventList featured={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
