import EventContent from "@/components/Event-Detail/EventContent";
import EventLogistics from "@/components/Event-Detail/EventLogistics";
import EventSummary from "@/components/Event-Detail/EventSummary";
import { IEvents, getAllEvents, getEventById } from "@/helpers/APIUtils";

interface Props {
  selectedEvent: IEvents;
}

const EventDetail: React.FC<Props> = ({ selectedEvent }) => {
  if (!selectedEvent) {
    return <p>No events found.</p>;
  }
  return (
    <div>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      ></EventLogistics>
      <EventContent>{selectedEvent.description}</EventContent>
    </div>
  );
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const event = await getEventById(context.params.id);
  return {
    props: {
      selectedEvent: event,
    },
  };
};

export const getStaticPaths = async () => {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { id: event.id } }));
  debugger;
  return {
    paths: paths,
    fallback: false,
  };
};

export default EventDetail;
