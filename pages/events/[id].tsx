import EventContent from "@/components/Event-Detail/EventContent";
import EventLogistics from "@/components/Event-Detail/EventLogistics";
import EventSummary from "@/components/Event-Detail/EventSummary";
import { getEventById } from "@/dummyData";
import { useRouter } from "next/router";

const EventDetail = () => {
  const router = useRouter();
  const eventID = router.query.id || "";
  const event = getEventById(eventID.toString());
  if (!event) {
    return <p>No events found.</p>;
  }

  return (
    <div>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>{event.description}</EventContent>
    </div>
  );
};

export default EventDetail;
