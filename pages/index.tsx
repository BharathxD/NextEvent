import EventList from "@/app/components/Events/EventList";
import { getFeaturedEvents } from "@/dummyData";

const HomePage = () => {
  const feturedEvents = getFeaturedEvents();
  return (
    <ul>
      <EventList featured={feturedEvents} />
    </ul>
  );
};

export default HomePage;
