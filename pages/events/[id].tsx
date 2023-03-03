import EventContent from "@/components/Event-Detail/EventContent";
import EventLogistics from "@/components/Event-Detail/EventLogistics";
import EventSummary from "@/components/Event-Detail/EventSummary";
import { IEvents, getAllEvents, getEventById } from "@/helpers/APIUtils";

interface Props {
  selectedEvent: IEvents;
}

const EventDetail: React.FC<Props> = ({ selectedEvent }) => {
  const event = selectedEvent;
  if (!event) {
    return <p>Loading...</p>;
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

export const getStaticProps = async (context: { params: { id: string } }) => {
  const event = await getEventById(context.params.id);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 1800,
  };
};

export const getStaticPaths = async () => {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { id: event.id } }));
  debugger;
  return {
    paths: paths,
    fallback: true,
  };
};

export default EventDetail;
