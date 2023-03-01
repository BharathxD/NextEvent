import EventList from "@/components/Events/EventList";
import { getFeaturedEvents } from "@/dummyData";

const HomePage = () => {
  const feturedEvents = getFeaturedEvents();
  return <EventList featured={feturedEvents} />;
};

export default HomePage;
